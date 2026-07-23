function Footer() {
  const integrantes = [
    "Luis Lizana",
    "Jorge Manriquez",
    "Francisco Soto"
  ];

  return (
    <footer className="bg-dark text-white-50 py-4 mt-auto border-top border-secondary">
      <div className="container text-center">
        <p className="small mb-2 fw-medium text-white">Evaluación Sumativa N°4 - Programación Frontend</p>
        <div className="d-flex justify-content-center align-items-center flex-column">
          <span className="text-xs text-muted mb-2">Integrantes del grupo:</span>
          <ul className="list-inline mb-0 small text-white">
            {integrantes.map((nombre, idx) => (
              <li key={idx} className="list-inline-item mx-2">
                <i className="bi bi-person-fill text-primary me-1"></i> {nombre}
                {idx < integrantes.length - 1 && <span className="text-muted ms-2">|</span>}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-3 text-xs opacity-50">
          <small>&copy; {new Date().getFullYear()} INACAP Sede Puente Alto</small>
        </div>
      </div>
    </footer>
  );
}

export default Footer;