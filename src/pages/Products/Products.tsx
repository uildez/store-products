/* eslint-disable no-restricted-globals */
/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { useState } from 'react'

import { useDispatch, useSelector } from 'react-redux';
import { addProduct, editProduct, removeProduct, useProducts } from '../../app/sliceProducts';


import { Modal } from '../../components/Modal';
import moment from 'moment';

import { ActionButtons, BtnAdd, BtnDelete, BtnEdit, Container, Gallery, InputStyled, NotFound, Product, Search, Select, Tab } from './productsStyle'
import { FaEdit, FaPlus, FaSearch, FaTrashAlt } from 'react-icons/fa';

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
    const [selectedProduct, setSelectedProduct] = useState<ProductsInterface | null>(null);
    const [searchTerm, setSearchTerm] = useState("")
    const [selectedCategory, setSelectedCategory] = useState("");
    const [selectedValue, setSelectedValue] = useState("");
    const [showModal, setShowModal] = useState(false);

    const useproducts = useSelector(useProducts)
    const dispatch = useDispatch()

    const listProducts = useproducts.filter(product => {
        const hasCategory = !selectedCategory ? true : product.category === selectedCategory
        const hasValue = !selectedValue ? true : parseInt(product.price) <= parseInt(selectedValue)
        const hasTerm = sanitizeSearch(product.product).includes(sanitizeSearch(searchTerm))

        return hasTerm && hasCategory && hasValue
    })

    // Add product
    const handleProductAddition = (newProduct: ProductsInterface) => {
        const updatedProducts = {
            id: newProduct.id,
            product: newProduct.product,
            image: newProduct.image,
            category: newProduct.category,
            price: newProduct.price,
            latest_alteration: newProduct.latest_alteration
        };
        dispatch(addProduct(updatedProducts));
        setShowModal(false)
    }

    // Delete product
    const handleDeleteProduct = (productDelete: ProductsInterface) => {
        const text = `Certeza que deseja deletar o Produto ${productDelete.product}?`;
        if (confirm(text) === true) {
            dispatch(removeProduct(productDelete.id));
        } else {
            null
        }
    };

    // Edit Product
    const handleProductClick = (productSelected: ProductsInterface) => {
        setSelectedProduct(productSelected);
    };

    const handleProductUpdate = (updatedProduct: ProductsInterface) => {
        dispatch(editProduct(updatedProduct));
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
                            <option hidden>
                                Filtre por categoria
                            </option>
                            <option value="Material Escolar">Material Escolar</option>
                            <option value="Construção">Construção</option>
                            <option value="Comida">Comida</option>
                        </Select>

                        <Select value={selectedValue}
                            onChange={event => setSelectedValue(event.target.value)}
                        >
                            <option hidden>
                                Filtre por valor
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
                        listProducts.length > 0 ? <>{listProducts.map(products => (
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
                            </Product>)
                        )}</> : <NotFound><FaSearch /> Sem Produtos para a pesquisa ou filtro</NotFound>}
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
                        id={useproducts.length + 1}
                        latest_alteration={moment().format('L')}
                        onClose={() => setShowModal(false)}
                        onProductUpdate={(updatedProduct) => handleProductAddition(updatedProduct)}
                    />
                )}
            </Container>
        </>
    )
}