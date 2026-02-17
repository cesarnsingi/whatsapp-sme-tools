export default function Footer() {
  return (
    <footer className="border-t py-10">
      <div className="max-w-6xl mx-auto px-6 text-sm text-gray-500 flex justify-between">
        <span>© {new Date().getFullYear()} Cerins</span>
        <span>Built in Angola</span>
      </div>
    </footer>
  );
}
