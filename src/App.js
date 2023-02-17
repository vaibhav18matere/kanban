import "./App.css";
import Board from "./components/Board";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div className="w-full flex flex-col">
        <Navbar />
        <div className="w-full h-full overflow-x-auto pt-5 flex-1">
          <div className="flex h-full w-fit px-10 py-10 gap-28 ">
            <Board />
            <Board />
            <Board />
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
