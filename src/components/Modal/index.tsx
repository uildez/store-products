import React, { useState } from 'react'
import { FaPlus } from 'react-icons/fa'
import { Model, Container, Form, BtnSave, Close } from './modalStyle'

interface Props {
    id?: number;
    product?: string;
    image?: string;
    category?: string;
    price?: string;
    latest_alteration?: string;
    onClose: () => void;
    onProductUpdate: (updatedProduct: Product) => void;
}

interface Product {
    id?: number;
    product?: string;
    image?: string;
    category?: string;
    price?: string;
    latest_alteration?: string;
}


export const Modal = ({ id, product, image, category, price, latest_alteration, onProductUpdate, onClose }: Props) => {
    const [selectedProduct, setSelectedProduct] = useState(product)
    const [selectedImage, setSelectedImage] = useState(image)
    const [selectedCategory, setSelectedCategory] = useState(category)
    const [selectedPrice, setSelectedPrice] = useState(price)

    const handleSave = () => {
        const updatedProduct: Product = {
            id: id,
            product: selectedProduct,
            image: selectedImage,
            category: selectedCategory,
            price: selectedPrice,
            latest_alteration: latest_alteration,
        }

        onProductUpdate(updatedProduct);
    };

    return (
        <Model>
            <Container>
                <div>
                    <h2>Adicionar novo produto</h2>
                    <Close
                        onClick={onClose}
                    />
                </div>
                <Form>
                    <input onChange={event => setSelectedProduct(event.target.value)} type="text" placeholder='Adicione o nome' value={selectedProduct} />
                    <input onChange={event => setSelectedImage(event.target.value)} type="url" placeholder='Foto do produto (url)' value={selectedImage} />
                    <div>
                        <select placeholder='Escolha a Categoria'
                            value={selectedCategory}
                            onChange={event => setSelectedCategory(event.target.value)}
                        >
                            <option value="Material Escolar">Material Escolar</option>
                            <option value="Construção">Construção</option>
                            <option value="Comida">Comida</option>
                        </select>
                        <input onChange={event => setSelectedPrice(event.target.value)} value={selectedPrice} type="currency" min="1" step="any" placeholder='Adicione o preço' />
                    </div>
                    <BtnSave onClick={handleSave}><FaPlus /> Salvar</BtnSave>
                </Form>
            </Container>
        </Model>
    )
}
