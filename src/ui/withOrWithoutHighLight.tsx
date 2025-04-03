import { PostPropsType, HighLightOrNotPropsType } from "../common/page-components-types";
import { Popular } from "./Popular";
import { New } from "./New";

export function withOrWithoutHighLight({Component}: HighLightOrNotPropsType) {

  const ComponentWithOrWithoutHighLight = (props: PostPropsType) => {
    switch (true) {
      case props.views >= 1000:
        return (
          <Popular>
            <Component {...props} />
          </Popular>
        );
  
      case props.views <= 100:
        return (
          <New>
            <Component {...props} />
          </New>
          );
  
      default:
        return (
          <Component {...props} />
        );
    };
  };

  ComponentWithOrWithoutHighLight.displayName = `${Component.name}WithOrWithoutHighLight`;

  return ComponentWithOrWithoutHighLight;
}
