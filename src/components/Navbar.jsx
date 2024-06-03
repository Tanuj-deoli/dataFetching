import React from 'react'
import { Container } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

function Navbar() {
  // console.log(NavLink,"NavLink")
  return (
    <div className="mainNavbar">
      <Container>
        <div className='Navbar'>
          <NavLink to="/" className={({ isActive, isPendibg }) => {
            return isActive ? "ActiveNavLink" : ""
          }}>Home</NavLink>
          <NavLink to="/product" className={({ isActive, isPendibg }) => {
            return isActive ? "ActiveNavLink" : ""
          }}>Product</NavLink>
          <NavLink to="/quotes" className={({ isActive, isPendibg }) => {
            return isActive ? "ActiveNavLink" : ""
          }}>Quotes</NavLink>
          <NavLink to="/recipes" className={({ isActive, isPendibg }) => {
            return isActive ? "ActiveNavLink" : ""
          }}>Recipes</NavLink>
          {/* <NavLink to="/login" className={({ isActive, isPendibg }) => {
            return isActive ? "ActiveNavLink" : ""
          }}>Login</NavLink> */}
          <NavLink to="/card" className={({ isActive, isPendibg }) => {
            return isActive ? "ActiveNavLink" : ""
          }}>card</NavLink>
          <NavLink to="/comment" className={({ isActive, isPendibg }) => {
            return isActive ? "ActiveNavLink" : ""
          }}>comment</NavLink>
          <NavLink to="/list" className={({ isActive, isPendibg }) => {
            return isActive ? "ActiveNavLink" : ""
          }}>list</NavLink>
          <NavLink to="/todolist" className={({ isActive, isPendibg }) => {
            return isActive ? "ActiveNavLink" : ""
          }}>TodoList</NavLink>
          <NavLink to="/form" className={({ isActive, isPendibg }) => {
            return isActive ? "ActiveNavLink" : ""
          }}>Form</NavLink>
        </div>
      </Container>
    </div>
  )
}

export default Navbar
