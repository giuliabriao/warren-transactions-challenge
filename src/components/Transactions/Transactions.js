import React, { useState, useEffect } from 'react'
import styles from './Transactions.module.css'
import { FaSearch } from 'react-icons/fa';
import api from '../../api'

function Search() {

    const [ data, setData ] = useState([])
    const [ query, setQuery ] = useState('')

    useEffect(() => {

        async function fetchData() {
            const response = await api.get('')
            setData(response.data)
        }

        fetchData();
    }, [query])

    console.log(data)

    return (
        <div className={styles.container}>
            <section className={styles.searchingContainer}>
                <input value={query} placeholder="Pesquise pelo título" onChange={(event) => setQuery(event.target.value)}/>
                <button><FaSearch className={styles.searchIcon} /></button>
            </section>

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
                    {data.map( transaction => (
                        <tr key={transaction.id}>
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
