import React from 'react';

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10 text-lg">

      <aside className="space-y-3">
        <svg
          width="55"
          height="55"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          fillRule="evenodd"
          clipRule="evenodd"
          className="fill-current"
        >
          <path d="M22.672 15.226l-2.432.811...."></path>
        </svg>

        <p className="text-lg leading-tight">
          <span className="font-bold text-xl">ACME Industries Ltd.</span>
          <br />
          Providing reliable tech since 1992
        </p>
      </aside>

      <nav>
        <h6 className="footer-title text-xl font-bold">Services</h6>
        <a className="link link-hover text-lg">Branding</a>
        <a className="link link-hover text-lg">Design</a>
        <a className="link link-hover text-lg">Marketing</a>
        <a className="link link-hover text-lg">Advertisement</a>
      </nav>

      <nav>
        <h6 className="footer-title text-xl font-bold">Company</h6>
        <a className="link link-hover text-lg">About us</a>
        <a className="link link-hover text-lg">Contact</a>
        <a className="link link-hover text-lg">Jobs</a>
        <a className="link link-hover text-lg">Press kit</a>
      </nav>

      <nav>
        <h6 className="footer-title text-xl font-bold">Legal</h6>
        <a className="link link-hover text-lg">Terms of use</a>
        <a className="link link-hover text-lg">Privacy policy</a>
        <a className="link link-hover text-lg">Cookie policy</a>
      </nav>

    </footer>
  );
};

export default Footer;
