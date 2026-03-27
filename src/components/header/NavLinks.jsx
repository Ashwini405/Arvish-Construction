const NavLinks = ({ links = [], className = "", onClick = null }) => {
  return (
    <nav className={className}>
      {links.map((link) => (
        <a
          key={link.name}
          href={link.href}
          onClick={() => onClick && onClick(link)}
          className="text-sm text-gray-300 hover:text-white transition-colors duration-300 font-medium tracking-wide"
        >
          {link.name}
        </a>
      ))}
    </nav>
  );
};

export default NavLinks;
