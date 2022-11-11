import React from 'react';
import { Title, Text, Image } from '../dynamic.components';
import recure_05in_SS_LeftPersp from 'src/assets/images/flexibility/Recure_05in_SS_LeftPersp.png';
import akta_avant from 'src/assets/images/flexibility/akta-avant.png';
import low_replace from 'src/assets/images/flexibility/25948_50054_low_replace.jpg';


export const Scalable: React.FC = () => {
  return (
    <>
      <Title
          title="Scalability"
      />
      <div className='c-sidebar__body'>
        <Text 
            text="The broad flow rate range supports process scale-up through commercial manufacturing. The ÄKTA process™ system is an important member of the scalable chromatography platform that stretches from laboratory to production environments."
        />
              <Image
                images={[
                    {
                      src: akta_avant,
                      alt: "Äkta avant"

                    },{
                      src: low_replace,
                      alt: "25948 50054 low replace"
                    }
                ]}
            />
              <Image
                images={[
                  {
                    src: recure_05in_SS_LeftPersp,
                    alt: "Recure 05in SS LeftPersp"
                  }
                ]}
            />
      </div>
    </>
  )
}