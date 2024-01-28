import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";
import {
  Card,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
type CardProps = React.ComponentProps<typeof Card>;
function MessageCard({ className, ...props }: CardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-center capitalize">
          Clear insights, informed choices, a healthier you.
        </CardTitle>
      </CardHeader>
    </Card>
  );
}

export default MessageCard;
