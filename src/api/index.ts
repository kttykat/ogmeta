import {getHtml} from '../utils/template';
import {getScreenshot} from '../utils/pptr';
import {schema} from '../utils/schema';
import express from 'express'

const app = express()
const PORT = 7234
const isDev = false;

app.use("/", async (req,res) => {
	const result = schema.safeParse(req.query);

	if (!result.success) {
		res.status(400).end('INVALID_QUERY');
		return;
	}

	const {type, ...options} = result.data;
	//@ts-ignore
	const html = getHtml(options);
	const file = await getScreenshot(html, type, isDev);

	res
		.status(200)
		.setHeader('Content-Type', `image/${type}`)
		.setHeader('Cache-Control', "public, immutable, no-transform, s-maxage=3600, max-age=3600")
		.end(file);
})

app.listen(PORT, () => {
	console.log("Ogmeta online")
})
