import "./App.css";
import Header from "./componentes/Header/Header";
import Conteudo from "./componentes/Conteudo/Conteudo";
import Projetos from "./componentes/Projetos/Projetos";
import { useState } from "react";

import facebookImg from './assets/facebook.png';
import teslaImg from './assets/tesla.png';
import viteImg from './assets/vite.png';

function App() {
	const [projetos, setProjetos] = useState([
		{linkDoGithub: 'https://github.com', caminhoDaImagem: facebookImg},
		{linkDoGithub: 'https://github.com', caminhoDaImagem: teslaImg},
		{linkDoGithub: 'https://github.com', caminhoDaImagem: viteImg},
	])
  return (
    <div className="conteudo-principal">
    	<Header />
    	<Conteudo />
    	<Projetos projetos={projetos}/>
    	<footer className="footer">
			<div>
				<h4>Contato :</h4>
				<p>meuemail@gmail.com</p>
				<p>55 1111-111</p>
			</div>
		</footer> 
    </div>
  );
}

export default App;
