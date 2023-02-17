import "./App.css";
import Board from "./components/Board";
import Navbar from "./components/Navbar";
import AddCard from "./components/AddCard";

function App() {
  return (
    <>
      <div className="w-full flex flex-col">
        <Navbar />
        <div className="w-full h-full overflow-x-auto flex-1">
          <div className="flex h-full w-fit px-12 py-20 gap-10">
            <Board />
            <Board />
            <Board />
            <div className="min-w-fit h-300">
              <AddCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
