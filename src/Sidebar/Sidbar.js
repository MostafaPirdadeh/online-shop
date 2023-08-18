import React from 'react'
import Category from "./Category/Category.js"
import Price from "./Price/Price.js"
import Colors from './Colors/Colors.js'
import "./Sidebar.css"
function Sidbar() {
  return (
    <>
     <section className="sidebar">
        {/* <div className="logo-container">
          <h1>🛒</h1>
        </div> */}
        <Category/>
        <Price/>
        <Colors/>
      </section>
    </>
  )
}

export default Sidbar