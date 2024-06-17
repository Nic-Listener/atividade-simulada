import interestelar from "../../public/interestellar.png";
import { StaticImageData } from "next/image";

type Filmes = {
    titulo: string;
    imagemFilme: StaticImageData;
    descricao: Array<string>;
  };
  
  export const filmes: Filmes[] = 
    {
        titulo: "Interestelar",
        imagemFilme: interestelar,
        descricao: [
            "Interestelar é um filme de ficção científica dirigido por Christopher Nolan e lançado em 2014. O filme se passa em um futuro distópico onde a Terra está sofrendo com a escassez de recursos e a humanidade está à beira da extinção. A história segue um grupo de astronautas liderado por Cooper, interpretado por Matthew McConaughey, que embarcam em uma missão espacial para encontrar um novo lar para a humanidade em outro sistema solar, já que a Terra se tornou inabitável.",
            "A sinopse do filme gira em torno das complexidades da teoria da relatividade, viagens no tempo e buracos de minhoca, enquanto os personagens enfrentam desafios inimagináveis durante a jornada interestelar. O filme combina elementos de drama, aventura e ficção científica para explorar temas como amor, sacrifício, exploração espacial e a sobrevivência da humanidade.",
            "Interestelar é conhecido por sua abordagem científica e visual impressionante, com efeitos especiais premiados. O elenco também inclui Anne Hathaway, Jessica Chastain, Michael Caine e outros. É um filme que desafia a mente e emociona o coração, sendo uma das obras mais aclamadas de Christopher Nolan.",
    },