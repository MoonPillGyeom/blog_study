import Container from "@/src/component/container";
import NavBar from "@/src/component/nav/navBar";
import styles from "../../component/Projects/projects.module.scss";
import classNames from "classnames/bind";
import Title from "@/src/component/title";

const cx = classNames.bind(styles);

const Projects = () => {
  return (
    <>
      <NavBar />

      <header>
        <Title>PROJECTS</Title>
      </header>
      <main className={cx("main")}>
        <Container>
          <h2 className={cx("title")}>포트폴리오 웹사이트</h2>
          <p>1人 프로젝트</p>
          {/* 이미지엔 적절한 이미지 넣기 여기선 아마 홈페이지 화면 캡쳐해서 써도 될듯? */}
          <p className={cx("img")}>이미지</p>
          <p className={cx("description")}>
            포트폴리오 용도로 제작한 웹사이트 입니다.
            <br /> Next.js, CSS, HTML Semantic tags의 학습을 위해 CSS프레임워크
            등을 쓰지 않고 개발하였습니다.
          </p>
        </Container>
        <Container>
          <h2 className={cx("title")}>롤링 페이지</h2>
          <p>5人 프로젝트</p>
          <p>2022.12</p>
          <p className={cx("img")}>이미지</p>
          <p className={cx("description")}>
            저의 첫 팀 프로젝트 입니다.
            <br /> 누군가에게 하고 싶은 말 하지 못했던 말을 익명 혹은 실명으로
            글을 적을수 있는 웹사이트입니다. 처음 팀 프로젝트를 해봤다는거에도
            의미가 깊지만 이 프로젝트를 계기로 할 수 있다는 자신감을 준
            프로젝트입니다.
          </p>
          <p>
            styled-components를 처음으로 사용해보며 css파일을 전역적으로
            관리하지않고 css를 컴포넌트화 하여 편리함을 느꼈습니다. <br />
            className을 고민하지 않고 className이 태그가 된다는 점 또한 편리하게
            느껴졌습니다.
          </p>
        </Container>
      </main>
    </>
  );
};

export default Projects;
