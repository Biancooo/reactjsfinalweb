import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
        <>
        <nav
        style={{
            display: 'flex',
            gap: 10,
            justifyContent: 'center',
            marginBottom: 30,
        }}
        >
                <Link to={'/Menu'}>Menu</Link>
                <button>
                    <Link to={'/Productos/Remeras'}>Remeras</Link>
                    <Link to={'/Productos/Pantalones'}>Pantalones</Link>
                    <Link to={'/Productos/Zapatillas'}>Zapatillas</Link>
                    </button>
                    <button>
                        <p>hola</p>
                        </button>
                        </nav>
                        </>
    );
}