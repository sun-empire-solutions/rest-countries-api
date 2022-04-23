import { useEffect, useState } from "react";

import { api } from "./api";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getCountries = async () => {
    try {
      const result = await api.get("all");
      setCountries(result);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getCountries();
  }, []);

  return isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <ul>
      {countries.map((item, index) => (
        <li key={index}>{item.name.common}</li>
      ))}
    </ul>
  );
};

export { App };
