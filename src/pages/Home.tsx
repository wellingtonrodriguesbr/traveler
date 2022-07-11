import { CardCity } from "../components/CardCity";
import { Container } from "../components/Container";

export function Home() {
  return (
    <Container>
      <div className="flex justify-between h-screen overflow-y-hidden">
        <div className="max-w-xs mt-[138px]">
          <h1 className="font-[barlow] font-semibold text-[5rem] text-blue-700 leading-[74px]">
            Viva uma grande aventura
          </h1>
          <p className="mt-10 text-gray-500 text-xl leading-relaxed">
            Descubra locais incríveis para se visitar em cidades maravilhosas de
            Santa Catarina.
          </p>
          <button className="mt-12 w-[329px] h-[72px] bg-orange-500 text-white rounded-[10px] text-lg hover:brightness-90 transition-colors">
            Descobrir todos os lugares
          </button>
        </div>
        <div className="flex gap-8">
          <div className="flex flex-col gap-8">
            <CardCity imgSrc="https://source.unsplash.com/random/?city" />
            <CardCity imgSrc="https://source.unsplash.com/random/?street" />
            <CardCity imgSrc="https://source.unsplash.com/random/?brazil" />
          </div>
          <div className="flex flex-col gap-8 mt-14">
            <CardCity imgSrc="https://source.unsplash.com/random/?brazil" />
            <CardCity imgSrc="https://source.unsplash.com/random/?canada" />
            <CardCity imgSrc="https://source.unsplash.com/random/?america" />
          </div>
        </div>
      </div>
    </Container>
  );
}
