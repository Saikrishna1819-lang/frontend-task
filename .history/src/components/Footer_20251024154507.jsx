
import {FaLinkedin,FaFacebook,FaInstagram} from "react-icons/fa"
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FaInstagram, href: "#", label: "Instagram" },
    { icon: FaFacebook, href: "#", label: "Facebook" },
    { icon: FaLinkedin, href: "#", label: "LinkedIn" },
    {icon:FaXTwitter ,href:"#", label:"Twitter"}
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
    <footer className="bg-[#2c4143] text-[#efecd6] px-4 sm:px-6  lg:px-[12%]">
      <div className="container mx-auto  py-12">
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
            <nav className="flex flex-col md:flex  gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="transition-colors duration-300 hover:text-[hsl(var(--footer-hover))]"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Social Links - Always appears after logo and nav links */}
          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="transition-colors duration-300 hover:text-[hsl(var(--footer-hover))]"
              >
                <social.icon className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[hsl(var(--footer-text))]/20 mb-6"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6 text-sm">
          <p className="text-[hsl(var(--footer-text))]/80">
            Copyright {currentYear} © NeoGreen All rights Reserved
          </p>

          {/* Policy Links */}
          <nav className="flex flex-wrap gap-6">
            {policyLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="transition-colors duration-300 hover:text-[hsl(var(--footer-hover))]"
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