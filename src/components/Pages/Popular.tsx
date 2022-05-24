import { useEffect } from "react";
import { usePopular } from "../Provider/usePopular/PopularContext";
import { GridContainer } from "../styles/Categories/Category.styled";
import { AssetCard } from "../Card/AssetCard";
export const Popular = () => {
  const popularContext = usePopular();
  const { popular, fetchPopular } = popularContext;
  useEffect(() => {
    const fetchAssets = async () => {
      await fetchPopular();
    };
    fetchAssets();
  }, [fetchPopular]);

  return (
    <>
      <GridContainer>
        {popular?.map((asset) => (
          <AssetCard key={asset.id} asset={asset} />
        ))}
      </GridContainer>
    </>
  );
};
