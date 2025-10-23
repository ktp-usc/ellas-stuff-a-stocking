import { Link, useLocation } from "react-router-dom";

const BowRibbon = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16 4C13.5 4 11.5 5.5 10.5 7.5C9.5 9.5 9 12 9 14C9 16 9.5 18 10.5 20C9.5 20 8.5 19.5 7.5 18.5C6.5 17.5 5.5 16 5 14.5C4.5 13 4 11 4 9.5C4 8 4.5 6.5 5.5 5.5C6.5 4.5 8 4 9.5 4C11 4 13 4.5 14.5 5C14 5.5 13.5 6 13 6.5C12 5.5 10.5 5 9.5 5C8.5 5 7.5 5.5 7 6C6.5 6.5 6 7.5 6 8.5C6 9.5 6.5 11 7 12.5C7.5 14 8.5 15.5 9.5 16.5C10.5 17.5 11.5 18 12.5 18C11.5 16.5 11 14.5 11 14C11 12 11.5 9.5 12.5 7.5C13.5 5.5 15 4 16 4ZM16 4C18.5 4 20.5 5.5 21.5 7.5C22.5 9.5 23 12 23 14C23 16 22.5 18 21.5 20C22.5 20 23.5 19.5 24.5 18.5C25.5 17.5 26.5 16 27 14.5C27.5 13 28 11 28 9.5C28 8 27.5 6.5 26.5 5.5C25.5 4.5 24 4 22.5 4C21 4 19 4.5 17.5 5C18 5.5 18.5 6 19 6.5C20 5.5 21.5 5 22.5 5C23.5 5 24.5 5.5 25 6C25.5 6.5 26 7.5 26 8.5C26 9.5 25.5 11 25 12.5C24.5 14 23.5 15.5 22.5 16.5C21.5 17.5 20.5 18 19.5 18C20.5 16.5 21 14.5 21 14C21 12 20.5 9.5 19.5 7.5C18.5 5.5 17 4 16 4Z"
      fill="black"
    />
    <path
      d="M14 20L14.5 22L15 24L15.5 26L16 28L16.5 26L17 24L17.5 22L18 20C17.5 20.5 17 21 16 21C15 21 14.5 20.5 14 20Z"
      fill="black"
    />
  </svg>
);

export function Navigation() {
  const location = useLocation();
  
  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/get-involved", label: "Get Involved" },
  ];
  
  return (
    <nav className="bg-white border-b border-black/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-2">
            <BowRibbon />
            <span className="font-semibold text-xl text-black">Ella's Foundation</span>
          </Link>
          
          <div className="flex gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`transition-colors ${
                  location.pathname === link.path
                    ? "text-black underline decoration-2"
                    : "text-black/60 hover:text-black"
                }`}
                style={{
                  textDecorationColor: location.pathname === link.path ? '#FFB6D9' : undefined,
                  textUnderlineOffset: '6px'
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}