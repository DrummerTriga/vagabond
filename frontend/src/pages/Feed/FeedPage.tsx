import Post from "../../components/Post";
import SidebarTab from "../../elements/SidebarTab";

const FeedPage = () => {
  return (
    <div className="bg-blue-500 w-full flex mt-6">
      <div className="feed-wrapper flex flex-col items-center justify-center w-[85%] border border-amber-600">
        <div className="flex justify-center">
          <SidebarTab tabName="Freinds" />
          <SidebarTab tabName="Following" />
        </div>
        <div className="posts-wrapper bg-amber-200 flex flex-col justify-center items-center w-full gap-3 mt-6">
          <Post />
          <Post />
        </div>
      </div>
      <div className="bg-red-500 w-[15%]">RightSidebar</div>
    </div>
  );
};

export default FeedPage;
