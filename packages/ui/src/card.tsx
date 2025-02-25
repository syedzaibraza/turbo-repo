import { Icon } from "@iconify/react/dist/iconify.js";

export function Card({
  title,
  description,
  price,
  image,
}: {
  title: string;
  description: string;
  price: number;
  image: string;
}) {
  return (
    <div
      className={`flex cursor-pointer flex-col items-start justify-start gap-1.5 md:gap-2 h-60 w-40 md:h-72 md:w-44 lg:h-80 lg:w-52 text-black`}
    >
      <div className="relative w-40 h-40 md:w-44 md:h-44 lg:w-52 lg:h-52 rounded-lg">
        <img
          src={image}
          alt={title}
          className="w-full h-full absolute rounded-lg object-cover"
        />

        <div className="absolute px-2 py-1 bottom-2 left-2 bg-white rounded-lg text-sm font-semibold shadow">
          ${price.toFixed(2)}
        </div>

        <div className="w-6 h-6 md:w-8 md:h-8 md:text-xl absolute top-2 left-2 bg-white rounded-full flex items-center justify-center">
          <Icon icon="tabler:plus" />
        </div>
      </div>

      <div className="text-sm md:text-base lg:text-xl font-semibold text-left">
        {title}
      </div>
      <div className="mb-1 line-clamp-2 text-3.375 font-normal leading-normal text-[#484c5a] last:mb-0 xl:text-3.625 xl:tracking-s-tight">
        {description}
      </div>
    </div>
  );
}
