import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { url } from '../helpers/url';

const Lista = () => {

    const [listar, setListar] = useState([]);

    useEffect(() => {
        getData();
    }, [])

    const getData = () => {
        axios.get(url)
            .then(response => {
                setListar(response.data)
            })
            .catch(error => {
                console.log(error);
            })
    }

    const deleteData = (id) => {
        axios.delete(url + id)
            .then(response => {
                getData();
                console.log(response.data)
            })
            .catch(error => {
                console.log(error);
            })
    }


    return <div className=' py-5 px-5'>
        <Table  width="50" striped bordered hover size="sm">
            <thead>
                <tr>
                    <th>Imagen</th>
                    <th>Producto</th>
                    <th>Descripcion</th>
                </tr>
            </thead>
            <tbody>
                {
                    listar.map(r => (
                        <tr>
                            <td><img src={r.imagen} width="80" height="auto" alt={r.descripcion}/></td>
                            <td>{r.product}</td>
                            <td>{r.descripcion}</td>
                            <td><button onClick={() => deleteData(r.id)}>Eliminar</button></td>
                        </tr>
                    ))
                }

            </tbody>
        </Table>
    </div>;
};

export default Lista;
