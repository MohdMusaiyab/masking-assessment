import React from "react";

interface ImagePreviewProps {
  imageFile: File;
}

const ImagePreview: React.FC<ImagePreviewProps> = ({ imageFile }) => {
  const imageUrl = URL.createObjectURL(imageFile);

  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 sm:mt-12">
      <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
        <div className="px-6 py-5 bg-gradient-to-r from-slate-50 to-blue-50 border-b border-slate-200">
          <div className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <h2 className="text-lg sm:text-xl font-semibold text-slate-800">
              Original Image Preview
            </h2>
          </div>
        </div>

        <div className="p-6">
          <div className="relative bg-slate-50 rounded-xl overflow-hidden shadow-inner">
            <img
              src={imageUrl}
              alt="Uploaded preview"
              className="w-full h-auto object-contain max-h-96 sm:max-h-[500px] mx-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none"></div>
          </div>

          <div className="mt-4 flex items-center justify-between text-sm text-slate-500">
            <span>File: {imageFile.name}</span>
            <span>Size: {(imageFile.size / 1024 / 1024).toFixed(2)} MB</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImagePreview;