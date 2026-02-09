"use client";

import { useAssetsByOwnerQuery } from "@/src/lib/query/useAssetsByOwnerQuery";
import { DEFAULT_PAGE_SIZE } from "@/src/lib/api/constants";
import { ArtGrid } from "@/src/components/nft/ArtGrid";
import { HeliusAsset } from "@/src/types/api/assets";

type AssetsByOwnerProps = {
  ownerAddress: string;
  initialAssets: HeliusAsset[];
};

export function AssetsByOwner({
  ownerAddress,
  initialAssets,
}: AssetsByOwnerProps) {
  const page = 1;
  const limit = DEFAULT_PAGE_SIZE;

  const query = useAssetsByOwnerQuery(ownerAddress, page, limit);

  // If we have initial data and query hasn't loaded yet, use initial data
  const displayItems = query.data?.items ?? initialAssets ?? [];

  return (
    <ArtGrid
      items={displayItems}
      isLoading={query.isLoading}
      isFetching={query.isFetching}
      isError={query.isError}
      error={query.error}
      hasData={Boolean(query.data)}
    />
  );
}
