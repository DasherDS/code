import startup from "./startup";
import { Button } from "@arco-design/mobile-react";

const MobileIndex = () => {
  startup();
  return (
    <div>
      <div
        style={{ width: 300, height: 300, background: "blue", fontSize: 20 }}
      >
        阿萨德刚官方公告
      </div>
      <Button needActive size="huge">
        Banner
      </Button>
    </div>
  );
};

export default MobileIndex;
