import Image from "next/image";
import DarkModeToggle from "./DarkModeToggle";

const TopBar = () => {
  return (
    <div className="w-full flex justify-between items-center bg-card-bg p-4 rounded-3xl shadow-[0px_5px_5px_0px] shadow-black/10">
      {/* Left */}
      <div>
        <Image src={"/logo.svg"} alt="Company Logo" height={41} width={179} />
      </div>
      {/* Right */}
      <DarkModeToggle />
    </div>
  );
};

export default TopBar;
