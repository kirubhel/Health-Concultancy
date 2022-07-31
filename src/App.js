import Login from "./pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Dashbord from "./pages/Dashbord";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="dashboard" element={<Dashbord/>} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
