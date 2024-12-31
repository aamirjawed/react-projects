import { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  })

  const [error, setError] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.password) {
      setError('All fields are required!')
    } else {
      setError('')
      localStorage.setItem("User", JSON.stringify(formData))
      // console.log(JSON.parse(localStorage.getItem("User")));
      setFormData({
        name: "",
        email: "",
        password: ""
      })
    }
    // console.log(formData);





  }
  return (
    <div >
      <form className="flex flex-col items-center justify-center h-screen box-border  rounded-md max-w-md mx-auto ">
        <h1 className="text-3xl font-bold font-mono antialiased">Sign Up</h1>
        <div className="flex flex-col p-2">
          <label htmlFor="name" className="font-mono antialiased">Enter your name</label>
          <input
            className="block w-80 rounded-md p-2 mt-2 border border-gray-950 required autocomplete:off"
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>
        <div className="flex flex-col p-2 ">
          <label htmlFor="password" className="font-mono antialiased">Enter your email</label>
          <input
            className="block w-80 rounded-md p-2 mt-2 border border-gray-950 required autocomplete:off"
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>
        <div className="flex flex-col p-2">
          <label htmlFor="password" className="font-mono antialiased">Enter your password</label>
          <input
            className="block w-80 rounded-md p-2 mt-2 border border-gray-950 required"
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          />
        </div>
        {error && <p className="block w-80 text-md m-2 font-mono antialiased bg-slate-200 p-2 border rounded-md">{error}</p>}
        <Link to='/signin'><span className="block w-80 font-mono antialiased m-2 p-2 hover:underline ">Already have an account.</span></Link>
        <button
          className="w-80 border border-gray-950 rounded-md p-2 mt-4 font-mono antialiased hover:bg-green-100"
          type="button"
          onClick={handleSubmit}
        >SignUp</button>
      </form>
    </div>
  );
}

export default SignUp;
