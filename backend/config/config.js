
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
        variation: {
            item: {},
            errors: "",
            fetching: false,
        },
    },
    // variation: {
    //     attributes: {},
    //     description: "",
    //     id: 0,
    //     images: [],
    //     name: "",
    //     price_override: "",
    //     product_id: 0,
    //     size: "",
    //     sizes: [],
    //     quantity: 0,
    // }
};
export default config;