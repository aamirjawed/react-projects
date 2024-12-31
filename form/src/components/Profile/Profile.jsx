import { useEffect, useState } from "react"
import { updateInput } from "../../redux/form/formActions";
import { useDispatch } from "react-redux";
import { data } from "autoprefixer";




const Profile = () => {
  const [profile, setProfile] = useState({});
  const[data, setData] =useState('')
  const [isEditable ,setIsEditable] =useState(false)
  const dispatch = useDispatch();

  useEffect(() => {
    const userData = localStorage.getItem('User');

    if (userData) {
      const parsedUserData = JSON.parse(userData)
      setProfile(parsedUserData)
    }
  }, [])

  const handlClick = (e) => {
    e.preventDefault()
    dispatch(updateInput(data))
  }
  return (
    <div className="flex justify-center items-center flex-col font-mono antialiased ">
      <div className="mt-10 font-bold text-3xl">
        <h2>User Details</h2>
      </div>
      
      <div className=" gap-5 m-10 pb-5">
      <div className="flex flex-row">
      {
        isEditable ? <input /> :<p className="flex flex-row gap-5"> Username: {profile.name}</p> 
      }
       
      </div>
        
      <div className="flex flex-row">
      <p className="flex flex-row gap-5">Email: {profile.email}</p>  
      {/* <button>
        {isEditable? "📁": "✏️"}
      </button> */}
      </div>
      </div>
    </div>
  )
}

export default Profile