

function GitUser() {


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
          <div className="flex justify-center ">
            <img className="bg-blue-400 rounded-[100%] w-[200px] h-[200px]" />
          </div>
          <div>
            <h2>Followers</h2>
            <h3>3</h3>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default GitUser;
