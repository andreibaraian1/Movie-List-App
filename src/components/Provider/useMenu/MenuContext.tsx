import { createContext, useContext, useEffect, useState } from "react";
import { Menu } from "../../types/Menu";
import axios from "axios";

type TMenu = {
  err: boolean;
  data: Menu[];
};
const defaultMenu = {
  menu: [],
  fetchListener: false,
  setFetchListener: () => {},
  menuLoading: true,
};
const useMenuService = () => {
  const [menu, setMenu] = useState<Menu[] | []>([]);
  const [fetchListener, setFetchListener] = useState(false);
  const [menuLoading, setMenuLoading] = useState(true);

  useEffect(() => {
    const fetchMenu = async () => {
      const res = await axios.get<TMenu>(
        "https://video-proxy.3rdy.tv/api/static/menu"
      );

      if (res.data.err) {
        setFetchListener((prev) => !prev);
      } else {
        setMenu(res.data.data);
        setMenuLoading(false);
      }
    };
    fetchMenu();
  }, [fetchListener]);

  return {
    menu,
    menuLoading,
  };
};

export const MenuContext =
  createContext<ReturnType<typeof useMenuService>>(defaultMenu);

export const MenuProvider = ({ children }: { children: JSX.Element }) => {
  const menuData = useMenuService();

  return (
    <MenuContext.Provider value={menuData}>{children}</MenuContext.Provider>
  );
};

export const useMenu = () => useContext(MenuContext);
