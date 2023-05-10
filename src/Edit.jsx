import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Edit () {
    const {id} = useParams()
   const navigate = useNavigate()
    useEffect(()=>{
        axios.get('http://localhost:8081/ler/'+ id)
        .then(res =>{console.log(res)
            setValues( {...values, name: res.data[0].name, email: res.data[0].email, numero: res.data[0].numero})
    })
        .catch(err => console.log(err))
    }, [])
    
    const[values, setValues] = useState({
        name: '',
        email:'',
        numero: ''
    })

    const handleEdit = (e)=>{
        e.preventDefault()
        axios.put('http://localhost:8081/edit/'+ id, values)
        .then(res =>{console.log(res)
        navigate('/')
        
        }).catch(err => console.log(err))
    
    }
    return (
<div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">
                <form onSubmit={handleEdit}>
                    <h2>Editar Cliente</h2>
                    <div>
                        <label htmlFor="">Nome</label>
                        <input type="text" placeholder="Ex: Seu Nome" className="form-control"  value={values.name}
                        onChange={e => setValues({ ...values, name: e.target.value})}/>
                      
                    </div>
                    <div className="mb-2">
                    <label htmlFor="">Email</label>
                    <input type="email" placeholder="Ex: Email@email.com" className="form-control" value={values.email}
                    onChange={e => setValues({ ...values, email: e.target.value})}/>
                    </div>
                    <div className="mb-3">
                    <label htmlFor="">Celular</label>
                    <input type="tel" placeholder="Ex: (XX) XXXXX-XXXX" className="form-control" value={values.numero}
                    onChange={e => setValues({ ...values, numero: e.target.value})}/>
                    </div>
                    <button className="btn btn-sucess">Editar</button>
                </form>
            </div>

        </div>
    )
}

export default Edit