import React from 'react'

function LineGradient({width = "w-full"} : {width?: string}) {
  return (
    <div className={`h-0.5 ${width} bg-red`} />
  )
}

export default LineGradient