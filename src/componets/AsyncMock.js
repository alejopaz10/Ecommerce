// src/componets/AsyncMock.js

const products = [
    {
        id: '1',
        stock: 20,
        name: 'Zapatillas Handball Spezial Verde',
        price: 182000,
        category: 'zapatillas',
        img: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/4a7e0e46d55a4f02aa77a240aae87ce6_9366/Zapatillas_Handball_Spezial_Verde_IG6183_01_standard.jpg'
    },
    {
        id: '2',
        stock: 24,
        name: 'Zapatillas Handball Spezial Rosa',
        price: 192000,
        category: 'zapatillas',
        img: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/285cc1a40b1d417c89a10b14b8be6cfd_9366/Zapatillas_Handball_Spezial_Rosa_IF6561_01_standard.jpg'
    },
    {
        id: '3',
        stock: 30,
        name: 'Zapatillas Handball Spezial Rojo',
        price: 192000,
        category: 'zapatillas',
        img: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/685ed00544c04291bc642f27b1056694_9366/Zapatillas_Handball_Spezial_Rojo_IG6191_01_standard.jpg'
    }
];

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products);
        }, 300);
    });
};

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(product => product.category === categoryId));
        }, 300);
    });
};

export const getProductsByid = (productoId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productoId));
        }, 300);
    });
};





