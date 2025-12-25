import "./Product.css";
import Price from "./Price.jsx";

let oldprice = ["1,10,000", "1,55,000", "3,299", "999"];
let newprice = ["76,029", "1,03,899", "1,799", "399"];
let desc = [["A powerful CPU", "3D V-Cache technology"],
            ["A durable and efficient graphics card", "high-end gaming and content creation"],
            ["A light-weight mechanical keyboard", "gaming experience."],
            ["A fast-charging wired gaming mouse",  "customizable DPI settings."]];

function Product({title, idx}) {
  const features = desc[idx] || [];
  return (
    <div className="product">
      <h3 className="product-title">{title}</h3>
      <ul className="features">
        {features.map((f, i) => (
          <li key={i}>{f}</li>
        ))}
      </ul>
      <Price oldprice={oldprice[idx]} newprice={newprice[idx]} />
    </div>
  );
} 

export default Product;