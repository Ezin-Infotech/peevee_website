import { BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import Routers from "./Utils/Routes";

function App() {
  return (
    <BrowserRouter>
      <Routers />
    </BrowserRouter>
  );
}

export default App;
