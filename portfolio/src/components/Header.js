import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom"; // Import useNavigate
import { Home, User, Code, Briefcase, Mail, Cuboid } from "lucide-react";

export default function Header() {
  const location = useLocation(); // Hook to get current URL location
  const navigate = useNavigate(); // Hook to programmatically navigate

  const navItems = [
    { name: "Home", icon: Home, path: "/" },
    { name: "About", icon: User, path: "/about" },
    { name: "Three.js", icon: Cuboid, path: "/three" }, // Assuming you have a Three.js page
    { name: "Skills", icon: Code, path: "/skills" },
    { name: "Projects", icon: Briefcase, path: "/projects" },
    { name: "Contact", icon: Mail, path: "/contact" },
  ];

  const handleMobileNavChange = (e) => {
    const selectedPath = e.target.value;
    // useNavigate automatically respects the basename set in BrowserRouter.
    // So, we just pass the internal path directly.
    navigate(selectedPath);
  };

  return (
    <header className="header">
      <nav className="navbar">
        {/* Logo/Name - clicking here should go to home */}
        {/* Link component automatically handles basename */}
        <Link to="/" className="navbar-brand">
          <span className="navbar-brand-name">Ifan Edwards</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="navbar-desktop-menu">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path} // Link component automatically handles basename
              className={`navbar-button ${
                // Check if current path matches item path
                location.pathname === item.path ||
                // Special case for Home link: active if location.pathname is '/' (internal root)
                // AND the item.path is '/' (Home link)
                // This covers both localhost and /portfolio/ scenarios correctly.
                (item.path === "/" && location.pathname === "/")
                  ? "active"
                  : ""
              }`}
            >
              <item.icon className="icon" />
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile Navigation */}
        <div className="navbar-mobile-menu">
          <select
            onChange={handleMobileNavChange} // Use the new handler
            // Set value to match the internal path from navItems.
            // location.pathname will already be the internal path (e.g., /about, /skills, or / for home)
            value={location.pathname}
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
