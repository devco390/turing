import Logo from '../logo'
import CalltoAction from '../call-to-actions/call-to-action'

const Menu = ({ data, callToActions }) => {
    return (
        <section id="menu">
            <div className="container">
                <div className="menubar">
                    <nav className="navbar navbar-default">


                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <a href="#home" aria-label="Link to home">
                                <Logo />
                            </a>
                        </div>

                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1" style={{ paddingLeft: '3rem' }}>
                            <ul className="nav navbar-nav navbar-right">
                                {data.items.map((item, index) => {
                                    return <li key={index} className="smooth-menu"><a href={item.link}>{item.text}</a></li>
                                })
                                }
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>

            <CalltoAction data={callToActions} />

        </section>
    )
}

export default Menu