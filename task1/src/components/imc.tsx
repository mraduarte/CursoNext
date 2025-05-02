"use client";
import React from "react";

export default function IMC() {
  const [imc, setImc] = React.useState('');
  const [altura, setAltura] = React.useState('');
  const [peso, setPeso] = React.useState('');

  const handleImc = () => {
    const metro = Number(altura) / 100;
    const imc = (Number(peso) / (metro * metro)).toFixed(2);
    setImc(imc);
    setAltura('');
    setPeso('');
  };
  return (
    <div>
      <label htmlFor="altura">Altura (cm)</label>
      <input
        type="text"
        value={altura}
        onChange={(e) => setAltura(e.target.value)}
        name="altura"
        id="altura"
      />

      <label htmlFor="peso">Peso (kg)</label>
      <input
        type="text"
        value={peso}
        onChange={(e) => setPeso(e.target.value)}
        name="peso"
        id="peso"
      />
      <button onClick={handleImc}>Calcular</button>

      <p>Seu IMC é: {imc}</p>
    </div>
  );
}
