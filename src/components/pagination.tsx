import { Pagination } from "@nextui-org/react";
import React from "react";

const PaginationComponent = () => {
  return (
    <div className="flex justify-center items-center mt-4">
      <Pagination total={10} initialPage={1} color="warning" />
    </div>
  );
};

export default PaginationComponent;
