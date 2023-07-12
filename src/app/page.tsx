"use client";
import { ChangeEvent, FormEvent, useState } from "react";
import Table from "./componets/table";
import { SearchContext } from "./context/search-context";
import AddQuestionDialog from "./componets/add-question-dialog";

export default function Home() {
  const [keywords, setKeywords] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearchQuery(keywords);
  };

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setKeywords(e.target.value);
  };

  const handleDialog = (state: boolean) => {
    setIsAddDialogOpen(state);
  };

  return (
    <SearchContext.Provider value={searchQuery}>
      <div className="min-h-screen border  border-black px-[10%] flex flex-col items-center justify-center bg-violet-100">
        <nav className="w-full flex flex-row justify-between align-middle p-2">
          <h1 className="align-middle font-medium">FAQ Manager - iLabs</h1>
          <button
            className="border p-1 rounded-md  bg-violet-300 shadow-gray-400 shadow-sm"
            onClick={() => setIsAddDialogOpen(true)}
          >
            + Add Question
          </button>
        </nav>
        <div className="flex flex-col w-full gap-4 border ">
          <div className="border bg-white rounded-md  ">
            <form className="flex p-2 gap-2" onSubmit={handleFormSubmit}>
              <input
                className="w-5/6 p-2  border rounded-md  bg-violet-100"
                type="text"
                value={keywords}
                onChange={handleSearchChange}
                placeholder="Search"
              />
              <button className="w-1/6 border rounded-md bg-violet-500">
                Search
              </button>
            </form>
          </div>
          <Table />
          <div></div>
        </div>
      </div>
      <AddQuestionDialog
        handleDialog={handleDialog}
        isAddDialogOpen={isAddDialogOpen}
      />
    </SearchContext.Provider>
  );
}
