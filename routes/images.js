const express = require('express'),
	fs = require('fs'),
	{promisify} = require('util'),
	globModule = require('glob'),
	glob = promisify(globModule),
	path = require('path'),
	router = express.Router();

router.use(express.static(process.env.GAMES_PATH));

router.get('/list', async (rec, res,) => {
	// const files = await glob('**/*.{png,jpg,jfif}', {cwd: process.env.GAMES_PATH});
	const files = await glob('**/box-art-front.{png,jpg,jfif}', {cwd: process.env.GAMES_PATH});
	res.json(files);
})

module.exports = router;