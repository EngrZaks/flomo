import { notification } from "antd";
import { SmileOutlined } from "@ant-design/icons";

export const openNotification = () => {
  notification.open({
    message: "Notification Title",
    style: { width: 600 },
    duration: 0,
    description:
      "This is the content of the notification. This is the content of the notification. This is the content of the notification.",
    icon: <SmileOutlined style={{ color: "#108ee9" }} />,
  });
};
