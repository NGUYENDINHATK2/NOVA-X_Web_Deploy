import * as React from "react"
import { SVGProps } from "react"
const LogoApp = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={800}
    height={800}
    fill="none"
    viewBox="0 0 40 29"
    {...props}
  >
    <path
      fill="#38DBD0"
      d="m2.943 20.46-.21.36a3.992 3.992 0 1 0 6.898 4.02l.21-.36a3.992 3.992 0 0 0-6.898-4.02Z"
    />
    <path
      fill="#38DBD0"
      d="m7.367 8.16 9.627 16.674a3.992 3.992 0 1 0 6.915-3.992L14.282 4.166A3.992 3.992 0 0 0 7.367 8.16ZM20.74 8.16l9.627 16.674a3.992 3.992 0 0 0 6.915-3.992L27.655 4.166A3.992 3.992 0 1 0 20.74 8.16Z"
      opacity={0.25}
    />
    <path
      fill="#38DBD0"
      d="m7.367 8.16 5.606 9.709a3.992 3.992 0 1 0 6.915-3.992l-5.606-9.71a3.992 3.992 0 1 0-6.915 3.992ZM20.741 8.16l5.679 9.835a3.992 3.992 0 1 0 6.915-3.992l-5.679-9.836a3.992 3.992 0 0 0-6.915 3.992Z"
    />
  </svg>
)
export default LogoApp
