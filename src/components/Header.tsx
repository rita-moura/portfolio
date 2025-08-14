
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { ModeToggle } from "./theme-toggle";

interface NavItem {
  name: string;
  href: string;
}

const navItems: NavItem[] = [
  { name: "Sobre", href: "#about" },
  { name: "Projetos", href: "#projects" },
  { name: "Tecnologias", href: "#skills" },
  { name: "Contato", href: "#contact" },
];

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-navy/90 backdrop-blur shadow-lg py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container flex justify-between items-center">
        <a href="#" className="text-highlight font-mono text-xl font-semibold">
          {'<DEV BACKEND/>'}
        </a>

        {/* Desktop Navigation */}
        {!isMobile && (
          <nav className="flex gap-6">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className="text-slate hover:text-highlight transition-colors font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>
        )}

        <div className="hidden md:block">
          <ModeToggle />
        </div>

        {/* Mobile Menu Button */}
        {isMobile && (
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-highlight z-50"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        )}

        {/* Mobile Menu */}
        {isMobile && (
          <nav 
            className={`fixed inset-0 bg-navy-light/95 flex flex-col items-center justify-center transition-transform duration-300 ${
              mobileMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex flex-col items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-slate hover:text-highlight transition-colors font-medium text-lg"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="text-highlight font-mono mr-1 block text-sm text-center mb-1">{item.name}</span>
                </a>
              ))}
              <a 
                href="/resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Button variant="outline" className="border-highlight text-highlight hover:bg-highlight/10">
                  Currículo
                </Button>
              </a>
              <div className="mt-4">
                <ModeToggle />
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;