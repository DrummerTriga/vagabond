import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import userIcon from "../assets/userIcon.png";

interface ImageModalProps {
  onClose: () => void;
  images: string[];
  initialIndex: number;
  user: {
    name: string;
    avatar?: string;
  };
  timeAgo: string;
}

const ImageModal = ({
  onClose,
  images,
  initialIndex,
  user,
  timeAgo,
}: ImageModalProps) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  // Handle ESC key press to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (currentIndex < images.length - 1) setCurrentIndex((prev) => prev + 1);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (currentIndex > 0) setCurrentIndex((prev) => prev - 1);
  };

  const avatarSrc = user.avatar || userIcon;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md transition-opacity duration-300"
      onClick={onClose}
    >
      {/* Header Info */}
      <div
        className="absolute top-0 w-full flex justify-between items-center px-6 py-4 bg-gradient-to-b from-black/80 to-transparent z-10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-4">
          <img
            src={avatarSrc}
            alt="User"
            className="w-12 h-12 rounded-full border border-stone-600 object-cover"
          />
          <div className="flex flex-col">
            <span className="text-white font-semibold text-lg tracking-wide">
              {user.name}
            </span>
            <span className="text-stone-400 text-sm">{timeAgo}</span>
          </div>
          <button className="ml-6 px-4 py-1.5 rounded-full border border-stone-400 text-white text-sm hover:bg-white hover:text-black hover:border-white transition-all font-medium">
            View Profile
          </button>
        </div>
        <button
          onClick={onClose}
          className="p-2 text-stone-300 hover:text-white hover:bg-white/10 rounded-full transition-colors focus:outline-none"
        >
          <X size={28} />
        </button>
      </div>

      {/* Main Image Container */}
      <div
        className="relative w-full h-full flex items-center justify-center px-16 pb-20 pt-20"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={images[currentIndex]}
          alt="Expanded view"
          className="max-w-full max-h-full object-contain rounded-md shadow-2xl transition-all duration-300"
        />

        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            {currentIndex > 0 && (
              <button
                onClick={prevImage}
                className="absolute left-6 p-4 bg-black/50 hover:bg-black/80 text-white rounded-full transition-all backdrop-blur-md hover:scale-105 active:scale-95 focus:outline-none border border-white/10"
              >
                <ChevronLeft size={36} />
              </button>
            )}
            {currentIndex < images.length - 1 && (
              <button
                onClick={nextImage}
                className="absolute right-6 p-4 bg-black/50 hover:bg-black/80 text-white rounded-full transition-all backdrop-blur-md hover:scale-105 active:scale-95 focus:outline-none border border-white/10"
              >
                <ChevronRight size={36} />
              </button>
            )}
          </>
        )}
      </div>

      {/* Thumbnails (for aesthetic multi-image navigation) */}
      {images.length > 1 && (
        <div
          className="absolute bottom-6 flex gap-3"
          onClick={(e) => e.stopPropagation()}
        >
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-all shadow-lg ${
                currentIndex === idx
                  ? "border-[#F05A42] opacity-100 scale-110"
                  : "border-transparent opacity-40 hover:opacity-100 hover:scale-105"
              }`}
            >
              <img
                src={img}
                className="w-full h-full object-cover"
                alt={`Thumbnail ${idx + 1}`}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageModal;
