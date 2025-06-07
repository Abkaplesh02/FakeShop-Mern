const WishListSchema = require("../models/wishList");

const deletewishList = async (req,res) => {
  try {
    const userId = req.user._id;
    const productId = req.params.productId;

    const wishList = await WishListSchema.findById(userId);

    if (!wishList) {
      throw new Error("wishList not present");
    }

    const itemIndex = wishList.items.findIndex(
      (item) => item.productId == productId
    );
    if (itemIndex > -1) {
    wishList.items.splice(itemIndex, 1);
    }
    if (itemIndex == -1) {
      throw new Error("Item not found");
    }
    await wishList.save();
    res.send("Item deleted from wishList");
  } catch (err) {
    res.status(400).send("Error deleting the item " + err.message);
  }
};

module.exports = deletewishList;
