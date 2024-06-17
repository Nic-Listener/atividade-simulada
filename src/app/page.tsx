import Footer from "./components/Footer";
import Header from "./components/Header";
import { Introducao } from "./components/Header";

export default function Home() {
    return (
    <>
      <Header />
      <main>
      <Footer />
        <Introducao />
        <MovieList />
      </main>
    </>
  );
}