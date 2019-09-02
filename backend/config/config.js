
const host = process.env.SERVER;
const port = process.env.SERVER_PORT;

const config = {
    server: {
        production: host,
        port: port,
        develope: '127.0.0.1'
    },
    initialState: {
        path: "",
    },
}
export default config;