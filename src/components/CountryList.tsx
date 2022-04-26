import { Country } from "../types";
import { CountryItem } from "./CountryItem";

const CountryList = ({ countries }: IProps) => {
  return (
    <ul className="country-list">
      {countries.map((item, index) => (
        <CountryItem key={index} item={item} />
      ))}
    </ul>
  );
};

type IProps = { countries: Country[] };

export { CountryList };
