const userModel = require("../models/usesRegisterModel");
const { authSchema } = require("../../utils/joi-validater");
const hashPassword = require("../../utils/password");
const sendMail = require("../../utils/email");
const token = require("../../utils/jwt-validater")


module.exports.userRegisterController = async (req, res) => {

    try {
        const { error } = authSchema.validate(req.body);
        if (error) {
            res.status(400).send({ message: error.details[0].message });
            return;
        }
        const { name, email, password } = req.body;
        const userImage = req.file.path

        const uniqueEmailCheck = await userModel.findOne({ email });
        if (uniqueEmailCheck) {
            return res.status(400).json({
                message: "Email already registered"
            })
        }

        const hashedPassword = await hashPassword.encodePassword(password);

        const verificationToken = await token.generateToken(email)

        const createUser = await userModel.create({
            name,
            email,
            password: hashedPassword,
            image: userImage,
            verificationToken: verificationToken
        })


        let subject = "Verify email addresserify";
        let mailbody = `Please click on the following link to verify your email address: http://localhost:4000/verify/${verificationToken}`;
        await sendMail.sendEmailToUser(email, subject, mailbody)

        if(createUser){
            return res.status(200).json({
                message: "User Registered SuccessFully",
            })
        }else{
            res.status(500).json({
                message: "Something went wrong"
            })  
        }

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Something went wrong"
        })
    }
}


module.exports.verifyToken = async (req, res) => {
    try {
        const token = req.params.token;
        const user = await userModel.findOne({ verificationToken: token });

        if (!user) {
            return res.status(400).json({ message: 'Invalid token' });
        }
        user.verified = true;
        await user.save();
        res.status(200).json({ message: 'Email address verified successfully' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Something went wrong' });
    }

}