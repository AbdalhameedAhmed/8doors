import React from "react";
export const AddManagerForm = () => {
  return (
    <form>
      <input
        type="text"
        className=" mt-1 mb-4 px-3 py-2 border shadow-sm border-slate-300 bg-secondary placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
        placeholder="Name"
      />
      <input
        type="email"
        className=" mt-1 mb-4 px-3 py-2 border shadow-sm border-slate-300 bg-secondary placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
        placeholder="Email"
      />
      <input
        type="tel"
        className=" mt-1 mb-4 px-3 py-2 border shadow-sm border-slate-300 bg-secondary placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
        placeholder="Mobile"
      />
    </form>
  );
};
