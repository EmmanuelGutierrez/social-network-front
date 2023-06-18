import { ProfileCircle } from "iconoir-react";
import React from "react";
import Card from "../card/Card";

interface PerfilCardI {
  className?: string;
}

export const PerfilCard = ({className}:PerfilCardI) => {
  return (
    <Card className={className}>
      <div className="flex flex-col items-center pb-10  divide-y divide-primary divide dark:divide-tertiary">
        <div className="pb-3 text-gray-500 dark:text-white">
          <ProfileCircle height={55} width={55} opacity={0.7} />
        </div>
        <div className="flex flex-col items-center py-3">
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
            Emmanuel Gutierrez
          </h5>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            Visual Designer
          </span>
        </div>
        <div className="flex flex-col items-center pt-3">
          <span className="text-md text-gray-900 dark:text-gray-400">
            Follows
          </span>
          <span className="text-md text-gray-500 dark:text-gray-400">3</span>
          <span className="text-md text-gray-900 dark:text-gray-400">
            Followed
          </span>
          <span className="text-md text-gray-500 dark:text-gray-400">4</span>
        </div>
      </div>
    </Card>
  );
};
