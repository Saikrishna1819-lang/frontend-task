import { Instagram,Facebook,Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
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
    <footer className="bg-[#2c4143] text-[#efecd6] px-[12%]">
      <div className="container mx-auto px-6 py-12">
        
      </div>
    </footer>
  );
};

export default Footer;




