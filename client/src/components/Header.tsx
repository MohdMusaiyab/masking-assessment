import React from "react";

const Header: React.FC = () => {
  return (
    <header className="w-full bg-gradient-to-r from-slate-50 to-blue-50 border-b border-slate-200/60 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        <div className="text-center space-y-3">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-slate-800 via-blue-800 to-slate-700 bg-clip-text text-transparent leading-tight">
            PII Masker
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full"></div>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Protect sensitive information with our advanced image privacy tool.
            Upload an image to automatically detect and mask personal data.
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;