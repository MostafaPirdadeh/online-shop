import React from 'react'
import Category from "./Category/Category.js"
import Price from "./Price/Price.js"
import Colors from './Colors/Colors.js'
import "./Sidebar.css"
function Sidbar({ handleChange }) {
  return (
    <>
      <section className="sidebar">
        <Category handleChange={handleChange} />
        <Price handleChange={handleChange} />
        <Colors handleChange={handleChange} />
      </section>
    </>
  )
}

export default Sidbar