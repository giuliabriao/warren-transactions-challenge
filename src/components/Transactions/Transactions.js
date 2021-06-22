import React, { useState, useEffect } from 'react'
import styles from './Transactions.module.css'
import { FaSearch } from 'react-icons/fa';
import api from '../../api'

function Search() {

    const [transactions, setTransactions] = useState([])
    const [query, setQuery] = useState('')

    useEffect(() => {

        async function fetchTransactions() {
            const response = await api.get('')
            setTransactions(response.data)
        }

        fetchTransactions();
    }, [query])

    const statusName = (trx) => {
        if (trx.status == 'created') {

        }
    }

    // const handleClick = (trx) => {
    //     console.log(setTransactions(trx))
    // }

    console.log(transactions)

    return (
        <div className={styles.container}>
            <div className={styles.searchAndFilterContainer}>
                <div className={styles.searchingContainer}>
                    <input value={query} placeholder="Pesquise pelo título" onChange={(event) => setQuery(event.target.value)} />
                    <button><FaSearch className={styles.searchIcon} /></button>
                </div>
                <div className={styles.filterContainer}>
                    <select>
                        <option selected disabled>Status</option>
                        <option>Solicitada</option>
                        <option>Processando</option>
                        <option>Concluída</option>
                    </select>

                </div>
            </div>


            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Descrição</th>
                        <th>Status</th>
                        <th>Valor</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map(transaction => (
                        <tr
                            className={styles.trxRow}
                            onClick={() => console.log(transaction)}
                            key={transaction.id}>
                            <td>{transaction.title}</td>
                            <td>{transaction.description}</td>
                            <td>{transaction.status}</td>
                            <td>R$ {transaction.amount}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Search
