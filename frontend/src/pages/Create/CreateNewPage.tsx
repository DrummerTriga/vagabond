import { useState } from "react";
import { Plane, Map, Image as ImageIcon, ChevronLeft } from "lucide-react";
import NewTripForm from "../../components/Forms/NewTripForm";

type CreationType = "trip" | "guide" | "post" | null;

const CreateNewPage = () => {
  const [selectedType, setSelectedType] = useState<CreationType>(null);

  return (
    <div className="w-full max-w-5xl mx-auto flex flex-col gap-8 py-8 px-4">
      {/* Header */}
      {!selectedType ? (
        <div className="text-center mb-6">
          <h1 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4">
            What are you planning today?
          </h1>
          <p className="text-stone-500 text-lg">
            Choose what kind of content you want to create and share with the
            Vagabond community.
          </p>
        </div>
      ) : (
        <button
          onClick={() => setSelectedType(null)}
          className="flex items-center gap-2 text-stone-500 hover:text-stone-800 self-start bg-stone-100 px-4 py-2 rounded-xl transition-colors font-medium"
        >
          <ChevronLeft size={20} /> Back to options
        </button>
      )}

      {/* Grid of Options */}
      {!selectedType && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Trip Tile */}
          <div
            onClick={() => setSelectedType("trip")}
            className="bg-white rounded-3xl p-8 border-2 border-stone-100 shadow-sm hover:border-[#F05A42] hover:shadow-md cursor-pointer transition-all group flex flex-col items-center text-center gap-4"
          >
            <div className="w-20 h-20 bg-[#FEF1EE] rounded-2xl flex items-center justify-center text-[#F05A42] group-hover:scale-110 transition-transform">
              <Plane size={40} />
            </div>
            <h2 className="text-xl font-bold text-stone-800">New Trip</h2>
            <p className="text-stone-500 text-sm">
              Plan your next adventure, set dates, and invite friends.
            </p>
          </div>

          {/* Guide Tile */}
          <div
            onClick={() => setSelectedType("guide")}
            className="bg-white rounded-3xl p-8 border-2 border-stone-100 shadow-sm hover:border-[#F05A42] hover:shadow-md cursor-pointer transition-all group flex flex-col items-center text-center gap-4"
          >
            <div className="w-20 h-20 bg-[#FEF1EE] rounded-2xl flex items-center justify-center text-[#F05A42] group-hover:scale-110 transition-transform">
              <Map size={40} />
            </div>
            <h2 className="text-xl font-bold text-stone-800">Travel Guide</h2>
            <p className="text-stone-500 text-sm">
              Create a curated itinerary or tips for a city you know well.
            </p>
          </div>

          {/* Post Tile */}
          <div
            onClick={() => setSelectedType("post")}
            className="bg-white rounded-3xl p-8 border-2 border-stone-100 shadow-sm hover:border-[#F05A42] hover:shadow-md cursor-pointer transition-all group flex flex-col items-center text-center gap-4"
          >
            <div className="w-20 h-20 bg-[#FEF1EE] rounded-2xl flex items-center justify-center text-[#F05A42] group-hover:scale-110 transition-transform">
              <ImageIcon size={40} />
            </div>
            <h2 className="text-xl font-bold text-stone-800">Quick Post</h2>
            <p className="text-stone-500 text-sm">
              Share a photo, thought, or quick update with your followers.
            </p>
          </div>
        </div>
      )}

      {/* Forms */}
      {selectedType === "trip" && <NewTripForm />}

      {selectedType === "guide" && (
        <div className="bg-white rounded-3xl p-8 border border-stone-200 shadow-sm w-full animate-in fade-in slide-in-from-bottom-4 duration-500">
          <h2 className="text-2xl font-bold text-stone-800 mb-8 flex items-center gap-3">
            <div className="w-10 h-10 bg-[#FEF1EE] rounded-xl flex items-center justify-center text-[#F05A42]">
              <Map size={20} />
            </div>
            Publish a Travel Guide
          </h2>
          <form className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-semibold text-stone-700">
                Guide Title
              </label>
              <input
                type="text"
                placeholder="e.g. 48 Hours in Lisbon"
                className="w-full bg-stone-50 border border-stone-200 px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-[#F05A42]/30 transition-all"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold text-stone-700">
                Cover Photo
              </label>
              <div className="w-full h-32 bg-stone-50 border-2 border-dashed border-stone-300 rounded-xl flex items-center justify-center text-stone-400 cursor-pointer hover:bg-stone-100 hover:border-[#F05A42] hover:text-[#F05A42] transition-colors">
                <span className="flex items-center gap-2 font-medium">
                  <ImageIcon size={20} /> Upload an image
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold text-stone-700">Content</label>
              <textarea
                rows={6}
                placeholder="Share your tips, must-visit places, and recommendations..."
                className="w-full bg-stone-50 border border-stone-200 px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-[#F05A42]/30 transition-all resize-none"
              ></textarea>
            </div>
            <button
              type="button"
              className="w-full md:w-auto self-end bg-[#F05A42] text-white font-bold py-3 px-8 rounded-xl hover:bg-[#d94a34] transition-colors shadow-sm"
            >
              Publish Guide
            </button>
          </form>
        </div>
      )}

      {selectedType === "post" && (
        <div className="bg-white rounded-3xl p-8 border border-stone-200 shadow-sm w-full animate-in fade-in slide-in-from-bottom-4 duration-500">
          <h2 className="text-2xl font-bold text-stone-800 mb-8 flex items-center gap-3">
            <div className="w-10 h-10 bg-[#FEF1EE] rounded-xl flex items-center justify-center text-[#F05A42]">
              <ImageIcon size={20} />
            </div>
            Create Quick Post
          </h2>
          <form className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-semibold text-stone-700">
                What's on your mind?
              </label>
              <textarea
                rows={4}
                placeholder="Just arrived in Tokyo! The food is amazing..."
                className="w-full bg-stone-50 border border-stone-200 px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-[#F05A42]/30 transition-all resize-none"
              ></textarea>
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold text-stone-700">
                Attach Photos
              </label>
              <div className="w-full h-32 bg-stone-50 border-2 border-dashed border-stone-300 rounded-xl flex items-center justify-center text-stone-400 cursor-pointer hover:bg-stone-100 hover:border-[#F05A42] hover:text-[#F05A42] transition-colors">
                <span className="flex items-center gap-2 font-medium">
                  <ImageIcon size={20} /> Browse files
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold text-stone-700">
                Location (Optional)
              </label>
              <input
                type="text"
                placeholder="Add a location"
                className="w-full bg-stone-50 border border-stone-200 px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-[#F05A42]/30 transition-all"
              />
            </div>
            <button
              type="button"
              className="w-full md:w-auto self-end bg-[#F05A42] text-white font-bold py-3 px-8 rounded-xl hover:bg-[#d94a34] transition-colors shadow-sm"
            >
              Share Post
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default CreateNewPage;
