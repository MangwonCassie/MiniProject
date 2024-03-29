import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Products = ({cat, filters, sort}) => {
  
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(()=>{
    const getProducts = async () => {
      try{
        // const res = await axios.get(cat ? `http://localhost:5000/api/products?category=${cat}` : "http://localhost:5000/api/products");
        const res = await axios.get(cat ? `https://mighty-waters-06853-0623ee72fb5f.herokuapp.com/api/products?category=${cat}` : "https://mighty-waters-06853-0623ee72fb5f.herokuapp.com/api/products");
        console.log('res.data확인중',res.data); /*확인용 지우기 */
        setProducts(res.data);
      } catch (err) {

      }
    };
    getProducts();
  }, [cat]);

  useEffect(() => {
    cat && 
    setFilteredProducts(
      products.filter((item)=>
        Object.entries(filters).every(([key, value])=> 
        item[key].includes(value)
        )
      )
    )
  }, [products, cat, filters])


  useEffect(()=>{
    if((sort==="newest")){
      setFilteredProducts((prev)=>
      [...prev].sort((a,b)=>a.createAt - b.createAt)
      );
    } else if ((sort==="asc")){
      setFilteredProducts((prev)=>
      [...prev].sort((a,b)=>a.price - b.price)
      );
    } else {
      setFilteredProducts((prev)=>
      [...prev].sort((a,b)=>b.price - a.price)
      );
    }
  }, [sort])

  return (
    <Container>
      {cat ? filteredProducts.map((item) => (
        <Product item={item} key={item.id} />
      )) : products
        .slice(0,5)
        .map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;


