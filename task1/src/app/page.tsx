// import Acesso from "@/components/acesso";
import ServerFetch from "@/components/server-fetch";

export default function HomePage() {
  return (
    <main>
      <h1>Home</h1>
      {/* <Acesso /> */}
      <ServerFetch/>
    </main>
  );
}

//Possuem acesso a API do servidor (Node) como o fs, path, e outras implementadas pelo Next.js como o fetch e cookies. Renderizam no servidor.