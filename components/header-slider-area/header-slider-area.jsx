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
                title: 'Instalación <br />de programas',
                active: false
            }
        ],
        buttonTitle: '¡Llama Ahora!',
    }

    return (
        <section className="header-slider-area">
            <div className="tanjiro">
                <div className="container">
                    <h1 className="tanjiro__title">{data.title}</h1>
                </div>
            </div>

            <div className="tanjiro tanjiro__button">
                <div className="container">
                    <button type="button" className="slide-btn">
                        {data.buttonTitle}
                    </button>
                </div>
            </div>

            <div id="carousel-example-generic" className="carousel slide carousel-fade" data-ride="carousel">


                <ol className="carousel-indicators">
                    <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
                    <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                </ol>


                <div className="carousel-inner" role="listbox">
                    {
                        data.cards.map(({ id, title, active }) => {
                            const activeClass = active ? 'active' : '';
                            return (
                                <div className={`item ${activeClass}`}>
                                    <div className={`single-slide-item slide-${id}`}>
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-sm-12">
                                                    <div className="single-slide-item-content">
                                                        <h2 dangerouslySetInnerHTML={{ __html: title }} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>


                <a className="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
                    <span className="lnr lnr-chevron-left"></span>
                </a>
                <a className="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
                    <span className="lnr lnr-chevron-right"></span>
                </a>
            </div>

        </section>

    )
}

export default HeaderSliderArea