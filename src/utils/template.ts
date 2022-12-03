// prettier-ignore
const css = (dark: boolean) => `
    @import url('https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,200;0,6..72,300;0,6..72,400;0,6..72,500;0,6..72,600;0,6..72,700;0,6..72,800;1,6..72,200;1,6..72,300;1,6..72,400;1,6..72,500;1,6..72,600;1,6..72,700;1,6..72,800&display=swap');

    * {
        margin: 0;
        padding: 0;
    }

    body {
        font-family: 'Newsreader', serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        height: 100vh;
        width: 100vw;

        ${dark ? `
            background: #1e191b;
            color: #F9ede3;
        ` : `
            background: #F9ede3;
            color: #1e191b;
        `}
    }

    .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-left: 8%;
        padding-right: 3%;
        height: 100%;
    }

    .title {
        opacity: 0.9;
        font-size: 9em;
        font-weight: 700;
        line-height: 1.2;
    }

    .subtitle {
        margin-left: 4px;
        margin-top: 10px;
        font-size: 2.8rem;
        opacity: 0.5;
        font-weight: 500;
        line-height: 1;
    }

    .badge {
        background-color: #dcfce7;
        color: #166534;
        font-weight: 500;
        font-size: 1.8rem;
        padding: 0.8rem 2rem;
        width: 220px;
        text-align: center;
    }

    .footer {
        display: flex;
        align-items: center;
        position: absolute;
        bottom: 75px;
    }

    .footer span {
        font-size: 2.5rem;
        opacity: 0.8;
        font-weight: 700;
        line-height: 1;
        margin-left: 20px;
    }
`;

export function getHtml({title, desc, dark = true}: {title: string; desc?: string; dark: boolean}) {
	return `
        <!DOCTYPE html>
        <html>
            <head>
                <meta charset="utf-8">
                <title>digital garden ogmeta - originally from hop</title>
                <meta name="viewport" content="width=device-width, initial-scale=1">
                <style>
                    ${css(dark)}
                </style>
            </head>

            <body>
                <div class="container">
                    <h1 class="title">${title}</h1>
                    ${desc ? `<h2 class="subtitle">${desc}</h2>` : ''}
                </div>
            </body>
        </html>
    `;
}
