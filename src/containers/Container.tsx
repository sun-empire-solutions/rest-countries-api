import { useEffect, useState } from "react";

import { api } from "../api";
import { CountryItem } from "../components/CountryItem";
import { Country } from "../types";

const Container = () => {
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
    <div className="body">
      <div className="container">
        {countries.map((item, index) => (
          <CountryItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

type IProps = {
  children: JSX.Element;
};

export { Container };
