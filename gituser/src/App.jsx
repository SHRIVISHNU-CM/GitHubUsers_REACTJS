import { useState, useEffect } from "react"
import axios from "axios"
function GitUser() {

  const [username, setUsername] = useState("")
  const [userData, setUserData] = useState({});

  const Submit =()=>{
    axios.get(  `https://api.github.com/users/${username}`)
      .then((res) => {
        setUserData(res.data);
      })
  }

  return (
    <>

      <div className="flex justify-center border items-center gap-2">
        <input
          value={username}
          type="text"
          placeholder="Enter Username"
          className="border p-2 rounded-lg shadow-2xl border-blue-600"
          onChange={(e) => {

            setUsername(e.target.value)}}
        />
        <button
        onClick={Submit}
          className="p-2 bg-green-600 text-white font-semibold rounded-md"
        >Search</button>
      </div>
      <div className="flex mt-2 justify-center ">
        <div className="border w-[450px]  bg-stone-700 p-3 h-min rounded-md">
          <div className="flex justify-around items-center mb-2">
            <img className="bg-blue-400 rounded-[100%] w-[200px] h-[200px] overflow-hidden" src={userData.avatar_url} />
            <div className="flex flex-col items-center">
              <h1 className="text-white">Name</h1>
              <h1 className="text-white">{userData.name==null? userData.login:userData.name}</h1>
            </div>

          </div>
          <div className="flex justify-around">
            <div className="border w-24 text-center p-1">
              <h2 className="text-white">Followers</h2>
              <h3 className="border-t text-white">{userData.followers}</h3>
            </div>
            <div className="border w-24 text-center p-1">
              <h2 className="text-white">Follwing</h2>
              <h3 className="border-t text-white">{userData.following}</h3>
            </div>
          </div>
          <div className="flex justify-around">
            <div className="border w-24 text-center p-1">
              <h2 className="text-white">Public Repositories</h2>
              <h3 className="border-t text-white">{userData.public_repos}</h3>
            </div>
            <div className="border w-24 text-center p-1">
              <h2 className="text-white">Location</h2>
              <h3 className="border-t text-white">{userData.location==null? "N/A":userData.location}</h3>
            </div>
          </div>
          {userData.bio==null?<></>:
            <div className="text-center border h-min text-white">
              <p>{userData.bio}</p>
            </div>
          }
          

        </div>
      </div>

    </>
  )
}

export default GitUser
