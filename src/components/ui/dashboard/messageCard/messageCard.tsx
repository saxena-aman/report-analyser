import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
type CardProps = React.ComponentProps<typeof Card>;
function MessageCard({ className, ...props }: CardProps) {
  return (
    <Card>
      {/* <CardHeader className="max-w-[460px]">
        <CardTitle className="text-center capitalize">
          Clear insights, informed choices, a healthier you.
        </CardTitle>
        <CardTitle className="text-center capitalize text-xs">
          Our health guru is still hitting the gym, but don't worry, we're
          cooking up some wellness magic behind the scenes.
        </CardTitle>
      </CardHeader> */}
      <CardContent className=" max-w-[420px] mt-4 text-center capitalize text-xs">
        Our health guru is still hitting the gym, but don't worry, we're cooking
        up some wellness magic behind the scenes.
      </CardContent>
    </Card>
  );
}

export default MessageCard;
