"use client";
import React from "react";
import { ContainerScroll } from "../ui/container-scroll-animation";

export default function IpadSection() {
  return (
    <div className="flex flex-col overflow-hidden text-black">
      <ContainerScroll
        users={users}
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-white">
              Extend Your Reach <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Find Your Ride.
              </span>
            </h1>
          </>
        }
      />
    </div>
  );
}

export const users = [
  {
    name: "Amit Sharma",
    designation: "Student, Thapar University",
    image:
      "https://media.gettyimages.com/id/1336832660/photo/male-teenage-student-in-yellow-background-stock-photo.jpg?s=612x612&w=0&k=20&c=24LklaK0hoPbe7bGCSHZPbaWJKV6yH0F1b8lABbOS30=",
    badge: "1st Year",
  },
  {
    name: "Neha Singh",
    designation: "Student, Delhi University",
    image:
      "https://media.gettyimages.com/id/1272815911/photo/young-indian-female-university-student-stock-photo.jpg?s=612x612&w=0&k=20&c=Iwdc08GR3pw8_Qg3_nabNJUQYTo52EU3dvW4tsth1tE=",
    badge: "2nd Year",
  },
  {
    name: "Rahul Verma",
    designation: "Student, IIT Bombay",
    image:
      "https://media.gettyimages.com/id/987130494/photo/group-of-students-joking-and-getting-to-know-each-other.jpg?s=612x612&w=0&k=20&c=xzBrI0krhgttDdaAAwvh6mPYLHjiP_vfF7CPvBTAqvo=",
    badge: "3rd Year",
  },
  {
    name: "Priya Gupta",
    designation: "Student, Anna University",
    image:
      "https://media.gettyimages.com/id/1286909296/photo/young-man-studying-stock-photo.jpg?s=612x612&w=0&k=20&c=6-1e9xgrbtmqVQki6Hl-_9XCUAXJE0mvpvH5W_Sh6no=",
    badge: "4th Year",
  },
  {
    name: "Rohit Kumar",
    designation: "Student, VIT Vellore",
    image:
      "https://media.gettyimages.com/id/1272435830/photo/young-student-stock-photo.jpg?s=612x612&w=0&k=20&c=TX9-lGhdXpB6PHm5RqAIRc5jsOl0FkcjfDoD-5_nMtw=",
    badge: "1st Year",
  },
  {
    name: "Anjali Mehta",
    designation: "Student, SRM University",
    image:
      "https://media.gettyimages.com/id/914314344/photo/young-woman-taking-an-exam-writing-at-desk-in-classroom.jpg?s=612x612&w=0&k=20&c=NK4wPPrk0zeWL_9yiuYGBGXGU9qRLurznXmvJeclaRQ=",
    badge: "2nd Year",
  },
  {
    name: "Vikas Yadav",
    designation: "Student, BITS Pilani",
    image:
      "https://media.gettyimages.com/id/1141737652/photo/portrait-of-a-confident-young-man.jpg?s=612x612&w=0&k=20&c=YQaYjmbPGpJ0DXxGSTLHFPWsBKjBsAmR_l-XHYt2vHU=",
    badge: "3rd Year",
  },
  {
    name: "Jitesh Khurana",
    designation: "Founder, ReachOut",
    image:
      "https://dms.mydukaan.io/original/webp/media/e0c2f4f5-b781-4d76-bc5b-a87c22695a11.jpg",
    badge: "4th Year",
  },
  {
    name: "Arjun Reddy",
    designation: "Student, Jadavpur University",
    image:
      "https://media.gettyimages.com/id/1128932923/photo/confident-male-college-student-on-campus.jpg?s=612x612&w=0&k=20&c=oYkE9wnO_XZ8vphCh_MeVxNzsJLolTsa4yyKxS0za1I=",
    badge: "1st Year",
  },
  {
    name: "Kavya Nair",
    designation: "Student, Christ University",
    image:
      "https://media.gettyimages.com/id/511353109/photo/portrait-of-pretty-indian-high-school-student-in-classroom.jpg?s=612x612&w=0&k=20&c=Kev1AAJA3ZXx7kpUFklnOzFh3acmCMjzlSKdPsawGW8=",
    badge: "2nd Year",
  },
  {
    name: "Suresh Iyer",
    designation: "Student, Amity University",
    image:
      "https://media.gettyimages.com/id/1216565459/photo/college-student-using-a-laptop-in-a-coffee-shop-stock-photo.jpg?s=612x612&w=0&k=20&c=wk3Bi1ulqoCHinQC8axjndwJsZSI2kz7pyyIF-x6BTg=",
    badge: "3rd Year",
  },
  {
    name: "Pooja Desai",
    designation: "Student, University of Mumbai",
    image:
      "https://media.gettyimages.com/id/1213693689/photo/teenager-girl-doing-her-homework-stock-photo.jpg?s=612x612&w=0&k=20&c=p6C8ktVZRHlVNOfufIhypQOs2-H9gN204apBrAta9Qc=",
    badge: "4th Year",
  },
  {
    name: "Ravi Shankar",
    designation: "Student, IIT Delhi",
    image:
      "https://media.gettyimages.com/id/1401482847/photo/handsome-young-man-in-working-on-laptop-stock-photo.jpg?s=612x612&w=0&k=20&c=FsOUkEWLJqUvg2JDjQDUkpiaw8T9MetvPrBDIixY8ks=",
    badge: "1st Year",
  },
  {
    name: "Meera Joshi",
    designation: "Student, University of Hyderabad",
    image:
      "https://media.gettyimages.com/id/1326217588/photo/shot-of-a-young-women-using-laptop-for-studying-at-home-stock-photo.jpg?s=612x612&w=0&k=20&c=4-cxva4sxEPOKMnTyvtRRb5fn0GZqhpQ7RVATwuz6Ao=",
    badge: "2nd Year",
  },
  {
    name: "Karan Kapoor",
    designation: "Student, NIT Trichy",
    image:
      "https://media.gettyimages.com/id/1141424330/photo/young-man-doing-a-video-conferencing-using-his-laptop.jpg?s=612x612&w=0&k=20&c=uPonfn32W-kWVOyP0gW3rQTJxwLCf7iKLUPB_kWdar4=",
    badge: "3rd Year",
  },
  {
    name: "Aishwarya Rao",
    designation: "Student, IISc Bangalore",
    image:
      "https://media.gettyimages.com/id/1391054448/photo/university-students-portrait.jpg?s=612x612&w=0&k=20&c=b4TCvzD-iWFDfSzTvr7IyzisS62sr9BoHCdhuhKUilw=",
    badge: "4th Year",
  },
  {
    name: "Sanjay Menon",
    designation: "Student, IIT Kharagpur",
    image:
      "https://media.gettyimages.com/id/1067351006/photo/teenager-boy-using-digital-tablet-while-sitting-on-stairway.jpg?s=612x612&w=0&k=20&c=gA-WFKqVHhrxXqkP4QG3TmzraVCKEUsODMrqSVY0AjQ=",
    badge: "1st Year",
  },
  {
    name: "Ritika Jain",
    designation: "Student, University of Calcutta",
    image:
      "https://media.gettyimages.com/id/1355788665/photo/teenage-girl-doing-homework-at-home-stock-photo.jpg?s=612x612&w=0&k=20&c=cX7om8OfEawdjUXYxeZoUivt9qLUEswStzJU9KY6egE=",
    badge: "2nd Year",
  },
  {
    name: "Vivek Agarwal",
    designation: "Student, Banaras Hindu University",
    image:
      "https://media.gettyimages.com/id/648430250/photo/university-students.jpg?s=612x612&w=0&k=20&c=MYAgamw5VHv9XhCX767cQ3O3Lvch1J0elp_Xea0FsUM=",
    badge: "3rd Year",
  },
  {
    name: "Shweta Roy",
    designation: "Student, Aligarh Muslim University",
    image:
      "https://media.gettyimages.com/id/1313430494/photo/college-student-studying-at-park.jpg?s=612x612&w=0&k=20&c=L93oLRkCT_-oe2-yaa3Sa0T2q8ybTfdc9olNJygLp9M=",
    badge: "4th Year",
  },
];
