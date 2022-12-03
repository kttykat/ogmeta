"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = void 0;
const zod_1 = require("zod");
exports.schema = zod_1.z.object({
    title: zod_1.z.string(),
    desc: zod_1.z.string().optional(),
    type: zod_1.z.enum(['png', 'jpeg', 'webp']).default('jpeg'),
    dark: zod_1.z
        .enum(['true', 'false'])
        .default('false')
        .transform(value => value === 'true'),
});
//# sourceMappingURL=schema.js.map