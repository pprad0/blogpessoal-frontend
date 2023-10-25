import { useState } from "react";

function Contador() {

  const [valor, setValor] = useState(0)

  function addMaisUm() {
    setValor(valor + 1)
  }

  return (
    <>
      <button onClick={addMaisUm}> Adicionar +1</button>
      <h1>{valor}</h1>
    </>
  )
}

export default Contador