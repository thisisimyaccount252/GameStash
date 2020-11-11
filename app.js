require('dotenv').config();

const express = require('express'),
	uuid = require('uuid'),
	imageRouter = require('./routes/images'),
	app = express();

app.use((req, res, next) => {
	req.requestId = uuid.v4();
	// console.log('url: ', req.url);
	next();
});

app.get('/me', (req, res) => {
	res.json({
		requestId: req.requestId,
		userAgent: req.get('User-Agent'),
	})
})

app.use(express.static('./public'));
app.use('/images', imageRouter);

const port = 5010;
app.listen(port, () => {
	console.log(`server listening on port ${port}`);
});
