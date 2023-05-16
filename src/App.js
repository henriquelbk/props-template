import Garagem from "./Componentes/Garagem";
import "./styles.css";

export default function App() {
  const nome = 'henrique'
  const sobrenome = 'louback'

  const apresentaGaragem = (nome) => {
    alert('Boas vindas à garagem de ' + nome)
  }

  const dadosCarro1 = {
    nome: 'gol',
    ano: 2006,
    cor: 'prata',
    flex: false
  }

  const dadosCarro2 = {
    nome: 'honda',
    ano: 2007,
    cor: 'preto',
    flex: true
  }

  const dadosCarro3 = {
    nome: 'fiat',
    ano: 2009,
    cor: 'branco',
    flex: false
  }

  const dadosCarro4 = {
    nome: 'palio',
    ano: 2011,
    cor: 'vermelho',
    flex: true
  }

  return (
    <div>
      <Garagem nome ={nome} sobrenome ={sobrenome} apresentaGaragem={apresentaGaragem} dadosCarro1={dadosCarro1} dadosCarro2={dadosCarro2} dadosCarro3={dadosCarro3} dadosCarro4={dadosCarro4}/>
    </div>
  );
}
