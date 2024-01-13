function Carrinho({carrinho}) {
    return (
        <div>
            <ul>

                {carrinho.map( item => {
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
                                </div>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Carrinho