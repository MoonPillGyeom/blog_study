import styles from "./navBar.module.scss";
import Link from "next/link";
import { DARK_MODE, LIGHT_MODE, Navlinks } from "./contens";
import { KeyboardEventHandler, useState } from "react";
import Image from "next/image";

const NavBar = () => {
  const [modal, setModal] = useState(false);
  const [mode, SetMode] = useState("light");
  const handleClick = () => {
    setModal(!modal);
  };

  const handleKeyDown: KeyboardEventHandler = (e) => {
    if (e.key === "Escape") {
      setModal(false);
    }
  };

  const handleModeClick = () => {
    // if (mode === "light") {
    //   return SetMode("dark");
    // }
    // if (mode === "dark") {
    //   return SetMode("light");
    // }
    SetMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };
  console.log(mode);
  return (
    <div className={styles.container}>
      <p className={styles.myName}>pill gyeom</p>
      <div className={styles.flex}>
        <button className={styles.modeImg}>
          {mode === "light" ? (
            <Image
              fill
              src={LIGHT_MODE}
              alt="모드설정"
              onClick={handleModeClick}
            />
          ) : (
            <Image fill src={DARK_MODE} alt="모드설정" />
          )}
        </button>
        <div className={styles.position}>
          <button
            className={styles.menu}
            onClick={handleClick}
            onKeyDown={handleKeyDown}
          >
            MENU
          </button>
          {modal && (
            <nav className={styles.menuModal}>
              {Navlinks.map((nav) => (
                <Link href={nav.link} key={nav.title}>
                  <span className={styles.navItem}>{nav.title}</span>
                </Link>
              ))}
            </nav>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
