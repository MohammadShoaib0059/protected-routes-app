import React, { useEffect, useState } from "react";

const useApi = (url) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = fetch(url);
        const result = await res.json();
        setData(result);
      } catch (error) {
        alert("error", error);
      }
    };
    fetchData();
  }, [url]);
  return [data];
};
export default useApi;
