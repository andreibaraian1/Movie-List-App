import axios from "axios";
import React, { useEffect, useState } from "react";
import { Category } from "../types/Category";
import {
  GridContainer,
  CategoryWrapper,
} from "../styles/Categories/Category.styled";
export const Categories = () => {
  const [categories, setCategories] = useState<Category[] | []>([]);
  useEffect(() => {
    const fetchCategories = async () => {
      const res = await axios.get(
        "https://video-proxy.3rdy.tv/api/vod/category"
      );
      if (!res.data.err) {
        setCategories(res.data.data.genres);
      }
    };
    fetchCategories();
  }, []);
  return (
    <GridContainer>
      {categories?.map((category) => (
        <CategoryWrapper key={category.id} to={`/movies/${category.id}`}>
          {category.name}
        </CategoryWrapper>
      ))}
    </GridContainer>
  );
};
