import { PopularOrNewPropsType } from "../common/page-components-types";


export function Popular(props: PopularOrNewPropsType) {
  return (
    <div className="wrap-item wrap-item-popular">
      <span className="label">Popular!</span>
      {props.children}
    </div>
  )
};
