import { Container } from "./Container";
import { NavLink } from "react-router-dom";
import Logo from "../assets/Logo.svg";

export function Header() {
  return (
    <header className={`h-24 flex justify-center items-center bg-white`}>
      <Container>
        <div className="flex justify-between items-center py-8">
          <NavLink to="/">
            <img src={Logo} alt="" />
          </NavLink>
          <button className="bg-blue-100 max-w-[174px] px-4 h-12 rounded-[10px] text-blue-500 font-medium hover:bg-blue-500 hover:text-white transition-colors">
            Acesso restrito
          </button>
        </div>
      </Container>
    </header>
  );
}
