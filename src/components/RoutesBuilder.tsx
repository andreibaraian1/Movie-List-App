import React from "react";
import { Routes, Route } from "react-router-dom";
import { Asset } from "./Pages/Asset";
import { MoviesByCategory } from "./Pages/MoviesByCategory";
import { useMenu } from "./Provider/useMenu/MenuContext";
import { Menu } from "./types/Menu";
import { RedirectRoute } from "./utils/RedirectRoute";
import { NotFound } from "./Pages/NotFound";
import { Loading } from "./Pages/Loading";
type Props = {
  children?: JSX.Element;
};

const RoutesBuilder: React.FC<Props> = () => {
  const menuContext = useMenu();
  const { menu, menuLoading } = menuContext;

  return (
    <Routes>
      {!menuLoading && menu?.map((element: Menu) => (
        <Route
          key={element.id}
          path={element.route}
          element={<RedirectRoute path={element.label} />}
        />
      ))}
      <Route path="movies/:category_id" element={<MoviesByCategory />} />
      <Route path="asset/:id" element={<Asset />} />
      {/* <Route path="/loading" element={<Loading />} /> */}
      {menuLoading ? (
        <Route path="*" element={<Loading />} />
      ) : (
        <Route path="*" element={<NotFound />} />
      )}
    </Routes>
  );
};
export default RoutesBuilder;
