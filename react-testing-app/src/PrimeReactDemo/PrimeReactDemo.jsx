import { Button } from "primereact/button";
import { Calendar } from "primereact/calendar";
import { ColorPicker } from "primereact/colorpicker";

function PrimeReactDemo() {
  return (
    <>
      <ColorPicker />
      <Calendar />
      <Button onClick={() => alert("Who's this?")}>Demo Button</Button>
    </>
  );
}

export default PrimeReactDemo;
