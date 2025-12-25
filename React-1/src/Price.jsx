export default function Price({ oldprice, newprice }) {
  return (
    <div className="price-bar">
      <span className="old">{oldprice}</span>
      <span className="new">{newprice}</span>
    </div>
  );
} 
