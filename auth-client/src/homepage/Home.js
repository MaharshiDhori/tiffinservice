import React from 'react'
import "./Home.css";
import { Link } from 'react-router-dom';
//import img1 from "../../src/menu/img/chole.jpg";
import img1 from "../../src/homepage/img/tiffinHP.png";
import img2 from "../../src/homepage/img/Food_Dish1.png";

import img3 from "../../src/homepage/img/img4.jpg";
import img4 from "../../src/homepage/img/tiffin img.jpg";
import img5 from "../../src/homepage/img/tifin img 1.jpg";
import img6 from "../../src/homepage/img/tiffins.jpg";
import img7 from "../../src/homepage/img/dosa tifin img.jpg";

const disimg = [img3 , img4 , img5 , img6 , img7]

const Home = () => {
  const toggleCart = ()=>{
    
  }
return ( 

<>
<main id='Home'>
<header className="header">
  <nav>
    <Link to="/homepage" className="logo-name">Trifi Tiffin's</Link>
    <div className="home_menu_section">
  <a href="#homepage" className="active">HOME</a>
  <Link to="/menu">MENU</Link>
  <a href="#about_us">ABOUT US</a>
  <a href="#contactme">CONTACT</a>
  <div className="cart-profile">
    <Link to="#" onClick={toggleCart}><i className='bx bx-cart'></i></Link>
    <Link to="#" id="profile"><i className='bx bx-user'></i></Link>
    <Link to="/login" >Login</Link>
  </div>
</div>
  </nav>
</header>

<div className="cart-sidebar" id="cartSidebar">
  <h2>Your Cart</h2>
  <button className="close-cart" onClick={toggleCart}>✖</button>
  <div className="cart-items"></div>
  <p className="cart-total">Total: $<span id="total-price">0.00</span></p>
  <button className="checkout-btn" onClick={toggleCart}>Checkout</button>
</div>

<section className="homepage" id="homepage">
  <div className="decor-circle"></div>
  <div className="tiffin_homePg">
   {/* <img src="/homepage/img/tiffinHP.png" alt="tiffin" />*/}
    <img src={img1} alt="tiffin" />
  </div>
  <span className="mainDish-img">
   {/* <img src="/homepage/img/Food_Dish1.png" alt="dish" />*/}
    <img src={img2} alt="dish" />
  </span>
  <div className="DECOR">
    <div className="decor_trasp_circle-3"></div>
  </div>
  <div className="writing_box">
    <h1>Welcome to<br /> Trifi Tiffin's</h1>
    <pre className="quote">"We Serve The Taste You Love"</pre>
    <pre className="description">
Are you hungry? Don't wait!
Let's start to order now!
    </pre>
    <div className="buttons">
      <button className="Explore_Food">
        <a href="/menu">Explore Tiffin's</a>
      </button>
      <button className="Search">
        <a href="#contactme"><i className='bx bx-search-alt-2'></i>Reach us</a>
      </button>
    </div>
  </div>
</section>

<section className="about_us" id="about_us">
  <div className="abt_title">ABOUT US</div>
  <div className="welcome_quote">
    "Bringing home-cooked goodness to your doorstep – fresh, delicious, and made with love."
  </div>
  <div className="abtUs_img">
    {disimg.map((img, idx) => (
      <div className="abt_img" key={idx}>
        <img src={img} alt="tiffin" />
      </div>
    ))}
  </div>
  <div className="abt_content">
    <div className="welcome_msg">
      Welcome to Trifi Tiffin's, where we bring you the authentic taste of
      home-cooked meals delivered straight to your doorstep. Our mission
      is to make quality, nutritious, and affordable meals accessible to
      everyone, ensuring a convenient and delightful dining experience
      every day.
    </div>
    <div className="ourService_description">
      <h2>Our Vision:</h2>
      To redefine convenience in daily meals by connecting home chefs and
      food lovers, creating a seamless experience for customers, and
      empowering talented chefs to showcase their culinary skills.
      <br /><br />
      <h2>Our Services:</h2>
      Our platform brings together Two core modules to offer a smooth,
      efficient, and personalized experience: <br />
      <b>Our talented chefs</b>, who are also our sellers, bring their passion for cooking to your table. Whether you're craving a traditional dish or something more contemporary, they are here to craft home-cooked meals with fresh ingredients and authentic flavors. Sellers manage their own menus, set their prices, and ensure that each meal is prepared with care.<br />
      <b>Our valuable customers</b> are at the heart of everything we do. Whether you're a busy professional, a student, or anyone looking for convenient, homemade food, we offer you a wide variety of meal options to choose from. With just a few clicks, you can explore diverse meal plans, place an order, and enjoy a healthy, flavorful meal delivered directly to you.
    </div>
  </div>
</section>

<section className="contactme" id="contactme">
  <div className="contactUs_page">
    <div className="emailLinks">
      <div className="getinTouch-title">
        <h2>Let's get in touch</h2>
      </div>
      <div className="fillform-text">
        We’d love to hear from you! Whether it’s feedback, a query, or a custom request, we’re just a message away.<br />
        Your satisfaction matters to us. Reach out anytime, and we’ll be happy to assist
      </div>
      <div className="myemail">
        <div className="emailImg">
          <i className='bx bx-envelope' style={{ color: '#d3d6c8' }}></i>
        </div>
        <div className="Email">
          <a href="mailto:TrifiTiffins33@gmail.com">TrifiTiffins33@gmail.com</a>
        </div>
      </div>
    </div>

    <div className="contactForm">
      <div className="contact-title">
        <h2>Contact</h2>
        <hr />
      </div>

      <form
        action="https://api.web3forms.com/submit"
        method="POST"
        className="contact-form"
      >
        <input
          type="hidden"
          name="access_key"
          value="50b08450-1507-44f4-97e3-c9decf21239c"
        />
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="contact-inputs"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="contact-inputs"
          required
        />
        <textarea
          name="message"
          placeholder="Message"
          className="mssgBox"
          required
        ></textarea>
        <button type="submit">
          Submit <i className="bx bx-right-arrow-alt"></i>
        </button>
      </form>
    </div>
  </div>
</section>

<footer className='foot'>
  <div >
    <p>&copy; 2025 Tiffin Service. All rights reserved.</p>
  </div>
</footer>
</main>

</>

  )
}

export default Home
