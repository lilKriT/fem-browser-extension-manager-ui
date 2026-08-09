import ExtensionList from "./_components/ExtensionList";
import TopBar from "./_components/TopBar";

export default function Home() {
  return (
    <section
      className="min-h-dvh bg-linear-to-b from-background-from to-background-to bg-fixed flex items-start justify-center
    pt-12 pb-16 px-8"
    >
      <div className="w-full max-w-7xl flex flex-col justify-start items-center">
        <TopBar />

        <ExtensionList />
      </div>
    </section>
  );
}
