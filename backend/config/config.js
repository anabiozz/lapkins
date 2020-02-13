
const host = process.env.SERVER;
const port = 8080; //

const config = {
    server: {
        production: 'localhost',
        port: port,
        development: 'localhost'
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
};
export default config;