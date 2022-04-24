import React from "react";
import { api } from "./..//api";
import { Country } from "./../types";
import { useEffect, useState } from "react";

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
          <li key={index}>
            <img src={item.flags.png} alt="" />
            <div className="descripcion">
              <span>
                <strong>{item.name.common}</strong>
              </span>
              <div className="info">
                <span>
                  <strong>Polulation: </strong>
                  {item.population}
                </span>
                <span>
                  <strong>Region: </strong>
                  {item.region}
                </span>
                <span>
                  <strong>Capital: </strong>
                  {item.capital}
                </span>
              </div>
            </div>
          </li>
        ))}
      </div>
    </div>
  );
};

type IProps = {
  children: JSX.Element;
};

export { Container };
