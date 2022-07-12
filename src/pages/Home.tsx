import { NavLink } from "react-router-dom";
import { CardCity } from "../components/CardCity";
import { Container } from "../components/Container";

export function Home() {
  return (
    <Container>
      <div className="flex flex-col xl:flex-row justify-between h-full xl:max-h-screen xl:pb-0 pb-96 overflow-hidden">
        <div className="mt-12 xl:mt-[108px] flex flex-col justify-center items-center xl:items-start xl:justify-start">
          <h1 className="font-[barlow] font-semibold text-5xl xl:text-[5rem] text-blue-700 xl:leading-[74px] text-center xl:text-left w-full xl:max-w-[329px]">
            Viva uma grande aventura
          </h1>
          <p className="mt-10 w-full xl:max-w-[329px] text-gray-500 text-xl leading-relaxed text-center xl:text-left">
            Descubra locais incríveis para se visitar em cidades maravilhosas de
            Santa Catarina.
          </p>
          <NavLink
            to="/allcitys"
            className="mt-12 px-8 xl:w-[329px] h-[72px] bg-orange-500 text-white rounded-[10px] text-lg hover:brightness-90 transition-colors flex items-center justify-center"
          >
            Descobrir todos os lugares
          </NavLink>
        </div>
        <div className="flex flex-col xl:flex-row justify-center items-center gap-8 mt-12 xl:mt-96">
          <div className="flex overflow-auto w-full flex-row xl:flex-col gap-8 mt-4">
            <CardCity imgSrc="https://source.unsplash.com/random/?city" />
            <CardCity imgSrc="https://source.unsplash.com/random/?street" />
            <CardCity imgSrc="https://source.unsplash.com/random/?brazil" />
          </div>
          <div className="flex overflow-auto w-full flex-row xl:flex-col gap-8 mt-4 xl:mt-[92px]">
            <CardCity imgSrc="https://source.unsplash.com/random/?brazil" />
            <CardCity imgSrc="https://source.unsplash.com/random/?canada" />
            <CardCity imgSrc="https://source.unsplash.com/random/?america" />
          </div>
        </div>
      </div>
    </Container>
  );
}
