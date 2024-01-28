import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { MdContentPasteSearch } from "react-icons/md";
import { RiRobot2Line } from "react-icons/ri";
import { BsStars } from "react-icons/bs";
import { RiMentalHealthLine } from "react-icons/ri";
import { FiFileText } from "react-icons/fi";
import { LuHelpingHand } from "react-icons/lu";
import { PiDotOutlineBold } from "react-icons/pi";
type CardProps = React.ComponentProps<typeof Card>;
function InfoCard({ className, ...props }: CardProps) {
  interface Features {
    icon: ReactNode; // ReactNode can be used for any valid React content, including components
    heading: string;
    text: string;
  }

  const features: Features[] = [
    {
      icon: (
        <MdContentPasteSearch className={cn("text-[80px] md:text-[24px]")} />
      ),
      heading: "Advanced AI Models:",
      text: "Our sophisticated algorithms analyze your health data with precision, ensuring accurate and reliable results.",
    },
    {
      icon: <FiFileText className={cn("text-[80px] md:text-[24px]")} />,
      heading: "Text-Based Reports:",
      text: "Say goodbye to confusing charts! Receive detailed, easy-to-understand text reports that explain your health metrics without the jargon.",
    },
    {
      icon: <RiMentalHealthLine className={cn("text-[80px] md:text-[24px]")} />,
      heading: "Personalized Insights:",
      text: "We speak your language. Receive reports tailored to your unique health profile, guiding you towards informed decisions.",
    },
  ];
  return (
    <Card className={cn("max-w-[1050px] h-full", className)} {...props}>
      <CardHeader>
        <CardTitle className={cn("text-5xl w-full capitalize")}>
          Unlocking Your Health Insights with Martin.
        </CardTitle>
        <CardDescription
          className={cn("items-center text-2xl w-full pt-1 capitalize")}
        >
          Empowering You to Decode Your Health Reports with Precision
        </CardDescription>
      </CardHeader>
      <CardContent className={cn("text-lg capitalize")}>
        <p>
          At EaseReport, We're on a mission to Revolutionize the way you
          interpret and comprehend your health reports. <br />
          Our cutting-edge AI models are designed to unravel the complexities,
          providing you with insights that go beyond numbers and charts.
        </p>
        <Separator className={cn("my-4 w-11/12 mx-auto")} />
        <p
          className={cn(
            "flex items-center gap-3 font-semibold w-full text-2xl"
          )}
        >
          <BsStars />
          Key Features
        </p>
        {features.map((feature, index) => (
          <div
            key={index}
            className={cn(
              "flex items-center gap-3 font-light text-base ml-5 my-2 w-11/12 capitalize"
            )}
          >
            {feature.icon}
            <div>
              {" "}
              <strong>{feature.heading}</strong> {feature.text}
            </div>
          </div>
        ))}
        <Separator className={cn("my-4 w-11/12 mx-auto")} />
        <div
          className={cn(
            "flex items-center gap-3 font-semibold w-full text-2xl"
          )}
        >
          <LuHelpingHand />
          How We Help
        </div>
        <div
          className={cn(
            "flex items-center gap-3 font-light text-base ml-5 my-3 w-11/12 capitalize"
          )}
        >
          <PiDotOutlineBold className={cn("text-[100px] md:text-[48px]")} />
          Navigating your health reports is now as easy as reading a book.
          Martin translates medical information into simple, actionable
          insights, empowering you to take charge of your well-being with
          confidence.
        </div>
      </CardContent>
    </Card>
  );
}

export default InfoCard;
