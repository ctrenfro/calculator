import "./styles/App.css";
import Calculator from "./components/Calculator";
import { StateContext } from "./components/StateContext";

function App() {
  return (
    <div className="App">
      <StateContext>
        <Calculator />
      </StateContext>
    </div>
  );
}

export default App;
