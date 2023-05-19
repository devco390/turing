import Brands from '../brands';
import Image from 'next/image';

const HeaderSliderArea = ({ data }) => {

    return (
        <section className="header-slider-area">
            <div className="hero">
                <div className="container">
                    <h3 className='hero__why'>{data.why}</h3>
                    <h1 className='hero__how'>{data.how}</h1>
                    <p className='hero__what'>{data.what}</p>
                    <div className="container hero__button">
                        <button type="button" className="slide-btn">
                            <a href={data.button.link}>
                                {data.button.title}
                            </a>
                        </button>
                        <Brands />
                    </div>
                </div>
            </div>

            <div id="carousel-example-generic" className="carousel slide carousel-fade" data-ride="carousel">

                <div className="carousel-inner" role="listbox">
                    {
                        data.cards.map(({ id, active, image }) => {
                            const activeClass = active ? 'active' : '';
                            return (
                                <div key={id} className={`item ${activeClass}`}>
                                    <div className={`single-slide-item slide-${id}`} >
                                        <Image
                                            className='single-slide-item__image'
                                            src={image.url}
                                            alt={image.alt}
                                            layout={'fill'}
                                        />
                                    </div>
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