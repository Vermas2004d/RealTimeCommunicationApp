

function LoginDefault() {
  return (
    <div className="bg-gray-900 flex justify-center items-center min-h-screen">
      <div className="bg-gray-700 rounded-lg p-8 max-w-sm w-full shadow-2xl">
        <h2 className="text-center text-3xl text-white mb-6 font-bold">
          Login
        </h2>
        <form>
          <div className="mb-4"> 
            <label
              className="block text-sm font-medium text-gray-300 mb-2"
              for=""
            >
              Email
            </label>
            <input
              className="w-full px-3 py-2 bg-gray-600 border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="email"
              name=""
              placeholder="Email"
              id=""
            />
          </div> 
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-300 mb-2" for="">Password </label>
            <input
              className="w-full px-3 py-2 bg-gray-600 border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="password"
              name=""
              placeholder="Password"
              id=""
            />
          </div>
          <button className="bg-blue-600 w-full text-white py-2 rounded-md hover:bg-blue-700 shadow-2xl " type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}
export default LoginDefault;
