import "./BotanicalDecoration.css";

function BotanicalDecoration({ className = "" }) {
  return (
    <div
      className={`botanical-decoration ${className}`}
      aria-hidden="true"
    >
      <span className="botanical-stem" />

      <span className="botanical-leaf botanical-leaf-1" />
      <span className="botanical-leaf botanical-leaf-2" />
      <span className="botanical-leaf botanical-leaf-3" />
      <span className="botanical-leaf botanical-leaf-4" />
      <span className="botanical-leaf botanical-leaf-5" />
      <span className="botanical-leaf botanical-leaf-6" />
    </div>
  );
}

export default BotanicalDecoration;