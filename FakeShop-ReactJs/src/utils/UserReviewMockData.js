const userReview = [
  {
      "username": "john_doe",
      "rating": 4,
      "review": "Great product, very satisfied with the quality and performance.",
      "date": "2025-01-10"
  },
  {
      "username": "jane_doe",
      "rating": 5,
      "review": "Excellent quality, highly recommend! Will buy again.",
      "date": "2025-01-09"
  },
  {
      "username": "alex_smith",
      "rating": 3,
      "review": "Good, but could be better. The material feels a bit cheap.",
      "date": "2025-01-08"
  },
  {
      "username": "lisa_jones",
      "rating": 2,
      "review": "Not what I expected. The color was different from the picture.",
      "date": "2025-01-07"
  },
  {
      "username": "michael_b",
      "rating": 4,
      "review": "Worth the price. Sturdy and well-made.",
      "date": "2025-01-06"
  },
  {
      "username": "emma_w",
      "rating": 5,
      "review": "This is my second purchase. I love it! Highly recommend.",
      "date": "2025-01-05"
  },
  {
      "username": "daniel_g",
      "rating": 3,
      "review": "Average product. Nothing special, but it does the job.",
      "date": "2025-01-04"
  },
  {
      "username": "sophie_t",
      "rating": 4,
      "review": "Good quality and fast shipping. Very happy with my purchase.",
      "date": "2025-01-03"
  },
  {
      "username": "chris_p",
      "rating": 5,
      "review": "Exceeded my expectations! Will definitely buy again.",
      "date": "2025-01-02"
  },
  {
      "username": "nancy_k",
      "rating": 4,
      "review": "Very good product. Met all my expectations.",
      "date": "2025-01-01"
  },
  {
      "username": "robert_m",
      "rating": 3,
      "review": "It's okay, not great. The fit was a bit off.",
      "date": "2024-12-31"
  },
  {
      "username": "linda_l",
      "rating": 5,
      "review": "Absolutely love it! The design is beautiful.",
      "date": "2024-12-30"
  },
  {
      "username": "kevin_h",
      "rating": 4,
      "review": "Good value for money. Would recommend to others.",
      "date": "2024-12-29"
  },
  {
      "username": "amy_r",
      "rating": 2,
      "review": "Not satisfied with the quality. It broke after a week.",
      "date": "2024-12-28"
  },
  {
      "username": "steve_w",
      "rating": 5,
      "review": "Highly recommend this product. Excellent quality.",
      "date": "2024-12-27"
  },
  {
      "username": "rachel_z",
      "rating": 4,
      "review": "Very happy with my purchase. The product is as described.",
      "date": "2024-12-26"
  },
  {
      "username": "david_t",
      "rating": 3,
      "review": "It's decent, but not great. Expected better quality.",
      "date": "2024-12-25"
  },
  {
      "username": "susan_b",
      "rating": 5,
      "review": "Fantastic product! Will definitely buy again.",
      "date": "2024-12-24"
  },
  {
      "username": "mark_c",
      "rating": 4,
      "review": "Good quality, would buy again. The delivery was quick.",
      "date": "2024-12-23"
  },
  {
      "username": "karen_d",
      "rating": 2,
      "review": "Not worth the price. The product feels flimsy.",
      "date": "2024-12-22"
  },
  {
      "username": "paul_f",
      "rating": 5,
      "review": "Excellent product, very happy with my purchase.",
      "date": "2024-12-21"
  },
  {
      "username": "laura_g",
      "rating": 4,
      "review": "Good purchase, satisfied with the quality.",
      "date": "2024-12-20"
  },
  {
      "username": "jason_h",
      "rating": 3,
      "review": "It's okay, nothing special. The packaging was damaged.",
      "date": "2024-12-19"
  },
  {
      "username": "megan_i",
      "rating": 5,
      "review": "Love it, will buy again! The product is exactly as described.",
      "date": "2024-12-18"
  },
  {
      "username": "brian_j",
      "rating": 4,
      "review": "Very good product, happy with it. The quality is great.",
      "date": "2024-12-17"
  },
  {
      "username": "olivia_k",
      "rating": 2,
      "review": "Quality could be better. The product arrived late.",
      "date": "2024-12-16"
  },
  {
      "username": "ethan_l",
      "rating": 5,
      "review": "Exceeded my expectations! The product is top-notch.",
      "date": "2024-12-15"
  },
  {
      "username": "chloe_m",
      "rating": 4,
      "review": "Good value for money. The product works as expected.",
      "date": "2024-12-14"
  },
  {
      "username": "ryan_n",
      "rating": 3,
      "review": "It's decent, but not great. The product feels a bit cheap.",
      "date": "2024-12-13"
  },
  {
      "username": "sophia_o",
      "rating": 5,
      "review": "Fantastic product! Highly recommend.",
      "date": "2024-12-12"
  },
  {
      "username": "emily_p",
      "rating": 4,
      "review": "Very good product, happy with the purchase.",
      "date": "2024-12-11"
  },
  {
      "username": "james_q",
      "rating": 3,
      "review": "It's okay, not great. The product arrived damaged.",
      "date": "2024-12-10"
  },
  {
      "username": "sarah_r",
      "rating": 5,
      "review": "Love it! The product is exactly as described.",
      "date": "2024-12-09"
  },
  {
      "username": "matthew_s",
      "rating": 4,
      "review": "Good quality, would buy again. The delivery was fast.",
      "date": "2024-12-08"
  },
  {
      "username": "ashley_t",
      "rating": 2,
      "review": "Not worth the price. The product feels flimsy.",
      "date": "2024-12-07"
  },
  {
      "username": "joshua_u",
      "rating": 5,
      "review": "Excellent product, very happy with my purchase.",
      "date": "2024-12-06"
  },
  {
      "username": "amanda_v",
      "rating": 4,
      "review": "Good purchase, satisfied with the quality.",
      "date": "2024-12-05"
  },
  {
      "username": "andrew_w",
      "rating": 3,
      "review": "It's okay, nothing special. The packaging was damaged.",
      "date": "2024-12-04"
  },
  {
      "username": "katie_x",
      "rating": 5,
      "review": "Love it, will buy again! The product is exactly as described.",
      "date": "2024-12-03"
  },
  {
      "username": "justin_y",
      "rating": 4,
      "review": "Very good product, happy with it. The quality is great.",
      "date": "2024-12-02"
  },
  {
      "username": "nicole_z",
      "rating": 2,
      "review": "Quality could be better. The product arrived late.",
      "date": "2024-12-01"
  }
  ,
    {
        "username": "ashley_t",
        "rating": 2,
        "review": "Not worth the price. The product feels flimsy.",
        "date": "2024-12-07"
    },
    {
        "username": "joshua_u",
        "rating": 5,
        "review": "Excellent product, very happy with my purchase.",
        "date": "2024-12-06"
    },
    {
        "username": "amanda_v",
        "rating": 4,
        "review": "Good purchase, satisfied with the quality.",
        "date": "2024-12-05"
    },
    {
        "username": "andrew_w",
        "rating": 3,
        "review": "It's okay, nothing special. The packaging was damaged.",
        "date": "2024-12-04"
    },
    {
        "username": "katie_x",
        "rating": 5,
        "review": "Love it, will buy again! The product is exactly as described.",
        "date": "2024-12-03"
    },
    {
        "username": "justin_y",
        "rating": 4,
        "review": "Very good product, happy with it. The quality is great.",
        "date": "2024-12-02"
    },
    {
        "username": "nicole_z",
        "rating": 2,
        "review": "Quality could be better. The product arrived late.",
        "date": "2024-12-01"
    }
    ,
    {
        "username": "ashley_t",
        "rating": 2,
        "review": "Not worth the price. The product feels flimsy.",
        "date": "2024-12-07"
    },
    {
        "username": "joshua_u",
        "rating": 5,
        "review": "Excellent product, very happy with my purchase.",
        "date": "2024-12-06"
    },
    {
        "username": "amanda_v",
        "rating": 4,
        "review": "Good purchase, satisfied with the quality.",
        "date": "2024-12-05"
    },
    {
        "username": "andrew_w",
        "rating": 3,
        "review": "It's okay, nothing special. The packaging was damaged.",
        "date": "2024-12-04"
    }
];

export default userReview;