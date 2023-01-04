import React, { useState, useEffect } from 'react'

import Single from './Categories/Single';

import s from '../styles/components/Categories.module.scss'

const nest = (items, id = 0) => items
    .filter(item => item['parent'] === id)
    .map(item => ({ ...item, children: nest(items, item.id) }));

const Categories = ({ data }) => {
    const [categories, setCategories] = useState(null);
    useEffect(() => {
        data && setCategories(nest(data));
    }, [data])


    return (
        categories && (
            <menu className={`${s.cat_list}`} >
                {categories.map(el => (
                    <Single key={el.id} data={el} style={{ flex: `0 1 calc(90% / ${categories.length})` }} />
                ))}
            </menu>
        )
    )
}

export default Categories