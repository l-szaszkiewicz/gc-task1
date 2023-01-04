import React from 'react'
import Link from 'next/link'

import s from '../../styles/components/Categories/Single.module.scss'

const Single = ({ data, style }) => {
    return (<>
        <li className={`${s.category}`} style={{ ...style, order: data.order }}>
            <Link href={`/category/${data.id}`}>{data.name}</Link>
            {data.children.length
                ? (<menu className={`${s.children}`}>
                    {data.children.map(el => (
                        <Single key={el.id} data={el} />
                    ))}
                </menu>)
                : ''
            }
        </li>
    </>)
}

export default Single