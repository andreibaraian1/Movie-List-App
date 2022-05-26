import React, { useCallback, useEffect, useState } from "react";
import { Category } from "../types/Category";
import {
  GridContainer,
  CategoryWrapper,
} from "../styles/Categories/Category.styled";
import useFetch from "../hooks/useFetch";
export const Categories = () => {
  const { fetch, data } = useFetch();
  const [categories, setCategories] = useState<Category[] | []>([]);
  const fetchCategories = useCallback(async () => {
    await fetch(`${process.env.REACT_APP_API}/api/vod/category`);
  }, [fetch]);
  useEffect(() => {
    if (data) setCategories(data.genres);
  }, [data]);
  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);
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
