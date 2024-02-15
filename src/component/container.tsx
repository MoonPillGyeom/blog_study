import { ReactNode } from "react";
import styles from "./container.module.scss";
import classNames from "classnames/bind";

interface ContainerProps {
  children: ReactNode;
}

const cx = classNames.bind(styles);

const Container = ({ children }: ContainerProps) => {
  return <article className={cx("container")}>{children}</article>;
};

export default Container;
