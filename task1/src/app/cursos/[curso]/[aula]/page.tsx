import { getAula } from "@/app/api/cursos";

export default async function AulasPage({
  params,
}: {
  params: {
    curso: string;
    aula: string;
  };
}) {
  const aula = await getAula(params.curso, params.aula);

  return (
    <div>
      <h1>{aula.nome}</h1>
      <p>{aula.descricao}</p>
      <p>Duração: {aula.tempo} horas</p>
    </div>
  );
}
