import React from 'react'
import './Chef.css'
import { Link } from "react-router-dom";
const Chef = () => {
  return (
    <>
    <main id="chef-portal">
      <div className="sidebar">
        <h2>Chef Portal</h2>
        <ul>
          <li><Link to="#dashboard">Dashboard</Link></li>
          <li><Link to="#recipes">Manage Recipes</Link></li>
          <li><Link to="#menu-planning">Menu Planning</Link></li>
          <li><Link to="#order-preparation">Order Preparation</Link></li>
          <li><Link to="#inventory">Inventory Management</Link></li>
          <li><Link to="#logout">Logout</Link></li>
        </ul>
      </div>
 
      <div className="content">
        <header>
          <button className="menu-toggle">☰</button>
          <h1>Welcome, Chef</h1>
        </header>
 
        <section id="dashboard">
          <h2>Dashboard Overview</h2>
          <div className="stats-container">
            <div className="stat-box">
              <h3>Recipes Created</h3>
              <p>35</p>
            </div>
            <div className="stat-box">
              <h3>Orders in Progress</h3>
              <p>12</p>
            </div>
            <div className="stat-box">
              <h3>Completed Orders</h3>
              <p>128</p>
            </div>
            <div className="stat-box">
              <h3>Ingredients Running Low</h3>
              <p>5</p>
            </div>
          </div>
        </section>

        <section id="recipes">
          <h2>Manage Recipes</h2>
          <button id="add-recipe">Add New Recipe</button>
          <table>
            <thead>
              <tr>
                <th>Recipe ID</th>
                <th>Name</th>
                <th>Category</th>
                <th>Preparation Time</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>001</td>
                <td>Spaghetti Carbonara</td>
                <td>Pasta</td>
                <td>30 min</td>
                <td>
                  <button className="edit-btn">Edit</button>
                  <button className="delete-btn">Delete</button>
                </td>
              </tr>
              <tr>
                <td>002</td>
                <td>Grilled Chicken</td>
                <td>Main Course</td>
                <td>45 min</td>
                <td>
                  <button className="edit-btn">Edit</button>
                  <button className="delete-btn">Delete</button>
                </td>
              </tr>
              <tr>
                <td>003</td>
                <td>Caesar Salad</td>
                <td>Salad</td>
                <td>15 min</td>
                <td>
                  <button className="edit-btn">Edit</button>
                  <button className="delete-btn">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </section>

        <section id="menu-planning">
          <h2>Menu Planning</h2>
          <button id="add-menu">Add New Menu</button>
          <table>
            <thead>
              <tr>
                <th>Dish Name</th>
                <th>Category</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody id="menu-list">
              <tr>
                <td>Pasta Primavera</td>
                <td>Italian</td>
                <td>2025-02-12</td>
                <td>
                  <button className="edit-btn">Edit</button>
                  <button className="delete-btn">Remove</button>
                </td>
              </tr>
              <tr>
                <td>Grilled Chicken</td>
                <td>Continental</td>
                <td>2025-02-13</td>
                <td>
                  <button className="edit-btn">Edit</button>
                  <button className="delete-btn">Remove</button>
                </td>
              </tr>
            </tbody>
          </table>
        </section>

        <section id="order-preparation">
          <h2>Order Preparation</h2>
          <table>
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Items</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody id="order-list">
              <tr>
                <td>001</td>
                <td>John Doe</td>
                <td>Pasta Primavera</td>
                <td className="status-pending">Pending</td>
                <td>
                  <button className="start-btn">Start</button>
                  <button className="complete-btn">Complete</button>
                </td>
              </tr>
              <tr>
                <td>002</td>
                <td>Sarah Lee</td>
                <td>Grilled Chicken</td>
                <td className="status-pending">Pending</td>
                <td>
                  <button className="start-btn">Start</button>
                  <button className="complete-btn">Complete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </section>

        <section id="inventory">
          <h2>Inventory Management</h2>
          <button id="add-inventory">Add New Inventory</button>
          <table>
            <thead>
              <tr>
                <th>Ingredient</th>
                <th>Quantity</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Tomatoes</td>
                <td>10 kg</td>
                <td>Available</td>
                <td>
                  <button className="edit-btn">Edit</button>
                  <button className="delete-btn">Remove</button>
                </td>
              </tr>
              <tr>
                <td>Chicken Breast</td>
                <td>5 kg</td>
                <td>Low</td>
                <td>
                  <button className="edit-btn">Edit</button>
                  <button className="delete-btn">Remove</button>
                </td>
              </tr>
            </tbody>
          </table>
        </section>

        <section id="logout">
          <h2>Logout</h2>
          <p>Are you sure you want to log out?</p>
          <button id="logout-btn">Logout</button>
        </section>
        
      </div>
      
    </main>
    
    </>
  )
}

export default Chef
