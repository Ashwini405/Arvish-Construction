import { Link } from 'react-router-dom';

const NavLinks = ({ links = [], className = "", onClick = null }) => {
  return (
    <nav className={className}>
      {links.map((link) => {
        if (link.dropdown) {
          return (
            <div key={link.name} className="relative group">
              <Link
                to={link.to}
                onClick={() => onClick && onClick(link)}
                className="text-sm text-gray-300 hover:text-white transition-colors duration-300 font-medium tracking-wide inline-flex items-center gap-1 px-3 py-2 rounded-md"
              >
                {link.label}
                <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              <div className="absolute left-0 mt-2 w-56 bg-white/95 backdrop-blur-sm border border-gray-200 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 py-2">
                {link.dropdown.map((sub) => (
                  <Link
                    key={sub.to}
                    to={sub.to}
                    onClick={() => onClick && onClick(sub)}
                    className="block px-6 py-3 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded-lg transition-colors first:rounded-t-lg last:rounded-b-lg"
                  >
                    {sub.label}
                  </Link>
                ))}
              </div>
            </div>
          );
        }
        return (
          <Link
            key={link.name}
            to={link.to || link.href}
            onClick={() => onClick && onClick(link)}
            className="text-sm text-gray-300 hover:text-white transition-colors duration-300 font-medium tracking-wide px-3 py-2 rounded-md hover:bg-gray-800/30"
          >
            {link.label || link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default NavLinks;

