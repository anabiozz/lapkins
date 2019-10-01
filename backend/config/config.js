
const host = process.env.SERVER;
const port = 8080; //process.env.SERVER_PORT

const config = {
    server: {
        production: 'localhost',
        port: port,
        develope: 'localhost'
    },
    initialState: {
        path: "",
    },
}
export default config;