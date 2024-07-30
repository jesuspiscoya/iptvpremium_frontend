import { useEffect, useState } from "react";

export const useFetch = (url, method = "GET", body = null) => {
  const [response, setResponse] = useState({
    data: null,
    isLoading: true,
    error: null,
  });

  useEffect(() => {
    const getFetch = async () => {
      try {
        const options = {
          method: method,
          headers: {
            "Content-Type": "application/json",
          },
        };

        if (body) {
          options.body = JSON.stringify(body);
        }

        const response = await fetch(url, options);

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setResponse({
          data: data,
          isLoading: false,
          error: null,
        });
      } catch (error) {
        setResponse({
          data: null,
          isLoading: false,
          error: error,
        });
      }
    };

    if (!url) return;
    getFetch();
  }, [url]);

  return response;
};
