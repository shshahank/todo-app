export function Card({ children, flag }) {
  const bg = flag ? "bg-green-600/45 border-green-900 hover:bg-green-600/65" : "bg-red-600/45 border-red-900 hover:bg-red-600/65";

  return (
    <div
      className={
        "backdrop-blur-md border rounded-xl p-4 shadow-md hover:shadow-lg transition " +
        bg
      }
    >
      {children}
    </div>
  );
}
