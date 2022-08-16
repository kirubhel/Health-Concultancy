import Login from "./pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Dashbord from "./pages/Dashbord";
import Adminlogin from "./pages/common/Adminlogin";
import AdminDashboard from "./pages/superadmin/AdminDashboard";
import SuperHome from "./pages/superadmin/SuperHome";
import Admins from "./pages/superadmin/Admins";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />

          <Route path="register" element={<Register />} />
          <Route path="dashboard" element={<Dashbord />} />
          <Route path="/admindashboard" element={<AdminDashboard />}>
            <Route index element={<SuperHome />} />
            <Route path="appointment" element={<Login />} />
            <Route path="admins" element={<Admins />} />
          </Route>
        </Route>
        <Route path="adminlogin" element={<Adminlogin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
