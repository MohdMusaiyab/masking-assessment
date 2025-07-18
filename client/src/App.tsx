import React, { useState } from "react";
import Header from "./components/Header";
import ImageUploader from "./components/ImageUploader";
import ImagePreview from "./components/ImagePreview";
import MaskedImageDisplay from "./components/MaskedImageDisplay";
import LoadingSpinner from "./components/LoadingSpinner";
import axios from "axios";

const App: React.FC = () => {
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [maskedImageUrl, setMaskedImageUrl] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleImageUpload = (file: File) => {
    setImageFile(file);
    setMaskedImageUrl("");
  };

  const maskImageWithAPI = async () => {
    if (!imageFile) return;

    setIsLoading(true);
    const formData = new FormData();
    formData.append("file", imageFile);

    try {
      const response = await axios.post("http://localhost:8000/mask", formData, {
        responseType: "blob",
      });

      const blobUrl = URL.createObjectURL(response.data);
      setMaskedImageUrl(blobUrl);
    } catch (error) {
      console.error("Error masking image:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Header />
      <main className="max-w-3xl mx-auto px-4 py-10">
        <ImageUploader onImageUpload={handleImageUpload} />

        {imageFile && <ImagePreview imageFile={imageFile} />}

        {imageFile && !maskedImageUrl && !isLoading && (
          <button
            onClick={maskImageWithAPI}
            className="mt-6 px-6 py-2 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition duration-300"
          >
            Mask PII
          </button>
        )}

        {isLoading && <LoadingSpinner />}

        {maskedImageUrl && <MaskedImageDisplay maskedImageUrl={maskedImageUrl} />}
      </main>
    </div>
  );
};

export default App;
