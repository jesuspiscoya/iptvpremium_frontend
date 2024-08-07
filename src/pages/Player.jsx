import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

export const Player = () => {
  const apiUrl = import.meta.env.VITE_API_URL;
  const { state } = useLocation();
  const navigate = useNavigate();
  const { data, isLoading, error } = useFetch(`${apiUrl}/channel`, "POST", {
    id: state,
  });

  if (!state) {
    navigate("/channels");
  }

  useEffect(() => {
    if (data) {
      document.title = data[0].name;
      const player = new Clappr.Player({
        source: data[0].url,
        parentId: "#player",
        width: "100%",
        height: "550",
        plugins: [LevelSelector],
        levelSelectorConfig: {
          title: "Calidad",
          onLevelsAvailable: (levels) => {
            return levels.reverse();
          },
          labelCallback: (playbackLevel) => {
            return playbackLevel.level.height + "p";
          },
        },
      });

      return () => player.destroy();
    }
  }, [data]);

  return (
    <>
      {isLoading ? (
        <div className="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-teal-800 m-auto" />
      ) : error ? (
        <p className="text-center text-red-600 font-bold text-3xl m-auto">
          {error}
        </p>
      ) : (
        data.map(({ id, name }) => (
          <div key={id}>
            <p className="text-center text-indigo-600 font-bold py-5 text-3xl">
              {name}
            </p>
            <div id="player" className="flex flex-col max-h-max" />
          </div>
        ))
      )}
    </>
  );
};
