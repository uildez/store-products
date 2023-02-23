import React from 'react'
import { Container, Gallery, Product, Search } from './productsStyle'
import Data from "../../data/mockData.json"

export const Products = () => {
    return (
        <>
            <Container>
                <Search>
                    <input placeholder="Enter Post Title" />
                    <input placeholder="Enter Post Title" />
                </Search>
                <Gallery>
                    {
                        Data.map((products) => (
                            <Product key={products.id}>
                                <img src={products.image} alt={products.product} />
                                <h2>{products.product}</h2>
                                <p>{products.category}</p>
                                <div>
                                    <p>R$</p>
                                    <h3>{products.price}</h3>
                                </div>
                                <p>Última alteração: {products.latest_alteration}</p>
                            </Product>
                        ))
                    }
                </Gallery>
            </Container>
        </>
    )
}
