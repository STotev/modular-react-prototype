import {useLayoutEffect} from "react";
import {useLocation} from "react-router-dom";

type ScrollTopProps = {
  target?: any
}

function ScrollTop(props: ScrollTopProps) {
  const {pathname} = useLocation();
  const {target} = props;

  useLayoutEffect(() => {
    if (target && target.current !== null) {
      target.current.scrollTo(0, 0);
    }
  }, [pathname, target]);

  return null;
}

export default ScrollTop;
