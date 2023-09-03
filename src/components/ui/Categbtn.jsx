import React,{useEffect, useState } from 'react'
import { Link, } from 'react-router-dom'
import Products from '../Products'

const Categbtn = () => {
    const [products, setProducts]=useState([])
    const [filter, setFilter]=useState([])
    useEffect(()=>{
        getdata()
    },[])
    const getdata= async()=>{
        let data= await fetch("http://fakestoreapi.com/products")
         data= await data.json()
         console.log(data)
        setProducts(data)
        setFilter(data)
    }
    const Prodfilter=(cat)=>{
const updated= products.filter((filt)=>filt.category=== cat)
setFilter(updated)
    }
  return (
    <div className=' w-[100%]'>
      <div className="flex gap-4 text-sm py-5 px-20 sm:text-2xl justify-center ">
        <button className="text-sky-300 " onClick={()=>{setFilter(products)}}>All</button>
        <button  className="text-sky-300 " onClick={()=>{Prodfilter("electronics")}}>Electronics</button>
        <button  className="text-sky-300 " onClick={()=>{Prodfilter("men's clothing")}}>Male</button>
        <button  className="text-sky-300 " onClick={()=>{Prodfilter("women's clothing")}}>Female</button>
        <button  className="text-sky-300 " onClick={()=>{Prodfilter("jewelery")}}>Jewelery</button>
      </div>
      <Products filter={filter}/>
    </div>
  )
}

export default Categbtn
