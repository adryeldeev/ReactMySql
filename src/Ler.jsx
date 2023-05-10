import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

function Ler (){
    const {id} = useParams()
    const [client, setClient] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:3001/ler/'+ id)
        .then(res =>{console.log(res)
            setClient(res.data[0])
    })
        .catch(err => console.log(err))
    }, [])
    return(
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">
                <div className="p-2">
                <h2>Detalhe do Cliente</h2>
                <label htmlFor="">ID</label>
                <h4>{client.id}</h4>
                <label htmlFor="">Nome</label>
                <h4>{client.name}</h4>
                <label htmlFor="">Email</label>
                <h4>{client.email}</h4>
                <label htmlFor="">Telefone</label>
                <h4>{client.numero}</h4>
                </div>
                <Link to='/' className="btn btn-primary me-2">Voltar</Link>
                <Link to={`/edit/${client.id}`} className="btn btn-info">Edit</Link>
            </div>
        </div>
    )
}

export default Ler;