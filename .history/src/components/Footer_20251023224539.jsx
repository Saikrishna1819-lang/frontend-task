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
//             <h2 className="text-2xl font-light tracking-wide">neogreens</h2>
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
    <footer className="bg-[#2c4143] text-[#efecd6]">
      <div className="container mx-auto px-6 py-8 sm:py-12 lg:px-[12%]">
        {/* Main Footer Content */}
        <div className="flex flex-col items-center md:flex-row md:justify-between md:items-start gap-8 mb-8">
          {/* Logo and Social Links - Centered on mobile */}
          <div className="flex flex-col items-center md:items-start gap-6 text-center md:text-left">
            <h2 className="text-2xl font-light tracking-wide">neogreens</h2>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="transition-colors duration-300 hover:text-[#8e968c]"
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links - Centered on mobile, right on tablet+ */}
          <nav className="flex gap-6 sm:gap-8 justify-center md:justify-start">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="transition-colors duration-300 hover:text-[#8e968c] text-sm sm:text-base"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Divider */}
        <div className="border-t border-[#efecd6]/20 mb-6"></div>

        {/* Bottom Section - Stacked on mobile, row on tablet+ */}
        <div className="flex flex-col items-center md:flex-row md:justify-between md:items-center gap-4 sm:gap-6 text-xs sm:text-sm">
          {/* Copyright - Centered on mobile, left on tablet+ */}
          <p className="text-[#efecd6]/80 text-center md:text-left order-2 md:order-1">
            Copyright {currentYear} © NeoGreen All rights Reserved
          </p>

          {/* Policy Links - Centered and wrapped on mobile, right on tablet+ */}
          <nav className="flex flex-wrap justify-center gap-4 sm:gap-6 order-1 md:order-2 mb-2 md:mb-0">
            {policyLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="transition-colors duration-300 hover:text-[#8e968c] whitespace-nowrap"
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