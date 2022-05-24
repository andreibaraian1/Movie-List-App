import React, { useEffect, useState } from "react";
import { Categories } from "../Pages/Categories";
import { Home } from "../Pages/Home";
import { Popular } from "../Pages/Popular";

interface Props {
  path: string;
}
enum Routes {
  HOME = "Home",
  CATEGORIES = "Categories",
  POPULAR = "Popular",
}

export const RedirectRoute: React.FC<Props> = ({ path }) => {
  const [page, setPage] = useState<any>("");
  useEffect(() => {
    switch (path) {
      case Routes.HOME:
        setPage(<Home />);
        break;
      case Routes.CATEGORIES:
        setPage(<Categories />);
        break;
      case Routes.POPULAR:
        setPage(<Popular />);
        break;
      default: 
        setPage(<Home />);
    }
  }, [path]);

  return page;
};
