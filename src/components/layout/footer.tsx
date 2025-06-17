import { Facebook, Linkedin, Youtube, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";

export function Footer() {
  const services = [
    "Fractional CMO Services",
    "Managed Marketing Services", 
    "Marketing Education & Training"
  ];

  const quickLinks = [
    "About Us",
    "Our Process",
    "Case Studies",
    "Blog",
    "Contact"
  ];

  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/peranaviosa", label: "Facebook" },
    { icon: Linkedin, href: "https://www.linkedin.com/company/perana-viosa/", label: "LinkedIn" },
    { icon: Youtube, href: "https://www.youtube.com/channel/UCcqT5G4oLOezPzVPvMBez5A", label: "YouTube" },
    { icon: Mail, href: "mailto:admin@peranaviosa.co.za", label: "Email" }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <Image
                src="/logo for dark background.svg"
                alt="Perana Viosa"
                width={180}
                height={40}
                className="h-8 w-auto"
              />
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              A multidimensional marketing agency on a mission to change the way entrepreneurs 
              and small business leaders approach marketing.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="w-5 h-5 text-red-400" />
                <span>South Africa</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-5 h-5 text-red-400" />
                <a href="mailto:admin@peranaviosa.co.za" className="hover:text-red-400 transition-colors duration-200">
                  admin@peranaviosa.co.za
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="w-5 h-5 text-red-400" />
                <a href="#" className="hover:text-red-400 transition-colors duration-200">
                  Schedule a call
                </a>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-red-400 transition-colors duration-200"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-red-400 transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Connected</h3>
            <p className="text-gray-300 mb-4">
              Get marketing insights and tips delivered to your inbox.
            </p>
            <div className="flex space-x-2 mb-6">
              <input 
                type="email" 
                placeholder="Your email"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors duration-200"
              />
              <button className="btn-red px-4 py-2 rounded-lg transition-colors duration-200">
                <Mail className="w-5 h-5" />
              </button>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Perana Viosa. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-red-400 transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-red-400 transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-red-400 transition-colors duration-200">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
