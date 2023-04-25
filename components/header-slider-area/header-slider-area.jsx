import Brands from '../brands'

const HeaderSliderArea = () => {

    const data = {
        title: ' Mantenimiento de Computadoras',
        subtitle: 'en su casa u oficina',
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
                    <h1 className="hero__title" >{data.title}</h1>
                    {/* Te ayudamos... */}
                    <ul className="hero__list">
                        <li>Mantenimiento y reparación</li>
                        <li>Instalación de programas</li>
                        <li>Mejoramos tu computador</li>
                        <li>Soporte remoto</li>
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