import React from 'react'
import  "./Menu.css";
import { Link } from "react-router-dom";


const Menu = () => {
  return (
    <>
    <main id='menu' className='menus'>
     <Link to="\homepage" class="back-btn">← Back to Home</Link>
     
     <section class="menu-container">
        <div class="menu">

        <h2>Our Delicious Tiffins</h2>
        <div class="menu-cards">
           {/* <!-- Add all 16 items --> */}
          <div class="menu-card">
              <img src='../../public/img/dal tadka 2.jpg' alt="Dish 1"/>
              <h3>Veg Thali</h3>
              <p>
                A wholesome-tasty vegetarian meal with 1 bowl (200g) of rice, 2
                chapatis, and curry (150g). Serves 1 person.
              </p>
              <div class="ratings">4/5 ★★★★</div>
              <button
              class="add-to-cart"
              data-name="Veg Thali"
              data-quantity="1"
              data-description="Rice, Chapati, Curry" >Add to Cart</button> 
          </div>
            <div class="menu-card">
              <img src="../../public/img/dal tadka 2.jpg" alt="Dish 2" />
              <h3>Paneer Butter Masala</h3>
              <p>
                Rich and creamy paneer butter masala served with 2 naans and 1
                bowl (200g) of rice. Serves 1 person.
              </p>
              <div class="ratings">5/5 ★★★★★</div>
              <button
              class="add-to-cart"
              data-name="Veg Thali"
              data-quantity="2"
              data-description="Rice, Chapati, Curry"
            >
              Add to Cart
            </button>   
            </div>
            <div class="menu-card">
              <img src="../../public/img/dal tadka 2.jpg" alt="Dish 3" />
              <h3>Dal Tadka</h3>
              <p>
                Delicious dal cooked with aromatic spices, served with 1 bowl
                (200g) of rice or 2 rotis. Serves 1 person.
              </p>
              <div class="ratings">4/5 ★★★★</div>
              <button
              class="add-to-cart"
              data-name="Veg Thali"
              data-quantity="1"
              data-description="Rice, Chapati, Curry"
            >
              Add to Cart
            </button>
            </div>
            <div class="menu-card">
              <img src="/menu\img\chicken curry.jpg" alt="Dish 4" />
              <h3>Chicken Curry</h3>
              <p>
                Spicy and flavorful chicken curry served with 1 bowl (200g) of
                rice or 2 chapatis.<br />
                Serves 1 person.
              </p>
              <div class="ratings">5/5 ★★★★★</div>
              <button
              class="add-to-cart"
              data-name="Veg Thali"
              data-quantity="1"
              data-description="Rice, Chapati, Curry"
            >
              Add to Cart
            </button>
            </div>
            <div class="menu-card">
              <img src="/menu\img\aloo gobi.jpg" alt="Dish 5" />
              <h3>Aloo Gobi</h3>
              <p>
                A flavorful vegetarian aloo and gobi, paired with 1 bowl (200g)
                of rice & 2 rotis.<br />Serves 1 person.
              </p>
              <div class="ratings">4/5 ★★★★</div>
              <button
              class="add-to-cart"
              data-name="Veg Thali"
              data-quantity="1"
              data-description="Rice, Chapati, Curry"
            >
              Add to Cart
            </button>           
             </div>
            <div class="menu-card">
              <img src="/menu\img\chole.jpg" alt="Dish 6" />
              <h3>Chole Bhature</h3>
              <p>
                Famous Punjabi dish with spicy chickpeas (200g) and 2 mouth
                watering bhature.
                <br />Serves 1 person.
              </p>
              <div class="ratings">5/5 ★★★★★</div>
              <button
              class="add-to-cart"
              data-name="Veg Thali"
              data-quantity="1"
              data-description="Rice, Chapati, Curry"
            >
              Add to Cart
            </button>
            </div>
            <div class="menu-card">
              <img src="/menu\img\veg biryani.jpg" alt="Dish 7" />
              <h3>Veg Biryani</h3>
              <p>
                Fragrant and flavorful vegetable biryani (250g) served with 1
                bowl (100g) of raita.<br />
                Serves 1 person.
              </p>
              <div class="ratings">4/5 ★★★★</div>
              <button
              class="add-to-cart"
              data-name="Veg Thali"
              data-quantity="1"
              data-description="Rice, Chapati, Curry"
            >
              Add to Cart
            </button>
            </div>
            <div class="menu-card">
              <img src="/menu\img\butter naan.jpg" alt="Dish 8" />
              <h3>Butter Naan & Curry</h3>
              <p>
                Soft, buttery 2 naan (100g each) served with 1 bowl (150g) of
                delicious curry.<br />
                Serves 1 person.
              </p>
              <div class="ratings">3/5 ★★★</div>
              <button
              class="add-to-cart"
              data-name="Veg Thali"
              data-quantity="1"
              data-description="Rice, Chapati, Curry"
            >
              Add to Cart
            </button>
            </div>
            <div class="menu-card">
              <img src="/menu\img\dosa.jpg" alt="Dish 9" />
              <h3>Masala Dosa</h3>
              <p>
                Crispy dosa (150g) stuffed with spiced potatoes (100g), served
                with chutneys and sambar. Serves 1 person.
              </p>
              <div class="ratings">4/5 ★★★★</div>
              <button
              class="add-to-cart"
              data-name="Veg Thali"
              data-quantity="1"
              data-description="Rice, Chapati, Curry"
            >
              Add to Cart
            </button>
            </div>
            <div class="menu-card">
              <img src="/menu\img\palak paneer.jpg" alt="Dish 10" />
              <h3>Palak Paneer</h3>
              <p>
                Spinach (200g) and paneer cooked with Indian spices, served with
                rice(200g) & 2 rotis. Serves 1 person.
              </p>
              <div class="ratings">5/5 ★★★★★</div>
              <button
              class="add-to-cart"
              data-name="Veg Thali"
              data-quantity="1"
              data-description="Rice, Chapati, Curry"
            >
              Add to Cart
            </button>
            </div>
            <div class="menu-card">
              <img src="/menu\img\fish curry.jpg" alt="Dish 11" />
              <h3>Fish Curry</h3>
              <p>
                Fresh fish (150g) cooked in a tangy and spicy curry sauce,
                served with 1 bowl (200g) of rice & 2 rotis. Serves 1 person.
              </p>
              <div class="ratings">4/5 ★★★★</div>
              <button
              class="add-to-cart"
              data-name="Veg Thali"
              data-quantity="1"
              data-description="Rice, Chapati, Curry"
            >
              Add to Cart
            </button>
            </div>
            <div class="menu-card">
              <img src="/menu\img\aloo paratha.jpg" alt="Dish 12" />
              <h3>Aloo Paratha</h3>
              <p>
                2 Whole wheat flatbreads stuffed with spiced mashed
                potatoes, served with curd (100g). Serves 1 person.
              </p>
              <div class="ratings">4/5 ★★★★</div>
              <button
              class="add-to-cart"
              data-name="Veg Thali"
              data-quantity="1"
              data-description="Rice, Chapati, Curry"
            >
              Add to Cart
            </button>
            </div>
            <div class="menu-card">
              <img src="/menu\img\veg pulav.jpg" alt="Dish 13" />
              <h3>Veg Pulao</h3>
              <p>
                A flavorful tasty rice dish (250g) mixed with vegetables and aromatic
                spices. <br/> Serves 1 person.
              </p>
              <div class="ratings">4/5 ★★★★</div>
              <button
              class="add-to-cart"
              data-name="Veg Thali"
              data-quantity="1"
              data-description="Rice, Chapati, Curry"
            >
              Add to Cart
            </button>
            </div>
            <div class="menu-card">
              <img src="/menu\img\butter chicken.jpg" alt="Dish 14" />
              <h3>Butter Chicken</h3>
              <p>
                Tender chicken (150g) cooked in a creamy tomato-based sauce,
                served with rice (200g) & 2 naans. Serves 1 person.
              </p>
              <div class="ratings">5/5 ★★★★★</div>
              <button
              class="add-to-cart"
              data-name="Veg Thali"
              data-quantity="1"
              data-description="Rice, Chapati, Curry"
            >
              Add to Cart
            </button>
            </div>
            <div class="menu-card">
              <img src="tiffin15.jpg" alt="Dish 15" />
              <h3>Hakka Noodles</h3>
              <p>
                bowl full of Stir-fried yummy noodles (250g) with vegetables and
                soy sauce. <br />Serves 1 person.
              </p>
              <div class="ratings">4/5 ★★★★</div>
              <button
              class="add-to-cart"
              data-name="Veg Thali"
              data-quantity="1"
              data-description="Rice, Chapati, Curry"
            >
              Add to Cart
            </button>
            </div>
            <div class="menu-card">
              <img src="tiffin16.jpg" alt="Dish 16" />
              <h3>Gobi Manchurian</h3>
              <p>
                Crispy fresh cauliflower fritters (200g) mixed in a sweet and
                tangy sauce.
                <br />
                Serves 1 person.
              </p>
              <div class="ratings">5/5 ★★★★★</div>
              <button
              class="add-to-cart"
              data-name="Veg Thali"
              data-quantity="1"
              data-description="Rice, Chapati, Curry"
            >
              Add to Cart
            </button>        
            </div>
        </div>

        </div>
       </section>

          
     <section className="reviews-container">
          <h2>Reviews & Ratings</h2>
          <ul className="review-list" id="reviews-list"></ul>
          <form className="review-form" id="review-form">
            <label htmlFor="rating">Rating:</label>
            <select name="rating" required>
              <option value="5">★★★★★</option>
              <option value="4">★★★★</option>
              <option value="3">★★★</option>
              <option value="2">★★</option>
              <option value="1">★</option>
            </select>
            <textarea
              name="comment"
              placeholder="Leave a review about dishes..."
              required
            ></textarea>
            <button type="submit">Submit Review</button>
          </form>
     </section>
    
     <footer>
        <div >
          <p>&copy; 2025 Tiffin Service. All rights reserved.</p>
        </div>
     </footer>
     </main>
    </>
  )
}

export default Menu
