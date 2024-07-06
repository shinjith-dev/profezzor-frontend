import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { IconHeartHandshake } from "@tabler/icons-react";

export default function GlobalAlert() {
  return (
    <Alert>
      <IconHeartHandshake className="h-4 w-4" />
      <AlertTitle>Hello visitor!</AlertTitle>
      <AlertDescription>
        This project is still in progress; please support us by contributing
        notes, question papers, and other resources :)
      </AlertDescription>
    </Alert>
  );
}
