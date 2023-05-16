import Image from 'next/image';

const Gallery = ({ data }) => {

    const { title, image1, image2, image3, image4, image5 } = data;

    return (
        <section id="gallery" className="gallery">
            <div className="container">
                <div className="gallery-details">
                    <div className="gallery-header text-left">
                        <h2>{title}</h2>
                    </div>
                    <div className="gallery-content">
                        <div className="gallery-content">
                            <div className="isotope">
                                <div className="row">
                                    <div className=" col-md-4 col-sm-12">
                                        <div className="item big-height">
                                            <Image src={image1.url} alt={image1.alt} layout={'fill'} />
                                        </div>
                                    </div>
                                    <div className="col-md-8 col-sm-12">
                                        <div className="row">
                                            <div className="col-sm-6 col-xs-12">
                                                <div className="item">
                                                    <Image src={image2.url} alt={image2.alt} layout={'fill'} />
                                                </div>
                                            </div>
                                            <div className="col-sm-6 col-xs-12">
                                                <div className="item">
                                                    <Image src={image3.url} alt={image3.alt} layout={'fill'} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-6 col-xs-12">
                                                <div className="item">
                                                    <Image src={image4.url} alt={image4.alt} layout={'fill'} />
                                                </div>
                                            </div>
                                            <div className="col-sm-6 col-xs-12">
                                                <div className="item">
                                                    <Image src={image5.url} alt={image5.alt} layout={'fill'} />
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Gallery