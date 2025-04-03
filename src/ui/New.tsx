import { PopularOrNewPropsType } from "../common/page-components-types";


export function New(props: PopularOrNewPropsType) {
  return (
    <div className="wrap-item wrap-item-new">
      <span className="label">New!</span>
      {props.children}
    </div>
  )
};
