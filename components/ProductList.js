import React, { useState, useEffect } from 'react'
import Single from './ProductList/Single'

import s from '../styles/components/ProductList.module.scss'
import Sort from './Sort'

const ProductList = ({ data }) => {
  const [products, setProducts] = useState(data)
  useEffect(() => {
    setProducts(data);
  }, [data])


  return (<>
    <Sort data={products} setData={setProducts} />
    {!data.length && <p className={`${s.no_data}`}>Brak produktów</p>}
    <div className={`${s.product_list}`}>
      {products.map(el => <Single data={el} key={el.id} />)}
    </div>
  </>)
}

export default ProductList