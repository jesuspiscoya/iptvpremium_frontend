import bg_imagen from "../assets/bg-login.webp";
import { Checkbox } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/16/solid";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
// import bg_imagen from "https://i.pinimg.com/originals/49/22/c5/4922c522dbd60d5f4a14cbd0e0b48f95.jpg";
// import bg_imagen2 from "https://cdn.dribbble.com/users/271577/screenshots/2557020/media/7bfc6feeca28b62541177f15340ff579.png";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [enabled, setEnabled] = useState(false);
  const { isAuthenticated, login } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    isAuthenticated && navigate("/");
  }, [isAuthenticated, navigate]);

  const validateForm = () => {
    const newErrors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      newErrors.emailCss = "ring-1 ring-red-600";
      newErrors.email = true;
    }

    if (password.length < 5) {
      newErrors.passwordCss = "ring-1 ring-red-600";
      newErrors.password = true;
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      setErrors({});
      await login(email, password);
      navigate("/");
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-900 via-indigo-800 to-blue-900 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${bg_imagen})`,
      }}
    >
      <div className="bg-slate-950 bg-opacity-50 backdrop-blur-md border border-transparent rounded-lg transition-all duration-300 shadow-2xl shadow-black hover:border-violet-500 hover:shadow-2xl hover:shadow-violet-700 sm:max-w-xl xl:max-w-2xl mx-4 overflow-hidden">
        <div className="max-h-80 overflow-hidden">
          <img src={bg_imagen} />
        </div>
        <form
          className="flex flex-col p-8 gap-4 sm:mx-14 xl:mx-24"
          onSubmit={handleSubmit}
        >
          <h1 className="text-2xl font-bold text-white text-center mb-2">
            USER LOGIN
          </h1>
          <div>
            <label
              htmlFor="email"
              className="block text-slate-400 text-sm font-medium mb-1"
            >
              Correo
            </label>
            <input
              type="text"
              id="email"
              name="email"
              value={email.text}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Ingresa tu correo"
              className={`w-full px-4 py-1.5 border border-transparent rounded-lg bg-indigo-700 bg-opacity-50 text-white focus:ring-2 focus:ring-cyan-400 transition-all ${errors.emailCss}`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-2">Ingresa tu email.</p>
            )}
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-slate-400 text-sm font-medium mb-1"
            >
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password.text}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className={`w-full px-4 py-1.5 border border-transparent rounded-lg bg-indigo-700 bg-opacity-50 text-white focus:ring-2 focus:ring-cyan-400 transition-all ${errors.passwordCss}`}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-2">
                Ingresa tu contraseña.
              </p>
            )}
          </div>
          <div className="flex mt-1 items-center">
            <Checkbox
              checked={enabled}
              onChange={setEnabled}
              className="group size-5 rounded-md bg-white/10 p-0.5 ring-1 ring-white/15 ring-inset data-[checked]:bg-white"
            >
              <CheckIcon className="hidden size-4 fill-black group-data-[checked]:block" />
            </Checkbox>
            <label
              htmlFor="remember"
              className="text-white font-medium text-sm ml-2 self-center"
            >
              Recuerdame
            </label>
            <a
              href="#"
              className="ms-auto text-end text-cyan-400 font-medium text-sm hover:underline"
            >
              Olvidaste tu contraseña?
            </a>
          </div>
          <button
            type="submit"
            className="px-10 py-2 mx-auto mt-3 bg-cyan-500 text-white text-sm font-bold rounded-full shadow-md hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-colors"
          >
            INGRESAR
          </button>
        </form>
      </div>
    </div>
  );
};
