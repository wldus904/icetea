import React from 'react';
import Link from 'next/link';

const FooterGlobal = () => {
  const currentYear = new Date().getFullYear();
  const serviceName = "YourServiceName"; // Replace with actual service name later

  const footerLinks = [
    { id: 'terms', label: '약관', href: '/terms' },
    { id: 'privacy', label: '개인정보처리방침', href: '/privacy' },
    { id: 'support', label: '고객지원', href: '/support' },
  ];

  return (
    <footer className="bg-gray-800 text-gray-300 py-8 px-4">
      <div className="container mx-auto">
        {/* Links Area */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <div className="flex space-x-4 mb-4 md:mb-0">
            {footerLinks.map((link, index) => (
              <React.Fragment key={link.id}>
                <Link href={link.href} className="hover:text-white text-sm">
                  {link.label}
                </Link>
                {index < footerLinks.length - 1 && (
                  <span className="border-r border-gray-600 h-4 self-center"></span>
                )}
              </React.Fragment>
            ))}
          </div>
          {/* Social Media Icons (Optional - Placeholder) */}
          <div className="flex space-x-4">
            {/* Example: <a href="#" className="hover:text-white"><FaFacebook /></a> */}
          </div>
        </div>

        {/* Copyright Information */}
        <div className="text-center text-sm text-gray-500 border-t border-gray-700 pt-6">
          <p>© {currentYear} {serviceName}. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterGlobal;
