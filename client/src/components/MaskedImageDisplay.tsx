import React from "react";

interface MaskedImageDisplayProps {
  maskedImageUrl: string;
}

const MaskedImageDisplay: React.FC<MaskedImageDisplayProps> = ({ maskedImageUrl }) => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = maskedImageUrl;
    link.download = 'masked-image.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 sm:mt-12">
      <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
        <div className="px-6 py-5 bg-gradient-to-r from-green-50 to-emerald-50 border-b border-slate-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <h2 className="text-lg sm:text-xl font-semibold text-slate-800">
                Protected Image
              </h2>
            </div>
            
            <button
              onClick={handleDownload}
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-sm font-medium rounded-lg hover:from-blue-600 hover:to-indigo-700 focus:ring-4 focus:ring-blue-200 transition-all duration-200 shadow-sm hover:shadow-md"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download
            </button>
          </div>
        </div>
        
        <div className="p-6">
          <div className="relative bg-slate-50 rounded-xl overflow-hidden shadow-inner">
            <img
              src={maskedImageUrl}
              alt="Masked preview"
              className="w-full h-auto object-contain max-h-96 sm:max-h-[500px] mx-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none"></div>
          </div>
          
          <div className="mt-4 p-4 bg-green-50 rounded-lg border border-green-200">
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-sm text-green-800">
                <span className="font-medium">Success!</span> Sensitive information has been automatically detected and masked for your privacy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaskedImageDisplay;