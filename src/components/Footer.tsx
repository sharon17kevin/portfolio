import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <span className="ml-2 text-xl font-darkerGrotesque font-bold text-white">
                Sharon-Kevin
              </span>
            </div>
            <p className="text-sm">
              Connecting people through innovative technology solutions.
            </p>
            <div className="flex justify-start gap-4 mt-4">
              <a href="#" className="hover:text-emerald-300 transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="hover:text-emerald-300 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="hover:text-emerald-300 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-black">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  News
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-black">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Network Status
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-black">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Accessibility
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center">
          <p>&copy; 2025 Sharon-Kevin. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
