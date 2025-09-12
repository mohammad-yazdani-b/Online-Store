import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-container">
          <div className="ourstore-part">
            <i class="fa-solid fa-cart-shopping"></i>
            <h4>فروشگاه ما</h4>
            <p>فروشگاه ما ارائه دهنده بهترین کالاها برای شما</p>
            <div className="social">
              <Link>
                <i class="fa-brands fa-telegram"></i>
              </Link>
              <Link>
                <i class="fa-brands fa-instagram"></i>
              </Link>
              <Link>
                <i class="fa-brands fa-whatsapp"></i>
              </Link>
            </div>
          </div>
          <div className="contactus-part">
            <div className="email">
              <i class="fa-solid fa-envelope"></i>
              <p>example@gmail.com</p>
            </div>
            <div className="phone">
              <i class="fa-solid fa-phone"></i>
              <p>09151234567</p>
            </div>
          </div>
          <div className="address-part">
            <i class="fa-solid fa-location-dot"></i>
            <h4>آدرس ما</h4>
            <p>تهران - خیابان ولیعصر - کوچه یاس</p>
          </div>
        </div>
      </footer>
      <div className="copy-write">
        تمامی حقوق این وب سایت متعلق به فروشگاه ما میباشد
      </div>
    </>
  );
};

export default Footer;
