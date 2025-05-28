import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom"; // Import useNavigate
import { Home, User, Code, Briefcase, Mail } from "lucide-react";

export default function Header() {
  const location = useLocation(); // Hook to get current URL location
  const navigate = useNavigate(); // Hook to programmatically navigate

  const navItems = [
    { name: "Home", icon: Home, path: "/" },
    { name: "About", icon: User, path: "/about" },
    { name: "Skills", icon: Code, path: "/skills" },
    { name: "Projects", icon: Briefcase, path: "/projects" },
    { name: "Contact", icon: Mail, path: "/contact" },
  ];

  // For correctly determining the active state in mobile menu.
  // In development (localhost), PUBLIC_URL is often empty or '/'.
  // On GitHub Pages, it's '/portfolio'.
  // location.pathname from React Router will internally strip the basename.
  // So, if your app is at http://localhost:3000/ and PUBLIC_URL is '', location.pathname for home is '/'.
  // If your app is at http://localhost:3000/portfolio and PUBLIC_URL is '/portfolio', location.pathname for home is still '/'.
  // The 'publicUrl' variable itself is only needed for the BrowserRouter basename property, not for individual Link/navigate calls.
  // However, we can use it to help with the active state check for the root path.
  const publicUrl = process.env.PUBLIC_URL || "/"; // Get the basename from environment, default to '/'

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
