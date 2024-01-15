import { useEffect, useState } from "react"
import axios from 'axios'
import './catalago.css'

export function Catalago() {
    
    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products').then(res => setProducts(res.data)).catch(error => console.error(error))
    }, [])
    return (
        <div>
            <ul className="ul-cards">
                {products.map( item => {
                    return (
                        <li key={item.id}>
                            <div class="card">
                                <div class="card-image waves-effect waves-block waves-light">
                                    <img class="activator" src={item.image} alt="image"/>
                                </div>
                                <div class="card-content">
                                    <span class="card-title activator grey-text text-darken-4">{item.title}<i class="material-icons right">more_vert</i></span>
                                    <p><a href="#">This is a link</a></p>
                                </div>
                                <div class="card-reveal">
                                    <span class="card-title grey-text text-darken-4">{item.title}<i class="material-icons right">close</i></span>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}