import React from "react";

const LoadingSpinner: React.FC = () => {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 sm:mt-12">
      <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8 sm:p-12">
        <div className="flex flex-col items-center justify-center space-y-6">

          <div className="relative">
            <div className="w-16 h-16 sm:w-20 sm:h-20 border-4 border-slate-200 border-t-blue-500 rounded-full animate-spin"></div>
            <div className="absolute inset-0 w-16 h-16 sm:w-20 sm:h-20 border-4 border-transparent border-r-indigo-400 rounded-full animate-spin animate-reverse"></div>
          </div>

          <div className="text-center space-y-2">
            <h3 className="text-lg sm:text-xl font-semibold text-slate-800">
              Processing Your Image
            </h3>
            <p className="text-slate-600 text-sm sm:text-base">
              Detecting and masking sensitive information...
            </p>
          </div>

          <div className="flex space-x-2">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"
                style={{ animationDelay: `${i * 0.2}s` }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;