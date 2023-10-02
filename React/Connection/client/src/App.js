import { Route, Routes } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";

function App() {
  return (
      <>
          <Routes>
            <Route path="/" element={<Register />} />
            <Route path="/logg" element={<Login />} />
          </Routes>
      </>
  );
}

export default App;
