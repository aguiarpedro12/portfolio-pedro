import ButtonB from '../elements/ButtonB'
import styles from './Projects.module.css'
import Card from '../elements/Card'
import projeto1 from '../../images/projects/projeto1.png'
import projetobootcamp1 from '../../images/projects/projetobootcamp1.png'
import projetodesafio1 from '../../images/projects/projetodesafio1.png'
import desafio2api from '../../images/projects/desafio2api.png'

function Projects(){
    return (
        <div className={styles.projects} id="projects">
            <h1> Projetos </h1>
            <ButtonB text='Acesse meu repositório' link ='https://github.com/aguiarpedro12'/>
            <Card
            img={projeto1}
            title="Projeto Landing Page"
            tech="HTML, CSS e JavaScript"
            description="Este é o projeto de desenvolvimento do módulo base do curso de Tecnologia da Escola DNC."
            repo="https://github.com/aguiarpedro12/projeto-landing-page"
            site="https://projeto1dncpedro.netlify.app/"
            />
            <Card
            img={projetobootcamp1}
            title="Projeto Bootcamp DNC"
            tech="HTML e CSS"
            description="Este é um projeto de exemplo de bootcamp da DNC que aprendi em aula."
            repo="https://github.com/aguiarpedro12/bootcamp-dncproject"
            site="https://projectbootcampdncpedro.netlify.app/"
            />
            <Card
            img={projetodesafio1}
            title="Desafio 1 DNC"
            tech="HTML e CSS"
            description="Este é o desafio 1 do módulo base do curso de Tecnologia da Escola DNC."
            repo="https://github.com/aguiarpedro12/projeto-desafio1"
            site="https://projeto1pedro.netlify.app/"
            />
            <Card
            img={desafio2api}
            title="Desafio 2 DNC"
            tech="HTML, CSS e JavaScript"
            description="Este é o desafio 2: Desenvolvendo tela funcional com consumo de API do curso de Tecnologia da Escola DNC."
            repo="https://github.com/aguiarpedro12/dnc-desafio-2"
            site="https://weatherdnc2.netlify.app/"
            />

        </div>
    )
}

export default Projects