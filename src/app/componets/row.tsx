import clsx from "clsx";

function Row({
  rowNumber,
  question,
  category,
  status,
  action,
}: {
  rowNumber: string;
  question: string;
  category: string;
  status: string;
  action: string;
}) {
  return (
    <div className="items-center grid grid-cols-1_2_1_1_1 w-full justify-between p-2 py-4 border-b">
      <h1>{rowNumber}</h1>

      <h1>{question}</h1>
      {/* <div className="flex justify-start w-1/4">
      </div> */}
      <h1>{category}</h1>
      {/* <div className="flex justify-start w-1/8">
      </div> */}
      <button
        className={clsx(
          status.toLowerCase() == "published" && "bg-green-600",
          status.toLowerCase() == "draft" && "bg-slate-300",
          status.toLowerCase() != "status" && "rounded-md text-center p-2",
          "w-24 block "
        )}
      >
        {status}
      </button>
      <h1 className="justify-center text-center">{action}</h1>
    </div>
  );
}

export default Row;
