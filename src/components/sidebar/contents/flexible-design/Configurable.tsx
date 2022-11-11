import React from 'react';
import recure_05in_SS_Right from 'src/assets/images/flexibility/Recure_05in_SS_Right.png';
import recure_10mm_PP_Right_ILD from 'src/assets/images/flexibility/Recure_10mm_PP_Right_ILD.png';
import recure20mm_Right from 'src/assets/images/flexibility/Recure20mm_Right.png';
import { Text, Title, Image, List, Spacer } from '../dynamic.components';

export const Configurable = () => {
  return (
    <>
        <Title
            title="Flexibility"
        />
        <div className='c-sidebar__body'>
            <Text 
                text="The ÄKTA process™ chromatography system has a highly flexible design. You can choose from over a million possible configurations."
            />
            <Spacer />
            <Text
                text="Here are a few of the options:"
            />
            <List
                listArray={[
                    "Piping size: 6 mm, 10 mm, 1\", 3\/8\", 1\/2\", or 1\"",
                    "Pumps: 1–3",
                    "Inlets: 2–18",
                    "Outlets: 2–10",
                    "Column connections: 1 or 2",
                    "Filters: 0–2 ",
                    "Sensors: 8–16",
                ]}
            />
            <Image
                images={[
                    {
                        src: recure_05in_SS_Right,
                        alt: "recure 05in SS Right"

                    },{
                        src: recure_10mm_PP_Right_ILD,
                        alt: "recure 10mm PP Right ILD"

                    }
                ]}
            />
            <Image
                images={[
                    {
                        src: recure20mm_Right,
                        alt: "recure20mm Right"

                    }
                ]}
            />
        </div>
    </>
  )
}
