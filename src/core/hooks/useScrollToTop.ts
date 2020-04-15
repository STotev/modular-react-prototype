import { RefObject, useLayoutEffect } from "react";
import { useLocation,  } from "react-router-dom";

export default function useScrollToTop(target?: RefObject<HTMLElement>) {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    if (target && target.current !== null) {
      target.current.scrollTo(0, 0);
    }
  }, [pathname, target]);
}
