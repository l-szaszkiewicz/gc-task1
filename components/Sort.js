import React from 'react'

import s from '../styles/components/Sort.module.scss'

const Sort = ({ data, setData }) => {

    const sortData = (field, order) => {
        if (field === 'price') {
            if (order === 'asc') {
                setData([].concat(data).sort((a, b) => parseFloat(a.price) - parseFloat(b.price)))
            } else {
                setData([].concat(data).sort((a, b) => parseFloat(b.price) - parseFloat(a.price)))
            }
        }

        if (field === 'name') {
            if (order === 'asc') {
                setData([].concat(data).sort((a, b) => a.name.trim().localeCompare(b.name.trim())))
            } else {
                setData([].concat(data).sort((a, b) => b.name.trim().localeCompare(a.name.trim())))
            }
        }
    }
    return (
        <div className={`${s.sort_wrapper}`}>
            <div className={`${s.prize}`}>
                <p>Cena</p>
                <span className={`${s.asc}`} onClick={() => sortData('price', 'asc')}></span>
                <span className={`${s.desc}`} onClick={() => sortData('price', 'desc')}></span>
            </div>

            <div className={`${s.name}`}>
                <p>Nazwa produktu</p>
                <span className={`${s.asc}`} onClick={() => sortData('name', 'asc')}></span>
                <span className={`${s.desc}`} onClick={() => sortData('name', 'desc')}></span>
            </div>
        </div>
    )
}

export default Sort