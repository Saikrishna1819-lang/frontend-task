// import { Instagram,Facebook,Linkedin } from "lucide-react";

// const Footer = () => {
//   const currentYear = new Date().getFullYear();

//   const socialLinks = [
//     { icon: Instagram, href: "#", label: "Instagram" },
//     { icon: Facebook, href: "#", label: "Facebook" },
//     { icon: Linkedin, href: "#", label: "LinkedIn" },
//   ];

//   const navLinks = [
//     { label: "About Us", href: "#about" },
//     { label: "Contact Us", href: "#contact" },
//   ];

//   const policyLinks = [
//     { label: "Privacy Policy", href: "#privacy" },
//     { label: "Terms & Conditions", href: "#terms" },
//     { label: "Return Policy", href: "#returns" },
//     { label: "Shipping Policy", href: "#shipping" },
//   ];

//   return (
//     <footer className="bg-[#2c4143] text-[#efecd6] px-[12%]">
//       <div className="container mx-auto px-6 py-12">
//         {/* Main Footer Content */}
//         <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8 mb-8">
//           {/* Logo and Social Links */}
//           <div className="flex flex-col gap-6">
//             <img 
//             src="https://neogreens.com/wp-content/uploads/2025/06/neogreens-logo.svg" 
//             alt="NeoGreens Logo" 
//             className=''
//           />
//             <div className="flex gap-4">
//               {socialLinks.map((social) => (
//                 <a
//                   key={social.label}
//                   href={social.href}
//                   aria-label={social.label}
//                   className="transition-colors duration-300 hover:text-[hsl(var(--footer-hover))]"
//                 >
//                   <social.icon className="w-6 h-6" />
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* Navigation Links */}
//           <nav className="flex gap-8">
//             {navLinks.map((link) => (
//               <a
//                 key={link.label}
//                 href={link.href}
//                 className="transition-colors duration-300 hover:text-[hsl(var(--footer-hover))]"
//               >
//                 {link.label}
//               </a>
//             ))}
//           </nav>
//         </div>

//         {/* Divider */}
//         <div className="border-t border-[hsl(var(--footer-text))]/20 mb-6"></div>

//         {/* Bottom Section */}
//         <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6 text-sm">
//           <p className="text-[hsl(var(--footer-text))]/80">
//             Copyright {currentYear} © NeoGreen All rights Reserved
//           </p>

//           {/* Policy Links */}
//           <nav className="flex flex-wrap gap-6">
//             {policyLinks.map((link) => (
//               <a
//                 key={link.label}
//                 href={link.href}
//                 className="transition-colors duration-300 hover:text-[hsl(var(--footer-hover))]"
//               >
//                 {link.label}
//               </a>
//             ))}
//           </nav>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;




import { Instagram, Facebook, Linkedin } from "lucide-react";

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
    <footer className="bg-[#2c4143] text-[#efecd6] px-[8%] py-10">
      <div className="container mx-auto">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-8 mb-10">
          {/* Left: Logo + NavLinks */}
          <div className="flex flex-col lg:flex-row lg:items-center gap-6">
            {/* Logo */}
            <img
              src="https://neogreens.com/wp-content/uploads/2025/06/neogreens-logo.svg"
              alt="NeoGreens Logo"
              className="w-40"
            />

            {/* Nav Links */}
            <nav className="flex flex-col sm:flex-row gap-4 sm:gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-[#efecd6]/90 hover:text-[#efecd6] transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Right: Social Links */}
          <div className="flex justify-start lg:justify-end gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="hover:text-[#efecd6] transition-colors duration-300"
              >
                <social.icon className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#efecd6]/20 mb-6"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6 text-sm text-[#efecd6]/80">
          <p>Copyright © {currentYear} NeoGreens. All rights reserved.</p>

          <nav className="flex flex-wrap gap-4 sm:gap-6">
            {policyLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-[#efecd6] transition-colors duration-300"
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
