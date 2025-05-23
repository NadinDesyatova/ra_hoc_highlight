import { PostPropsType } from "../common/page-components-types";

export function Video(props: PostPropsType) {
  return (
    <div className="item item-video">
      <iframe src={props.url} allow="autoplay; encrypted-media" allowFullScreen></iframe>
      <p className="views">Просмотров: {props.views}</p>
    </div>
  )
};
