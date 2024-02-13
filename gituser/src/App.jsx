

function GitUser() {
  const USER_API = "https://api.github.com/users/"

  return (
    <>

      <div className="flex justify-center border items-center">
        <input

          type="text"
          className="border p-2 rounded-lg shadow-2xl border-blue-600"
        />
        <button
          className="p-2 bg-green-600 text-white font-semibold rounded-md"
        >Search</button>
      </div>
      <div className="flex mt-2 justify-center">
        <div className="border w-[400px] h-[500px] bg-stone-700 p-1">
          <div className="flex justify-around items-center mb-2">
            <img className="bg-blue-400 rounded-[100%] w-[200px] h-[200px]" />
            <div className="flex flex-col items-center">
              <h1 className="text-white">Name</h1>
              <h1 className="text-white">Vishnu</h1>
            </div>

          </div>
          <div className="flex justify-around">
            <div className="border w-24 text-center">
              <h2>Followers</h2>
              <h3 className="border-t">3</h3>
            </div>
            <div className="border w-24 text-center">
              <h2>Follwing</h2>
              <h3 className="border-t">12</h3>
            </div>
          </div>

        </div>
      </div>

    </>
  )
}

export default GitUser;
