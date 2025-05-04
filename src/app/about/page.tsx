import { TextReveal } from "@/components/magicui/text-reveal";
import MainLayout from "@/components/MainLayout";
import { TimelineDemo } from "@/components/TimeLine";

export default function TextRevealIntro() {
  return (
    <>
      <MainLayout>
        <TextReveal>
          {
            "Know me ! \nBorn in Kushinagar, raised in Noida \n ..and currently living in Noida too \n "
          }
        </TextReveal>
        <TimelineDemo/>
      </MainLayout>
    </>
  );
}
