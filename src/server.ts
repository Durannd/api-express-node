import express from 'express';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('<button>Click Me</button>');
});

export {app};
export default app;