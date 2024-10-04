const products = [
    {
        id: 1,
        title: 'Remera',
        price: '1000',
        category: 'Remeras',
        description: 'talles: XL, L, M, S y XS',
        image:
        'https://lafabricaderemeras.com.ar/wp-content/uploads/2023/02/2-REMERAS-DEPORTIVAS-150x150.jpg',
    },
    {
        id: 2,
        title: 'Pantalón',
        price: '2000',
        category: 'Pantalones',
        description: 'talles: XL, L, M, S y XS',
        image:
        'https://images.vexels.com/media/users/3/182538/isolated/lists/97e829ed9ae850ed48710c04f6bd6f13-gatito-lindo-gato.png',
    },
    {
        id: 3,
        title: 'Zapato',
        price: '3000',
        category: 'Zapatillas',
        description: 'talles: XL, L, M, S y XS',
        image:
        'https://images.vexels.com/media/users/3/182538/isolated/lists/97e829ed9ae850ed48710c04f6bd6f13-gatito-lindo-gato.png',
    },
];

export const getProducts = new Promise((resolve) => {
    setTimeout(() => {
        resolve(products);
    }, 2000);
    });

    export const getProduct = (id) => {
        return products.find((prod) => prod.id == id);
    };

    export const getCategory = (category) => {
        return products.filter((product) => product.category === category);
    };

    export const getProductos = () => {
        return products
    }