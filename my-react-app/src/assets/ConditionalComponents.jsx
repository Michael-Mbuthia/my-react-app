import Code from "./Code";
import Welcome from "./Welcome";
export default function ConditionalComponents() {
  /* const display = false;
  if (display) {
    return (
      <>
        <Code />
      </>
    );
  } else {
    return (
      <>
        <Welcome />
      </>
    );
  }*/

  //Conditional rendering using elements varialblea
  /*let message;
  const display = false;
  if (display) {
    message = <Code />;
  } else {
    message = <Welcome />;
  }
  return message;
  */

  //Using tenary operator
  const display = true;
  return display ? <Code /> : <Welcome />;
}
