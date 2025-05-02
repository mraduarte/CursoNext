"use client";

import React from "react";

export default function Width() {
  const [width, setWidth] = React.useState(0);
  const [ativo, setAtivo] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      setWidth(document.documentElement.clientWidth);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <h2 style={{ color: ativo ? "#680" : "#b00" }}>
        Largura da tela:{width}
      </h2>
      <button onClick={() => setAtivo((x) => !x)}>Ativar</button>
    </div>
  );
}
