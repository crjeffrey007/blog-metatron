export default function Alert({ mensaje }) {
  return (
    <div className="p-4 my-4 bg-yellow-100 border-l-4 border-yellow-500 rounded text-gray-800">
      ⚠️ {mensaje}
    </div>
  );
}
