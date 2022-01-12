import "./App.css";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import dots_horizontal from "./assets/dots_horizontal.png";
import dots_verticle from "./assets/dots_verticle.png";

function App() {
  return (
    <div>
      <div className="App">
        <Navbar />
        <div className="gradient__bg"></div>
        <div className="img__horizontal">
          <img src={dots_horizontal} />
        </div>
        <div className="img__vertical">
          <img src={dots_verticle} />
        </div>
        <div className="bg__home">
          <Home />
        </div>
      </div>
    </div>
  );
}

export default App;
