export default function DropImage({ closeModalDrop}) {
  return (
    <div onClick={closeModalDrop} className="modal-transition w-screen h-screen bg-blue-500 text-white flex items-center justify-center text-4xl font-bold fixed">
      Drop like it&apos;s HOT!
    </div>
  );
}
