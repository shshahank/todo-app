export function Card({ children, flag }) {
  return (
    <div
      style={{
        border: "2px solid black",
        padding: "10px",
        margin: "10px",
        borderRadius: 15,
        backgroundColor: flag ? "rgba(0, 255, 0, 0.6)" : "rgba(255, 0, 0, 0.6)"
      }}>
      {children}
    </div>
  );
}
