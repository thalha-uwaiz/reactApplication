"use client";
import { Dialog } from "@headlessui/react";
import { ChangeEvent, FormEvent, useState } from "react";

function AddQuestionDialog({
  isAddDialogOpen,
  handleDialog,
}: {
  isAddDialogOpen: boolean;
  handleDialog: (state: boolean) => void;
}) {
  const [formData, setFormData] = useState({
    id: "",
    question: "",
    category: "",
    status: "Draft",
  });

  const handleFormDataChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <Dialog
      open={isAddDialogOpen}
      as={"div"}
      className="absolute top-1/2 bg-white border-2 border-black text-blac py-4  px-8 rounded-xl -translate-x-1/2 -translate-y-1/2 left-1/2 "
      onClose={() => handleDialog(false)}
    >
      <Dialog.Panel>
        <Dialog.Title className={"text-xl font-semibold"}>
          Add Question
        </Dialog.Title>
        <Dialog.Description>
          Enter data to create a new question.
        </Dialog.Description>

        <form
          className="mt-4"
          id="add-question-form"
          onSubmit={handleAddSubmit}
        >
          <div>
            <label htmlFor="id" className="block font-semibold">
              ID
            </label>
            <input
              id="id"
              name="id"
              type="text"
              required
              className="border border-black px-2 invalid:outline-red-500  py-1 rounded-md mt-2 invalid:outline-red-500"
              value={formData.id}
              onChange={handleFormDataChange}
            />
          </div>
          <div>
            <label htmlFor="question" className="block font-semibold">
              Question
            </label>
            <input
              id="question"
              name="question"
              type="text"
              required
              className="border border-black px-2  py-1 rounded-md mt-2 invalid:outline-red-500"
              value={formData.question}
              onChange={handleFormDataChange}
            />
          </div>
          <div>
            <label htmlFor="category" className="block font-semibold">
              Category
            </label>
            <input
              id="category"
              name="category"
              type="text"
              required
              className="border border-black px-2  py-1 rounded-md mt-2 invalid:outline-red-500"
              value={formData.category}
              onChange={handleFormDataChange}
            />
          </div>
          <div>
            <label htmlFor="status-select" className="block font-semibold">
              Category
            </label>
            <select
              id="status-select"
              name="status-select"
              required
              className="border border-black px-2  py-1 rounded-md mt-2 invalid:outline-red-500"
              value={formData.status}
              onChange={handleFormDataChange}
            >
              <option
                className="border border-black block px-2  py-1"
                value="Published"
              >
                Published
              </option>
              <option
                className="border border-black block px-2  py-1"
                value="Draft"
              >
                Draft
              </option>
            </select>
          </div>
        </form>

        <div className="flex mt-4 items-center gap-x-4">
          <button
            type="submit"
            form="add-question-form"
            className="block px-2 py-1 rounded-md border border-black"
          >
            Add
          </button>
          <button
            className="block px-2 py-1 rounded-md border border-black"
            onClick={() => handleDialog(false)}
          >
            Cancel
          </button>
        </div>
      </Dialog.Panel>
    </Dialog>
  );
}

export default AddQuestionDialog;
