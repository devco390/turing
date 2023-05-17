import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html>
            <Head>

                <link rel="shortcut icon" type="image/x-icon" href="favicon.ico" />

                <link rel="stylesheet" href="https://cdn.linearicons.com/free/1.0.0/icon-font.min.css" />

                <link rel="stylesheet" href="assets/css/animate.css" />

                <link rel="stylesheet" href="assets/css/owl.carousel.min.css" />
                <link href="assets/css/owl.theme.default.min.css" rel="stylesheet" />

                <link rel="stylesheet" href="assets/css/bootstrap.min.css" />

                <link rel="stylesheet" href="assets/css/responsive.css" />

                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />

                <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@600;700&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400,400i,500,600,700&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400,400i,500,600,700&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400,400i,500,600,700&display=swap" rel="stylesheet" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}