
const host = process.env.SERVER;
const port = 8080; //process.env.SERVER_PORT

const config = {
    server: {
        production: '0.0.0.0',
        port: port,
        develope: '0.0.0.0'
    },
    initialState: {
        cart: {
            items: [],
            isProductAdded: false,
            total: 0,
            errors: "",
            fetching: false,
        },
        categories: {
            item: {},
            errors: "",
            fetching: false,
        },
        products: {
            items: [],
            errors: "",
            fetching: false,
        },
        variant: {
            item: {},
            errors: "",
            fetching: false,
        },
    },
    variant: {
        attributes: {},
        description: "",
        id: 0,
        images: [],
        name: "",
        price_override: "",
        product_id: 0,
        size: "",
        sizes: [],
        quantity: 0,
    }
}
export default config;