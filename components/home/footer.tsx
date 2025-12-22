import Link from "next/link";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="w-full bg-muted/50 border-t mt-auto">
      <div className="max-w-[1280px] mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <img src="/images/film.png" className="h-5" alt="Movie Z Logo" />
              <h3 className="font-bold text-lg">Movie Z</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Your ultimate destination for discovering and exploring movies from around the world.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h3 className="font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/" className="hover:text-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/genre" className="hover:text-foreground transition-colors">
                  Genres
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-3">
            <h3 className="font-semibold">Categories</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/genre?type=action" className="hover:text-foreground transition-colors">
                  Action
                </Link>
              </li>
              <li>
                <Link href="/genre?type=comedy" className="hover:text-foreground transition-colors">
                  Comedy
                </Link>
              </li>
              <li>
                <Link href="/genre?type=drama" className="hover:text-foreground transition-colors">
                  Drama
                </Link>
              </li>
              <li>
                <Link href="/genre?type=horror" className="hover:text-foreground transition-colors">
                  Horror
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="space-y-3">
            <h3 className="font-semibold">Follow Us</h3>
            <div className="flex gap-4">
              <Link
                href="https://facebook.com"
                target="_blank"
                className="hover:text-foreground transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                className="hover:text-foreground transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                className="hover:text-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="https://youtube.com"
                target="_blank"
                className="hover:text-foreground transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
            <p className="text-sm text-muted-foreground pt-4">
              Stay updated with the latest movie releases and reviews.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t mt-8 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Movie Z. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link href="/privacy" className="hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-foreground transition-colors">
              Terms of Service
            </Link>
            <Link href="/cookies" className="hover:text-foreground transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
