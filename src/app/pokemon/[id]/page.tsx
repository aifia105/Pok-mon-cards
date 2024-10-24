"use client";
import { HomeIcon } from "lucide-react";
import React from "react";
import NextLink from "next/link";

type Props = {
  params: {
    id: string;
  };
};

const Pokemon = ({ params }: Props) => {
  const { id } = params;
  console.log(id);

  return (
    <div className="xl:h-full pt-10 pb-12 xl:pb-20 xl:pt-13">
      <div className="container mx-auto">
        <NextLink href="/" passHref legacyBehavior>
          <div className="flex cursor-pointer gap-2 text-xl items-center font-medium text-amber-500">
            <HomeIcon />
            <div>Home</div>
          </div>
        </NextLink>
        <div className="grid grid-cols-2 gap-4 mt-5">
          <div className="bg-white">01</div>
          <div className="bg-white">02</div>
          <div className="col-span-1 bg-white">04</div>
          <div className="bg-white">05</div>
          <div className="col-span-2 bg-white">07</div>
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
