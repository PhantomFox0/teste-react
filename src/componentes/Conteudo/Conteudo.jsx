import { useState } from "react"
import "./Conteudo.css"

import programmerImg from "../../assets/programmer.png"

function Conteudo() {
    const [artigo, setArtigo] = useState("")

    function ClicouNoBotao() {
        setArtigo(
            "Sou programador, trabalho como dev há 5 anos, e tenho conhecimento em diversas linguagens"
        )
    }

    return(
      <main className="conteudo">
        <section className="conteudo-textual">
            <h2 className="texto-introducao">Meu nome é Erick</h2>
            <h3>Sou desenvolvedor web</h3>
            <button className="botao-saiba-mais" onClick={ClicouNoBotao}>
                Saiba mais
            </button>
            <article>
                {artigo}
            </article>
        </section>
        <img className="ilustracao" src={programmerImg} alt=""></img>
      </main>
    )
}

export default Conteudo