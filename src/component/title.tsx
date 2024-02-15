import { ReactNode } from "react";
import styles from "./title.module.scss";
import classNames from "classnames/bind";

interface TitleProps {
  children: ReactNode;
}

const cx = classNames.bind(styles);

const Title = ({ children }: TitleProps) => {
  return <h1 className={cx("title")}>{children}</h1>;
};

export default Title;
