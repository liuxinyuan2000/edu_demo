import { Link } from "react-scroll";
import { useState } from "react";

export default function Sidebar({ links }) {
  const [activeLinkId, setActiveLinkId] = useState(0);

  return (
    <div className="fixed left-0 w-1/4">
      <style jsx>{`
        .menu-link {
          transition: all 0.3s;
          display: block;
          padding: 8px 16px;
          text-decoration: none;
          position: relative;
        }
        .menu-link:before {
          content: "";
          position: absolute;
          width: 3px;
          height: 100%;
          left: 0;
          top: 0;
          background-color: #000;
          transform: scaleX(0);
          transition: all 0.3s;
        }
        .active {
          padding-left: 24px;
        }
        .active:before {
          transform: scaleX(1);
        }
      `}</style>
      <ul>
        {links.map((link) => (
          <li key={link.to}>
            <Link
              className={`menu-link text-lg font-semibold text-gray-700 hover:text-gray-900 ${
                activeLinkId === link.to ? "active" : ""
              }`}
              activeClass="active"
              to={link.to}
              spy={true}
              smooth={true}
              offset={-300}
              duration={500}
              onSetActive={() => setActiveLinkId(link.to)}
            >
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}