import * as React from "react"
import { SVGProps, memo } from "react"
const AlertSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={800}
    height={800}
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12Zm9.059-5.945A1 1 0 0 1 11.057 5h1.886a1 1 0 0 1 .998 1.055l-.389 7a1 1 0 0 1-.998.945h-1.108a1 1 0 0 1-.998-.944l-.39-7ZM14 17a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
      clipRule="evenodd"
    />
  </svg>
)
const Memo = memo(AlertSolid)
export default Memo
