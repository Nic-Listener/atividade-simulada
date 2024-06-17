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
        "Lara está prestes a começar uma nova fase de sua vida após a formatura. Em meio a duas viagens marcantes, ela vai reavaliar como poderão ficar suas relações familiares, a ligação com os amigos e o vínculo com seu namorado",
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos vitae qui eos itaque tenetur ducimus dolores dolorem sunt ipsa? Delectus, id illo similique temporibus quia praesentium. Quaerat, perferendis? Incidunt, necessitatibus!",
        ],
    },