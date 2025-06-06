import { useState, useEffect } from "react";

function useLoading() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect((duration = 900) => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, duration);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return isLoading;
}

export default useLoading;
