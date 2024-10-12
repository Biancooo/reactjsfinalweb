// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCmB4tJVxz6IqdN4lzRJ2uBmxelDoAzOcw",
    authDomain: "coderhouse-reactjs-bfa89.firebaseapp.com",
    projectId: "coderhouse-reactjs-bfa89",
    storageBucket: "coderhouse-reactjs-bfa89.appspot.com",
    messagingSenderId: "911913160587",
    appId: "1:911913160587:web:310434d56205e76040298e",
    measurementId: "G-TMDLK0YVJS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//obtener un producto
export async function getSingleProduct(id) {
    const documentRef = doc(db, 'products', id);

    try {
        const snapshot = await getDoc(documentRef);
        if (snapshot.exists()) {
            return snapshot.data();
        } else {
            console.log('El documento no existe!');
        }
    } catch (error) {
        console.error('Error al obtener el documento: ', error);
    }
}

//obtener toda una coleccion
export async function getProducts() {
    try {
        const querySnapshot = await getDocs(collection(db, 'products'));
        if (querySnapshot.size !== 0) {
            const productsList = querySnapshot.docs.map(docu => {
                return {
                    id: docu.id,
                    ...docu.data(),
                };
            });
            return productsList;
        } else {
            console.log('Coleccion Vacia !');
        }
    } catch (error) {
        console.error('Error al obtener el documento: ', error);
    }
}

//filtros de precio
export async function filterProductsByPrice(price) {
    try {
        const filteredQuery = query(
            collection(db, 'products'),
            where('price', '<', price)
        );
        const querySnapshot = await getDocs(filteredQuery);
        if (querySnapshot.size !== 0) {
            const ProductsList = querySnapshot.docs.map((docu) => {
                return {
                    id: docu.id,
                    ...docu.data(),
                };
            });
            return ProductsList;
        } else {
            console.log('Coleccion Vacia!');
        }
    } catch (error) {
        console.log('Error al obtener el documento: ', error);
    }
}
