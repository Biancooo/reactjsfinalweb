import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
        <>
        <nav
        style={{
            display: 'wrap',
            gap: 10,
            justifyContent: 'auto',
            marginBottom: 30,
        }}
        >
                <button>
                <Link to={'/Menu'}>Menu</Link>
                </button>
                <button>
                    <Link to={'/Productos/Pantalones'}>Pantalones</Link> <gap></gap>
                    <Link to={'/Productos/Remeras'}>Remeras</Link> <gap></gap>
                    <Link to={'/Productos/Zapatillas'}>Zapatillas</Link>
                        </button>
                        </nav>
                        </>
    );
} 