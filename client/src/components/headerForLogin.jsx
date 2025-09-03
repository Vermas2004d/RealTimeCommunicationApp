

function HeaderForLogin() {

    return(
    <div className="text-white bg-gray-950 mt-6 mb-[-54px] ">
        <div className="flex justify-center items-center h-20">
         <svg
            class="h-12 w-12 text-sky-400"
            fill="none"
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M36.7273 44C33.9891 44 31.6043 39.8386 30.3636 33.69C29.123 39.8386 26.7382 44 24 44C21.2618 44 18.877 39.8386 17.6364 33.69C16.3957 39.8386 14.0109 44 11.2727 44C7.25611 44 4 35.0457 4 24C4 12.9543 7.25611 4 11.2727 4C14.0109 4 16.3957 8.16144 17.6364 14.31C18.877 8.16144 21.2618 4 24 4C26.7382 4 29.123 8.16144 30.3636 14.31C31.6043 8.16144 33.9891 4 36.7273 4C40.7439 4 44 12.9543 44 24C44 35.0457 40.7439 44 36.7273 44Z"
              fill="currentColor"
            ></path>
          </svg>
          </div>
        <h1 className="font-bold text-3xl text-center mb-2">Welcome Back</h1>
        <p className="font-medium textxl text-center ">Sign in to dive back into the conversation.</p>
      </div>
    );
}

export default HeaderForLogin;