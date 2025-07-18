import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { motion } from "framer-motion";

interface ImageUploaderProps {
  onImageUpload: (file: File) => void;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ onImageUpload }) => {
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (acceptedFiles.length > 0) {
        onImageUpload(acceptedFiles[0]);
      }
    },
    [onImageUpload]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [] },
    maxFiles: 1,
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div
        {...getRootProps()}
        className={`border-2 border-dashed rounded-2xl p-8 flex flex-col items-center justify-center cursor-pointer transition-all duration-300 ${
          isDragActive
            ? "border-blue-500 bg-blue-50"
            : "border-gray-300 hover:border-blue-400 hover:bg-gray-50"
        }`}
      >
        <input {...getInputProps()} />
        <svg
          className="w-16 h-16 text-blue-400 mb-4"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 16v-4m0 0V8m0 4h4m-4 0H8m4 10a8 8 0 100-16 8 8 0 000 16z"
          />
        </svg>
        <p className="text-gray-600 text-center text-base">
          {isDragActive ? (
            "Drop the image here..."
          ) : (
            <>
              <span className="font-medium text-blue-600">Click to upload</span>{" "}
              or drag and drop <br />
              <span className="text-sm text-gray-400">(Only 1 image allowed)</span>
            </>
          )}
        </p>
      </div>
    </motion.div>
  );
};

export default ImageUploader;
