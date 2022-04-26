import { Country } from "../types";

const CountryItem = ({
  item: {
    flags: { png: countryFlagUrl },
    name: { common: countryCommonName },
    population,
    region,
    capital,
  },
}: IProps) => {
  return (
    <li className="country-item">
      <img src={countryFlagUrl} alt="" />
      <div className="descripcion">
        <span>
          <strong>{countryCommonName}</strong>
        </span>
        <div className="info">
          <span>
            <strong>Polulation: </strong>
            {population}
          </span>
          <span>
            <strong>Region: </strong>
            {region}
          </span>
          <span>
            <strong>Capital: </strong>
            {capital}
          </span>
        </div>
      </div>
    </li>
  );
};

type IProps = {
  item: Country;
};

export { CountryItem };
