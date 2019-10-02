import React, { useState, useMemo } from 'react';
import api from '../../services/axios';

import camera from '../../assets/camera.svg'

import './style.css';

const NewSpot = ({ history }) => {
    const [thumbnail, setThumbnail] = useState(null);
    const [company, setCompany] = useState('');
    const [price, setPrice] = useState('');
    const [techs, setTechs] = useState('');

    const preview = useMemo(() => {
        return thumbnail ? URL.createObjectURL(thumbnail) : null
    }, [thumbnail]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = new FormData();

        data.append('thumbnail', thumbnail);
        data.append('company', company);
        data.append('price', price);
        data.append('techs', techs);

        const user_id = localStorage.getItem("user");

        await api.post('/spots', data, {
            headers: { user_id }
        });

        history.push('/dashboards')
    }

    return (
        <form onSubmit={handleSubmit}>
            <label 
                id="thumbnail" 
                style={{ backgroundImage: `url(${preview})` }}
                className={thumbnail ? 'has-thumbnail' : ''} 
                >

                <input type="file" onChange={event => setThumbnail(event.target.files[0])}/>
                <img src={camera} alt=""/>
            </label>

            <label htmlFor="company"></label>
            <span>EMPRESA *</span>
            <input
                type="text"
                placeholder="Qual o nome da sua empresa?"
                value={company}
                onChange={event => setCompany(event.target.value)}
                />
            
            <label htmlFor="prices"></label>
            <span>Preço por dia <strong>Sem nada para GRATUITO</strong></span>
            <input 
                type="text"
                placeholder="Quanto custa a diária?"
                value={price}
                onChange={event => setPrice(event.target.value)}
            />

            <label htmlFor="techs"></label>
            <span>Tecnologias</span>
            <input 
                type="text"
                placeholder="Quais tecnologias sua empresa usa?"
                value={techs}
                onChange={event => setTechs(event.target.value)}
            />
            <button type="submit" className="btn">Cadastrar</button>
        </form>
    )
}

export default NewSpot;