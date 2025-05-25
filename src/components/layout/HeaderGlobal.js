"use client";

import React, { useState } from 'react';
import Link from 'next/link';

const HeaderGlobal = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  // Dummy data
  const dummyUserNickname = "테스트유저";
  const dummyNotifications = [
    "새로운 카드가 등록되었습니다.",
    "덱 구성이 완료되었습니다.",
    "거래 요청이 도착했습니다.",
  ];

  // Toggle login state for testing
  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
    setShowUserMenu(false); // Close user menu on login state change
    setShowNotifications(false); // Close notifications on login state change
  };

  return (
    <header className="bg-gray-800 text-white p-4 fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* 서비스 로고 */}
        <Link href="/" className="text-xl font-bold mr-4"> {/* Added mr-4 for spacing */}
          로고
        </Link>

        {/* 임시 로그인 토글 버튼 */}
        <button
          onClick={toggleLogin}
          className="bg-green-500 hover:bg-green-600 px-3 py-1 text-xs rounded mr-4"
        >
          로그인 상태 변경 (임시)
        </button>

        {/* 글로벌 검색 바 */}
        <div className="flex-grow max-w-xl mx-2"> {/* Adjusted mx-2 */}
          <input
            type="search"
            placeholder="카드 이름, 덱 이름 검색"
            className="w-full p-2 rounded bg-gray-700 text-white placeholder-gray-400"
          />
        </div>

        {/* 로그인/비로그인 상태 분기 */}
        {isLoggedIn ? (
          <div className="flex items-center space-x-4">
            <span>{dummyUserNickname}</span> {/* Display dummy nickname */}
            {/* 사용자 메뉴 드롭다운 */}
            <div className="relative">
              <button
                onClick={() => setShowUserMenu(!showUserMenu)}
                className="focus:outline-none p-1 hover:bg-gray-700 rounded" // Added padding and hover
              >
                ▼
              </button>
              {showUserMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 text-black z-10"> {/* Added z-index */}
                  <Link href="/my-profile" className="block px-4 py-2 text-sm hover:bg-gray-100" onClick={() => setShowUserMenu(false)}>
                    마이 프로필
                  </Link>
                  <Link href="/my-decks" className="block px-4 py-2 text-sm hover:bg-gray-100" onClick={() => setShowUserMenu(false)}>
                    내 덱
                  </Link>
                  <Link href="/trade-history" className="block px-4 py-2 text-sm hover:bg-gray-100" onClick={() => setShowUserMenu(false)}>
                    거래 내역
                  </Link>
                  <button
                    onClick={() => {
                      setIsLoggedIn(false); // Actual logout logic will be different
                      setShowUserMenu(false);
                    }}
                    className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    로그아웃
                  </button>
                </div>
              )}
            </div>
            {/* 알림 아이콘 */}
            <div className="relative">
              <button
                onClick={() => setShowNotifications(!showNotifications)}
                className="focus:outline-none p-1 hover:bg-gray-700 rounded" // Added padding and hover
              >
                🔔
                {dummyNotifications.length > 0 && ( // Optional: Add a badge if there are notifications
                  <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white" />
                )}
              </button>
              {showNotifications && (
                <div className="absolute right-0 mt-2 w-72 bg-white rounded-md shadow-lg py-1 text-black z-10"> {/* Added z-index, increased width */}
                  <div className="px-3 py-2 font-semibold text-sm border-b border-gray-200">
                    알림 ({dummyNotifications.length})
                  </div>
                  {dummyNotifications.length > 0 ? (
                    dummyNotifications.map((notification, index) => (
                      <div
                        key={index}
                        className="px-3 py-2 text-sm hover:bg-gray-100 border-b border-gray-100 last:border-b-0"
                      >
                        {notification}
                      </div>
                    ))
                  ) : (
                    <div className="px-3 py-2 text-sm text-gray-500">
                      새로운 알림이 없습니다.
                    </div>
                  )}
                  {/* Link to all notifications page (optional) */}
                  {dummyNotifications.length > 0 && (
                    <Link
                      href="/notifications"
                      className="block text-center px-3 py-2 text-sm text-blue-600 hover:bg-gray-100"
                      onClick={() => setShowNotifications(false)}
                    >
                      모든 알림 보기
                    </Link>
                  )}
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="flex items-center space-x-4">
            <button className="hover:text-gray-300 px-3 py-1 rounded">로그인</button> {/* Added padding */}
            <button className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded">회원가입</button>
          </div>
        )}
      </div>
    </header>
  );
};

export default HeaderGlobal;
