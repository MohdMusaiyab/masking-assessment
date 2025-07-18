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
  const [error, setError] = useState<string>("");

  const handleImageUpload = (file: File) => {
    setImageFile(file);
    setMaskedImageUrl("");
    setError("");
  };

  const maskImageWithAPI = async () => {
    if (!imageFile) return;

    setIsLoading(true);
    setError("");
    const formData = new FormData();
    formData.append("file", imageFile);

    try {
      const response = await axios.post("http://localhost:8000/mask", formData, {
        responseType: "blob",
        timeout: 30000,
      });

      const blobUrl = URL.createObjectURL(response.data);
      setMaskedImageUrl(blobUrl);
    } catch (error) {
      console.error("Error masking image:", error);
      setError("Failed to process image. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setImageFile(null);
    setMaskedImageUrl("");
    setError("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50">
      <Header />

      <main className="pb-16 sm:pb-20">

        <ImageUploader onImageUpload={handleImageUpload} />


        {imageFile && <ImagePreview imageFile={imageFile} />}


        {imageFile && !maskedImageUrl && !isLoading && (
          <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 sm:mt-12">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={maskImageWithAPI}
                className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-indigo-700 focus:ring-4 focus:ring-blue-200 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                <svg className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                Mask Sensitive Information
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>

              <button
                onClick={handleReset}
                className="inline-flex items-center px-6 py-3 bg-white text-slate-700 font-medium rounded-lg border border-slate-300 hover:bg-slate-50 hover:border-slate-400 focus:ring-4 focus:ring-slate-200 transition-all duration-200 shadow-sm hover:shadow-md"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                Reset
              </button>
            </div>
          </div>
        )}

        {error && (
          <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 sm:mt-12">
            <div className="bg-red-50 border border-red-200 rounded-xl p-4 sm:p-6">
              <div className="flex items-center space-x-3">
                <svg className="w-6 h-6 text-red-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h3 className="text-red-800 font-medium">Processing Error</h3>
                  <p className="text-red-700 text-sm mt-1">{error}</p>
                </div>
              </div>
            </div>
          </div>
        )}


        {isLoading && <LoadingSpinner />}


        {maskedImageUrl && <MaskedImageDisplay maskedImageUrl={maskedImageUrl} />}


        {maskedImageUrl && (
          <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={handleReset}
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-slate-600 to-slate-700 text-white font-medium rounded-lg hover:from-slate-700 hover:to-slate-800 focus:ring-4 focus:ring-slate-200 transition-all duration-200 shadow-sm hover:shadow-md"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                Process Another Image
              </button>
            </div>
          </div>
        )}
      </main>


      <footer className="bg-white border-t border-slate-200 mt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <p className="text-slate-500 text-sm">
              © 2024 PII Masker. Protecting your privacy with advanced image processing.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;