import React from 'react';
import Link from 'next/link'; // Using Link for potential future routing

const GNB = () => {
  // Menu items data
  const menuItems = [
    { id: 'card-search', label: '카드 검색', href: '/card-search' },
    { id: 'card-trade', label: '카드 거래', href: '/card-trade' },
    { id: 'deck-list', label: '덱 목록', href: '/deck-list' },
    { id: 'community', label: '커뮤니티', href: '/community' },
  ];

  return (
    <nav className="bg-gray-700 text-white shadow-md sticky top-16 z-40"> {/* Adjusted top to be below HeaderGlobal */}
      <div className="container mx-auto flex justify-center items-center px-4 py-2">
        <ul className="flex space-x-4">
          {menuItems.map((item) => (
            <li key={item.id}>
              <Link href={item.href} className="hover:bg-gray-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-150">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default GNB;
