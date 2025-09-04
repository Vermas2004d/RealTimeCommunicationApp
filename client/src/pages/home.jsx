import Navbar from "../components/navbar"

function Home(){

    return (
        <div>
            <Navbar />
            <div className="flex items-center justify-center min-h-screen">
                <h1 className="text-7xl font-bold bg-gradient-to-l from-blue-600 via-white bg-sky-400 text-transparent bg-clip-text">This is a home Page </h1>
            </div>
        </div>     
    );
}

export default Home;