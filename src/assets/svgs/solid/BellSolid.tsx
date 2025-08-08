import * as React from "react"
import { SVGProps, memo } from "react"
const BellSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={800}
    height={800}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <g fill="currentColor">
      <path d="M8.352 20.242A4.63 4.63 0 0 0 12 22a4.63 4.63 0 0 0 3.648-1.758 27.158 27.158 0 0 1-7.296 0ZM18.75 9v.704c0 .845.24 1.671.692 2.374l1.108 1.723c1.011 1.574.239 3.713-1.52 4.21a25.794 25.794 0 0 1-14.06 0c-1.759-.497-2.531-2.636-1.52-4.21l1.108-1.723c.452-.703.693-1.529.693-2.374V9c0-3.866 3.022-7 6.749-7s6.75 3.134 6.75 7Z" />
    </g>
  </svg>
)
const Memo = memo(BellSolid)
export default Memo
