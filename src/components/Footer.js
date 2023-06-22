import "./footer.css";

const Footer = () => (
    <>
        <main>
            <div className="footer">
                <div className="footerFirstRow">
                    <h2 className="orange">Placer</h2>
                    <p className="orangemotto">
                        our main motto is discover endless opportunities with
                        Placer. Where Students Thrive and Alumni Guide
                    </p>
                </div>

                <div className="FooterLeft">
                    <div className="footerSec">
                        <h2 className="fThirdHeading">Useful Links</h2>

                        <ul className="fu">
                            <li>Home</li>
                            <li> Courses</li>
                            <li>About us</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div className="footerThird">
                        <h2 className="fThirdHeading">Social Media</h2>
                        <ul className="fu">
                            <li>Instagram</li>
                            <li>Facebook</li>
                            <li>Youtube</li>
                            <li>Ignite</li>
                        </ul>
                    </div>
                </div>
            </div>
        </main>
    </>
);

export default Footer;
