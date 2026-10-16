import "./Projetos.css"

function Projetos(props) {
    const projetos = props.projetos

    return (
        <section className="secao-projetos">
            <h2>Projetos</h2>
            <ul className="lista-de-projetos">
                {
                    projetos.map((projetoDaVez, index) => {
                        return (
                            <li key={index}>
                                <a href={projetoDaVez.linkDoGithub} target="_blank" rel="noopener noreferrer">
                                    Link do Github
                                </a>
                                <img src={projetoDaVez.caminhoDaImagem} alt="Logo do projeto" />
                            </li>
                        )
                    })
                }
            </ul>
        </section>
    )
}

export default Projetos