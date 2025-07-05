import React from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa6";

function Footer() {
  return (
    <>
      <hr />
      <footer className="py-12">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
          <div className="flex flex-col items-center justify-center">
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/aditya-thakur-developer/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn size={24} />
              </a>
              <a
                href="https://github.com/AdityaThakur-Coder"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={24} />
              </a>
            </div>
            <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col items-center">
              <p className="text-sm">&copy; 2025 Aditya Thakur. All rights reserved.</p>
              <p className="text-sm">Built with 💙 using React & Tailwind CSS</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
