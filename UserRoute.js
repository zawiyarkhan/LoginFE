const {router} = require('express')
const authController = require('../Controllers/authControllers');

const router = Router()
//const User = require('./Model/user.js')

//router.post('/register', async(req,res,next)=>{
  //  try{
    //    const user = new User({
      //      email: req.body.email
        //})
    //save to DB
    //const savedUser = await user.save()
    //res.send("User Saved Successfully! :)")
    //}catch(error){
      //  res.send("User Failed to Save! :(")
    //}
router.post('/signup', authController.SignUp)
router.post('/signIn',authController.Login);
router.post('/logout',authController.Logout);

module.export = router
