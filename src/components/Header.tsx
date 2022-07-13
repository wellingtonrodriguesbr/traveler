import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Container } from "./Container";
import { MagnifyingGlass } from "phosphor-react";

import Logo from "../assets/Logo.svg";

export function Header() {
  const { pathname } = useLocation();
  const [searchCity, setSearchCity] = useState("");

  const isSearchCityValue = searchCity.length;

  return (
    <header
      className={`h-24 flex justify-center items-center ${
        pathname !== "/" ? "bg-white border-b border-gray-100" : null
      }`}
    >
      <Container>
        <div className="flex justify-between items-center py-8">
          <NavLink to="/">
            <img src={Logo} alt="" />
          </NavLink>

          {pathname !== "/" ? (
            <label
              htmlFor="searchCity"
              className="md:flex items-center gap-4 w-[416px] h-12 border border-gray-100 px-4 rounded-[10px] hidden"
            >
              <MagnifyingGlass
                size={22}
                className={
                  !isSearchCityValue ? "text-gray-300" : "text-orange-500"
                }
              />
              <input
                type="search"
                id="searchCity"
                className="focus:outline-none text-blue-700 w-full inputSearch"
                placeholder="Qual cidade você procura?"
                onChange={(e) => setSearchCity(e.target.value)}
                value={searchCity}
              />
            </label>
          ) : null}

          <button className="bg-blue-100 max-w-[174px] px-4 h-12 rounded-[10px] text-blue-500 font-medium hover:bg-blue-500 hover:text-white transition-colors">
            Acesso restrito
          </button>
        </div>
      </Container>
    </header>
  );
}
