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
                <div id="scroll-Top">
                    <i className="fa fa-angle-double-up return-to-top" id="scroll-top" data-toggle="tooltip" data-placement="top" title="" data-original-title="Back to Top" aria-hidden="true"></i>
                </div>
            </div>

        </footer >
    )
}

export default FooterCopyright