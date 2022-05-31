export function ColorBox({ color }) {
  const style = {
    backgroundColor: color,
    height: "35px",
    width: "300px",
  };
  return <div style={style}></div>;
}
