const products = [
    {
        id: '1',
        name:'buzo 1',
        price: 40000,
        category: 'buzos',
        img: require('./components/ItemListContainer/img/650w_DriftersPDP_Thrasher_APP_TRSH340400-080_Shot11.jpg'),
        stock: 50,
        description: 'buzitoo',
    },
    {
        id: '2',
        name:'buzo 2',
        price: 20000,
        category: 'buzos',
        img: require('./components/ItemListContainer/img/Buzos-1x1-BAJA-79-scaled.webp'),
        stock: 15,
        description: 'buzitoo',
    },
    {
        id: '9',
        name:'buzardo',
        price: 25000,
        category: 'buzos',
        img: require('./components/ItemListContainer/img/wonder-day-childrens-drawings-diver-49.jpg'),
        stock: 125,
        description: 'buzitoo',
    },
    {
        id: '3',
        name:'pantalon',
        price: 13000,
        category: 'pantalones',
        img: require('./components/ItemListContainer/img/pantalon2.webp'),
        stock: 10,
        description: 'pantaloncito',
    },
    {
        id: '4',
        name:'pantalon2',
        price: 15000,
        category: 'pantalones',
        img: require('./components/ItemListContainer/img/pantalon1.jpg'),
        stock: 100,
        description: 'pantaloncito',
    },
    {
        id: '8',
        name:'pantaloncito',
        price: 13000,
        category: 'pantalones',
        img: require('./components/ItemListContainer/img/adobe_post_20211009_0909480-88619974794541551-bb7930d802b6e3fc1616345587372014-640-0.png'),
        stock: 10,
        description: 'pantaloncito',
    },
    {
        id: '5',
        name:'remeritaa',
        price: 5500,
        category: 'remeras',
        img: require('./components/ItemListContainer/img/remera1.jpg'),
        stock: 55,
        description: 'remerita',
    },
    {
        id: '6',
        name:'remera carita',
        price: 8600,
        category: 'remeras',
        img: require('./components/ItemListContainer/img/remera11.jpeg'),
        stock: 13,
        description: 'reme',
    },
    {
        id: '7',
        name:'remera we',
        price: 7600,
        category: 'remeras',
        img: require('./components/ItemListContainer/img/7309136.jpg'),
        stock: 31,
        description: 'reme',
    }
]

export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products)
        },500)
    }
    )
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}

export const getProductsByCategory = (productCategory) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === productCategory))
        }, 500)
    })
}