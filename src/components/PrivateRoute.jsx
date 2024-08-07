import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useContext(AuthContext);
  const location = useLocation();

  return !isAuthenticated ? (
    <Navigate to="/login" state={{ from: location }} />
  ) : (
    <div className="flex flex-col gap-8 min-h-full bg-indigo-950">
      <Navbar />
      <div className="container flex-1 flex flex-col gap-8 self-center">
        {children}
      </div>
      <Footer />
    </div>
  );
};

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
