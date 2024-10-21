import Head from "next/head";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import About from "../components/About";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Articles from "../components/Articles";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Edwin De Jong - DevOps Engineer</title>
        <meta
          name="description"
          content="Personal homepage of Edwin De Jong, DevOps Engineer"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <Navigation />
        <About />
        <Experience />
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
