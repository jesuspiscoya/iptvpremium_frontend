import { useNavigate } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

export const Channels = () => {
  const apiUrl = import.meta.env.VITE_API_URL;
  const { data, isLoading, error } = useFetch(`${apiUrl}/channels`);
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLive = (e, id) => {
    e.preventDefault();
    navigate("/player", { state: id });
  };

  return (
    <>
      <p className="text-center text-indigo-600 font-bold text-3xl">
        Bienvenido(a) {user.firstname} {user.lastname}
      </p>
      {isLoading ? (
        <div className="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-teal-800 m-auto" />
      ) : error ? (
        <p className="text-center text-red-600 font-bold text-3xl m-auto">
          {error}
        </p>
      ) : (
        <div className="flex flex-wrap justify-center items-center gap-6">
          {data.map(({ id, logo, name }) => (
            <div
              key={id}
              className="flex flex-col gap-5 bg-gradient-to-tl to-indigo-700 from-blue-800 text-white rounded-3xl p-6 w-56 h-60 justify-between shadow-lg shadow-violet-950"
            >
              <div className="flex justify-center items-center h-full">
                <img src={logo} alt="logo channel" className="max-h-20" />
              </div>
              <div className="flex flex-col items-center gap-3">
                <span className="text-lg font-black text-white text-center">
                  {name}
                </span>
                <a
                  href=""
                  className="flex items-center gap-1.5 text-white bg-green-600 hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-xs px-2.5 py-1 text-center transition"
                  onClick={(e) => handleLive(e, id)}
                >
                  <div className="h-1.5 w-1.5 bg-red-700 rounded-full animate-pulse"></div>
                  Ver canal
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};
