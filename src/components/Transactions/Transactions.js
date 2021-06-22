import React, { useState, useEffect } from 'react'
import styles from './Transactions.module.css'
import { FaSearch } from 'react-icons/fa';
import api from '../../api'

function Search() {
    
    const [transactions, setTransactions] = useState([])
    const [filterData, setFilterData] = useState([])
    const [query, setQuery] = useState('')
    
    async function fetchTransactions() {
        const response = await api.get('')
        return setTransactions(response.data)
    }

    useEffect(() => {
        fetchTransactions();
    }, [query])


    const dictionary = {
        "created": "Solicitada",
        "processing": "Processando",
        "processed": "Concluída"
    }

    const translateStatus = (trx) => {
        return dictionary[trx.status]
    }

    const search = (query) => {
        const searchFiltering = transactions.filter(trx => trx.title.toLowerCase().startsWith(query.toLowerCase()))
        return setTransactions(searchFiltering)
    }

    const filter = (event) => {
        const statusFiltering = transactions.filter(trx => dictionary[trx.status] === event.target.value)
        setTransactions(statusFiltering)
    }

    return (
        <div className={styles.container}>
            <div className={styles.searchAndFilterContainer}>
                <div className={styles.searchingContainer}>
                    <input value={query} placeholder="Pesquise pelo título" onChange={(event) => setQuery(event.target.value)} />
                    <button onClick={() => { search(query) }}><FaSearch className={styles.searchIcon} /></button>
                </div>
                <div className={styles.filterContainer}>
                    <select onChange={filter}>
                        <option selected disabled>Status</option>
                        <option>Solicitada</option>
                        <option>Processando</option>
                        <option>Concluída</option>
                    </select>
                </div>
            </div>

            <button onClick={fetchTransactions} className={styles.resetButton}>RESET</button>

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
                            <td>{translateStatus(transaction)}</td>
                            <td>R$ {transaction.amount}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Search
