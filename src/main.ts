import express, { Express, Request, Response } from 'express';

const app: Express = express();

app.get('/', (req: Request, res: Response) => {
  if (req) {
    return res;
  } else {
    return req;
  }
});

app.listen(3000);