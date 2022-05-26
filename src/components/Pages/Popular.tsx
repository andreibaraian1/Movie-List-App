import { usePopular } from "../Provider/usePopular/PopularContext";
import { GridContainer } from "../styles/Categories/Category.styled";
import { AssetCard } from "../Card/AssetCard";
export const Popular = () => {
  const popularContext = usePopular();
  const { popular } = popularContext;

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
