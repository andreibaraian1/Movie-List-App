import { Asset } from "../types/Assets";
import { CardWrapper } from "../styles/Card.styled";
import { useNavigate } from "react-router-dom";

interface Props {
  asset: Asset;
}
export const AssetCard: React.FC<Props> = ({ asset }) => {
  const navigate = useNavigate();
  return (
    <>
      <CardWrapper onClick={() => navigate(`/asset/${asset.id}`)}>
        <img  
          src={`https://image.tmdb.org/t/p/w185/${asset.poster_path}`}
          alt={asset.title}
        />
      </CardWrapper>
    </>
  );
};
