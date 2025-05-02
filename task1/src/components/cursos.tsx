"use client";
import { useRouter } from "next/navigation";

type Curso = {
  id: number;
  slug: string;
  nome: string;
  descricao: string;
  total_aulas: number;
  total_horas: number;
};

export default function Cursos({ cursos }: { cursos: Curso[] }) {
  const router = useRouter();

  const handleClick = (slug: string) => {
    router.push(`/cursos/${slug}`);
  };

  return (
    <ul>
      {cursos.map((curso) => (
        <li
          style={{ cursor: "pointer" }}
          key={curso.id}
          onClick={() => handleClick(curso.slug)}
        >
          {curso.nome}
        </li>
      ))}
    </ul>
  );
}

