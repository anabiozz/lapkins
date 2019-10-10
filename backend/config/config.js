
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
            addedItems: [],
            errors: "",
            fetching: false,
            isProductAdded: false,
            total: 0,
        },
        categories: {
            categories: {},
            errors: "",
            fetching: false,
        },
        products: {
            errors: "",
            fetching: false,
            products: [],
        },
        variant: {
            errors: "",
            fetching: false,
            variant: {},
        },
    },
}
export default config;