import React from 'react'
import { service } from '../types/reducerTypes'
import { Link } from 'react-router-dom'


const ServiceCategory = ({ id, name, description, slug, image }: service) => {
    return (
        <article className="service">
            <div className="img">
                <img src={"http://127.0.0.1:8000" + image} alt="" />
            </div>
            <div className="info">
                <h3>{name}</h3>
                <p>{description}</p>
            </div>
            <div className="overlay">
                <Link to={`/services/${slug}`}>Details</Link>
            </div>
        </article>
    )
}

export default ServiceCategory