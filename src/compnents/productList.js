import React from 'react';
import { useParams } from 'react-router-dom';
import shoeData from '../shoe.json'
export default function ProductList() {
    const { id } = useParams();
    const data = shoeData[id]
    return (
        <div>
            <h1>Name : {data.name}</h1><br/>
            <h1>Price : {data.price}</h1>
            <img width="60%" src={data.img} alt="Product" />
        </div>
    )
}