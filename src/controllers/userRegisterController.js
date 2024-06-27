const userModel = require("../models/usesRegisterModel");
const {authSchema} = require("../../utils/joi-validater");
const hashPassword = require("../../utils/password");


module.exports.userRegisterController = async(req,res)=>{
   
    try {
        const { error } = authSchema.validate(req.body);
        if (error) {
            res.status(400).send({ message: error.details[0].message });
            return;
          }
        const { name, email, password } = req.body;
        const userImage = req.file.path

        consol

     

        const uniqueEmailCheck = await userModel.findOne({ email });
        if (uniqueEmailCheck) {
            return res.status(400).json({
                message: "Email already registered"
            })
        }

        const hashedPassword = await hashPassword.encodePassword(password);
    
        const createUser = await userModel.create({
            name,
            email,
            password:hashedPassword,
            image:userImage
        })

        console.log("see the create user ",createUser);
        // if(createUser)
        return res.status(200).json({
            message: "User Registered SuccessFully",
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Something went wrong"
        })
    }
}