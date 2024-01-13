import { useEffect, useState } from "react"
import axios from 'axios'
import './catalago.css'

export function Catalago({addToCart}) {
    
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
                                    <img class="activator" src={item.image}/>
                                </div>
                                <div class="card-content">
                                    <span class="card-title grey-text text-darken-4">{item.title}<i class="material-icons right"></i></span>
                                    <div className="icon-upward activator">
                                        <span className="span-see activator">VER MAIS</span>
                                        <span ><i class="material-icons ">arrow_upward</i></span>
                                    </div>
                                </div>
                                <div class="card-reveal">
                                    <span class="card-title grey-text text-darken-4">{item.price}<i class="material-icons right">close</i></span>
                                    <p>{item.description}</p>
                                </div>
                                <div className="card-action">
                                    <span id="buy"><a>Comprar</a></span>
                                    <a id="add-icon-carrinho" onClick={() => addToCart(item)}><i class="material-icons ">add_shopping_cart</i></a>
                                </div>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}