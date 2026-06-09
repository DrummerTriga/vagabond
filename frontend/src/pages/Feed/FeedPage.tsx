import Post from "../../components/Post";
import Button from "../../elements/Button";

const FeedPage = () => {
  return (
    <div className="w-full flex mt-6">
      <div className="feed-wrapper flex flex-col items-center justify-start w-[85%]">
        <div className="flex justify-center gap-8">
          <Button children="Friends" className="h-15 w-60 rounded-xl" />
          <Button children="Following" className="h-15 w-60 rounded-xl" />
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
