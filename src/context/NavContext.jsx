import { useEffect } from "react";
import { createContext, useState } from "react";
import { useLocation } from "react-router-dom";

const NavbarContext = createContext();
const NavbarColorContext = createContext();

const NavContext = ({ children }) => {
  const [navOpen, setNavOpen] = useState(false);
  const [navColor, setNavColor] = useState("white");

  const locate = useLocation().pathname;

  useEffect(() => {
    if (locate == "/projets" || locate == "/agence") {
      setNavColor("black");
    } else {
      setNavColor("white");
    }
  }, [locate]);

  return (
    <div>
      <NavbarContext.Provider value={[navOpen, setNavOpen]}>
        <NavbarColorContext.Provider value={[navColor, setNavColor]}>
          {children}
        </NavbarColorContext.Provider>
      </NavbarContext.Provider>
    </div>
  );
};

export { NavContext, NavbarContext, NavbarColorContext };
