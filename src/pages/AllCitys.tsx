import { CardCity } from "../components/CardCity";
import { Container } from "../components/Container";

export function AllCitys() {
  return (
    <Container>
      <div className="flex flex-col xl:flex-row gap-12 justify-between items-center mt-10">
        <h2 className="text-blue-700 text-4xl font-semibold font-[barlow]">
          Selecione uma cidade
        </h2>
        <nav>
          <ul className="flex gap-8 border-b border-gray-100 text-gray-300 font-[barlow] h-12">
            <li className="h-12 cursor-pointer hover:text-blue-700 relative after:w-full after:h-[2px] after:bg-red-500 after:absolute after:bottom-0 after:left-0 py-[10px] after:rounded-full after:hidden hover:after:block transition-all">
              Todas
            </li>
            <li className="h-12 cursor-pointer hover:text-blue-700 relative after:w-full after:h-[2px] after:bg-red-500 after:absolute after:bottom-0 after:left-0 py-[10px] after:rounded-full after:hidden hover:after:block transition-all">
              Mais acessadas
            </li>
            <select
              name=""
              id="options"
              className="bg-transparent cursor-pointer"
            >
              <option value="" disabled selected>
                A-Z
              </option>
              <option value="">Opção 1</option>
            </select>
          </ul>
        </nav>
      </div>

      <div className="mt-[38px] flex gap-[34px] w-full flex-wrap justify-start pb-56">
        <CardCity imgSrc="https://source.unsplash.com/random/?city" />
        <CardCity imgSrc="https://source.unsplash.com/random/?city" />
        <CardCity imgSrc="https://source.unsplash.com/random/?city" />
        <CardCity imgSrc="https://source.unsplash.com/random/?city" />
        <CardCity imgSrc="https://source.unsplash.com/random/?city" />
        <CardCity imgSrc="https://source.unsplash.com/random/?city" />
        <CardCity imgSrc="https://source.unsplash.com/random/?city" />
        <CardCity imgSrc="https://source.unsplash.com/random/?city" />
      </div>
    </Container>
  );
}
