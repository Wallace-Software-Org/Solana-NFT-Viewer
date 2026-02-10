"use client";

import { ArtGrid } from "@/src/components/nft/ArtGrid";
import { useAssetsByOwnerInfiniteQuery } from "@/src/lib/query/useAssetsByOwnerQuery";
import { useResponsiveGridSize } from "@/src/hooks/useResponsiveGridSize";

type AssetsByOwnerProps = {
  ownerAddress: string;
};

export function AssetsByOwner({ ownerAddress }: AssetsByOwnerProps) {
  const { gridSize } = useResponsiveGridSize({ rows: 3 });
  // Use dynamic query limit based on grid size
  const query = useAssetsByOwnerInfiniteQuery(ownerAddress, gridSize);

  // Infinite query returns pages that need to be flattened
  const items = query.data?.pages.flatMap((p) => p.items) ?? [];
  const hasData = items.length > 0;

  // Used to fetch more data on scroll
  const loadMore = () => {
    if (query.hasNextPage && !query.isFetchingNextPage) {
      query.fetchNextPage();
    }
  };

  return (
    <ArtGrid
      items={items}
      isLoading={query.isLoading}
      isFetchingNextPage={query.isFetchingNextPage}
      hasNextPage={query.hasNextPage}
      isError={query.isError}
      error={query.error}
      hasData={hasData}
      gridSize={gridSize}
      onLoadMore={loadMore}
    />
  );
}
