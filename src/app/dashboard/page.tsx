import React from "react";
import UploadFileCard from "@/components/ui/dashboard/uploadFile/uploadFileCard";
import InfoCard from "@/components/ui/dashboard/infoCard/infoCard";
import MessageCard from "@/components/ui/dashboard/messageCard/messageCard";
import ProcessCard from "@/components/ui/dashboard/processCard/processCard";
export default function Dashboard() {
  return (
    <div className="flex flex-wrap justify-evenly gap-2">
      <InfoCard />
      <div className="grid content-evenly gap-2">
        <UploadFileCard className="w-full" />

        <ProcessCard className="w-full" />
        <MessageCard />
      </div>
    </div>
  );
}
