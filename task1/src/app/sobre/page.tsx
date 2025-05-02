import ClientFetch from "@/components/client-fetch";
// import Width from "@/components/width";
import { Metadata } from "next";

//Define o título da página e descrição
export const metadata: Metadata = {
  title: "Sobre",
  description: "Essa é a página sobre",
};

export default function SobrePage() {
  return (
    <main>
      <h1>Sobre</h1>
      {/* <h2 id="empresa" style={{ margin: '1600px 0' }}>
        A empresa
      </h2> */}
      {/* <Width /> */}
        <ClientFetch/>
    </main>
  );
}
