import {RefObject, useLayoutEffect} from "react";
import {useLocation,} from "react-router-dom";

export default function useScrollToTop(target?: RefObject<HTMLElement>) {
  const {pathname} = useLocation();

  useLayoutEffect(() => {
    let targetObj = target && target.current !== null
      ? target.current
      : window;

    targetObj.scrollTo(0, 0);
  }, [pathname, target]);
}
