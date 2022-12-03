import { getHtml } from '../utils/template';
import { schema } from '../utils/schema';
export default async function handler(req, res) {
    const result = schema.safeParse(req.query);
    if (!result.success) {
        res.status(400).end('INVALID_QUERY');
        return;
    }
    const { type, ...options } = result.data;
    const html = getHtml(options);
    res
        .status(200)
        .setHeader('Content-Type', 'text/html')
        .setHeader('Cache-Control', "public, immutable, no-transform, s-maxage=3600, max-age=3600")
        .end(html);
}
