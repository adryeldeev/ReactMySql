import axios from 'axios';
import React, { useState } from "react";
import {useNavigate} from 'react-router-dom'
function Create() {
    const[values, setValues] = useState({
        name: '',
        email: '',
        numero: ''
    })

    const navigate = useNavigate();

    const handleSubmit= (e)=>{
    e.preventDefault()
    axios.post('http://localhost:8081/cliente', values)
    .then(res => {
        console.log(res)
        navigate('/')
    })
    .catch(err => console.log(err))
    }
    return(
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">
                <form onSubmit={handleSubmit}>
                    <h2>Adicionar Cliente</h2>
                    <div>
                        <label htmlFor="">Nome</label>
                        <input type="text" placeholder="Ex: Seu Nome" className="form-control"
                        onChange={e => setValues({ ...values, name: e.target.value})}/>
                      
                    </div>
                    <div className="mb-2">
                    <label htmlFor="">Email</label>
                    <input type="email" placeholder="Ex: Email@email.com" className="form-control"
                    onChange={e => setValues({ ...values, email: e.target.value})}/>
                    </div>
                    <div className="mb-3">
                    <label htmlFor="">Celular</label>
                    <input type="tel" placeholder="Ex: (XX) XXXXX-XXXX" className="form-control"
                    onChange={e => setValues({ ...values, numero: e.target.value})}/>
                    </div>
                    <button className="btn btn-sucess">Enviar</button>
                </form>
            </div>

        </div>
    )
}

export default Create