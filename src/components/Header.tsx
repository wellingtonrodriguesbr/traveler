import { Container } from "./Container";
import { NavLink, useLocation } from "react-router-dom";
import Logo from "../assets/Logo.svg";

export function Header() {
  const { pathname } = useLocation();

  return (
    <header
      className={`h-24 flex justify-center items-center ${
        pathname !== "/" && "bg-white border-b border-gray-100"
      }`}
    >
      <Container>
        <div className="flex justify-between items-center py-8">
          <NavLink to="/">
            <img src={Logo} alt="" />
          </NavLink>
          <button className="bg-blue-100 w-[174px] h-12 rounded-[10px] text-blue-500 font-medium hover:bg-blue-500 hover:text-white transition-colors">
            Acesso restrito
          </button>
        </div>
      </Container>
    </header>
  );
}
