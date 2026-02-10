import { HomeClient } from "@/src/components/site/HomeClient";
import { Heading } from "@/src/components/site/Heading";

export default function Home() {
  return (
    <div className="flex items-center justify-center">
      <main className="flex w-full max-w-4xl xl:max-w-5xl py-16 md:py-32 px-8 md:px-16 flex flex-col md:items-center gap-12">
        <Heading
          header="Enter a wallet below"
          subheader="Paste a sol address below to view the stored art"
        />
        <HomeClient />
      </main>
    </div>
  );
}
