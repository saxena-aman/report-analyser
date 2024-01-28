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
import { TbReportMedical, TbReportSearch } from "react-icons/tb";
import { GrNext } from "react-icons/gr";
import { MdInsights } from "react-icons/md";
import { FaUserDoctor } from "react-icons/fa6";
type CardProps = React.ComponentProps<typeof Card>;

function ProcessCard({ className, ...props }: CardProps) {
  return (
    <Card className={cn("w-[380px] h-fit", className)} {...props}>
      <CardHeader>
        <CardTitle>Process</CardTitle>
      </CardHeader>
      <CardContent
        className={cn("flex flex-col items-center justify-center w-full")}
      >
        <div className="grid grid-cols-11 w-full">
          <TbReportMedical className="col-span-2 text-[40px] self-center justify-self-center" />
          <GrNext
            className={cn("text-[20px] self-center justify-self-center")}
          />
          <TbReportSearch className="col-span-2 text-[40px] self-center justify-self-center" />
          <GrNext
            className={cn("text-[20px] self-center justify-self-center")}
          />
          <MdInsights className="col-span-2 text-[40px] self-center justify-self-center" />
          <GrNext
            className={cn("text-[20px] self-center justify-self-center")}
          />
          <FaUserDoctor className="col-span-2 text-[40px] self-center justify-self-center" />
        </div>
        <div className="grid grid-cols-4 mt-3 w-full">
          <p className="text-sm ml-[1px] uppercase md:ml-[6px]">Upload</p>
          <p className="text-sm ml-[5px] uppercase md:ml-[12px]">Analyze</p>
          <p className="text-sm ml-[24px] uppercase md:ml-[32px]">Read</p>
          <p className="text-sm ml-[16px] uppercase md:ml-[26px]">Consult</p>
        </div>
      </CardContent>
    </Card>
  );
}

export default ProcessCard;
