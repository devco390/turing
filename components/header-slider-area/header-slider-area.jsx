import Brands from '../brands'

const HeaderSliderArea = () => {

    const data = {
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
        buttonTitle: 'Llama Ahora',
    }

    return (
        <section className="header-slider-area">
            <div className="hero">
                <div className="container">
                    <h3 className='hero__why'>{data.why}</h3>
                    <h1 className='hero__how'>{data.how}</h1>
                    <p className='hero__what'>{data.what}</p>
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