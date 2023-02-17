import "./App.css";
import Board from "./components/Board";

function App() {
  return (
    <>
      <div className="w-full flex flex-col">
        <div className="p-5 sticky top-0 bg-white shadow-md">
          <h1 className="text-2xl font-bold">Kanban App</h1>
        </div>
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
