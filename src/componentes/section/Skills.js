import styles from './Skills.module.css'
import javascript from '../../images/skills/javascript.svg'
import html from '../../images/skills/html.svg'
import css from '../../images/skills/css.svg'
import react from '../../images/skills/react.svg'

function Skills(){
    return (
        <div className={styles.skill} id="skills">
            <h1> Habilidades </h1>
            <p> Conheça um pouco das minhas habilidades e conhecimentos. </p>
            <div>
                <img src={javascript} />
                <img src={html} />
                <img src={css} />
                <img src={react} />
            </div>
        </div>
    )
}

export default Skills