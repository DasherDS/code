import { useCallback, useEffect, useRef, useState } from "react";
import { useSize } from "ahooks";
import MobileIndex from "./mobile/MobileIndex";
import PCIndex from "./pc/PCIndex";

const ChooseRender = () => {
  const ChooseRenderRef = useRef(null);

  const size = useSize(ChooseRenderRef);

  // false：pc  true：mobile
  const [renderPro, setRenderPro] = useState(false);

  const changeSize = 1024;

  // 切换窗口
  const changeWindow = useCallback(() => {
    if (size?.width) {
      size.width <= changeSize ? setRenderPro(true) : setRenderPro(false);
    }
  }, [size]);

  // 监听窗口的大小
  useEffect(() => {
    changeWindow();
  }, [changeWindow]);

  return (
    <div ref={ChooseRenderRef}>{renderPro ? <MobileIndex /> : <PCIndex />}</div>
  );
};

export default ChooseRender;
