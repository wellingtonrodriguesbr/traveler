import { Container } from "./Container";
import Logo from "../assets/Logo.svg";

export function Header() {
  return (
    <header>
      <Container>
        <div className="flex justify-between items-center py-8">
          <img src={Logo} alt="" />
          <button className="bg-blue-100 w-[174px] h-12 rounded-[10px] text-blue-500 font-medium hover:bg-blue-500 hover:text-white transition-colors">
            Acesso restrito
          </button>
        </div>
      </Container>
    </header>
  );
}
