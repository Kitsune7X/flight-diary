import type { Notification } from '@/types';
import { useState } from 'react';

export const useNotification = () => {
  const [notification, setNotification] = useState<Notification | null>(null);

  const handleNotification = ({ message, kind }: Notification) => {
    setNotification({ message, kind });

    setTimeout(() => {
      setNotification(null);
    }, 3000);
  };

  return { notification, handleNotification };
};
