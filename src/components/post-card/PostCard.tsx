import Image from "next/image";
import Link from "next/link";
import React from "react";

interface PostCard {
  fullWidth?: boolean;
}
/* dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white */
export const PostCard = ({ fullWidth }: PostCard) => {
  return (
    <div className=" w-full h-full p-2 flex flex-col flex-shrink">
      <div className="bg-white rounded-sm flex-1 overflow-hidden shadow-lg dark:bg-gray-800 ">
        <Link
          className="flex h-full flex-wrap no-underline hover:no-underline"
          href={"#"}
        >
          <div className={`w-full ${fullWidth ? "lg:w-3/5" : ""} rounded-t`}>
            <Image
              src={"https://source.unsplash.com/collection/225/800x600"}
              width={800}
              height={800}
              alt="img"
              className="h-full w-full shadow"
            />
          </div>
          <div
            className={`w-full flex flex-col flex-grow flex-shrink ${
              fullWidth ? "lg:w-2/5" : ""
            }`}
          >
            <div className="flex-1 rounded overflow-hidden ">
              <p
                className={`w-full text-gray-600 text-xs px-6 pt-6 ${
                  fullWidth ? " lg:text-sm" : ""
                }
                dark:text-gray-200`}
              >
                info
              </p>
              <h3 className="w-full font-bold text-xl text-gray-500 px-6 dark:text-gray-200 ">
                Titulo
              </h3>
              <p className=" text-gray-600 text-base px-6 mb-5 line-clamp-3 dark:text-white">
                Lorem ipsum, dolor consectetur adipisicing elit. Deserunt nobis
                eveniet ad labore hic sapiente enim praesentium ipsum magni
                dicta, blanditiis non dolores sint ea excepturi perferendis
                optio maiores quo.
              </p>
            </div>
            <div className="flex-none mt-auto overflow-hidden p-6">
              <div className="flex items-center justify-between">
                <Image
                  className="w-10 h-10 rounded-full mr-4"
                  src={"https://i.pravatar.cc/300"}
                  width={300}
                  height={300}
                  alt="avatar"
                />
                <p className="text-gray-600 text-xs md:text-sm dark:text-gray-200">
                  Leer mas
                </p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};
