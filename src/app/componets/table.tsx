"use client";
import Row from "./row";
import { useContext, useEffect, useState } from "react";
import { SearchContext } from "../context/search-context";

function Table() {
  const [tableData, setTableDate] = useState<string[][]>([]);
  const [page, setPage] = useState(1);
  const [constraint, setConstraint] = useState(4);
  const keywords = useContext(SearchContext);

  useEffect(() => {
    const getTableData = async () => {
      const data: string[][] = await (
        await fetch(`http://localhost:3000/api/question`)
      ).json();

      setTableDate(data.filter((row) => row[1].includes(keywords)));
    };

    getTableData();
  }, [keywords]);

  const viewData =
    tableData.length > 0
      ? tableData.slice(page * constraint - constraint, page * constraint)
      : [];

  const hasNext = !(Math.ceil(tableData.length / constraint) < page + 1);
  const hasPrev = !(page - 1 < 1);
  const handleNextClick = () => {
    if (hasNext) {
      setPage(page + 1);
    }
  };
  const handlePrevClick = () => {
    if (hasPrev) {
      setPage(page - 1);
    }
  };
  return (
    <div className="px-4 py-2 bg-white rounded-md  border-red-500 ">
      <Row
        rowNumber="#"
        question="Question"
        category="Catergory"
        status="Status"
        action="Action"
      />
      {/* table header */}
      {viewData.map((data, i) => (
        <Row
          key={i}
          rowNumber={data[0]}
          question={data[1]}
          category={data[2]}
          status={data[3]}
          action="..."
        />
      ))}
      <div className="border "></div>
      <div className="flex justify-end align-middle">
        <div className="flex align-middle">
          <h1 className="text-xs p-4">Rows per page:</h1>
          <select
            value={constraint}
            className="text-xs"
            onChange={(e) => {
              setConstraint(parseInt(e.target.value));
              setPage(1);
            }}
          >
            {[1, 2, 3, 4].map((row, i) => (
              <option key={i} value={row} className="text-xs">
                {row}
              </option>
            ))}
          </select>
          <h1 className="text-xs p-4">
            {page}-{Math.ceil(tableData.length / constraint)}
          </h1>
          <button
            className="p-2 text-xs"
            type="button"
            onClick={handlePrevClick}
          >
            Prev
          </button>
          <button
            className="p-2 text-xs"
            type="button"
            onClick={handleNextClick}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Table;
<div></div>;
