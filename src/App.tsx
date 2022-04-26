import { Navbar } from "./components/Navbar";
import { CountryListContainer } from "./containers/CountryListContainer";
import { CountriesLayout } from "./layouts/CountriesLayout";

const App = () => {
  return (
    <CountriesLayout>
      <Navbar />
      <CountryListContainer />
    </CountriesLayout>
  );
};

export { App };
