import { Link } from "react-router-dom"
import "./Nopage.css"

export function NoPage() {
    return (
        <div className="Container">
            <h1>Está pagina não existe</h1>
            <Link to="/catalago" id="goCatalago">ir para Catalago</Link>
        </div>
    )
}