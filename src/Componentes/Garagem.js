import Carro from "./Carro";

function Garagem(props) {
  return (
    <div>
      <h1>Garagem da {props.nome +  props.sobrenome}</h1>
      <Carro dadosCarro1={dadosCarro1}/>
      <Carro dadosCarro2={dadosCarro2}/>
      <Carro dadosCarro3={dadosCarro3}/>
      <Carro dadosCarro4={dadosCarro4}/>
      <button onClick={() => props.apresentaGaragem(props.nome)}>Botao</button>
    </div>
  );
}

export default Garagem;
