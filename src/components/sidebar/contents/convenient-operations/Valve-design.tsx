import React from 'react'
import { unicornVideo } from 'src/constants'
import { Title, Text, Spacer, Video } from '../dynamic.components'

export const ValveDesign: React.FC = (): JSX.Element => {
  return (
    <>
      <Title
        title="Swivel mount of valves"
      />
      <div className='c-sidebar__body'>
        <Text 
          text="All ÄKTA process™ chromatography system sizes have swivel mount of valves, for fast and easy valve maintenance."
        />
        {/* <Spacer x={3} />
        <Video src={unicornVideo} /> */}
      </div>
    </>
  )
}
