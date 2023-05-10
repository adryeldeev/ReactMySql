import axios from "axios";
import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom'

function Home (){
    const [data, setData] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:8081/')
        .then(res => setData(res.data))
        .catch(err => console.log(err))
    },[])

    const handleDelete = (id)=>{
    axios.delete('http://localhost:8081/delete/'+id)
    .then(res =>{
        location.reload()
    }).catch(err => console.log(err))
    }
    return(
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">
                <h2>Novo Cliente</h2>
                <div className="d-flex justify-content-end">
                    <Link to="/create" className="btn btn-sucess">Adiconar +</Link>
                </div>
                <table className="table">
                    <tbody>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Telefone</th>
                        </tr>
                    </tbody>
                    <tbody>
                        {data.map((client, index)=>{
                            return <tr key={index}>
                                <td>{client.id}</td>
                                <td>{client.name}</td>
                                <td>{client.email}</td>
                                <td>{client.numero}</td>
                                <td>
                                    <Link to={`/ler/${client.id}`} className="btn btn-sm btn-info">Ler</Link>
                                    <Link to={`/edit/${client.id}`} className="btn btn-sm btn-primary mx-2">Editar</Link>
                                    <button onClick={() => handleDelete(client.id)} className="btn btn-sm btn-danger">Deletar</button>
                                </td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Home