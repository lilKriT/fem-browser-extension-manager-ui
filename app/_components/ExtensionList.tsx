"use client";

import CardList from "./CardList";
import FilterButtons from "./FilterButtons";

import extensions from "@/data/extensions";

const ExtensionList = () => {
  return (
    <div className="w-full mt-12">
      {/* Top Bar */}
      <div className="flex justify-between items-center">
        <h2 className="text-[clamp(1rem,4vw,2.2rem)]">Extensions List</h2>
        <FilterButtons />
      </div>

      <CardList extensions={extensions} />
    </div>
  );
};

export default ExtensionList;
