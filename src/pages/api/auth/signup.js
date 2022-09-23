import User from '../../../models/UserModel';



export default async function signup (req,res) { 
try {
  console.log('be',req.body);
const newUser = new User({
  ...req.body
})
const data = await newUser.save();
console.log(data);
  return res.status(200).json({
    message: 'Signup success',
    data
  })
} catch (errors) {
  console.log(errors);
}
}


