import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import { auth } from "../firebase";
import SignUp from "../pages/SignUp";

function Router() {
  const user = auth.currentUser;

  return (
    <BrowserRouter>
      <Routes>
        {user ? <Route path="/" element={<Home />}></Route> : null}
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="*" element={<Navigate replace to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
