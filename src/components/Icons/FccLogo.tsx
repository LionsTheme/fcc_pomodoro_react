import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";

type Variants = "white" | "black";

interface FccLogoProps extends SVGProps<SVGSVGElement> {
  variants?: Variants;
}

const FccLogo = (
  { variants = "black", ...props }: FccLogoProps,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="1em"
    height="1em"
    viewBox="0 0 712 484"
    ref={ref}
    {...props}
  >
    <defs>
      <path
        id="a"
        d="M136.83 9.96c2.35 2.34 4.7 5.71 4.71 9.1.01 5.86-6.87 13.81-19.59 26.87C68.91 97 42.23 159.54 42.41 234.97c.2 83.45 28.26 150.47 82.8 202.41 11.47 10.25 16.18 18.31 16.2 25.21 0 3.38-2.33 6.9-4.67 10.29-2.2 2.35-6.89 4.71-10.27 4.71-12.62.03-30.28-14.89-53.34-43.92-44.9-55.03-65.2-115.8-66.34-198.62C5.74 152.19 31.72 96 82.57 37.99c18.3-20.73 33.56-31.5 43.97-31.52 3.38-.01 6.9 1.15 10.29 3.49Z"
      />
      <path
        id="b"
        d="M415.42 249.9c-19.93-5.09 61.85-101.71-83.5-217.39 0 0 19.07 60.59-77.09 195.8-96.21 135.16 42.78 215.68 42.78 215.68s-65.23-34.76 10.6-158.52c13.57-22.45 31.33-42.78 53.38-88.54 0 0 19.52 27.55 9.33 87.28-15.24 90.26 66.09 64.43 67.35 65.69 28.41 33.45-23.53 92.24-26.69 94.09-3.15 1.8 148.33-91.12 40.71-230.96-7.37 7.37-16.95 41.97-36.87 36.87Z"
      />
      <path
        id="c"
        d="M575.26 9.9c-2.35 2.34-4.7 5.71-4.71 9.1-.01 5.86 6.87 13.81 19.59 26.87 53.04 51.06 79.72 113.61 79.54 189.04-.2 83.45-28.26 150.47-82.8 202.41-11.47 10.25-16.18 18.31-16.2 25.21 0 3.38 2.33 6.9 4.67 10.29 2.2 2.35 6.89 4.7 10.27 4.71 12.62.03 30.28-14.89 53.34-43.92 44.9-55.03 65.2-115.8 66.34-198.62 1.05-82.86-24.93-139.05-75.78-197.06-18.3-20.73-33.56-31.5-43.97-31.52-3.38-.01-6.9 1.15-10.29 3.49Z"
      />
    </defs>
    <use xlinkHref="#a" fill={variants === "black" ? "#0a0a23" : "#fff"} />
    <use
      xlinkHref="#a"
      fillOpacity={0}
      stroke={variants === "black" ? "#000" : "#fff"}
      strokeOpacity={0}
    />
    <use xlinkHref="#b" fill={variants === "black" ? "#0a0a23" : "#fff"} />
    <use
      xlinkHref="#b"
      fillOpacity={0}
      stroke={variants === "black" ? "#000" : "#fff"}
      strokeOpacity={0}
    />
    <use xlinkHref="#c" fill={variants === "black" ? "#0a0a23" : "#fff"} />
    <use
      xlinkHref="#c"
      fillOpacity={0}
      stroke={variants === "black" ? "#000" : "#fff"}
      strokeOpacity={0}
    />
  </svg>
);
const ForwardRef = forwardRef(FccLogo);
export default ForwardRef;
