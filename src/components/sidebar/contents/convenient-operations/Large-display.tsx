import { Title, Text, Image } from "../dynamic.components";
import larger_screen from "src/assets/images/convenient-operations/larger_screen.png";
import industrial_mouse from "src/assets/images/convenient-operations/Industrial_mouse.jpg";

export const LargeDisplay = () => {
  return (
    <>
      <Title title="Large display" />
      <div className="c-sidebar__body">
        <Text text="The ergonomic user console has a large 24-in industrial computer screen with industrial keyboard and mouse designed for use in a cleanroom environment." />
        <Image
          images={[
            {
              src: larger_screen,
              alt: "Larger screen",
            },
            {
              src: industrial_mouse,
              alt: "Industrial mouse",
            },
          ]}
        />
      </div>
    </>
  );
};
