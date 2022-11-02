import serverless from 'serverless-http';
import express from 'express';

const app = express();

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    hello: 'hi!',
  });
});

app.use('/.netlify/functions/api', router);

export const handler = serverless(app);
