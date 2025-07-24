'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import Button  from '@/app/components/ui/Button';
import Logo from '@/app/components/ui/Logo'; // Assuming you have a Logo component

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Projects', href: '/projects' },
    { name: 'Team', href: '#team' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
      <nav
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
              isScrolled
                  ? 'bg-background/95 backdrop-blur-md border-b border-border'
                  : 'bg-transparent'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
            <Logo/>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navItems.map((item) =>
                    item.href.startsWith('#') ? (
                        <a
                            key={item.name}
                            href={item.href}
                            className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
                        >
                          {item.name}
                        </a>
                    ) : (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
                        >
                          {item.name}
                        </Link>
                    )
                )}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden ">
              <Button
                  onClick={() => setIsOpen(!isOpen)}
                  className="text-foreground"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
              <div className="md:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3  border-t border-border">
                  {navItems.map((item) =>
                      item.href.startsWith('#') ? (
                          <a
                              key={item.name}
                              href={item.href}
                              className="block px-3 py-2 text-foreground hover:text-primary transition-colors duration-200"
                              onClick={() => setIsOpen(false)}
                          >
                            {item.name}
                          </a>
                      ) : (
                          <Link
                              key={item.name}
                              href={item.href}
                              className="block px-3 py-2 text-foreground hover:text-primary transition-colors duration-200"
                              onClick={() => setIsOpen(false)}
                          >
                            {item.name}
                          </Link>
                      )
                  )}
                </div>
              </div>
          )}
        </div>
      </nav>
  );
};

export default Navigation;
