import React from "react";

const Header: React.FC = () => {
  return (
    <header className="w-full py-6 bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-2xl font-bold text-gray-800">
          PII Masker – Image Privacy Tool
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          Upload an image to detect and mask sensitive information.
        </p>
      </div>
    </header>
  );
};

export default Header;
