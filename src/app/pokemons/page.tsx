import React from "react";

const Pokemon = () => {
  return (
    <div className="xl:h-full pt-10 pb-12 xl:pb-20 xl:pt-13">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 gap-4">
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
