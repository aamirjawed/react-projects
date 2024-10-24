import { useEffect, useState } from "react"



const Profile = () => {
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const userData = localStorage.getItem('User');

    if(userData){
      const parsedUserData = JSON.parse(userData)
      setProfile(parsedUserData)
    }
  }, [])
  return (
    <div>
      <h2>Name : {profile.name}</h2>
    </div>
  )
}

export default Profile