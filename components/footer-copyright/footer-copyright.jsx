const FooterCopyright = ({ data }) => {
    const { allRights, sitemap } = data;

    return (
        <footer className="footer-copyright">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="foot-copyright">
                            <p>
                            Copyright &copy; {allRights}
                            </p>
                        </div>
                    </div>
                    <div className="col-sm-12">
                        <div className="foot-menu">
                            <ul>
                                <li><a href={sitemap.link} >{sitemap.title}</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </footer >
    )
}

export default FooterCopyright