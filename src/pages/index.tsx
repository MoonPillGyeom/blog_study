import styles from "@/styles/Home.module.css";
import Image from "next/image";
import LOGO_IMG from "../constant/images";

export default function Home() {
  return (
    <>
      <div
        style={{
          position: "relative",
          width: "80px",
          height: "50px",
          backgroundColor: "white",
        }}
      >
        <Image fill src={LOGO_IMG} alt="로고" />
      </div>
      <div>운동일지 동아리 운동시설</div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      이미지1
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      이미지2
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      이미지3
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      푸터
    </>
  );
}
