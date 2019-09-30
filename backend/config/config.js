
const host = process.env.SERVER;
const port = 8080; //process.env.SERVER_PORT

const config = {
    server: {
        production: '127.0.0.1',
        port: port,
        develope: '127.0.0.1'
    },
    initialState: {
        path: "",
    },
}
export default config;