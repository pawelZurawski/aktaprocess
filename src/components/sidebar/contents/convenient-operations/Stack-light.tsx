import { Title, Text, Image, List, Spacer } from '../dynamic.components'
import larger_screen from 'src/assets/images/convenient-operations/larger_screen.png';
import industrial_mouse from 'src/assets/images/convenient-operations/Industrial_mouse.jpg';
import { switchLamp } from 'src/services/materials-textures';
import { LampName } from 'src/types/index.d';
import { useStore } from 'src/store';

export const StackLight: React.FC = (): JSX.Element => {
  const { toggleLamp, stackLights } = useStore();
  const onClickLamp = (lampName: LampName) => {
    toggleLamp(lampName);
    switchLamp(lampName);
  }
  return (
    <>
      <Title
        title="System status"
      />
      <div className='c-sidebar__body'>
        <Text 
          text="A stack light on top of the system provides good visibility of the real-time status."
        />
        <Spacer x={3} />
        <List
          listArray={[
            "Red = Alarm (safety, process, or system) or error",
            "Yellow = Process warning",
            "Green = Normal run",
            "Blue = User action required",
            "White = Power is on",
          ]}
        />
        <Spacer x={3} />
        <div className='c-sidebar__stack-lights'>
          <button
            className={`button button--medium button--fixwidth ${stackLights[LampName.red] ? 'btn-red--on' : 'btn-red--off'}`} 
            onClick={() => onClickLamp(LampName.red)}>
          Red</button>
          <button
            className={`button button--medium button--fixwidth ${stackLights[LampName.yellow] ? 'btn-yellow--on' : 'btn-yellow--off'}`}
            onClick={() => onClickLamp(LampName.yellow)}>
          Yellow</button>
          <button
            className={`button button--medium button--fixwidth ${stackLights[LampName.green] ? 'btn-green--on' : 'btn-green--off'}`}
            onClick={() => onClickLamp(LampName.green)}>
          Green</button>
          <button
            className={`button button--medium button--fixwidth ${stackLights[LampName.blue] ? 'btn-blue--on' : 'btn-blue--off'}`}
            onClick={() => onClickLamp(LampName.blue)}>
          Blue</button>
          <button
            className={`button button--medium button--fixwidth ${stackLights[LampName.black] ? 'btn-black--on' : 'btn-black--off'}`}
            onClick={() => onClickLamp(LampName.black)}>
          White</button>
        </div>
      </div>
    </>
  )
}
  