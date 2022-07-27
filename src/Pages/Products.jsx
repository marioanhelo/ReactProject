import React, {useState, useEffect} from "react";
import { ecommerceApi } from "../Api/ecommerce";
import Loader from '../Components/Spinner'
import CardProduct from "../Components/Card";

export const Products = () => {
  const[products,setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  const getProductsData = async() => {
    const res = await ecommerceApi.get('/item')
    setProducts(res.data)
    setLoading(false)
  }
  useEffect(() => {
    getProductsData()
    return () =>{
    }
  },[])

    return (
      <>
        {loading ? <Loader/> : (
            <div className="row mt-4">
          {
          products.map(product => (
            <CardProduct
              key={product._id}
              img={product.image}
              title={product.product_name}
              productId={product._id}
              price={product.price}
              category={product.category}
              brand={product.brand}/>
          ))
        }
      </div>
        )}

      </>
    )
}