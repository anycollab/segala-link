import User from '../../../models/UserModel';



export default async function signup (req,res) { 
console.log('be',req.body);
const newUser = new User({
  ...req.body
})
const data = await newUser.insertOne();
console.log(data);
  return res.status(200).json({
    message: 'Signup success',
    data
  })
}


