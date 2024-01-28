"use client";
import React from "react";
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { BsExclamationDiamond } from "react-icons/bs";
import { TbReportSearch } from "react-icons/tb";
import { MdOutlineNavigateNext } from "react-icons/md";

type CardProps = React.ComponentProps<typeof Card>;
function UploadFileCard({ className, ...props }: CardProps) {
  return (
    <Card className={cn("w-[380px] h-fit", className)} {...props}>
      <CardHeader>
        <CardTitle>Upload Your Report</CardTitle>
        <CardDescription className={cn("items-center text-xs w-full pt-1")}>
          We'll analyze your report and help you understand it.
        </CardDescription>
      </CardHeader>
      <CardContent className={cn("flex items-center space-x-2")}>
        <TbReportSearch />
        <Input type="file" />
      </CardContent>
      <CardFooter className={cn("flex flex-col w-full")}>
        <div
          className={cn("flex flex-row space-x-1 items-center text-xs w-full")}
        >
          <BsExclamationDiamond size={14} className={cn("mr-3")} /> Ensure Your
          Report is in a Supported Format.
          <br />
          (e.g., PDF, Excel, Word)
        </div>
        <Button
          variant="outline"
          className={cn(
            "flex flex-row space-x-1 items-center text-xs w-full mt-6"
          )}
        >
          Analyze
          <MdOutlineNavigateNext size={20} />
        </Button>
      </CardFooter>
    </Card>
  );
}

export default UploadFileCard;
