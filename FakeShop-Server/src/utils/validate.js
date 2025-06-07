const validator=require("validator");
const validateSignUpData=(req)=>{
    const {name,email,password,mobile}=req.body;

    // Check name for validation if it is present or not
    if(!name){
        throw new Error("Name is not valid");
    }

    // Check name length if less than 4 
    else if(name.length<4){
        throw new Error("Name length is not appropriate");
    }

    // check if email is valid
    else if(!validator.isEmail(email)){
        throw new Error("Email is not valid");
    }

    // check if password if strong and present
    else if(!password){
        throw new Error("Passwor is not valid");
    }

    // Check if password is strong
    else if(!validator.isStrongPassword(password)){
        throw new Error("Password is not strong");
    }

    // check if phone nuimber is valid
    else if(mobile.length<9 || mobile.length>10){
        throw new Error("Enter 10 digit mobile number");
    }

}

const validateProfileData=(req)=>{
    const allowedEditFields=["name","mobile"];

    const isEditAllowed=Object.keys(req.body).every(field=>allowedEditFields.includes(field));

    return isEditAllowed;
}

const validatePassword=(req)=>{
   
        const {password}=req.body;
     const isPasswordValid= (validator.isStrongPassword(password));
     
     return isPasswordValid;

}

module.exports={validateSignUpData,validateProfileData,validatePassword};