const phoneFormatted = '319 601 52 11';
const phone = '3196015211';
const phoneWhatsapp = '573196015211';
const whatsappBAseUrl = 'https://wa.me/';
const linkCall = `tel:${phone}`;
const email = 'turing.soporte@gmail.com';

const links = [
    { link: '#home', text: 'Inicio' },
    { link: '#about', text: 'Nuestros servicios' },
    { link: '#gallery', text: 'Galería' },
    { link: '#contact', text: 'Contáctanos' }
]

const data = {
    title: 'Expertos en tecnología a tu servicio',
    description: 'Realizamos Mantenimiento y Reparación de Impresoras a Domicilio Servicio Garantizado. Contamos con Técnicos Altamente Calificados en Todo Tipo de Computadores',
    menu: {
        items: links
    },
    headerSliderArea: {
        why: 'Expertos en tecnología a tu servicio',
        how: 'Mantenimiento y Reparación de Computadores a Domicilio',
        what: 'Optimización y Mantenimiento Preventivo, Formateo Windows o Mac, Instalación de Programas',
        cards: [
            {
                id: 1,
                active: true,
                image: {
                    url: '/assets/images/hero/slider-1.jpg',
                    alt: 'Hero image 1'
                }
            },
            {
                id: 2,
                active: false,
                image: {
                    url: '/assets/images/hero/slider-2.jpg',
                    alt: 'Hero image 2'
                }
            },
            {
                id: 3,
                active: false,
                image: {
                    url: '/assets/images/hero/slider-3.jpg',
                    alt: 'Hero image 3'
                }
            }
        ],
        button: {
            title: 'Llama Ahora',
            link: linkCall
        }
    },
    callToActions: {
        call: {
            title: phoneFormatted,
            link: linkCall
        },
        whatsapp: {
            title: 'Atención en Línea',
            link: `${whatsappBAseUrl}/${phoneWhatsapp}`
        }
    },
    weDo: {
        title: 'Nuestros servicios',
        description: `Nos especializamos en el mantenimiento de computadoras a domicilio en Bogotá. con soluciones adaptadas a tus necesidades, gracias a nuestro equipo de expertos en tecnología.`,
        items: [
            {
                id: 'repair',
                title: 'Mantenimiento y reparación',
                description: 'Te ayudamos con la reparación de tu computador o evita fallos con nuestros mantenimientos preventivos.',
                imageUrl: '/assets/svg/repair.svg'
            },
            {
                id: 'install',
                title: 'Instalación de programas',
                description: 'Deja en manos de nuestros profesionales la instalación de tus programas de diseño, Office y antivirus; para que puedas enfocarte en tu trabajo.',
                imageUrl: '/assets/svg/install.svg'
            },
            {
                id: 'optimization',
                title: 'Optimización de computadores',
                description: '¿Cansado de una computadora lenta? Acelera tu equipo con nuestra optimización especializada.',
                imageUrl: '/assets/svg/optimization.svg'
            },
            {
                id: 'support',
                title: 'Soporte remoto',
                description: 'Solucionamos tus problemas desde cualquier lugar con nuestro servicio de soporte remoto.',
                imageUrl: '/assets/svg/support.svg'
            }
        ]
    },
    statistics: {
        daysWorked: {
            count: 2556,
            text: 'Días trabajados'
        },
        projectFinished: {
            count: 326,
            text: 'Proyectos finalizados'
        },
        coffeeCup: {
            count: 1526,
            text: 'Tazas de café'
        },
        clientSitisfied: {
            count: 856,
            text: 'Clientes satisfechos'
        }
    },
    gallery: {
        title: 'Galería',
        image1: {
            url: '/assets/images/gallery/gallery-1.jpg',
            alt: 'portfolio image'
        },
        image2: {
            url: '/assets/images/gallery/gallery-2.jpg',
            alt: 'portfolio image'
        },
        image3: {
            url: '/assets/images/gallery/gallery-3.jpg',
            alt: 'portfolio image'
        },
        image4: {
            url: '/assets/images/gallery/gallery-4.jpg',
            alt: 'portfolio image'
        },
        image5: {
            url: '/assets/images/gallery/gallery-5.jpg',
            alt: 'portfolio image'
        },
    },
    contact: {
        title: 'Contáctanos',
        description: '¡Resuelve hoy tus problemas tecnológicos de manera rápida y eficiente!',
        contactInfo: 'Información de contacto',
        address: {
            title: 'Carrera 14 # 79 28 - oficina 303, Bogotá, Colombia',
            link: 'https://www.google.com/maps/place/Cra.+14+%23%2379-28,+Bogot%C3%A1/@4.6651519,-74.058919,17z/data=!3m1!4b1!4m5!3m4!1s0x8e3f9a5f748cde5f:0x76fcf58e20ef66b1!8m2!3d4.6651457!4d-74.0567303'
        },
        phone: {
            title: phoneFormatted,
            link: linkCall
        },
        email: {
            title: email,
            link: `mailto:${email}`
        }
    },
    footer: {
        title: 'Gracias por confiar en nosotros!',
        usefulLinks: {
            title: 'Enlaces útiles',
            links
        }
    },
    footerCopyright: {
        allRights: 'Turing tecnología 2023',
        sitemap: {
            title: 'Sitemap',
            link: 'https://www.turingcol.com/sitemap.xml'
        }
    },
    loading: {
        primaryTitle: '<span>¿Problemas</span> con tu <span>computadora?</span>',
        secondaryTitle: `<span>¡Nosotros</span> te <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ayudamos!`
    }
}

export default data;