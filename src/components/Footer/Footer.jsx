import './Footer.scss'

function Footer() {
    return (
        <footer className="footer">
            <div className="top">
                <div className="items">
                    <h3>Tour Types</h3>
                    <span>Trekking</span>
                    <span>Culture Tour</span>
                    <span>Adventure Tour</span>
                    <span>Mountaineering</span>
                    <span>Day Tour and Activities</span>
                </div>
                <div className="items">
                    <h3>Links</h3>
                    <span>FAQ</span>
                    <span>T&C</span>
                    <span>Pages</span>
                    <span>Cookies</span>
                </div>
                <div className="items">
                    <h3>About</h3>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus eos veritatis consequuntur nostrum ipsa optio perferendis cum aut voluptatibus earum.
                    </span>
                </div>
                <div className="items">
                    <h3>Contact</h3>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus eos veritatis consequuntur nostrum ipsa optio perferendis cum aut voluptatibus earum.</span>
                </div>
            </div>

            <div className="bottom">
                <div className="left">
                    <span className='logo'>EpicTravels</span>
                    <span className="copyright">&#169; 2023, All Rights Reserved</span>
                </div>
                <div className="right">
                    <img src="/img/payment.png" alt="payment" />
                </div>
            </div>
        </footer>
    )
}

export default Footer