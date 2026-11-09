function DetalleItem({ juego }) {
  if (!juego) {
    return (
      <div className="card border-0 shadow-sm p-4 text-center text-muted">
        <p className="mb-0">Selecciona un elemento de la lista para ver su detalle.</p>
      </div>
    );
  }

  const { nombre, imagen, descripcion, categoria, plataforma, anio } = juego;

  return (
    <aside className="card border-0 shadow-sm sticky-top" style={{ top: '20px' }}>
      <img 
        src={imagen} 
        className="card-img-top rounded-top" 
        alt={nombre} 
        style={{ height: '250px', objectFit: 'cover' }}
      />
      <div className="card-body p-4">
        <span className="badge bg-primary mb-2 text-uppercase font-monospace">{categoria}</span>
        <h3 className="h4 card-title fw-bold text-dark mb-3">{nombre}</h3>
        <p className="card-text text-secondary small lh-base mb-4">{descripcion}</p>
        
        <hr className="text-muted opacity-25" />
        
        <div className="row g-2 small">
          <div className="col-5 fw-semibold text-muted">Plataforma:</div>
          <div className="col-7 text-dark">{plataforma}</div>
          
          <div className="col-5 fw-semibold text-muted">Año de Lanzamiento:</div>
          <div className="col-7 text-dark font-monospace">{anio}</div>
        </div>
      </div>
      <div className="card-footer bg-light border-0 py-2 px-4 text-end">
        <small className="text-muted">
          <i className="bi bi-hdd-fill text-success me-1"></i> La selección se guarda en este navegador al elegir un juego.
        </small>
      </div>
    </aside>
  );
}

export default DetalleItem;