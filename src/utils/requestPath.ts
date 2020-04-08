const NODE_EDV = process.env.NODE_ENV;

let REQUEST_PATH: string = '';

if (NODE_EDV === 'development') {
  REQUEST_PATH = 'http://127.0.0.1:3000';
} else {
  REQUEST_PATH = 'http://127.0.0.1';
}

export default REQUEST_PATH;