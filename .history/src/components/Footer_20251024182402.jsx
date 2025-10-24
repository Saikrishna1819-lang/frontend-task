import { FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FaInstagram, href: "#", label: "Instagram" },
    { icon: FaFacebook, href: "#", label: "Facebook" },
    { icon: FaLinkedin, href: "#", label: "LinkedIn" },
    { icon: FaXTwitter, href: "#", label: "Twitter" },
  ];

  const navLinks = [
    { label: "About Us", href: "#about" },
    { label: "Contact Us", href: "#contact" },
  ];

  const policyLinks = [
    { label: "Privacy Policy", href: "#privacy" },
    { label: "Terms & Conditions", href: "#terms" },
    { label: "Return Policy", href: "#returns" },
    { label: "Shipping Policy", href: "#shipping" },
  ];

  return (
    <footer
      className="relative bg-[#2c4143] text-[#efecd6] px-4 sm:px-6 lg:px-[12%] bg-cover bg-center bg-no-repeat"
      style={{
       backgroundImage: "url('/footer.svg')",
       backgroundRepeat: "no-repeat",
  backgroundPosition: "left top",

      }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-[#2c4143]/85"></div>

      <div className="relative container mx-auto py-12">
        {/* Main Footer Content */}
        <div className="flex flex-col gap-8 mb-8">
          {/* Logo and Navigation Links */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8">
            {/* Logo */}
            <div>
              <img
                src="https://neogreens.com/wp-content/uploads/2025/06/neogreens-logo.svg"
                alt="NeoGreens Logo"
                className=""
              />
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-col gap-6 md:flex md:gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="transition-colors duration-300 hover:text-[#a8f5b4]"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="transition-colors duration-300 hover:text-[#a8f5b4]"
              >
                <social.icon className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#efecd6]/30 mb-6"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6 text-sm">
          <p className="text-[#efecd6]/80">
            © {currentYear} NeoGreens. All rights reserved.
          </p>

          {/* Policy Links */}
          <nav className="flex flex-wrap gap-6">
            {policyLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="transition-colors duration-300 hover:text-[#a8f5b4]"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
