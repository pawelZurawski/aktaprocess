import React from 'react'
import { Title, Text } from '../dynamic.components'

export const TurnkySolution: React.FC = (): JSX.Element => {
  return (
    <>
      <Title
        title="Turnkey solution"
      />
      <div className='c-sidebar__body'>
        <Text 
          text="The ÄKTA process™ system combines high-quality hardware design and proven automation to deliver a turnkey solution. This allows you to easily align across production sites and supports both speed to market and your future scalability needs."
        />
      </div>
    </>
  )
}
