import { PersonStanding, Plane } from "lucide-react";
import Post from "../../components/Post";
import Sidebar from "../../components/Sidebar";
import Button from "../../elements/Button";

const FeedPage = () => {
  // This should be reformuled. We will have a next trip Widget, recommendations of guides, guias mais destacados, trending travelers, find a travel-buddy etc"
  const rightSidebarContent = [
    { name: "Your next trip", icon: <Plane size={22} strokeWidth={2.5} /> },
    {
      name: "Find your guide",
      icon: <PersonStanding size={22} strokeWidth={2} />,
    },
  ];

  return (
    <div className="w-full flex">
      <div className="feed-wrapper flex flex-col items-center justify-start w-[85%]">
        <div className="flex justify-center mt-6 gap-8">
          <Button children="Friends" className="h-15 w-60 rounded-xl" />
          <Button children="Following" className="h-15 w-60 rounded-xl" />
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
              ],
              likes: 124,
              comments: 24,
            }}
          />
        </div>
      </div>
      {/* under work, regarding comments up */}
      <Sidebar sidebarContent={rightSidebarContent} className="" />
    </div>
  );
};

export default FeedPage;
