import { useEffect, useState } from "react";

import { api } from "./api";
import { Country } from "./types";

const App = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const getCountries = async () => {
    try {
      const result = await api.get("all");
      setCountries(result);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
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
        <li key={index}>
          {item.name.common}
          <img src={item.flags.png} alt="" />
        </li>
      ))}
    </ul>
  );
};

export { App };
