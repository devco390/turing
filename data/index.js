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
            { link: '#about', text: 'Sobre nosotros' },
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
    }
}

export default data;