function Footer() {
  return (
    <footer className="bg-dark text-white-50 py-4 mt-auto border-top border-secondary">
      <div className="container text-center">
        <p className="small mb-2 fw-medium text-white">Evaluación Sumativa N°4 - Programación Frontend</p>
        <div className="mt-3 text-xs opacity-50">
          <small>&copy; {new Date().getFullYear()} INACAP Sede Puente Alto</small>
        </div>
      </div>
    </footer>
  );
}

export default Footer;