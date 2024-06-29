import { Toaster } from "react-hot-toast";
import Board from "./components/Board";

function App() {
  return (
    <div className="container-fluid container-style ">
      <div className="max-w-screen-xl rounded-lg">
        <Toaster/>
        <h2 className="font-Indie text-4xl font-bold mb-4 text-white text-center">Tic-Tac-Toe</h2>
         <Board/>
      </div>
    </div>
  );
}

export default App;
