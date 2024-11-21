import React from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <div>
      <footer class="footer footer-center bg-base-200 text-base-content rounded p-10">
        <nav class="grid grid-flow-col gap-4">
          <a class="link link-hover">About us</a>
          <a class="link link-hover">Contact</a>
          <a class="link link-hover">Jobs</a>
          <a class="link link-hover">Press kit</a>
        </nav>
        <nav>
          <div class="grid grid-flow-col gap-4">
            <a href="https://web.facebook.com/marsel.CSE.PUST" target="_blank">
              <FaFacebook size={30} />
            </a>
            <a href="https://github.com/mahmudul35" target="_blank">
              <FaGithub size={30} />
            </a>
            <a
              href="https://www.linkedin.com/in/mahmudul-hasan-marsel-0369a61a8/"
              target="_blank"
            >
              <FaLinkedin size={30} />
            </a>
          </div>
        </nav>
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by
            Discount Pro
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
