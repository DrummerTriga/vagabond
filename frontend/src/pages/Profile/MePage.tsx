import { useState } from "react";
import Post from "../../components/Post";
import userIcon from "../../assets/userIcon.png";
import { Plus, Settings, MapPin, Navigation, Map } from "lucide-react";

const MePage = () => {
  const [tripTab, setTripTab] = useState("Upcoming");

  return (
    <div className="w-full max-w-6xl flex flex-col md:flex-row gap-6">
      {/* LEFT COLUMN: Profile Widget */}
      <div className="w-full md:w-1/3 flex flex-col gap-6">
        {/* Profile Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-stone-200 p-6 flex flex-col items-center text-center">
          <div className="relative mb-4">
            <img
              src={userIcon}
              alt="Avatar"
              className="w-28 h-28 rounded-full border-4 border-stone-50 shadow-sm object-cover bg-white"
            />
          </div>
          <h1 className="text-xl font-bold text-stone-800">Gil Santos</h1>
          <p className="text-stone-500 font-medium text-sm mb-4">@gilsantos</p>

          <p className="text-stone-600 text-sm mb-6">
            Digital nomad, photography enthusiast, and coffee addict. Exploring
            the hidden gems of the world one city at a time.
          </p>

          <div className="flex w-full justify-around border-t border-stone-100 pt-4 mb-6">
            <div className="flex flex-col">
              <span className="text-lg font-bold text-stone-800">12</span>
              <span className="text-xs text-stone-500 font-medium">Trips</span>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-stone-800">34</span>
              <span className="text-xs text-stone-500 font-medium">
                Countries
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-stone-800">4.2k</span>
              <span className="text-xs text-stone-500 font-medium">
                Followers
              </span>
            </div>
          </div>

          <button className="w-full py-2.5 bg-stone-100 text-stone-700 hover:bg-stone-200 font-semibold rounded-xl border border-stone-200 mb-3 flex items-center justify-center gap-2 transition-colors">
            <Settings size={18} /> Edit Profile
          </button>
          <button className="w-full py-2.5 bg-[#F05A42] text-white hover:bg-[#d94a34] font-semibold rounded-xl flex items-center justify-center gap-2 shadow-sm transition-colors">
            <Plus size={18} /> Create New Trip
          </button>
        </div>

        {/* Quick Links / Badges Widget */}
        <div className="bg-white rounded-2xl shadow-sm border border-stone-200 p-5">
          <h3 className="font-bold text-stone-800 mb-3">Travel Badges</h3>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-[#FEF1EE] text-[#F05A42] text-xs font-bold rounded-full border border-[#F05A42]/20">
              Expert Guide
            </span>
            <span className="px-3 py-1 bg-stone-100 text-stone-600 text-xs font-bold rounded-full border border-stone-200">
              Photography
            </span>
            <span className="px-3 py-1 bg-stone-100 text-stone-600 text-xs font-bold rounded-full border border-stone-200">
              Europe 2026
            </span>
          </div>
        </div>
      </div>

      {/* RIGHT COLUMN: Dashboard Widgets */}
      <div className="w-full md:w-2/3 flex flex-col gap-6">
        {/* Widget 1: My Trips */}
        <div className="bg-white rounded-2xl shadow-sm border border-stone-200 overflow-hidden">
          <div className="p-5 border-b border-stone-100 flex justify-between items-center bg-stone-50/50">
            <h2 className="font-bold text-lg text-stone-800 flex items-center gap-2">
              <Navigation size={20} className="text-[#F05A42]" /> My Trips
            </h2>
            <div className="flex bg-stone-100 p-1 rounded-lg">
              {["Past", "Upcoming", "Wishlist"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setTripTab(tab)}
                  className={`px-4 py-1.5 text-xs font-bold rounded-md transition-all ${
                    tripTab === tab
                      ? "bg-white text-stone-800 shadow-sm"
                      : "text-stone-500 hover:text-stone-700"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="p-5">
            {tripTab === "Upcoming" && (
              <div className="flex gap-4 overflow-x-auto pb-2 no-scrollbar">
                {/* Trip Card */}
                <div className="min-w-[260px] border border-stone-200 rounded-xl overflow-hidden hover:border-[#F05A42] transition-colors cursor-pointer group shadow-sm">
                  <div className="h-32 bg-stone-200 overflow-hidden relative">
                    <img
                      src="https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=600&q=80"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      alt="Rome"
                    />
                    <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-md text-[11px] font-bold text-stone-800 shadow-sm">
                      In 14 Days
                    </div>
                  </div>
                  <div className="p-4 bg-white">
                    <h4 className="font-bold text-stone-800">Rome, Italy</h4>
                    <p className="text-xs text-stone-500 mt-1 font-medium">
                      Aug 12 - Aug 20, 2026
                    </p>
                  </div>
                </div>
              </div>
            )}

            {tripTab === "Past" && (
              <div className="text-sm text-stone-500 italic p-4 text-center">
                Showing your past trips...
              </div>
            )}

            {tripTab === "Wishlist" && (
              <div className="text-sm text-stone-500 italic p-4 text-center">
                Showing your bucket list...
              </div>
            )}
          </div>
        </div>

        {/* Widget 2: My Guides */}
        <div className="bg-white rounded-2xl shadow-sm border border-stone-200 overflow-hidden">
          <div className="p-5 border-b border-stone-100 bg-stone-50/50">
            <h2 className="font-bold text-lg text-stone-800 flex items-center gap-2">
              <Map size={20} className="text-[#F05A42]" /> Published Guides
            </h2>
          </div>
          <div className="p-5 flex flex-col gap-3">
            <div className="flex items-center gap-4 bg-stone-50 border border-stone-200 rounded-xl p-3 cursor-pointer hover:border-[#F05A42]/50 hover:bg-[#FEF1EE] transition-all group">
              <div className="p-3 bg-white rounded-lg shadow-sm border border-stone-100 text-stone-400 group-hover:text-[#F05A42] transition-colors">
                <MapPin size={24} />
              </div>
              <div className="flex flex-col flex-1">
                <span className="font-bold text-stone-800 group-hover:text-[#F05A42] transition-colors">
                  Alfama Hidden Gems
                </span>
                <span className="text-xs text-stone-500">
                  A walking route through the oldest neighborhood in Lisbon
                </span>
              </div>
              <div className="text-xs font-bold text-stone-500 bg-white px-2 py-1 rounded-md border border-stone-200">
                ⭐ 4.8
              </div>
            </div>
          </div>
        </div>

        {/* Widget 3: Recent Posts */}
        <div className="flex flex-col gap-4">
          <h2 className="font-bold text-lg text-stone-800 px-2 mt-2">
            Recent Activity
          </h2>

          <div className="w-full">
            {/* Wrapper for Post to inherit 100% width since Post is 80% */}
            <Post
              post={{
                user: { name: "Gil Santos", avatar: userIcon },
                location: "Lisbon, Portugal",
                timeAgo: "1 week ago",
                content:
                  "Back in my favorite city! The light here is just different. Spent the afternoon getting lost in the narrow streets of Alfama.",
                images: [
                  "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=800&q=80",
                ],
                likes: 890,
                comments: 112,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MePage;
