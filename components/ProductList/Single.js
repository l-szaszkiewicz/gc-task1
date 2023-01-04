import React, { useState, useEffect } from 'react'
import Image from 'next/image'

import s from '../../styles/components/ProductList/Single.module.scss'

const Single = ({ data }) => {
    const [prodOpen, setProdOpen] = useState(false)
    useEffect(() => {
        !prodOpen
            ? document.body.classList.contains(`no-overflow`) && document.body.classList.remove(`no-overflow`)
            : document.body.classList.add(`no-overflow`);
    }, [prodOpen])

    return (<>
        <div className={`${s.product}`} onClick={() => setProdOpen(true)}>
            {
                data.photo
                    ? <Image className={`${s.prod_img}`} src={data.photo} width={400} height={400} alt={data.name} />
                    : <div className={`${s.prod_img}`}> </div>
            }

            <div className={`${s.info}`}>
                <h2 className={`${s.prod_name}`}>
                    {data.name}
                </h2>
                <p className={`${s.price}`} style={{ color: `var(--c-orange)`, fontWeight: 900 }}>
                    {data.price}
                    <sub>zł</sub>
                </p>
                {
                    data.notSalePrice !== '0.00' && (
                        <p className={`${s.price}`}>
                            <span className={`${s.old_price}`}>
                                {data.notSalePrice}
                            </span>
                            <sub>zł</sub>
                        </p>
                    )
                }
            </div>
        </div>

        {prodOpen &&
            <div className={`${s.prod_open}`}>
                <div>
                    {
                        data.photo
                            ? <Image className={`${s.prod_img}`} src={data.photo} width={400} height={400} alt={data.name} />
                            : <div className={`${s.prod_img}`}> </div>
                    }
                    <h2 className={`${s.prod_name}`}>
                        {data.name}
                    </h2>
                    <p className={`${s.price}`} style={{ color: `var(--c-orange)`, fontWeight: 900 }}>
                        {data.price}
                        <sub>zł</sub>
                    </p>
                    {
                        data.notSalePrice !== '0.00' && (
                            <p className={`${s.price}`}>
                                <span className={`${s.old_price}`}>
                                    {data.notSalePrice}
                                </span>
                                <sub>zł</sub>
                            </p>
                        )
                    }
                </div>
                <div className={`${s.description}`} dangerouslySetInnerHTML={{ __html: data.description }}>
                </div>
                <div className={`${s.close}`} onClick={() => setProdOpen(false)}>Zamknij</div>

            </div>
        }
    </>)
}

export default Single