import { rest } from 'msw';

const TARGET_URL = '/';

export const handlers = [
    // ヘルスチェック
    rest.get(TARGET_URL, (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({
                status: "ok",
            })
        );
    }),
];

