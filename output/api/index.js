"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const template_1 = require("../utils/template");
const pptr_1 = require("../utils/pptr");
const schema_1 = require("../utils/schema");
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = 7234;
const isDev = false;
app.use("/", async (req, res) => {
    const result = schema_1.schema.safeParse(req.query);
    if (!result.success) {
        res.status(400).end('INVALID_QUERY');
        return;
    }
    const { type, ...options } = result.data;
    //@ts-ignore
    const html = (0, template_1.getHtml)(options);
    const file = await (0, pptr_1.getScreenshot)(html, type, isDev);
    res
        .status(200)
        .setHeader('Content-Type', `image/${type}`)
        .setHeader('Cache-Control', "public, immutable, no-transform, s-maxage=3600, max-age=3600")
        .end(file);
});
app.listen(PORT, () => {
    console.log("Ogmeta online");
});
//# sourceMappingURL=index.js.map