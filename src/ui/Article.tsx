import { PostPropsType } from "../common/page-components-types";


export function Article(props: PostPropsType) {
    return (
        <div className="item item-article">
            <h3><a href="#">{props.title}</a></h3>
            <p className="views">Прочтений: {props.views}</p>
        </div>
    )
};
