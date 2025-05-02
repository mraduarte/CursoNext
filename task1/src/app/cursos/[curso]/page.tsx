import { getCurso } from "@/app/api/cursos";
import Link from "next/link";

export default async function CursoPage({
  params,
}: {
  params: { curso: string };
}) {
  const data = await getCurso(params.curso);

  return (
    <div>
      <h1>{data.nome}</h1>
      <p>{data.descricao}</p>
      <p>Total aulas: {data.total_aulas}</p>
      <p>Total horas: {data.total_horas}</p>
      <p>Aulas:</p>
      <ul>
        {data.aulas.map((aula) => (
          <li key={aula.id}>
            <Link href={`/cursos/${data.slug}/${aula.slug}`}>{aula.nome}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
