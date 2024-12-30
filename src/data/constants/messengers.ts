import { 
  faSkype,
  faTelegram,
  faWhatsapp,
  faSlack,
  faDiscord,
  faLine,
  faWeixin, // WeChat
  faViber,
  faFacebookMessenger
} from '@fortawesome/free-brands-svg-icons';
import { faCommentDots } from '@fortawesome/free-solid-svg-icons';

export const MESSENGER_CONFIG = {
  SKYPE: { 
    name: 'Skype',
    icon: faSkype,
    urlPattern: 'skype:'
  },
  TELEGRAM: {
    name: 'Telegram',
    icon: faTelegram,
    urlPattern: 'https://t.me/'
  },
  WHATSAPP: {
    name: 'WhatsApp',
    icon: faWhatsapp,
    urlPattern: 'https://wa.me/'
  },
  SLACK: {
    name: 'Slack',
    icon: faSlack,
    urlPattern: 'slack://user?team=&id='
  },
  DISCORD: {
    name: 'Discord',
    icon: faDiscord,
    urlPattern: 'discord://discordapp.com/users/'
  },
  LINE: {
    name: 'Line',
    icon: faLine,
    urlPattern: 'line://ti/p/'
  },
  WECHAT: {
    name: 'WeChat',
    icon: faWeixin,
    urlPattern: 'weixin://dl/chat?'
  },
  VIBER: {
    name: 'Viber',
    icon: faViber,
    urlPattern: 'viber://chat?number='
  },
  SIGNAL: {
    name: 'Signal',
    icon: faCommentDots,
    urlPattern: 'signal://user/'
  },
  FACEBOOK: {
    name: 'Facebook Messenger',
    icon: faFacebookMessenger,
    urlPattern: 'https://m.me/'
  }
};
