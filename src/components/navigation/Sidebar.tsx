"use client";
import Link from "next/link";
import {  useState } from "react";
import { PerfilCard } from "../perfil-card/PerfilCard";
import Card from "../card/Card";
import {
  DeleteCircle,
  HomeSimpleDoor,
  MenuScale,
  Sparks,
  UserStar,
} from "iconoir-react";
import { Button } from "../button/Button";

interface NavigationI {
  slide: (slide: boolean) => void;
}
const routes = [
  {
    route: "Home",
    path: "./",
    icon: <HomeSimpleDoor width={30} height={30} />,
  },
  {
    route: "Following",
    path: "./following",
    icon: <UserStar width={30} height={30} />,
  },
  {
    route: "Other",
    path: "./following",
    icon: <Sparks width={30} height={30} />,
  },
];

export const Sidebar = () => {
  const [hide, setHide] = useState(false);

  return (
    <>
      <button onClick={() => setHide(!hide)} className={`lg:hidden`}>
        <MenuScale width={35} height={35} />
      </button>
      <nav
        className={`bg-blue-light border-gray-200 dark:bg-blue-dark  fixed
      border-r z-1 top-0 left-0  overflow-x-hidden  duration-500 flex w-full
      ${hide ? "h-screen border-r-primary px-6 pt-16" : "h-0 pt-0"}
      lg:w-72 lg:px-6  flex-col content-center lg:border-r-primary lg:h-screen lg:pt-16
      dark:border-r-tertiary `}
      >
        <button
          onClick={() => setHide(!hide)}
          className="absolute top-1 left-1 lg:hidden"
        >
          <DeleteCircle width={35} height={35} />
        </button>
        <PerfilCard className={`w-full`} />
        <Card className="mt-16 w-full">
          <div className="p-4 text-gray-900 lg:pb-4 dark:text-white">
            <ul className="divide-y divide-primary divide dark:divide-tertiary">
              {routes.map((r) => (
                <li key={r.route} className="py-3">
                  <Link
                    href="#"
                    className="flex items-center  text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group"
                  >
                    {r.icon}
                    <span className="sr-only">{r.route}</span>
                    <p className="ml-2">{r.route}</p>
                  </Link>
                </li>
              ))}
              {/* <li>
              <Link
                href="#"
                className="flex items-center  text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group"
              >
                <DeleteCircle width={30} height={30} />
                <span className="sr-only">Log out</span>
                <p className="ml-2">Log out</p>
              </Link>
            </li> */}
            </ul>
          </div>
        </Card>
        <Button
          icon={<DeleteCircle width={24} height={24} />}
          className=" rounded-t-2xl rounded-b-none mt-auto"
          loading={false}
        >
          Log out
        </Button>
      </nav>
    </>
  );
};
