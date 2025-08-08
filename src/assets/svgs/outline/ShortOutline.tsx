import * as React from "react"
import { SVGProps, memo } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={800}
    height={800}
    fill="none"
    stroke="#fff"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={1.5}
    viewBox="0 0 16 16"
    {...props}
  >
    <path d="m9.25 1.75-6.5 7.5 4.5.5-.5 4.5 6.5-7.5-4.5-.5z" />
  </svg>
)
const Memo = memo(SvgComponent)
export default Memo
