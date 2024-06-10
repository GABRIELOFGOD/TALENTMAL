import { WhatDo } from "../utils/dummy"

const WhatDoes = ({ heading, text }: WhatDo) => {
  return (
    <div>
      <p className="text-[40px] font-medium text-primary">{heading}</p>
      <p className="text-2xl font-normal text-light">{text}</p>
    </div>
  )
}

export default WhatDoes