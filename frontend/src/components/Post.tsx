import { useState } from "react";
import {
  Heart,
  MessageCircle,
  Share2,
  MoreHorizontal,
  MapPin,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import userIcon from "../assets/userIcon.png";
import ImageModal from "./ImageModal";

export interface PostProps {
  user: {
    name: string;
    avatar?: string;
  };
  location: string;
  timeAgo: string;
  content: string;
  images?: string[];
  guide?: {
    title: string;
    description: string;
    rating: number;
    price?: string;
  };
  likes: number;
  comments: number;
}

const Post = ({ post }: { post?: PostProps }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Use post prop if available, otherwise default to mock
  const data = post || {
    user: { name: "John Doe", avatar: userIcon },
    location: "Paris, France",
    timeAgo: "2 hours ago",
    content:
      "Just arrived in Paris! The Eiffel Tower looks amazing at night. Can't wait to explore the city tomorrow. Let me know your recommendations! 🥐🍷",
    likes: 124,
    comments: 24,
  };

  const avatarSrc = data.user.avatar || userIcon;

  const nextImage = () => {
    if (data.images && currentImageIndex < data.images.length - 1) {
      setCurrentImageIndex((prev) => prev + 1);
    }
  };

  const prevImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex((prev) => prev - 1);
    }
  };

  return (
    <div className="flex flex-col w-[80%] bg-white border border-stone-200 rounded-2xl shadow-sm p-5 text-stone-800 hover:shadow-md transition-all duration-300">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-3">
          <img
            src={avatarSrc}
            alt="User Avatar"
            className="w-11 h-11 p-0.5 rounded-full object-cover border-2 border-stone-200"
          />
          <div className="flex flex-col">
            <span className="font-bold text-stone-800 tracking-wide">
              {data.user.name}
            </span>
            <span className="text-xs text-stone-500 font-medium">
              {data.timeAgo} in {data.location}
            </span>
          </div>
        </div>
        <button className="text-stone-400 hover:text-stone-700 transition-colors p-2 rounded-full hover:bg-stone-100">
          <MoreHorizontal size={20} />
        </button>
      </div>

      {/* Content */}
      <div className="mb-4">
        <p className="text-stone-700 leading-relaxed mb-4">{data.content}</p>

        {/* Images Carousel */}
        {data.images && data.images.length > 0 && (
          <div className="relative mb-3 rounded-xl overflow-hidden group border border-stone-200 bg-stone-100 cursor-pointer">
            <img
              src={data.images[currentImageIndex]}
              alt="Post content"
              onClick={() => setIsModalOpen(true)}
              className="w-full h-96 sm:h-[450px] object-cover transition-opacity duration-300"
            />

            {/* Arrows */}
            {data.images.length > 1 && (
              <>
                {currentImageIndex > 0 && (
                  <button
                    onClick={prevImage}
                    className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 bg-white/70 hover:bg-white backdrop-blur-md rounded-full text-stone-700 shadow-md transition-all opacity-0 group-hover:opacity-100 focus:outline-none hover:scale-105 active:scale-95"
                  >
                    <ChevronLeft size={24} />
                  </button>
                )}

                {currentImageIndex < data.images.length - 1 && (
                  <button
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-white/70 hover:bg-white backdrop-blur-md rounded-full text-stone-700 shadow-md transition-all opacity-0 group-hover:opacity-100 focus:outline-none hover:scale-105 active:scale-95"
                  >
                    <ChevronRight size={24} />
                  </button>
                )}

                {/* Dots indicator */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 bg-black/20 px-2 py-1.5 rounded-full backdrop-blur-sm">
                  {data.images.map((_, idx) => (
                    <div
                      key={idx}
                      className={`h-1.5 rounded-full transition-all duration-300 shadow-sm ${
                        currentImageIndex === idx
                          ? "w-4 bg-white"
                          : "w-1.5 bg-white/60"
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        )}

        {/* Guide / Tour Widget */}
        {data.guide && (
          <div className="flex items-center gap-4 bg-stone-50 border border-stone-200 rounded-xl p-4 mt-2 cursor-pointer hover:border-[#F05A42]/50 hover:bg-[#FEF1EE] transition-all duration-300 group">
            <div className="p-3 bg-white rounded-lg shadow-sm border border-stone-100 text-stone-400 group-hover:text-[#F05A42] transition-colors">
              <MapPin size={26} />
            </div>
            <div className="flex flex-col flex-1">
              <span className="font-bold text-stone-800 group-hover:text-[#F05A42] transition-colors">
                {data.guide.title}
              </span>
              <span className="text-sm text-stone-500">
                {data.guide.description}
              </span>
            </div>
            {data.guide.price && (
              <div className="font-bold text-stone-700 bg-white px-3 py-1 rounded-full border border-stone-200 shadow-sm">
                {data.guide.price}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Divider */}
      <div className="h-px bg-stone-100 w-full mb-2"></div>

      {/* Actions */}
      <div className="flex items-center gap-6">
        <button className="group flex items-center gap-2 text-stone-500 hover:text-[#F05A42] transition-colors focus:outline-none">
          <div className="p-2 rounded-full group-hover:bg-[#FEF1EE] transition-colors">
            <Heart size={22} />
          </div>
          <span className="text-sm font-semibold">{data.likes}</span>
        </button>

        <button className="group flex items-center gap-2 text-stone-500 hover:text-stone-800 transition-colors focus:outline-none">
          <div className="p-2 rounded-full group-hover:bg-stone-100 transition-colors">
            <MessageCircle size={22} />
          </div>
          <span className="text-sm font-semibold">{data.comments}</span>
        </button>

        <button className="group flex items-center gap-2 text-stone-500 hover:text-stone-800 transition-colors focus:outline-none ml-auto">
          <div className="p-2 rounded-full group-hover:bg-stone-100 transition-colors">
            <Share2 size={22} />
          </div>
        </button>
      </div>

      {/* Fullscreen Image Modal */}
      {data.images && data.images.length > 0 && isModalOpen && (
        <ImageModal
          onClose={() => setIsModalOpen(false)}
          images={data.images}
          initialIndex={currentImageIndex}
          user={data.user}
          timeAgo={data.timeAgo}
        />
      )}
    </div>
  );
};

export default Post;
