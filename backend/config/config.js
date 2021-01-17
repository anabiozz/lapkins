import state from './config.state';

// const host = process.env.SERVER;
const port = 8085; //

const config = {
    server: {
        production: 'localhost',
        port: port,
        development: 'localhost'
    },
    initialState: state,

};
export default config;