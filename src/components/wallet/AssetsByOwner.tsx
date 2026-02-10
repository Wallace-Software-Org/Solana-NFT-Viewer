"use client";

import { ArtGrid } from "@/src/components/nft/ArtGrid";
import { useAssetsByOwnerInfiniteQuery } from "@/src/lib/query/useAssetsByOwnerQuery";
import { useResponsiveGridSize } from "@/src/hooks/useResponsiveGridSize";

type AssetsByOwnerProps = {
  ownerAddress: string;
};

export function AssetsByOwner({ ownerAddress }: AssetsByOwnerProps) {
  // Ue dynamic query limit based on grid size
  const { gridSize } = useResponsiveGridSize({ rows: 3 });
  const limit = gridSize;

  const query = useAssetsByOwnerInfiniteQuery(ownerAddress, limit);

  // Infinite query returns pages that need to be flattened
  const items = query.data?.pages.flatMap((p) => p.items) ?? [];
  const hasData = items.length > 0;

  return (
    <ArtGrid
      items={items}
      isLoading={query.isLoading}
      isFetching={query.isFetching}
      isError={query.isError}
      error={query.error}
      hasData={hasData}
    />
  );
}
