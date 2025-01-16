import Link from 'next/link';
import { Facebook, Linkedin, Instagram } from 'lucide-react';

const categories = [
  { name: 'Men', href: '/category/men' },
  { name: 'Women', href: '/category/women' },
  { name: 'Kids', href: '/category/kids' },
];

const footerLinks = [
  { name: 'About Us', href: '/about' },
  { name: 'Contact', href: '/contact' },
  { name: 'Terms of Service', href: '/terms' },
  { name: 'Privacy Policy', href: '/privacy' },
];

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: 'https://www.facebook.com/princes.afreen1' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/samreen-hamid' },
  { name: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/_princess_amna_' },
];

export default function Footer() {
  return (
    <footer className="bg-secondary-900 text-primary-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h2 className="text-2xl font-bold text-primary-400 mb-4">FashionHub</h2>
            <p className="text-sm">Your one-stop shop for trendy fashion.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              {categories.map((category) => (
                <li key={category.name}>
                  <Link href={category.href} className="hover:text-primary-400 transition-colors">
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-primary-400 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-400 hover:text-primary-300 transition-colors"
                  >
                    <span className="sr-only">{link.name}</span>
                    <Icon className="h-6 w-6" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-secondary-800 text-center text-sm">
          <p>&copy; 2023 FashionHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
