import {  useState } from "react"
import { Link, useNavigate } from "react-router-dom"


const SignIn = () => {

  const [inputData, setInputData] = useState({
    email: "",
    password: "",
  })
  const navigate = useNavigate()

  // const [retData, setRetData] = useState(null);

 
  const [error, setError] = useState('');

  const handleClick = e => {
    e.preventDefault();
    if (!inputData.email || !inputData.password) {
      setError('Please fill in all fields');
    } 
    else {

      const storedData = localStorage.getItem('User')
      if(storedData){
        const parsedData = JSON.parse(storedData)
         if(parsedData.email === inputData.email && parsedData.password && inputData.password){
          setError('')
          // console.log('Data matched');
          
          navigate('/profile')
         }else{
          setError('Invalid email or password')
         }
      }

      setInputData({
        email: '',
        password: ''
      })
    }
  }
  return (
    <div>
      <form className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-3xl font-bold font-mono antialiased">SignIn</h1>
        <div className="flex flex-col font-mono antialiased p-2">
          <label htmlFor="email" className="">Enter your email</label>
          <input
            className="block w-80 border border-gray-950 rounded-md mt-2 p-2"
            type="email"
            name="email"
            placeholder="Enter your email"
            value={inputData.email}
            onChange={(e) => setInputData({ ...inputData, email: e.target.value })}
          />
        </div>
        <div className="flex flex-col font-mono antialiased p-2">
          <label htmlFor="password">Enter your email</label>
          <input
            className="block w-80 border border-gray-950 rounded-md mt-2 p-2"
            type="password"
            name="email"
            placeholder="Enter your password"
            value={inputData.password}
            onChange={(e) => setInputData({ ...inputData, password: e.target.value })}
          />
        </div>
        {error && <p className="block w-80 font-mono antialiased p-2 m-2 border bg-slate-200 rounded-md">{error}</p>}
        <Link to='/'><span className="block w-80 p-2 m-2 font-mono antialiased mb-2 hover:underline">Don't have an account?</span></Link>
        <button
          className="font-mono antialiased block w-80 border border-gray-950 rounded-md p-2 m-2 hover:bg-green-100"
          type="button"
          onClick={handleClick}
        >SignIn</button>
      </form>
    </div>
  )
}

export default SignIn