import styles from "./navBar.module.scss";
import Link from "next/link";
import { DARK_MODE, LIGHT_MODE, Navlinks } from "./contens";
import { KeyboardEventHandler, useState } from "react";
import Image from "next/image";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const NavBar = () => {
  const [modal, setModal] = useState(false);
  // const [mode, SetMode] = useState("light");
  const [mode, SetMode] = useState(false);
  //불린값으로 하기.
  const handleClick = () => {
    setModal(!modal);
  };

  const handleKeyDown: KeyboardEventHandler = (e) => {
    if (e.key === "Escape") {
      setModal(false);
    }
  };

  const handleModeClick = () => {
    SetMode(!mode);
  };

  // console.log(mode);
  return (
    <nav className={cx("navBar")}>
      <div className={cx("container")}>
        <p className={cx("myName")}>pill gyeom</p>
        <div className={cx("flex")}>
          <button className={styles.modeImg}>
            {mode ? (
              <Image
                fill
                src={DARK_MODE}
                alt="모드설정"
                onClick={handleModeClick}
              />
            ) : (
              <Image
                fill
                src={LIGHT_MODE}
                alt="모드설정"
                onClick={handleModeClick}
              />
            )}
          </button>
          <div className={cx("position")}>
            <button
              className={cx("menu")}
              onClick={handleClick}
              onKeyDown={handleKeyDown}
            >
              MENU
            </button>
            {modal && (
              <nav className={cx("menuModal")}>
                {Navlinks.map((nav) => (
                  <Link href={nav.link} key={nav.title}>
                    <span className={cx("navItem")}>{nav.title}</span>
                  </Link>
                ))}
              </nav>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
