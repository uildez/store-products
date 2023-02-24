/* eslint-disable no-restricted-globals */
/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { useEffect, useState } from 'react'
import { ActionButtons, BtnAdd, BtnDelete, BtnEdit, Container, Gallery, InputStyled, Product, Search, Select, Tab } from './productsStyle'
import Data from "../../data/mockData.json"
import { FaEdit, FaPlus, FaTrashAlt } from 'react-icons/fa';
import { Modal } from '../../components/Modal';
import moment from 'moment';

export interface ProductsInterface {
    id: number;
    product: string;
    image: string;
    category: string;
    price: string;
    latest_alteration: string;
}

const sanitizeSearch = (value: string) => value
    .trim()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') //.replace(/[\W]/g, '')
    .toLowerCase()

export const Products = () => {
    const [products, setProducts] = useState<ProductsInterface[]>([])
    const [selectedProduct, setSelectedProduct] = useState<ProductsInterface | null>(null);
    const [searchTerm, setSearchTerm] = useState("")
    const [selectedCategory, setSelectedCategory] = useState("");
    const [selectedValue, setSelectedValue] = useState("");
    const [showModal, setShowModal] = useState(false);

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

    // Add product
    const handleProductAddition = (newProduct: ProductsInterface) => {
        const updatedProducts = [...products, newProduct]
        setProducts(updatedProducts)
        setShowModal(false)
    }

    // const handleNewProductUpdate = (updatedProduct: ProductsInterface) => {
    //     setProducts((prevProducts) => {
    //         return prevProducts.map((product) =>
    //             product.id === updatedProduct.id ? updatedProduct : product
    //         );
    //     });
    //     setSelectedProduct(null);
    // };

    // const addProduct = () => {
    //     const newProduct = { id: products.length + 1, product: "test", image: "string", category: "string", price: "0", amount: 10, latest_alteration: moment().format('MMMM Do YYYY, h:mm:ss a') };
    //     setProducts([...products, newProduct]);
    //     listProducts
    // };

    // Delete product
    const handleDeleteProduct = (productDelete: ProductsInterface) => {
        const text = `Certeza que deseja deletar o Produto ${productDelete.product}?`;
        if (confirm(text) === true) {
            const updatedProducts = products.filter((product) => product.id !== productDelete.id);
            setProducts(updatedProducts);
        } else {
            null
        }
    };

    // Edit Product
    const handleProductClick = (productSelected: ProductsInterface) => {
        setSelectedProduct(productSelected);
    };

    const handleProductUpdate = (updatedProduct: ProductsInterface) => {
        setProducts((prevProducts) => {
            return prevProducts.map((product) =>
                product.id === updatedProduct.id ? updatedProduct : product
            );
        });
        setSelectedProduct(null);
    };

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

                <Tab>
                    <p>Mostrando {listProducts.length} produtos</p>
                    <BtnAdd onClick={() => setShowModal(true)}><FaPlus /> Adicionar produto</BtnAdd>
                </Tab>

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
                                    <BtnEdit onClick={() => handleProductClick(products)} className='edit'><FaEdit />Editar</BtnEdit>
                                    <BtnDelete onClick={() => handleDeleteProduct(products)} className='delete'><FaTrashAlt />Deletar</BtnDelete>
                                </ActionButtons>
                            </Product>
                        ))
                    }
                </Gallery>
                {selectedProduct && (
                    <Modal
                        id={selectedProduct.id}
                        product={selectedProduct.product}
                        image={selectedProduct.image}
                        category={selectedProduct.category}
                        price={selectedProduct.price}
                        latest_alteration={moment().format('L')}
                        onClose={() => setSelectedProduct(null)}
                        onProductUpdate={(updatedProduct) => handleProductUpdate(updatedProduct)}
                    />
                )}
                {showModal && (
                    <Modal
                        latest_alteration={moment().format('L')}
                        onClose={() => setShowModal(false)}
                        onProductUpdate={(updatedProduct) => handleProductAddition(updatedProduct)}
                    />
                )}
            </Container>
            {console.log(selectedProduct)}
        </>
    )
}