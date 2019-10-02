import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/axios';

import './style.css'

const Dashboard = () => {
    const [Spots, setSpots] = useState([]);

    useEffect(() => {
        const getApiResponse = async () => {
            const user_id = localStorage.getItem('user');
            const response = await api.get('/dashboards', {
                headers: { user_id }
            });
            console.log(response.data);
            setSpots(response.data);
        }

        getApiResponse();
    }, []);
    return (
        <>
            <ul className="spot-list">
                {Spots.map(spot => (
                    <li key={spot._id}>
                        <header style={{ backgroundImage: `url(${spot.thumbnail_url})` }}/>
                        <strong>{spot.company}</strong>
                        <span>{!spot.price ? "Free" : `R$${spot.price}/dia`}</span>
                    </li>
                ))}
            </ul>

            <Link to="/new">
                <button className="btn">Cadastrar novo spot</button>
            </Link>
        </>
    )
}

export default Dashboard;