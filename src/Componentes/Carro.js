function Carro(props) {

  const verificaFlex = () => {
    if (props.dadosCarro1.flex) {
    return 'Sim'
  } else {
    return 'Não'
  }
  }

  return (
    <div>
      <h2>{props.dadosCarro1.nome}</h2>
      <ul>
        <li>Cor: {props.dadosCarro1.cor}</li>
        <li>Ano: {props.dadosCarro1.ano}</li>
        <li>Flex: {verificaFlex()}</li>
      </ul>
    </div>
  );
}

export default Carro;
