import "./App.css";
import Navbar from "./components/Navbar/Navbar";

import SidebarOptions from "./components/Sidebaroption/SidebarOptions";
import Home from "./pages/Home/Home";
import User from "./pages/User/User";
import { Routes, Route } from "react-router-dom";
import UserDetailPage from "./pages/UserDetailPage/UserDetailPage";
import NewUserCreate from "./components/NewUserWidget/NewUserCreate/NewUserCreate";
import ProductList from "./pages/ProductList/ProductList";
import ProductEdit from "./pages/ProductEdit/ProductEdit";
import CreateProduct from "./pages/CreateProduct/CreateProduct";
import Login from "./pages/LoginPage/Login";
import { AuthContext } from "./Context/AuthContext/AuthContext";
import { useContext } from "react";

function App() {
  const { user } = useContext(AuthContext);

  return (
    <div className="App">
      {user ? (
        <>
          <Navbar />
          <div className="main__area">
            <SidebarOptions />

            <Routes>
              <Route index={"true"} path="/" element={<Home />} />
              <Route path="/user" element={<User />} />
              <Route path="/user/:userId" element={<UserDetailPage />} />
              <Route path="/user/newuser" element={<NewUserCreate />} />
              <Route path="/movies" element={<ProductList />} />
              <Route path="/product/:id" element={<ProductEdit />} />
              <Route path="/product/create" element={<CreateProduct />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </div>
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
