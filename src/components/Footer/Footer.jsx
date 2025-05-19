import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import logo from "../../assets/TaskNexus.png"
import { Link } from "react-router";

const Footer = () => {
  return (
    <div className="bg-gray-900 text-gray-300 py-10">
      <div className="container px-3 lg:px-0 mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

        <div className="flex gap-2 flex-col">
          <img className="w-[200px] mb-6" src={logo} alt="Task Nexus" />
          <p>Email: support@tasknexus.com</p>
          <p>Phone: +880-1234-777777</p>
          <p>Address: Dhaka, Bangladesh</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link className="hover:text-white">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link className="hover:text-white">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link className="hover:text-white">
                About Us
              </Link>
            </li>
            <li>
              <Link className="hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              className="hover:text-white"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              className="hover:text-white"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              className="hover:text-white"
            >
              <FaLinkedinIn size={20} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              className="hover:text-white"
            >
              <FaInstagram size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center mt-10 text-sm text-gray-500">
        © {new Date().getFullYear()} TaskNexus. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
