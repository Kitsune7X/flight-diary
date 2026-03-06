import { AlertCircleIcon, CheckCircle2Icon } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from './ui/alert';
import type { Notification } from '@/types';

const NotificationComponent = ({ n }: { n: Notification }) => {
  switch (n.kind) {
    case 'basic': {
      return (
        <>
          <Alert className="max-w-md fixed top-5">
            <CheckCircle2Icon />
            <AlertTitle>Diary entry created successfully</AlertTitle>
            <AlertDescription>{n.message}</AlertDescription>
          </Alert>
        </>
      );
    }
    case 'destructive': {
      return (
        <>
          <Alert variant="destructive" className="max-w-md fixed top-5">
            <AlertCircleIcon />
            <AlertTitle>Diary creation failed</AlertTitle>
            <AlertDescription>{n.message}</AlertDescription>
          </Alert>
        </>
      );
    }
    default: {
      const _exhaustiveCheck: never = n;
      return _exhaustiveCheck;
    }
  }
};

export default NotificationComponent;
