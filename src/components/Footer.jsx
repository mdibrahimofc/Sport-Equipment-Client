import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          {/* Website Name and Copyright */}
          <div className="mb-4 md:mb-0">
            <h2 className="text-lg font-bold">Lotus EquiSports</h2>
            <p className="text-sm">&copy; {new Date().getFullYear()} Lotus EquiSports. All rights reserved.</p>
          </div>

          {/* Contact Information */}
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-bold">Contact Us</h3>
            <p>Email: support@lotusequisports.com</p>
            <p>Phone: +880-123-456-7890</p>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebook size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaTwitter size={24} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
