import { useEffect } from 'react'

import Menu from '../components/menu/menu'
import HeaderSliderArea from '../components/header-slider-area/header-slider-area'
import WeDo from '../components/we-do/we-do'
import Statistics from '../components/statistics/statistics'
import Gallery from '../components/gallery/gallery'
import Contact from '../components/contact/contact'
import HMFooter from '../components/hm-footer/hm-footer'
import FooterCopyright from '../components/footer-copyright/footer-copyright'
import Loading from '../components/loading/loading'

const Layout = ({ data }) => {

    const setIp = () => {
        if (window && fetch) {
            const url = 'https://ip-s-app.vercel.app/ips';

            const nuevoPost = {
                url: window.location.href,
                reloaded: false
            };

            const opciones = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(nuevoPost),
            };

            fetch(url, opciones)
                .then(response => response.json())
                .catch(error => {
                    console.log(error);
                });
        }


    }

    useEffect(() => {

        setIp();

        // 2 . hcsticky

        $("#menu").hcSticky();

        // 3. counter
        $(window).on("load", function () {
            $(".counter").counterUp({
                delay: 10,
                time: 3000,
            });
        });

        $("li.smooth-menu a").bind("click", function (event) {
            event.preventDefault();
            var anchor = $(this);
            $("html, body")
                .stop()
                .animate(
                    {
                        scrollTop: $(anchor.attr("href")).offset().top - -1,
                    },
                    1200,
                    "easeInOutExpo"
                );
        });

        $("body").scrollspy({
            target: ".navbar-collapse",
            offset: 0,
        });
    }, []);

    return (
        <>
            <div id="home"></div>
            <Menu data={data.menu} callToActions={data.callToActions} />
            <HeaderSliderArea data={data.headerSliderArea} />
            {/* <WeDo data={data.weDo} /> */}
            <Statistics data={data.statistics} />
            <Gallery data={data.gallery} />
            <Contact data={data.contact} />
            <HMFooter data={data.footer} />
            <FooterCopyright data={data.footerCopyright} />

            <Loading data={data.loading} />


            <script src="assets/js/jquery.min.js" />

            <script
                type="text/javascript"
                src="https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js" />

            <script type="text/javascript" src="assets/js/bootstrap.min.js" />

            <script
                src="assets/js/jquery.hc-sticky.min.js"
                type="text/javascript" />

            <script
                type="text/javascript"
                src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.min.js"
            />

            <script src="assets/js/jquery.counterup.min.js" />
            <script src="assets/js/waypoints.min.js" />

            <script type="text/javascript" src="assets/js/jak-menusearch.js" />
        </>


    )
}

export default Layout;