import { notification } from 'antd';

const sendNotification = (message, type = 'info', placement = 'top') => {
  notification[type]({ message, placement });
};

export default sendNotification;
