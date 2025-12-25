import Product from "./Product.jsx";

let styling = {
  display: "flex",
  justifyContent: "center",
  alignContent: "center",
  width: "100%",
  marginTop: "30px",
  flexWrap: "wrap"
};

function ProductTab() {
  return (
    <div style={styling}>
      <Product title="AMD Ryzen 9 9950X3D Desktop Processor" idx={0} />
      <Product title="Gigabyte GeForce RTX 5070TI" idx={1} />
      <Product
        title="EvoFox Katana X2 TKL Mechanical Gaming Keyboard"
        idx={2}
      />
      <Product title="Portronics Vader Wired Gaming Mouse" idx={3} />
    </div>
  );
}

export default ProductTab;
