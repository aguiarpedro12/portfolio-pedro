import styles from './Presentation.module.css'
import ButtonA from '../elements/ButtonA'

function Presentation(){
    return (
        <div className={styles.presentation} id="presentation">
            <h4><strong>Bem-vindo ao meu Portfólio</strong></h4>
            <h1>Olá, eu sou Pedro Aguiar!</h1>
            <p>
                    Sou um desenvolvedor fullstack em formação,<br/>
                    apaixonado por criar soluções inovadoras e eficientes<br/>
                    com conhecimentos sólidos em HTML, CSS, JavaScript<br/>
                    e React. Estou dedicado a construir aplicações web <br/>
                    que proporcionem uma experiência de usuário excepcional. <br/>
                    Sempre em busca de novos desafios que me permitam<br/>
                    aplicar e expandir minhas habilidades técnicas, com o <br/>
                    objetivo de contribuir significativamente para projetos <br/>
                    de desenvolvimento web.
            </p>
            <ButtonA link='https://github.com/aguiarpedro12' text='Conecte-se comigo!'/>
            
        </div>
    )
}

export default Presentation