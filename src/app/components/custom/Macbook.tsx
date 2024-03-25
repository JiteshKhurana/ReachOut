import React from "react";
import { MacbookScroll } from "../ui/macbook-scroll";
import Link from "next/link";

export function Macbook() {
  return (
    <div className="overflow-hidden dark:bg-[#0B0B0F] bg-white w-full">
      <MacbookScroll
        title={<span>Where Journeys Merge and Ideas Converge</span>}
        badge={
          <Link href="/getstarted">
            <Badge className="h-10 w-10 transform -rotate-12" />
          </Link>
        }
        src={`/linear.webp`}
        showGradient={false}
      />
    </div>
  );
}
const Badge = ({ className }: { className?: string }) => {
  return (
    <svg
      width="62"
      height="29"
      viewBox="0 0 62 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_1107_1085)">
        <path
          d="M28.4768 28.9886L22.0607 18.5971C22.6324 18.4423 23.1871 18.2315 23.7166 17.9679C25.0083 17.3462 26.0798 16.3522 26.7901 15.1168C27.4868 13.8927 27.8358 12.4462 27.8371 10.7773C27.8371 8.84997 27.3761 7.19567 26.454 5.81445C25.4946 4.40197 24.1239 3.3115 22.5236 2.68769C20.8332 1.97426 18.8424 1.61755 16.5513 1.61755H0V28.9886H10.6269V18.8879L16.3534 28.9886H28.4768ZM13.1934 14.8355H10.6269V9.24533H13.4316C14.4561 9.24533 15.2328 9.48039 15.7617 9.95052C16.2906 10.4206 16.5538 11.0846 16.5513 11.9425C16.5513 12.8549 16.2682 13.5651 15.7022 14.0733C15.1361 14.5814 14.2999 14.8355 13.1934 14.8355Z"
          fill="white"
        />
        <path
          d="M60.006 6.91879C58.655 4.71183 56.6857 2.94026 54.3371 1.81903C51.8885 0.606345 49.0839 0 45.9232 0C42.7625 0 39.9649 0.606345 37.5304 1.81903C35.1852 2.94773 33.2223 4.72684 31.8807 6.9397C30.5629 9.12305 29.8989 11.608 29.8887 14.3945V26.2895C29.8882 26.6436 29.9582 26.9944 30.0947 27.3217C30.2313 27.649 30.4317 27.9465 30.6845 28.1971C30.9373 28.4478 31.2375 28.6467 31.568 28.7825C31.8985 28.9183 32.2528 28.9883 32.6107 28.9886H45.1894C45.418 28.9886 45.6466 29.0057 45.8809 29.0057C46.1153 29.0057 46.3497 28.9943 46.584 28.9886H46.705C49.5532 28.891 52.096 28.2853 54.3333 27.1715C56.6803 26.039 58.6483 24.262 60.0021 22.0527C61.3315 19.863 61.9961 17.3356 61.9961 14.4705C61.9987 11.6232 61.3353 9.10594 60.006 6.91879ZM39.8375 16.6336C39.4094 16.6507 38.9859 16.5406 38.6215 16.3177C38.2571 16.0947 37.9684 15.769 37.7926 15.3824C37.6167 14.9958 37.5618 14.566 37.6348 14.1482C37.7078 13.7305 37.9054 13.3439 38.2022 13.0381C38.499 12.7324 38.8815 12.5215 39.3004 12.4325C39.7193 12.3436 40.1556 12.3806 40.553 12.5389C40.9505 12.6973 41.291 12.9696 41.5308 13.3209C41.7706 13.6722 41.8987 14.0865 41.8987 14.5105C41.9075 15.0618 41.6958 15.5942 41.3098 15.9918C40.9237 16.3895 40.3946 16.6201 39.8375 16.6336ZM45.9443 16.6336C45.5161 16.6511 45.0925 16.5414 44.7278 16.3186C44.3632 16.0959 44.0742 15.7703 43.8981 15.3838C43.7219 14.9972 43.6667 14.5673 43.7395 14.1495C43.8123 13.7316 44.0097 13.3448 44.3064 13.0389C44.6032 12.733 44.9856 12.5219 45.4046 12.4328C45.8235 12.3436 46.2599 12.3806 46.6574 12.5388C47.055 12.6971 47.3957 12.9694 47.6356 13.3207C47.8755 13.6721 48.0036 14.0864 48.0036 14.5105C48.0124 15.0615 47.801 15.5936 47.4154 15.9912C47.0297 16.3888 46.5011 16.6197 45.9443 16.6336ZM52.0492 16.6336C51.6211 16.6511 51.1974 16.5414 50.8327 16.3186C50.4681 16.0959 50.1791 15.7703 50.003 15.3838C49.8268 14.9972 49.7716 14.5673 49.8444 14.1495C49.9172 13.7316 50.1146 13.3448 50.4113 13.0389C50.7081 12.733 51.0905 12.5219 51.5095 12.4328C51.9284 12.3436 52.3648 12.3806 52.7624 12.5388C53.1599 12.6971 53.5006 12.9694 53.7405 13.3207C53.9804 13.6721 54.1086 14.0864 54.1085 14.5105C54.1173 15.0615 53.9059 15.5936 53.5203 15.9912C53.1347 16.3888 52.606 16.6197 52.0492 16.6336Z"
          fill="#7049E6"
        />
      </g>
      <defs>
        <clipPath id="clip0_1107_1085">
          <rect width="62" height="29" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
