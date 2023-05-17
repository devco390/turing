const Contact = ({ data }) => {
    const { title, description, contactInfo, address, phone, email } = data;

    return (
        <section id="contact" className="contact">
            <div className="container">
                <div className="contact-details">
                    <div className="section-header contact-head  text-center">
                        <h2>{title}</h2>
                        <p>
                            {description}
                        </p>
                    </div>
                    <div className="contact-content">
                        <div className="row">
                            <div className="col-sm-offset-1 col-sm-5">
                                <div className="single-contact-box">
                                    <div className="contact-right">
                                        <div className="contact-adress">
                                            <div className="contact-office-address">
                                                <h3>{contactInfo}</h3>
                                                <a href={address.link}>
                                                    <p>
                                                        {address.title}
                                                    </p>
                                                </a>
                                                <div className="contact-online-address">
                                                    <div className="single-online-address">
                                                        <a href={phone.linnk}>
                                                            <i className="single-online-address__icon single-online-address__icon--phone"></i>
                                                            {phone.title}
                                                        </a>
                                                    </div>
                                                    <div className="single-online-address">
                                                        <a href={email.link}>
                                                            <i className="single-online-address__icon single-online-address__icon--email"></i>
                                                            <span>{email.title}</span>
                                                        </a>
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
            </div>

        </section>
    )
}

export default Contact