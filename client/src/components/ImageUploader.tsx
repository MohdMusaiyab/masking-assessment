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
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 sm:mt-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative"
      >
        <div
          {...getRootProps()}
          className={`
            relative border-2 border-dashed rounded-2xl p-8 sm:p-12 lg:p-16 
            flex flex-col items-center justify-center cursor-pointer 
            transition-all duration-300 ease-in-out group overflow-hidden
            ${isDragActive
              ? "border-blue-500 bg-blue-50 shadow-lg scale-[1.02]"
              : "border-slate-300 hover:border-blue-400 hover:bg-slate-50 hover:shadow-md"
            }
          `}
        >
          <input {...getInputProps()} />

          <div className={`
            absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 
            transition-opacity duration-300 
            ${isDragActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"}
          `}></div>

          <motion.div
            animate={{
              scale: isDragActive ? 1.1 : 1,
              rotate: isDragActive ? 5 : 0
            }}
            transition={{ duration: 0.2 }}
            className="relative z-10 mb-6"
          >
            <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg">
              <svg
                className="w-10 h-10 sm:w-12 sm:h-12 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 16v-4m0 0V8m0 4h4m-4 0H8m4 10a8 8 0 100-16 8 8 0 000 16z"
                />
              </svg>
            </div>
          </motion.div>


          <div className="relative z-10 text-center space-y-2">
            <p className="text-lg sm:text-xl text-slate-700 font-medium">
              {isDragActive ? (
                <span className="text-blue-600">Drop your image here!</span>
              ) : (
                <>
                  <span className="text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                    Click to upload
                  </span>{" "}
                  <span className="text-slate-600">or drag and drop</span>
                </>
              )}
            </p>

            <div className="space-y-1 text-sm text-slate-500">
              <p>PNG, JPG, JPEG up to 10MB</p>
              <p className="text-xs">Only 1 image allowed</p>
            </div>
          </div>

          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgb(59_130_246)_1px,_transparent_0)] bg-[length:20px_20px]"></div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ImageUploader;