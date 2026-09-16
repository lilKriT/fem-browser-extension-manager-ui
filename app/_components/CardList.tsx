import ExtensionCard from "./ExtensionCard";

type CardListProps = {
  extensions: Extension[];
};

const CardList = ({ extensions }: CardListProps) => {
  return (
    <div className="mt-4 grid grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-4">
      {extensions.map((extension, idx) => (
        <ExtensionCard extension={extension} key={idx} />
      ))}
    </div>
  );
};

export default CardList;
