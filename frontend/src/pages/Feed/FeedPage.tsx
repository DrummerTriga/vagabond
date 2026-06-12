import { useState } from "react";
import Post from "../../components/Post";
import RightSidebar from "../../components/RightSidebar";

const FeedPage = () => {
  const [activeTab, setActiveTab] = useState("All");
  const tabs = ["All", "Friends", "Following"];

  return (
    <div className="w-full flex justify-between">
      <div className="feed-wrapper flex flex-col items-center justify-start flex-1 max-w-3xl mx-auto">
        <div className="flex justify-center mt-6 gap-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-8 py-2.5 rounded-full font-bold text-sm transition-all duration-300 ${
                activeTab === tab
                  ? "bg-[#F05A42] text-white shadow-md scale-105"
                  : "bg-white text-stone-500 border border-stone-200 hover:bg-stone-50 hover:text-stone-700 hover:border-stone-300 shadow-sm"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="posts-wrapper flex flex-col justify-center items-center w-full gap-6 mt-6 pb-10">
          <Post
            post={{
              user: { name: "Alice Explorer" },
              location: "Kyoto, Japan",
              timeAgo: "4 hours ago",
              content:
                "Found the most amazing local guide for exploring the hidden temples in Kyoto! We avoided all the crowds and learned so much about the history. Highly recommend booking this experience if you are in town. 🌸⛩️",
              guide: {
                title: "Hidden Temples & Bamboo Forest Tour",
                description: "4-hour walking tour with a local historian",
                rating: 4.9,
                price: "45 CHF",
              },
              likes: 342,
              comments: 56,
            }}
          />
          <Post
            post={{
              user: { name: "John Doe" },
              location: "Paris, France",
              timeAgo: "2 hours ago",
              content:
                "Just arrived in Paris! The Eiffel Tower looks amazing at night. Can't wait to explore the city tomorrow. Let me know your recommendations! 🥐🍷",
              images: [
                "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80",
              ],
              likes: 124,
              comments: 24,
            }}
          />
          <Post
            post={{
              user: { name: "Sofia Martins" },
              location: "Lisbon, Portugal",
              timeAgo: "5 hours ago",
              content:
                "Does anyone know a good hidden specialty coffee shop in Alfama? ☕️ Trying to find a quiet place to read this afternoon and escape the tourist crowds!",
              likes: 89,
              comments: 12,
            }}
          />
          <Post
            post={{
              user: { name: "David Chen" },
              location: "Swiss Alps, Switzerland",
              timeAgo: "1 day ago",
              content:
                "Hiking the Alps today was absolutely breathtaking. The air is so fresh and the views are unreal. Definitely adding this to my top 10 trails of all time! 🏔️🌲",
              images: [
                "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80",
              ],
              likes: 512,
              comments: 48,
            }}
          />
        </div>
      </div>
      <RightSidebar />
    </div>
  );
};

export default FeedPage;
