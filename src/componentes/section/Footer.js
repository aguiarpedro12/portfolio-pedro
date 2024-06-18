import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import styles from './Footer.module.css'

function Footer(){
    return (
        <div className={styles.footer}>
            <ul>
                <li><a href='https://www.instagram.com/aguixrpedro?igsh=MThxdGlzdWJxa3l5bQ%3D%3D&utm_source=qr'><FaInstagram size={30}/></a></li>
                <li><a href='https://github.com/aguiarpedro12'><FaGithub size={30}/></a></li>
                <li><a href='https://www.linkedin.com/in/aguiarhenriquepedro12/'><FaLinkedin size={30}/></a></li>
            </ul>
            <p>pedraum35aguiar@gmail.com</p>
            <p>Pedro Aguiar ₢ 2024</p>
        </div>
    )
}

export default Footer