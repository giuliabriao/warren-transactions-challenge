import React from 'react'
import style from './Footer.module.css'

function Footer({footerUrl}) {

    return (
        <div>
            <footer className={style.footer}>
                <p className={style.pFooter}>
                    A project made by <a className={style.aFooter} href={footerUrl}>Giulia Briao</a> - 2021
                </p>
            </footer>
        </div>
    )
}

export default Footer
