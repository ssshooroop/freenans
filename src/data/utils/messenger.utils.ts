import { MESSENGER_CONFIG } from '../constants/messengers';

export const openMessengerChat = (messengerType: string, contactId: string) => {
  const messenger = MESSENGER_CONFIG[messengerType as keyof typeof MESSENGER_CONFIG];
  if (messenger) {
    window.open(messenger.urlPattern + contactId, '_blank');
  }
};