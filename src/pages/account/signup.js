import React,{useState} from 'react';
import axios from 'axios';

export default function  signUp(){
  const [fullName,setFullName] = useState('ffff');
  const [username,setUsername] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [confirmPassword,setConfirmPassword] = useState('');

  const handleSignUp = async (e) => {
    e.preventDefault();

   const response = await axios.post('/api/auth/signup',{
    fullName,
    username,
    email,
    password,
    confirmPassword
   });


    console.log(response);
  };

  const handleChange = event => {
    setFullName(event.target.value);
    setUsername(event.target.value);
    setEmail(event.target.value);
    setPassword(event.target.value);
    setConfirmPassword(event.target.value);
  }

  return (
<div className="w-[80%] content-center">
<form method='POST' action='' onSubmit={handleSignUp}>
      <div>
    <label htmlFor="small-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Full name</label>
    <input type="text" id="small-input" className="block p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={handleChange}/>
</div>
<div>
    <label htmlFor="small-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Username</label>
    <input type="text" id="small-input" className="block p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={handleChange}/>
</div>
<div>
    <label htmlFor="small-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email</label>
    <input type="text" id="small-input" className="block p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={handleChange}/>
</div>
<div>
    <label htmlFor="small-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Password</label>
    <input type="text" id="small-input" className="block p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={handleChange}/>
</div>
<div>
    <label htmlFor="small-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Confirm password</label>
    <input type="text" id="small-input" className="block p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={handleChange}/>
</div>

<div>
  <label htmlFor="error" className="block mb-2 text-sm font-medium text-red-700 dark:text-red-500">Your name</label>
  <input type="text" id="error" className="bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-full p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500" placeholder="Error input"/>
  <p className="mt-2 text-sm text-red-600 dark:text-red-500"><span className="font-medium">Oh, snapp!</span> Some error message.</p>
</div>



    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>

</div>
  );
}