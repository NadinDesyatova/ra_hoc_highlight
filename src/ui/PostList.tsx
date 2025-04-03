import { PostListPropsType } from "../common/page-components-types";
import { Video } from "./Video";
import { Article } from "./Article";
import { withOrWithoutHighLight } from "./withOrWithoutHighLight";

export function PostList(props: PostListPropsType) {
  return props.list.map((item, i) => {
    switch (item.type) {
      case 'video': {
        const VideoWithOrWithoutHighLight = withOrWithoutHighLight({Component: Video});
        return (
          <VideoWithOrWithoutHighLight {...item} key={i} />
        );
      }

      case 'article': {
        const ArticleWithOrWithoutHighLight = withOrWithoutHighLight({Component: Article});
        return (
          <ArticleWithOrWithoutHighLight {...item} key={i} />
        );
      }
    }
  });
};