import Link from "next/link";

export default function Menu() {
  return (
    <ul className="menu">
      <li><Link href="/" prefetch={true}>Home</Link></li>
      <li><Link href="/sobre#empresa" scroll={false} prefetch={true}>Sobre</Link></li>
      <li><Link href="/contato" prefetch={true}>Contato</Link></li>
      <li><Link href="/imc" prefetch={true}>IMC</Link></li>
      <li><Link href="/produtos" prefetch={true}>Produtos</Link></li>
      <li><Link href="/cursos" prefetch={true}>Cursos</Link></li>
    </ul>
  );
}

//O link permite a navegação entre as páginas sem que as páginas sejam recarregadas (client side)
//O prefetch já carrega a pagina em segundo plano para que ela já esteja disponivel quando o usuário clicar no link. (default é true)
//href="/sobre#empresa" : A parte #empresa, faz que quando entre na página vá direto para o elemento que contém o id empresa. O scroll={false} desabilita o scroll automático.