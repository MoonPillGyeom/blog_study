import HomeMain from "../component/HomeMain/Main";
import NavBar from "../component/nav/navBar";

export default function Home() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <HomeMain />
      </main>
    </>
  );
}
