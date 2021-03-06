import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Asset as AssetType } from "../types/Assets";
import {
  AssetWrapper,
  Title,
  ContentWrapper,
} from "../styles/Asset/Asset.styled";
import { AssetCard } from "../Card/AssetCard";
import { Button } from "../styles/Button.styled";
import { getTrailerKey } from "../utils/GetTrailerKey";
import { VideoModal } from "./VideoModal";
import useFetch from "../hooks/useFetch";

export const Asset: React.FC = () => {
  const { id } = useParams();
  const [asset, setAsset] = useState<AssetType | undefined>();
  const [modalVisible, setModalVisible] = useState(false);
  const [key, setKey] = useState("");
  const { fetch, data } = useFetch();
  useEffect(() => {
    if (!data) return;
    setAsset(data);
  }, [data]);
  useEffect(() => {
    const fetchAssetDetails = async () => {
      await fetch(`${process.env.REACT_APP_API}/api/vod/asset/${id}`);
    };
    fetchAssetDetails();
  }, [id]);
  useEffect(() => {
    if (modalVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [modalVisible]);
  const handleTrailerButton = async () => {
    if (!asset) return;
    const res = await axios.get(
      `${process.env.REACT_APP_API}/api/vod/asset/${asset.id}/videos`
    );
    const key = getTrailerKey(res.data.data.results);
    if (key) {
      setKey(key);
      setModalVisible(true);
    }
  };

  return (
    <>
      {key && modalVisible && (
        <VideoModal
          link={key}
          visible={modalVisible}
          setVisible={setModalVisible}
        />
      )}
      {asset && (
        <AssetWrapper
          img={`https://image.tmdb.org/t/p/original/${asset.backdrop_path}`}
        >
          <ContentWrapper>
            <AssetCard asset={asset} />
            <Button onClick={handleTrailerButton}>Watch Trailer</Button>
            <Title>{asset.title}</Title>
          </ContentWrapper>
        </AssetWrapper>
      )}
    </>
  );
};
