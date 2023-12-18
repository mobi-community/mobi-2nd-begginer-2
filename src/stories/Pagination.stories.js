import { Pagination } from "./Pagination";
import "./pagination.css";
import { useState } from "react";

export default {
  component: Pagination,
};

export const Paginate_Buttons = () => {
  const [currentPage, setCurrentPage] = useState(1);
  console.log("currentPage >>", currentPage);

  let totalButtons = new Array(10).fill(null);
  totalButtons = totalButtons.map((_, index) => index + 1);

  // onClick function
  const onGoStartPage = () => {
    setCurrentPage(1);
  };
  const onGoPrevPage = () => {
    if (currentPage !== 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };
  const onGoNextPage = () => {
    if (currentPage !== 10) {
      setCurrentPage((prev) => prev + 1);
    }
  };
  const onGoLastPage = () => {
    setCurrentPage(10);
  };
  const onSetPageNumber = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <button
        className={"button"}
        onClick={onGoStartPage}
        disabled={currentPage === 1}
      >
        &lt;&lt;
      </button>
      <button
        className={"button"}
        onClick={onGoPrevPage}
        disabled={currentPage === 1}
      >
        &lt;
      </button>
      {totalButtons.map((pageNumber) => (
        <button
          className={[
            "button",
            pageNumber === Number(currentPage) ? "active" : "",
          ].join(" ")}
          onClick={() => onSetPageNumber(pageNumber)}
        >
          {pageNumber}
        </button>
      ))}
      <button
        className={"button"}
        onClick={onGoNextPage}
        disabled={currentPage === 10}
      >
        &gt;
      </button>
      <button
        className={"button"}
        onClick={onGoLastPage}
        disabled={currentPage === 10}
      >
        &gt;&gt;
      </button>
    </>
  );
};
