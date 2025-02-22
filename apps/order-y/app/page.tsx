import { Card } from "@repo/ui/card";

const LINKS = [
  {
    title: "Order Y",
    href: "https://turbo.build/repo/docs",
    description: "Find in-depth information about Turborepo features and API.",
  },
  {
    title: "Learn",
    href: "https://turbo.build/repo/docs/handbook",
    description: "Learn more about monorepos with our handbook.",
  },
  {
    title: "Templates",
    href: "https://turbo.build/repo/docs/getting-started/from-example",
    description: "Choose from over 15 examples and deploy with a single click.",
  },
  {
    title: "Deploy",
    href: "https://vercel.com/new",
    description:
      "Instantly deploy your Turborepo to a shareable URL with Vercel.",
  },
];

export default function Page() {
  return (
    <>
      <div className="grid last-of-type:mb-0 grid-cols-2 gap-x-3.5 gap-y-5 xs:grid-cols-3 sm:grid-cols-4 xl:gap-x-8.75 xl:gap-y-4 2xl:gap-x-9.75 2xl:gap-y-4.5 mb-5 last:mb-0 items-start">
        {LINKS.map((link) => (
          <Card key={link.href} href={link.href} title={link.title}>
            <p>{link.description}</p>
          </Card>
        ))}
      </div>
      <h2 className="font-bold leading-tight tracking-normal text-left mb-4 last:mb-0 text-primary-title text-7 capitalize  lg:text-7.375 lg:tracking-tight 2xl:text-8.125 2xl:mb-4.5 ">
        Meal Deals
      </h2>
      <div className="grid last-of-type:mb-0 grid-cols-1 gap-x-3.5 gap-y-5 md:grid-cols-2 xl:gap-x-8.75 xl:gap-y-4 2xl:gap-x-9.75 2xl:gap-y-4.5 mb-5 last:mb-0 items-start">
        {LINKS.map((link) => (
          <Card key={link.href} href={link.href} title={link.title}>
            <p>{link.description}</p>
          </Card>
        ))}
      </div>
      <h2 className="font-bold leading-tight tracking-normal text-left mb-4 last:mb-0 text-primary-title text-7 capitalize  lg:text-7.375 lg:tracking-tight 2xl:text-8.125 2xl:mb-4.5 ">
        Meal Deals
      </h2>
      <div className="grid last-of-type:mb-0 grid-cols-2 gap-x-3.5 gap-y-5 xs:grid-cols-3 sm:grid-cols-4 xl:gap-x-8.75 xl:gap-y-4 2xl:gap-x-9.75 2xl:gap-y-4.5 mb-5 last:mb-0 items-start">
        {LINKS.map((link) => (
          <Card key={link.href} href={link.href} title={link.title}>
            <p>{link.description}</p>
          </Card>
        ))}
      </div>
    </>
  );
}
