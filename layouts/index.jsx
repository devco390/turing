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

    useEffect(() => {
        // 1. Scroll To Top
        $(window).on("scroll", function () {
            if ($(this).scrollTop() > 600) {
                $(".return-to-top").fadeIn();
            } else {
                $(".return-to-top").fadeOut();
            }
        });
        $(".return-to-top").on("click", function () {
            $("html, body").animate(
                {
                    scrollTop: 0,
                },
                1500
            );
            return false;
        });

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
            <WeDo data={data.weDo} />
            <Statistics data={data.statistics} />
            <Gallery data={data.gallery} />
            <Contact data={data.contact} />
            <HMFooter data={data.footer} />
            <FooterCopyright data={data.footerCopyright} />

            <Loading data={data.loading} />


            <script src="assets/js/jquery.min.js"></script>

            <script
                type="text/javascript"
                src="https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js"
            ></script>

            <script type="text/javascript" src="assets/js/bootstrap.min.js"></script>

            <script src="assets/js/bootsnav.js"></script>

            <script
                src="assets/js/jquery.hc-sticky.min.js"
                type="text/javascript"
            ></script>

            <script
                type="text/javascript"
                src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.min.js"
            ></script>

            <script src="assets/js/jquery.counterup.min.js"></script>
            <script src="assets/js/waypoints.min.js"></script>

            <script type="text/javascript" src="assets/js/jak-menusearch.js"></script>
        </>


    )
}

export default Layout;