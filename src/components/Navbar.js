import React from 'react'
import { Link } from 'gatsby'
import github from '../img/github-icon.svg'
import logo from '../img/logo.svg'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <nav
        className="navbar is-transparent has-background-black"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <img src={logo} alt="Our Soul Agenda" style={{ width: '88px' }} />
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered" >
              <Link className="navbar-item" to="/about" style={{ color: 'white' }}  activeStyle={{ color: "#FC882A" }}>
                About
              </Link>
              <Link className="navbar-item" to="/products" style={{ color: 'white' }} activeStyle={{ color: "#FC882A" }}>
                Shop
              </Link>
              <Link className="navbar-item" to="/products" style={{ color: 'white' }} activeStyle={{ color: "#FC882A" }}>
                Our Gear
              </Link>
              <Link className="navbar-item" to="/blog" style={{ color: 'white' }} activeStyle={{ color: "#FC882A" }}>
                Blog
              </Link>
              <Link className="navbar-item" to="/contact/examples" style={{ color: 'white' }} activeStyle={{ color: "#FC882A" }}>
                Videos
              </Link>
              <Link className="navbar-item" to="/contact" style={{ color: 'white' }} activeStyle={{ color: "#FC882A" }}>
                Contact
              </Link>
            </div>
            <div className="navbar-end has-text-centered">
              <a
                className="navbar-item"
                href="https://github.com/netlify-templates/gatsby-starter-netlify-cms"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon">
                  <img src={github} alt="Github" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
