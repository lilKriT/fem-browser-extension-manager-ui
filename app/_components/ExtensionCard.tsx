"use client";

import Image from "next/image";
import { useState } from "react";

type ExtensionCardProps = Extension;

const ExtensionCard = ({ extension }: { extension: ExtensionCardProps }) => {
  const { logoURL, name, description, isActive } = extension;

  const [extensionActive, setExtensionActive] = useState(isActive);

  const handleDelete = () => {
    console.log("Deleting " + name);
  };

  const handleChange = () => {
    setExtensionActive(!extensionActive);
    console.log("Chamging");
  };

  return (
    <article className="bg-card-bg rounded-xl border border-border/30 p-4 shadow-[0px_0px_15px_0px] shadow-black/10">
      <Image src={logoURL} alt={`${name}'s Logo`} width={60} height={60} />
      <h3>{name}</h3>
      <p>{description}</p>

      {/* Bottom Row */}
      <div>
        <button onClick={handleDelete}>Remove</button>
        <input
          autoComplete="off"
          type="checkbox"
          checked={extensionActive}
          onChange={handleChange}
        />
      </div>
    </article>
  );
};

export default ExtensionCard;
