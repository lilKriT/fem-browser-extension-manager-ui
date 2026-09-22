"use client";

const buttonStyle = `bg-filter-button-bg border border-filter-button-border 
  px-4 py-1 
  text-xl font-500
  rounded-full cursor-pointer
  shadow-[5px_0px_25px_1px] shadow-black/10`;

const FilterButtons = () => {
  return (
    <div className="flex gap-4">
      <button className={buttonStyle}>All</button>
      <button className={buttonStyle}>Active</button>
      <button className={buttonStyle}>Inactive</button>
    </div>
  );
};

export default FilterButtons;
