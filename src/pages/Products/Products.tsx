import React, { ChangeEvent, useEffect, useMemo, useState } from 'react'
import { ActionButtons, BtnDelete, BtnEdit, Container, Gallery, InputStyled, Product, Search, Select } from './productsStyle'
import Data from "../../data/mockData.json"
import { FaEdit, FaTrashAlt } from 'react-icons/fa';

interface Products {
    id: number;
    product: string;
    image: string;
    category: string;
    price: string;
    amount: number;
    latest_alteration: string;
}

const sanitizeSearch = (value: string) => value
    .trim()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') //.replace(/[\W]/g, '')
    .toLowerCase()

export const Products = () => {
    const [products, setProducts] = useState<Products[]>([])
    const [searchTerm, setSearchTerm] = useState("")
    const [selectedCategory, setSelectedCategory] = useState("");
    const [selectedValue, setSelectedValue] = useState("");

    useEffect(() => {
        const data = Data
        setProducts(data)
    }, [])

    const listProducts = products.filter(product => {
        const hasCategory = !selectedCategory ? true : product.category === selectedCategory
        const hasValue = !selectedValue ? true : parseInt(product.price) <= parseInt(selectedValue)
        const hasTerm = sanitizeSearch(product.product).includes(sanitizeSearch(searchTerm))

        return hasTerm && hasCategory && hasValue
    })

    return (
        <>
            <Container>
                <Search>
                    <InputStyled placeholder="Faça sua pesquisa aqui" onChange={event => setSearchTerm(event.target.value)} />

                    <div>
                        <Select value={selectedCategory}
                            onChange={event => setSelectedCategory(event.target.value)}
                        >
                            <option value="" hidden>
                                Filtre por categoria
                            </option>
                            <option value="Material Escolar">Material Escolar</option>
                            <option value="Construção">Construção</option>
                            <option value="Comida">Comida</option>
                        </Select>

                        <Select value={selectedValue}
                            onChange={event => setSelectedValue(event.target.value)}
                        >
                            <option value="" hidden>
                                Filtre por categoria
                            </option>
                            <option value="3">Até R$3</option>
                            <option value="5">Até R$5</option>
                            <option value="10">Até R$10</option>
                        </Select>
                    </div>


                </Search>

                <p style={{ color: "#101010", paddingBottom: "1rem" }}>Mostrando {listProducts.length} produtos</p>

                <Gallery>
                    {
                        listProducts.map(products => (
                            <Product key={products.id}>
                                <img src={products.image} alt={products.product} />
                                <h2>{products.product}</h2>
                                <p>{products.category}</p>
                                <div>
                                    <p>R$</p>
                                    <h3>{products.price}</h3>
                                </div>
                                <p>Última alteração: {products.latest_alteration}</p>
                                <ActionButtons>
                                    <BtnEdit className='edit'><FaEdit />Editar</BtnEdit>
                                    <BtnDelete className='delete'><FaTrashAlt />Deletar</BtnDelete>
                                </ActionButtons>
                            </Product>
                        ))
                    }
                </Gallery>
            </Container>
        </>
    )
}