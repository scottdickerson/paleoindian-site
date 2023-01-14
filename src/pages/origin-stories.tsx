import { StoryNavigation } from "@/components/story-navigation";

// next js component showing simple text
const OriginStories = () => {
  return (
    <div>
      <h1>Origin Stories</h1>
      <StoryNavigation selectedPage="origin-stories" />
      <p>
        This is the origin stories page. It is a simple page with some text.
      </p>
    </div>
  );
};

export default OriginStories;
