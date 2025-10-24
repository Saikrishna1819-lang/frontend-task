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
    { label: "Coming Soon", href: "#coming-soon" },
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
        {/* Top Section - Logo and Navigation */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8 mb-8">
          {/* Logo Section */}
          <div className="flex flex-col items-center lg:items-start gap-4 text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl font-light tracking-wide">neogreens</h2>
            <p className="text-sm text-[#efecd6]/80 max-w-md">
              One clean, simple habit to help you feel better every day.
            </p>
          </div>

          {/* Navigation Links - Horizontal on mobile, vertical on desktop */}
          <nav className="flex flex-col sm:flex-row lg:flex-col gap-4 sm:gap-6 lg:gap-3 justify-center lg:justify-start">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="transition-colors duration-300 hover:text-[#8e968c] text-center sm:text-left text-sm sm:text-base"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Social Links - Centered on mobile, positioned differently on desktop */}
        <div className="flex justify-center lg:justify-start gap-6 mb-8">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              aria-label={social.label}
              className="transition-colors duration-300 hover:text-[#8e968c] p-2 rounded-full hover:bg-[#efecd6]/10"
            >
              <social.icon className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-[#efecd6]/20 mb-6"></div>

        {/* Bottom Section - Copyright and Policies */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4 text-center lg:text-left">
          {/* Copyright */}
          <p className="text-xs sm:text-sm text-[#efecd6]/80 order-2 lg:order-1">
            Copyright {currentYear} © NeoGreen All rights Reserved
          </p>

          {/* Policy Links */}
          <nav className="flex flex-wrap justify-center gap-3 sm:gap-4 order-1 lg:order-2 mb-2 lg:mb-0">
            {policyLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="transition-colors duration-300 hover:text-[#8e968c] text-xs sm:text-sm whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Website Link - Centered at the bottom */}
        <div className="mt-6 text-center">
          <a 
            href="https://neogreens.com" 
            className="text-[#8e968c] hover:text-[#efecd6] text-sm transition-colors duration-300"
          >
            https://neogreens.com
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;