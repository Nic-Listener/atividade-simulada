import Footer from "./components/Footer";
import Header from "./components/Header";
"use client";

import Header, {Menu} from "./components/Header";
import { Introducao } from "./components/Header";
import MovieList from "./components/movieList";

export default function Home() {
  return (
    <>
      <Header />
      <Menu estaAberto= {true}/>
      <main>
        <Introducao />
        <MovieList />
      </main>
    </>
  );
}