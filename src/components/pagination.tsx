import { Pagination } from "@nextui-org/react";
import React from "react";

type PaginationComponentProps = {
  currentPage: number;
  onPageChange: (page: number) => void;
  total: number;
};

const PaginationComponent: React.FC<PaginationComponentProps> = ({
  currentPage,
  onPageChange,
  total,
}: PaginationComponentProps) => {
  return (
    <div className="flex justify-center items-center mt-4">
      <Pagination
        total={total}
        page={currentPage}
        onChange={onPageChange}
        color="warning"
      />
    </div>
  );
};

export default PaginationComponent;
