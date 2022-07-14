import { Routes, Route } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { AllCitys } from "./pages/AllCitys";
import { City } from "./pages/City";
import { Home } from "./pages/Home";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/allcitys" element={<AllCitys />} />
        {/* <Route path="/city" element={<City />} /> */}
      </Route>
    </Routes>
  );
}
