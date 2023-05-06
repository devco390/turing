const phoneFormatted = '319 601 52 11';
const phone = '3196015211';
const phoneWhatsapp = '573196015211';
const whatsappBAseUrl = 'https://wa.me/'
const linkCall = `tel:${phone}`

const data = {
    title: 'Mantenimiento y reparación de computadores a domicilio',
    menu: {
        items: [
            { link: '#home', text: 'Inicio' },
            { link: '#about', text: 'Nuestros servicios' },
            { link: '#service', text: 'Servicios' },
            { link: '#project', text: 'Galería' },
            { link: '#contact', text: 'Contáctenos' },
        ]
    },
    headerSliderArea: {
        why: 'Expertos en tecnología a tu servicio',
        how: 'Mantenimiento y Reparación de Computadores a Domicilio',
        what: 'Optimización y Mantenimiento Preventivo, Formateo Windows o Mac, Instalación de Programas',
        cards: [
            {
                id: 1,
                active: true
            },
            {
                id: 2,
                active: false
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
    }
}

export default data;