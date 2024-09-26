import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const FooterLink = ({ href, children }) => (
  <a
    href={href}
    className="text-gray-300 hover:text-white transition duration-300"
  >
    {children}
  </a>
);

const SocialIcon = ({ Icon, href }) => (
  <a
    href={href}
    className="text-gray-300 hover:text-white transition duration-300"
  >
    <Icon size={24} />
  </a>
);

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h2 className="text-2xl font-bold mb-4">TanStack Query</h2>
            <p className="text-gray-400 mb-4">
              TanStack Query is a service provider that provides information about the network stack services available on the network stack.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <FooterLink href="/">Home</FooterLink>
              </li>
              <li>
                <FooterLink href="/trad">FetchOld</FooterLink>
              </li>
              <li>
                <FooterLink href="/rq">FetchRQ</FooterLink>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Phone size={18} className="mr-2" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2" />
                <span>info@insulationexperts.com</span>
              </li>
              <li className="flex items-center">
                <MapPin size={18} className="mr-2" />
                <span>123 Main St, Anytown, USA 12345</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <SocialIcon Icon={Facebook} href="https://facebook.com" />
              <SocialIcon Icon={Twitter} href="https://twitter.com" />
              <SocialIcon Icon={Instagram} href="https://instagram.com" />
              <SocialIcon Icon={Linkedin} href="https://linkedin.com" />
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} TanStack Query. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
