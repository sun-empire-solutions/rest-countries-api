import { BrowserRouter, Route, Routes } from "react-router-dom";

import { CountryDetailContainer } from "./containers/CountryDetailContainer";
import { CountryListContainer } from "./containers/CountryListContainer";
import { CountriesLayout } from "./layouts/CountriesLayout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CountriesLayout />}>
          <Route index element={<CountryListContainer />} />
          <Route path="/countries/:code" element={<CountryDetailContainer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export { App };
