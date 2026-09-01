export default function ColorSwitch({ onChangeColor }) {
  function handleClick(e) {
    e.stopPropagation();
    onChangeColor();
  }

  return <button onClick={handleClick}>Change color</button>;
}
