export default function Message() {
  function handleClick() {
    console.log("Button clicked");
  }
  return (
    <>
      <button onClick={handleClick}>Click Here to see message</button>
    </>
  );
}
