import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Channels } from "./pages/Channels";
import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";
import { Player } from "./pages/Player";
import { Login } from "./pages/Login";
import { AuthProvider } from "./contexts/AuthProvider";
import { PrivateRoute } from "./components/PrivateRoute";

export const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route
            path="/channels"
            element={
              <PrivateRoute>
                <Channels />
              </PrivateRoute>
            }
          />
          <Route
            path="/contact"
            element={
              <PrivateRoute>
                <Contact />
              </PrivateRoute>
            }
          />
          <Route
            path="/player"
            element={
              <PrivateRoute>
                <Player />
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};
