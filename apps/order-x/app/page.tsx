import { Card } from "@repo/ui/card";

const LINKS = [
  {
    title: "Learn",
    href: "https://assets.nextorder.co/public/7954a286-2dfb-4a66-b727-6bffe86efaff",
    description: "Napoli sauce, salami, as jalapenos & cheese",
    price: 12.99,
  },
  {
    title: "Templates",
    href: "	https://assets.nextorder.co/public/9d75c576-87d7-4687-ab4b-4714f80fea46",
    description: "Napoli sauce, salami, as jalapenos & cheese",
    price: 12.99,
  },
  {
    title: "Templates2",
    href: "	https://assets.nextorder.co/public/9d75c576-87d7-4687-ab4b-4714f80fea46",
    description: "Napoli sauce, salami, as jalapenos & cheese",
    price: 12.99,
  },
  {
    title: "Napoli sauce, salami, jalapenos & cheese",
    href: "https://assets.nextorder.co/public/f36569c9-0eb8-42f8-b81f-71b1b8c7124a",
    description: "Napoli sauce, salami, as jalapenos & cheese",
    price: 12.99,
  },
];

export default function Page() {
  return (
    <>
      <div className="grid last-of-type:mb-0 grid-cols-2 gap-x-3.5 gap-y-5 xs:grid-cols-3 sm:grid-cols-4 xl:gap-x-8.75 xl:gap-y-4 2xl:gap-x-9.75 2xl:gap-y-4.5 mb-5 last:mb-0 items-start">
        {LINKS.map((link, index) => (
          <Card
            key={index}
            image={link.href}
            title={link.title}
            price={link.price}
            description={link.description}
          />
        ))}
      </div>
      {/* <h2 className="font-bold leading-tight tracking-normal text-left mb-4 last:mb-0 text-primary-title text-7 capitalize  lg:text-7.375 lg:tracking-tight 2xl:text-8.125 2xl:mb-4.5 ">
        Meal Deals
      </h2>
      <div className="grid last-of-type:mb-0 grid-cols-1 gap-x-3.5 gap-y-5 md:grid-cols-2 xl:gap-x-8.75 xl:gap-y-4 2xl:gap-x-9.75 2xl:gap-y-4.5 mb-5 last:mb-0 items-start">
        {LINKS.map((link, index) => (
          <Card
            key={index}
            image={link.href}
            title={link.title}
            price={link.price}
            description={link.description}
          />
        ))}
      </div> */}
      <h2 className="font-bold leading-tight tracking-normal text-left mb-4 last:mb-0 text-primary-title text-7 capitalize  lg:text-7.375 lg:tracking-tight 2xl:text-8.125 2xl:mb-4.5 ">
        Meal Deals
      </h2>
      <div className="grid last-of-type:mb-0 grid-cols-2 gap-x-3.5 gap-y-5 xs:grid-cols-3 sm:grid-cols-4 xl:gap-x-8.75 xl:gap-y-4 2xl:gap-x-9.75 2xl:gap-y-4.5 mb-5 last:mb-0 items-start">
        {LINKS.map((link, index) => (
          <Card
            key={index}
            image={link.href}
            title={link.title}
            price={link.price}
            description={link.description}
          />
        ))}
      </div>
    </>
  );
}
