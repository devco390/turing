import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Logo from '../components/logo';


const NotFoundPage = () => {
    const router = useRouter();

    useEffect(() => {
        router.push('/404');
    }, []);

    return (
        <section style={{ padding: '2rem', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <Link href='https://www.turingcol.com'>
                <Logo />
            </Link>
            <figure style={{ paddingTop: '6rem' }}>
                <img src={'assets/images/not-found/this-is-fine.jpg'} alt={'This is fine!'} style={{ borderRadius: '50%', width: '280px', height: '280px' }} />
            </figure>

            <p style={{ paddingTop: '6rem' }}>¡HOUSTON! TENEMOS UN PROBLEMA.</p>

            <h1 style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>404</h1>

            <Link href='https://www.turingcol.com' >
                Volver al inicio
            </Link>

        </section>
    )
}

export default NotFoundPage