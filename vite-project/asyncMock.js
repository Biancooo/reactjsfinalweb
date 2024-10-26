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