import "./App.css";
import ImageGrid from "./components/ImageGrid";
import main from "/photos/DM004914.jpg";

function App() {
  return (
    <div className="h-screen">
      <nav className=" h-screen relative">
        <div className="z-10 absolute left-0 right-0 top-0 bottom-5 flex flex-col items-center justify-end text-white">
          <h1 className="font-bold text-4xl lg:text-6xl z-10">
            Jordan & Justice
          </h1>
          <strong className="text-6xl lg:text-8xl"> Gilliam</strong>
          <h2 className="text-2xl lg:text-4xl z-10">Feburary 24th 2024</h2>
          <a href="#img-grid">View</a>
        </div>
        <img
          src={main}
          alt="Jordan & Justice Gilliam"
          className="absolute top-0 z-0 object-cover h-full w-full"
        />
      </nav>
      <div id="img-grid" className="pt-4">
        <ImageGrid />
      </div>
    </div>
  );
}

export default App;
