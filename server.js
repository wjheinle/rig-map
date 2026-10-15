const express = require('express');
const compression = require('compression');
const path = require('path');

const app = express();
app.disable('x-powered-by');
app.use(compression());
app.get('/healthz', (_req, res) => res.json({ ok: true }));
app.use(express.static(path.join(__dirname, 'public'), { maxAge: '1h' }));
app.get('*', (_req, res) => res.sendFile(path.join(__dirname, 'public', 'index.html')));

const port = process.env.PORT || 3000;
app.listen(port, '0.0.0.0', () => console.log(`rig-map listening on ${port}`));
