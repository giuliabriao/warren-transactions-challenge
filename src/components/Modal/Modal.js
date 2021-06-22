import React, { useState, useEffect } from 'react'
import styles from './Modal.module.css'

function Modal(props) {

    const [statusValue, setStatusValue] = useState(0)

    useEffect(() => {

        function statusPosition(status) {
            if (status === "created") {
                setStatusValue(10)
            }

            if (status === "processing") {
                setStatusValue(50)
            }

            if (status === "processed") {
                setStatusValue(100)
            }
        }
        console.log(props.status);
        statusPosition(props.status)
    })

    return (
        <div id="modal" className={styles.modal}>
            <section className={styles.container}>
                <button className={styles.close} onClick={() => props.handleModal()}> X </button>
                <h1 className={styles.transactionTitle}>{props.transactionTitle}</h1>
                <div className={styles.progressDiv}>
                    <div className={styles.progressBarDiv}>
                        <div className={styles.progressBar} style={{ width: `${statusValue}%` }}></div>
                    </div>
                    <ul className={styles.statusList}>
                        <li>Solicitada</li>
                        <li>Processando</li>
                        <li>Concluída</li>
                    </ul>
                </div>
                <section className={styles.sectionFrom}>
                    <h3>Transferindo de</h3>
                    <div>
                        <p>{props.from}</p>
                        <p>R$ {props.amount}</p>
                    </div>
                </section>
                <section className={styles.sectionTo}>
                    <h3>Para</h3>
                    <div>
                        <p>{props.to}</p>
                        <p>R$ {props.amount}</p>
                    </div>
                </section>
            </section>
        </div>
    )
}

export default Modal