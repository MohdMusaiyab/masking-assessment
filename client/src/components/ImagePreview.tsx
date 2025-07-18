import React from "react";

interface ImagePreviewProps {
  imageFile: File;
}

const ImagePreview: React.FC<ImagePreviewProps> = ({ imageFile }) => {
  const imageUrl = URL.createObjectURL(imageFile);

  return (
    <div className="mt-6">
      <h2 className="text-lg font-semibold text-gray-700 mb-2">Preview</h2>
      <div className="w-full max-w-md mx-auto overflow-hidden rounded-xl border border-gray-300 shadow-sm">
        <img
          src={imageUrl}
          alt="Uploaded preview"
          className="w-full h-auto object-contain"
        />
      </div>
    </div>
  );
};

export default ImagePreview;
