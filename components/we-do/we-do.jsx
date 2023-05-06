const WeDo = ({ data }) => {
    const { title, description, items } = data;

    return (
        <section className="we-do" id="about">
            <div className="container">
                <div className="we-do-details">
                    <div className="section-header text-center">
                        <h2>{title}</h2>
                        <p>{description}</p>
                    </div>
                    <div className="we-do-carousel">
                        <div className="row">
                            {
                                items.map((item) => {
                                    return (
                                        <div className="col-sm-3 col-xs-12" key={item.id}>
                                            <div className="single-we-do-box text-center">
                                                <div className="we-do-description">
                                                    <div className="we-do-info">
                                                        <div className="we-do-img">
                                                            <img className={`we-do-img-${item.id}`} src={item.imageUrl} alt={item.title} />
                                                        </div>
                                                        <div className="we-do-topics">
                                                            <h2>
                                                                {item.title}
                                                            </h2>
                                                        </div>
                                                    </div>
                                                    <div className="we-do-comment">
                                                        <p>
                                                            {item.description}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default WeDo