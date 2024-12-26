import './index.css'; // Ensure this points to your Tailwind CSS file

function Home() {
  return (
    //div for entire page
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">

      {/*header*/}
      <header>
        <h1 className="text-5xl font-bold underline font-mono italic text-blue-500">
          Ian Kwiatkowski Website
        </h1>
      </header>
      
      {/*buttons (temporary until a header is designed)*/}
      <div class="inline-flex">
        <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4">
          Home
        </button>
        <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4">
          Experince
        </button>
        <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4">
          About Me
        </button>
      </div>
      
    </div>
  );
}

export default Home;