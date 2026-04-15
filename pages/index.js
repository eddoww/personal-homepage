import Head from "next/head";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import About from "../components/About";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Articles from "../components/Articles";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Edwin De Jong - Lead DevOps Engineer &amp; Game Developer</title>
        <meta
          name="description"
          content="Edwin De Jong — Lead DevOps Engineer at Kongsberg Discovery, game developer behind Ugaris MMORPG, and homelab architect. Building, breaking, and fixing systems for over a decade."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <Navigation />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Articles />
      </main>

      <footer>
        <p>
          &copy; {new Date().getFullYear()} Edwin De Jong. All rights reserved.
        </p>
      </footer>
    </div>
  );
}