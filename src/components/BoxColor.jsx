function BoxColor(props) {
  let newBackgroundColor = `rgb(${props.r}, ${props.g}, ${props.b}`;
  return (
    <div className="boxColor" style={{ backgroundColor: newBackgroundColor }}>
      rgb({props.r},{props.g},{props.b})
    </div>
  );
}

export default BoxColor;
