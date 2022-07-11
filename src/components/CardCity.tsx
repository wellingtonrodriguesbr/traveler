interface CardCityProps {
  imgSrc: string;
}

export function CardCity({ imgSrc }: CardCityProps) {
  return (
    <div className="w-[304px] h-[316px] bg-gray-100 rounded-[20px] flex flex-col border border-gray-300">
      <div className="h-[210px] w-full overflow-hidden object-cover">
        <img className="rounded-t-[20px]" src={imgSrc} alt="" />
      </div>
      <div className="m-7">
        <h4 className="text-blue-700 text-xl font-semibold font-[barlow]">
          Florianópolis
        </h4>
        <p className="text-gray-500">98 locais</p>
      </div>
    </div>
  );
}
