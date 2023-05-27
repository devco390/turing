import Logo from '../logo'

const HMFooter = ({ data }) => {
  const { title, usefulLinks } = data;

  return (
    <section className="hm-footer">
      <div className="container">
        <div className="hm-footer-details">
          <div className="row">
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className="hm-footer-widget">
                <div className="hm-foot-title ">
                  <div className="logo">
                    <a href="#home" aria-label="Link to home">
                      <Logo isWhite={true}/>
                    </a>
                  </div>
                </div>
                <div className="hm-foot-para">
                  <p>
                    {title}
                  </p>
                </div>
              </div>
            </div>
            <div className=" col-md-2 col-sm-6 col-xs-12">
              <div className="hm-footer-widget">
                <div className="hm-foot-title">
                  <h4>{usefulLinks.title}</h4>
                </div>
                <div className="footer-menu ">
                  <ul className="">
                    {usefulLinks.links.map((link, index) => {
                      return <li key={index}><a href={link.link} >{link.text}</a></li>
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default HMFooter