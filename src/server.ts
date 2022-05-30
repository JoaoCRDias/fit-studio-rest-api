import 'dotenv/config';

import express from 'express';
import bodyParser from 'body-parser';

const app = express();

app.set('port', process.env.APP_PORT);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(app.get('port'), () => {
  console.log(`   Server listening on port ${process.env.APP_PORT}\n`);
  console.log('   Press CTRL-C to stop\n');
});

export default app;
