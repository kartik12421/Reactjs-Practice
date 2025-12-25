function ButtonClick() {
  console.log("Clicked!!!!!!!!");
}

function Para() {
  console.log("This is a paragraph");
}

function DblClickEvent() {
  console.log("double time clicked");
}

export default function Button() {
  return (
    <div>
      <button onClick={ButtonClick}>Click</button>
      <p onMouseOver={Para}>Lorem ipsum dolor sit amet, consectetur adi</p>
      <button onDoubleClick={DblClickEvent}>dbl click</button>
    </div>
  );
}
