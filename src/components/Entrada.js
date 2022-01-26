import axios from 'axios';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { uploader } from '../helpers/uploader';
import { url } from '../helpers/url';

const Entrada = () => {

    const [producto, setProducto] = useState({
        product: '',
        imagen: '',
        descripcion: ''
    })

    const { product, descripcion, imagen } = producto;

    const postData = () => {
        axios.post(url, producto)
            .then(response => console.log(response.data))
            .catch(error => console.log(error))

    }

    const handleChanged = ({ target }) => {
        setProducto({
            ...producto,
            [target.name]: target.value
        })

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        postData()
    }

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        uploader(file)
            .then(response => {
                producto.imagen = response;
            }).catch(error => {
                console.log(error.message)
            })
    }

    return (
        <div className='mw-50 py-5 px-5'>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicNombre">
                    <Form.Label>Nombre producto</Form.Label>
                    <Form.Control type="text" placeholder="Nombre producto" name='product' value={product} onChange={handleChanged} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicImagen">
                    <label for="formFile" class="form-label">Imagen Producto</label>
                    <input id='formFile' type="file" class="form-control" name="imagen" value={imagen} onChange={handleFileChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicDescription">
                    <Form.Label>Descripcion Producto</Form.Label>
                    <Form.Control type="text" placeholder="Descripcion" name='descripcion' value={descripcion} onChange={handleChanged} />
                </Form.Group>
                <Button variant="outline-dark" type="submit">
                    Enviar
                </Button>
            </Form>
        </div>);
};

export default Entrada;
