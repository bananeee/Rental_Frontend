import React from 'react'
import { Link } from 'react-router-dom'

import style from './footer.module.css'

function Footer() {
    return (
        <footer>

            <div className={style.footerLeft}>

                <h3>Companylogo</h3>

                <div className={style.footerLink}>
                    <Link to="/">Home</Link>

                    <Link to="/">Home</Link>

                    <Link to="/">Home</Link>

                    <Link to="/">Home</Link>

                    <Link to="/">Home</Link>

                </div>

                <p className="footer-company-name">Company Name © 2015</p>
            </div>

            <div className={style.footerCenter}>

                <div className={style.footerItem}>
                    <i className="fa fa-map-marker"></i>
                    <p>444 S. Cedros Ave Solana Beach, California</p>
                </div>

                <div className={style.footerItem}>
                    <i className="fa fa-phone"></i>
                    <p>+1.555.555.5555</p>
                </div>

                <div className={style.footerItem}>
                    <i className="fa fa-envelope"></i>
                    <p><a href="mailto:support@company.com">support@company.com</a></p>
                </div>

            </div>

            <div className={style.footerRight}>
                <h3>About the company</h3>
                <p>Lorem ipsum dolor sit amet, conseur adiing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet. </p>

                <div className={style.footerIcon}>
                    <i className="fab fa-facebook-f"></i>
                    <i className="fab fa-twitter"></i>
                    <i className="fab fa-google-plus-g"></i>
                    <i className="fab fa-github"></i>
                    <i className="fab fa-instagram"></i>
                </div>

            </div>

        </footer>
    )
}

export default Footer
