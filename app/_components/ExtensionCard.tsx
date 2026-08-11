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
    <article>
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
