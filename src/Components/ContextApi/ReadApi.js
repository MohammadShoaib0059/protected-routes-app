import { createContext, useEffect, useState } from "react";

export const Api = createContext();

const ReadApi = ({ children }) => {
  const [data, setData] = useState(null); // Change the initial value to null
  const [error, setError] = useState(null);
useEffect(()=>{
    const fetchData = async () => {
        try {
          const res = await fetch(`http://localhost:5000/TodoData`);
          if (!res.ok) {
            throw new Error(`Request failed with status ${res.status}`);
          }
          const result = await res.json();
          setData(result);
          setError(null);
        } catch (error) {
          setError(error);
        }
      };
fetchData()    
},[])
 
  const value = {
    data
  };

  return <Api.Provider value={value}>{children}</Api.Provider>;
};

export default ReadApi;
