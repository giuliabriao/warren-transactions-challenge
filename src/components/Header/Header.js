import React from 'react'
import styles from './Header.module.css'
import warrenLogo from '../../images/warren-logo-white2.png'

function Header() {
    return (
        <header className={styles.header}>
            <nav className={styles.navbar}>
                <a href="/"><img className={styles.logo} src={warrenLogo} alt="White Warren logo" /></a>
                <a className={styles.link} href="https://educacao.warren.com.br/?_gl=1*mik71u*_gcl_aw*R0NMLjE2MjQzMDM3MTkuQ2p3S0NBandxN2FHQmhBREVpd0E2dUdacDk1WkhXaF80UnBEX0NsX2tZSHhNZHFlakVTaW9YSzJIRkZuekszTm1rcjlob3VHQ0NQeFR4b0NrY2dRQXZEX0J3RQ..*_ga*MTgyNTYyNjMyNi4xNjIzOTM4MjIw*_ga_DJ7ETNN20S*MTYyNDMwMzY5MC44LjEuMTYyNDMwMzcyNi4yNA..&_ga=2.26038719.329082517.1624303691-1825626326.1623938220&_gac=1.158074440.1624303719.CjwKCAjwq7aGBhADEiwA6uGZp95ZHWh_4RpD_Cl_kYHxMdqejESioXK2HFFnzK3Nmkr9houGCCPxTxoCkcgQAvD_BwE">
                    APRENDER
                </a>
                <a className={styles.link} href="https://warren.com.br/sobre/">SOBRE</a>
                <a className={styles.link} href="https://warren.com.br/blog/">BLOG</a>
                <a className={`${styles.link} ${styles.signUpLink}`} href="https://warren.com.br/app/#/signup">ABRA SUA CONTA</a>
            </nav>
            <section className={styles.textSection}>
                <h1>Transações</h1>
                <p>aqui você ficará por dentro das principais
                    transações e obterá mais informações ao
                    clicar nelas.
                </p>
            </section>
        </header>
    )
}

export default Header
