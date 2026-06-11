import { Plane, Star, UserPlus, MapPin, Compass } from "lucide-react";
import userIcon from "../assets/userIcon.png";

const RightSidebar = () => {
  return (
    <div className="flex flex-col w-[28%] min-w-[300px] border-l border-stone-400/30 pl-8 pr-6 sticky top-25 h-[calc(100vh-100px)] overflow-y-auto pb-10 no-scrollbar">
      {/* Widget: Your Next Trip */}
      <div className="mt-5 mb-8">
        <h3 className="font-bold text-stone-800 text-lg mb-4 flex items-center gap-2">
          <Plane className="text-[#F05A42]" size={20} />
          Your Next Trip
        </h3>
        <div className="bg-white border border-stone-200 rounded-2xl p-4 shadow-sm hover:shadow-md transition-all cursor-pointer group">
          <div className="flex justify-between items-center mb-2">
            <span className="font-bold text-stone-800 group-hover:text-[#F05A42] transition-colors">
              Rome, Italy
            </span>
            <span className="text-xs font-semibold px-2 py-1 bg-[#FEF1EE] text-[#F05A42] rounded-full">
              In 14 days
            </span>
          </div>
          <p className="text-sm text-stone-500 flex items-center gap-1">
            <MapPin size={14} /> Colosseum & Vatican Tour
          </p>
        </div>
      </div>

      {/* Widget: Top Guides */}
      <div className="mb-8">
        <h3 className="font-bold text-stone-800 text-lg mb-4 flex items-center gap-2">
          <Compass className="text-[#F05A42]" size={20} />
          Top Guides
        </h3>
        <div className="flex flex-col gap-3">
          {[
            {
              name: "Marco Rossi",
              location: "Italy",
              rating: "4.9",
              reviews: "120",
            },
            {
              name: "Yuki Tanaka",
              location: "Japan",
              rating: "5.0",
              reviews: "84",
            },
          ].map((guide, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between p-3 bg-white border border-stone-200 rounded-xl shadow-sm hover:border-[#F05A42]/30 transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <img
                  src={userIcon}
                  alt="guide"
                  className="w-10 h-10 rounded-full border border-stone-200"
                />
                <div className="flex flex-col">
                  <span className="font-semibold text-stone-800 text-sm">
                    {guide.name}
                  </span>
                  <span className="text-xs text-stone-500 flex items-center gap-1">
                    <Star size={12} className="text-amber-500 fill-amber-500" />{" "}
                    {guide.rating} ({guide.reviews})
                  </span>
                </div>
              </div>
              <button className="text-xs font-semibold text-[#F05A42] hover:bg-[#FEF1EE] px-3 py-1.5 rounded-full transition-colors">
                View
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Widget: Trending Travelers */}
      <div className="mb-8">
        <h3 className="font-bold text-stone-800 text-lg mb-4 flex items-center gap-2">
          <UserPlus className="text-[#F05A42]" size={20} />
          Trending Travelers
        </h3>
        <div className="flex flex-col gap-4">
          {["Sarah Jenkins", "Miguel Alvarez", "Emma Watson"].map(
            (user, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between group cursor-pointer px-1"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={userIcon}
                    alt="traveler"
                    className="w-10 h-10 rounded-full border border-stone-200 group-hover:border-[#F05A42] transition-colors"
                  />
                  <span className="font-medium text-stone-700 text-sm group-hover:text-[#F05A42] transition-colors">
                    {user}
                  </span>
                </div>
                <button className="text-stone-400 hover:text-[#F05A42] transition-colors">
                  <UserPlus size={18} />
                </button>
              </div>
            )
          )}
        </div>
      </div>

      {/* Widget: Find a Travel Buddy */}
      <div className="bg-gradient-to-br from-[#FEF1EE] to-white border border-[#F05A42]/20 rounded-2xl p-5 shadow-sm">
        <h3 className="font-bold text-stone-800 mb-2">Traveling alone?</h3>
        <p className="text-sm text-stone-600 mb-4">
          Find someone with the same itinerary and split costs or just share the
          experience.
        </p>
        <button className="w-full bg-[#F05A42] text-white font-semibold py-2 rounded-xl shadow-sm hover:bg-[#d94a34] transition-colors active:scale-95">
          Find a Buddy
        </button>
      </div>
    </div>
  );
};

export default RightSidebar;
