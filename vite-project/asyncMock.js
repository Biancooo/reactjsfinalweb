const products = [
    {
        id: 1,
        title: 'Remera',
        price: '1000',
        category: 'deportes',
        description: 'talles: XL, L, M, S y XS',
        image:
        'https://lafabricaderemeras.com.ar/wp-content/uploads/2023/02/2-REMERAS-DEPORTIVAS-150x150.jpg',
    },
    {
        id: 2,
        title: 'Pantalón',
        price: '2000',
        category: 'deportes',
        description: 'talles: XL, L, M, S y XS',
        image:
        'https://www.sportscar.com/blog/wp-content/uploads/2022/05/sports-car-pantalones-deportivos-150x150.jpg',
    },
    {
        id: 3,
        title: 'Zapato',
        price: '3000',
        category: 'deportes',
        description: 'talles: XL, L, M, S y XS',
        image:
        'https://www.sportscar.com/blog/wp-content/uploads/2022/05/sports-car-zapatos-deportivos-150x150.jpg',
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