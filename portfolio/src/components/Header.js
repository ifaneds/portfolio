import React from "react";
import { Link, useLocation } from "react-router-dom"; // Import Link and useLocation
import { Home, User, Code, Briefcase, Mail } from "lucide-react";

export default function Header() {
  // No more props needed for activeSection
  const location = useLocation(); // Hook to get current URL location

  const navItems = [
    { name: "Home", icon: Home, path: "/" }, // Use 'path' instead of 'id'
    { name: "About", icon: User, path: "/about" },
    { name: "Skills", icon: Code, path: "/skills" },
    { name: "Projects", icon: Briefcase, path: "/projects" },
    { name: "Contact", icon: Mail, path: "/contact" },
  ];

  return (
    <header className="header">
      <nav className="navbar">
        {/* Logo/Name - clicking here should go to home */}
        <Link to="/" className="navbar-brand">
          <span className="navbar-brand-name">John Doe</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="navbar-desktop-menu">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path} // Use 'to' prop for Link
              className={`navbar-button ${
                location.pathname === item.path ? "active" : ""
              }`} // Check location.pathname for active class
            >
              <item.icon className="icon" />
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile Navigation */}
        <div className="navbar-mobile-menu">
          <select
            onChange={(e) => {
              // Programmatically navigate on select change
              window.location.href = e.target.value; // Or use history.push if you have access to history object
            }}
            value={location.pathname} // Set value to current path
            className="navbar-mobile-select"
          >
            {navItems.map((item) => (
              <option key={item.path} value={item.path}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
      </nav>
    </header>
  );
}
