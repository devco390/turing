import Brands from '../brands'

const HeaderSliderArea = () => {

    const data = {
        title: 'Mantenimiento de <span>computadores</span> a domicilio',
        list: {
            title: 'Te ayudamos a:',
            items: ['Reparar y optimizar tu computador', 'Mantenimiento preventivo', 'Formatear Windows o Mac', 'Instalar programas']
        },
        cards: [
            {
                id: 1,
                title: 'Mantenimiento y reparación',
                active: true
            },
            {
                id: 2,
                title: 'Instalación de programas',
                active: false
            }
        ],
        buttonTitle: 'Llama Ahora',
    }

    return (
        <section className="header-slider-area">
            <div className="hero">
                <div className="container">
                    <h1 className="hero__title" dangerouslySetInnerHTML={{ __html: data.title }} />
                    <h3 className="hero__list--title">{data.list.title}</h3>
                    <ul className="hero__list">
                        {data.list.items.map((item, index) => {
                            return <li key={index}>{item}</li>
                        })
                        }
                    </ul>
                    <div className="container hero__button">
                        <button type="button" className="slide-btn">
                            {data.buttonTitle}
                        </button>
                        <Brands />
                    </div>
                </div>
            </div>

            <div id="carousel-example-generic" className="carousel slide carousel-fade" data-ride="carousel">

                <div className="carousel-inner" role="listbox">
                    {
                        data.cards.map(({ id, title, active }) => {
                            const activeClass = active ? 'active' : '';
                            return (
                                <div key={id} className={`item ${activeClass}`}>
                                    <div className={`single-slide-item slide-${id}`} />
                                </div>
                            )
                        })
                    }
                </div>

            </div>

        </section>

    )
}

export default HeaderSliderArea