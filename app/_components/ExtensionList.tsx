"use client";

import CardList from "./CardList";
import FilterButtons from "./FilterButtons";

import extensions from "@/data/extensions";

const ExtensionList = () => {
  return (
    <div className="w-full">
      {/* Top Bar */}
      <div className="flex justify-between items-center">
        <h2>Extensions List</h2>
        <FilterButtons />
      </div>

      <CardList extensions={extensions} />
    </div>
  );
};

export default ExtensionList;
