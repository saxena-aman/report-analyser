"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { BsExclamationDiamond } from "react-icons/bs";
import { TbReportSearch } from "react-icons/tb";
import { MdOutlineNavigateNext } from "react-icons/md";

type CardProps = React.ComponentProps<typeof Card>;
function UploadFileCard({ className, ...props }: CardProps) {
  const { toast } = useToast();
  const [name, setName] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [file, setFile] = useState<File | null>(null);
  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  const handleGenderChange = (value: string) => {
    setGender(value);
  };
  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files && event.target.files[0];
    setFile(selectedFile);
  };
  const handleSubmit = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    // Perform any validation logic here
    if (!name || !gender || !email || !file) {
      // alert("All fields are compulsory!");
      toast({
        variant: "destructive",
        description: "All fields are compulsory!",
      });
      return;
    }
    console.log("Name:", name);
    console.log("Gender:", gender);
    console.log("Email:", email);
    console.log("File:", file);
  };
  return (
    <Card className={cn("w-full h-fit", className)} {...props}>
      <CardHeader>
        <CardTitle>Upload Your Report</CardTitle>
        <CardDescription className={cn("items-center text-xs w-full pt-1")}>
          We'll analyze your report and help you understand it.
        </CardDescription>
      </CardHeader>
      <CardContent className={cn("flex flex-col items-center")}>
        <div className={cn("flex items-center w-full gap-2")}>
          <Input
            type="text"
            placeholder="Name"
            value={name}
            className={cn("w-1/2")}
            onChange={handleNameChange}
          />
          <Select onValueChange={handleGenderChange}>
            <SelectTrigger className={cn("w-1/2")}>
              <SelectValue placeholder="Select Gender" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="male">Male</SelectItem>
                <SelectItem value="female">Female</SelectItem>
                <SelectItem value="others">Others</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <Input
          type="email"
          placeholder="Email"
          value={email}
          className={cn("my-4")}
          onChange={handleEmailChange}
        />
        <div className={cn("flex items-center space-x-2")}>
          <TbReportSearch />
          <Input type="file" onChange={handleFileChange}/>
        </div>
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
          type="submit"
          onClick={handleSubmit}
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
