import { Routes, Route } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { AllCitys } from "./pages/AllCitys";
import { Home } from "./pages/Home";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="allcitys" element={<AllCitys />} />
      </Route>
    </Routes>
  );
}
