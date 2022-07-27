import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import { ecommerceApi } from '../Api/ecommerce'
import Loader from '../Components/Spinner'
import DefaultImage from '../assets/img-default.png'

export const SingleProduct = () => {
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)
    const {productId} = useParams()

    const getSingleProductData = async () =>{
        try{
        const res = await ecommerceApi.get(`/item/${productId}`)
        setProduct(res.data)
        setLoading(false)
        }catch (error){
            console.log(error)
        }
    }

    useEffect(()=>{
        getSingleProductData()
    }, )

  return (
    <div>
        {loading ? <Loader/> : (
            <div className='row mt-4'>
                <div className='col-8 mx-auto'>
                    <div className='row mt-2'>
                        <div className='col-4 mx-auto'>
                            <img className='image-product' src={product.image} alt={product.product_name} onError={(e) => {
                                 e.target.src = DefaultImage
                                e.target.style = 'padding: 8px; margin: 16px'
                            }} />
                        </div>
                        <div className='col-6 mx-auto'>
                            <h3>{product.product_name}</h3>
                            <h4>{product.brand}</h4>
                            <h5>${product.price}</h5>
                            <p>{product.description}</p>
                            <button type='button' className='btn btn-primary'>Comprar</button>
                        </div>
                    </div>
                </div>
            </div>
            

        )}
    </div>
  )
}
