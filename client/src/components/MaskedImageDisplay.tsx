import React from "react";

interface MaskedImageDisplayProps {
  maskedImageUrl: string;
}

const MaskedImageDisplay: React.FC<MaskedImageDisplayProps> = ({ maskedImageUrl }) => {
  return (
    <div className="mt-6">
      <h2 className="text-lg font-semibold text-gray-700 mb-2">Masked Image</h2>
      <div className="w-full max-w-md mx-auto overflow-hidden rounded-xl border border-gray-300 shadow-sm">
        <img
          src={maskedImageUrl}
          alt="Masked preview"
          className="w-full h-auto object-contain"
        />
      </div>
    </div>
  );
};

export default MaskedImageDisplay;
