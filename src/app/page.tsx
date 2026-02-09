import { HomeClient } from "@/src/components/site/HomeClient";
// import { heliusRequest } from "@/src/lib/api/helius.server";
// import { HeliusAsset } from "@/src/types/api/assets";
import { Heading } from "@/src/components/site/Heading";

const DEFAULT_OWNER_ADDRESS = "ExtjYxhKfPyUh8QyPseKgdSKoRLVikqLyTobke78UXav";
//if6RZbX2pJEsxaBDH1aFWvAaWUb3dLcouZ2onNXkj1F
//61ngvyn6YACpbMhtnEYrV6fgMFkBVTX21CdPQJ2X45Lp
//APKq87wYJxDEJPmWujDGPF779QwV9N8wkvJxAc9QiT9K

export default async function Home() {
  // const initialAssets = await heliusRequest<HeliusAsset[]>("getAssetsByOwner", {
  //   ownerAddress: DEFAULT_OWNER_ADDRESS,
  //   page: 1,
  //   limit: 100,
  // });

  return (
    <div className="flex items-center justify-center">
      <main className="flex w-full max-w-4xl xl:max-w-5xl py-16 md:py-32 px-8 md:px-16 flex flex-col md:items-center gap-12">
        <Heading
          header="Enter a wallet below"
          subheader="Paste a sol address below to view the stored art"
        />
        <HomeClient defaultAddress={DEFAULT_OWNER_ADDRESS} initialAssets={[]} />
      </main>
    </div>
  );
}
