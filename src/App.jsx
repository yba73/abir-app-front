import React from "react";
import Routers from "./routes/Routers";
import { ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./layout/Navbar";
import Announcement from "./layout/Announcement";
import Footer from "./layout/Footer";
import { useLocation } from "react-router-dom";
const App = () => {
  // const isUserSignedIn = !!localStorage.getItem('token') // to protect the route of the user account after he log in
  const locationRouter = useLocation();
  return (
    <div className="App">
      {locationRouter.pathname === "/" && <Announcement />}
      <Navbar />
      <Routers />

      {locationRouter.pathname === "/" && <Footer />}

      <ToastContainer
        position={"bottom-right"}
        closeOnClick={true}
        transition={Slide}
        autoClose={"5000"}
        theme="colored"
        bodyStyle={{ color: "white" }}
      />
    </div>
  );
};

export default App;
