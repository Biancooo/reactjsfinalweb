import { Link } from 'react-router-dom';

export default function ProductCard({ product }) {
    return (
        <>
        <article style={{ border: '1px solid white', padding: 10 }}>
            <h4>{product.title}</h4>
            <img src={product.image} alt={product.title} />
            <p>$ {product.price}</p>
            <button>
                <Link to={`/item/${product.id}`}>Detalles</Link>
                </button>
                </article>
                </>
    );
}