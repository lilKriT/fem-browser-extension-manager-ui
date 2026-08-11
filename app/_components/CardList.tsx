import ExtensionCard from "./ExtensionCard";

type CardListProps = {
  extensions: Extension[];
};

const CardList = ({ extensions }: CardListProps) => {
  return (
    <div>
      {extensions.map((extension, idx) => (
        <ExtensionCard extension={extension} key={idx} />
      ))}
    </div>
  );
};

export default CardList;
