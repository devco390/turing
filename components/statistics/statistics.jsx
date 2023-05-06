const Statistics = ({ data }) => {

    const { daysWorked, projectFinished, coffeeCup, clientSitisfied } = data;

    return (
        <section className="statistics">
            <div className="container">
                <div className="statistics-counter ">
                    <div className="col-md-3 col-sm-6">
                        <div className="single-ststistics-box">
                            <div className="statistics-img">
                                <img src="assets/images/counter/counter1.png" alt="counter-icon" />
                            </div>
                            <div className="statistics-content">
                                <div className="counter">{daysWorked.count}</div>
                                <h3>{daysWorked.text}</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="single-ststistics-box">
                            <div className="statistics-img">
                                <img src="assets/images/counter/counter2.png" alt="counter-icon" />
                            </div>
                            <div className="statistics-content">
                                <div className="counter">{projectFinished.count}</div>
                                <h3>{projectFinished.text}</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="single-ststistics-box">
                            <div className="statistics-img">
                                <img src="assets/images/counter/counter3.png" alt="counter-icon" />
                            </div>
                            <div className="statistics-content">
                                <div className="counter">{coffeeCup.count}</div>
                                <h3>{coffeeCup.text}</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="single-ststistics-box">
                            <div className="statistics-img">
                                <img src="assets/images/counter/counter4.png" alt="counter-icon" />
                            </div>
                            <div className="statistics-content">
                                <div className="counter">{clientSitisfied.count}</div>
                                <h3>{clientSitisfied.text}</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Statistics