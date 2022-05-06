import {BrowserRouter,Route,Routes} from "react-router-dom"
import Map from "./screens/MapCars";
import Home from "./screens/Home";
import Login from "./screens/Login";
import Test from "./screens/Test";
function App() {
  return (
    <BrowserRouter>
       <Routes>
         <Route path="/" element={<Login/>}>
         </Route>
         <Route path="/map" element={<Map/>}></Route>
         <Route path="/test" element={<Test/>}></Route>
       </Routes>
    </BrowserRouter>
  );
}

export default App;
