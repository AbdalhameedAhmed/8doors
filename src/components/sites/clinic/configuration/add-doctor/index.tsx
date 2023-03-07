import React from "react";
export const AddDoctorForm = () => {
  return (
    <form>
      <input
        type="text"
        className=" mt-1 mb-4 px-3 py-2 border shadow-sm border-slate-300 placeholder-slate-400 bg-secondary focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
        placeholder="Name"
      />
      <input
        type="email"
        className=" mt-1 mb-4 px-3 py-2 border shadow-sm border-slate-300 placeholder-slate-400 bg-secondary focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
        placeholder="Email"
      />
      <input
        type="tel"
        className=" mt-1 mb-4 px-3 py-2 border shadow-sm border-slate-300 placeholder-slate-400 bg-secondary focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
        placeholder="Mobile"
      />
      <select className="min-h-40 overflow-auto mt-1 mb-4 px-3 py-2 border shadow-sm border-slate-300 placeholder-slate-400 bg-secondary focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1">
        <option value="" selected>
          Choose Your Speciality
        </option>
        <option value="xx">Allergist</option>
        <option value="xx">Dermatologist</option>
        <option value="xx">Infectious disease</option>
        <option value="xx">Ophthalmologists</option>
      </select>
    </form>
  );
};
