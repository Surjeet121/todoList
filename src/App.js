import AddUser from "./Home";
// import Toggle from "../ToggleApp";
import "./App.css";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import UpdateUser from "./UpdateUser";
import Test from "./Test";

export default function App() {
  return (
    <div className="App">
      {/* <Toggle /> */}
      <BrowserRouter>
        <Routes>
          <Route path='/test' element={<Test />} />
          <Route path='/'element={<AddUser />} />
          <Route path='/edit:id'element={<UpdateUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}



export let user = [
  { id: 1, name: "Surjeet" },
  { id: 2, name: "Amit" }
];
