export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white font-medium py-4">
      <div className="container mx-auto text-center">
        <span>
          &copy; {new Date().getFullYear()} Jesus Piscoya | Todos los derechos
          reservados.
        </span>
      </div>
    </footer>
  );
};
