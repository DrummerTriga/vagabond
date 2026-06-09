import Post from "../../components/Post";
import SidebarTab from "../../elements/SidebarTab";

const FeedPage = () => {
  return (
    <div className="w-full flex mt-6">
      <div className="feed-wrapper flex flex-col items-center justify-start w-[85%]">
        <div className="flex justify-center gap-4">
          <SidebarTab tabName="Freinds" />
          <SidebarTab tabName="Following" />
        </div>
        <div className="posts-wrapper flex flex-col justify-center items-center w-full gap-6 mt-6">
          <Post />
          <Post />
        </div>
      </div>
      <div className="w-[15%]">RightSidebar</div>
    </div>
  );
};

export default FeedPage;
