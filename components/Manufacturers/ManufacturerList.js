import React, { useState } from "react";
import { ManufacturerItem } from "./component/ManufacturerItem";
import { Sidebar } from "./sidebar/Sidebar";
import { styled } from "styled-components/dist/styled-components.cjs";

const Manufacturers = styled.div`
  display: flex;
  flex-direction: column;
`;
const MainWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const ManufacturerListWithSidebar = ({ manufacturers }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, manufacturers.length);

  const visibleManufacturers = manufacturers.slice(startIndex, endIndex);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= Math.ceil(manufacturers.length / itemsPerPage)) {
      setCurrentPage(newPage);
    }
  };
  return (
    <MainWrapper>
      <div className="container" style={{ display: "flex", paddingTop: "50px" }}>
        <Sidebar />
        <Manufacturers>
          {visibleManufacturers.map((item) => (
            <ManufacturerItem
              location={item.location}
              description={item.description}
              name={item.name}
              photos={item.photos}
              website={item.website}
              key={item.id}
              id={item.id}
            />
          ))}
        </Manufacturers>
      </div>

      <div className="pagination-area text-center">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          className={`prev page-numbers ${currentPage === 1 ? "disabled" : ""}`}
        >
          <i className="bx bx-chevrons-left" />
        </button>
        <span className="page-numbers">{currentPage}</span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          className={`next page-numbers ${
            endIndex >= manufacturers.length ? "disabled" : ""
          }`}
        >
          <i className="bx bx-chevrons-right" />
        </button>
      </div>
    </MainWrapper>
  );
};
