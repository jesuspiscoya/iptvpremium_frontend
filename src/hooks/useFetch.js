import { useEffect, useState } from "react";

export const useFetch = (url, method = "GET", body = null) => {
  const token = localStorage.getItem("token");
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const options = {
          method: method,
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        };
        if (body) options.body = JSON.stringify(body);

        const response = await fetch(url, options);
        const data = await response.json();

        if (!response.ok) throw new Error("Ocurrió un error en el servidor");

        setData(data.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    if (!url) return;
    fetchData();
  }, [url]);

  return { data, isLoading, error };
};
