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
                    <Link to={'/Productos'}>hola</Link>
                    </button>
                    <button>
                        <p>hola</p>
                        </button>
                        </nav>
                        </>
    );
}