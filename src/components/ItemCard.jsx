function ItemCard({ juego, onSeleccionar }) {
  const { nombre, imagen } = juego;

  return (
    <div className="card h-100 shadow-sm border-0">
      <img 
        src={imagen} 
        className="card-img-top" 
        alt={nombre} 
        style={{ height: '200px', objectFit: 'cover' }}
      />
      <div className="card-body d-flex flex-column justify-content-between">
        <h5 className="card-title h6 fw-bold text-dark text-truncate mb-3">{nombre}</h5>
        <button 
          className="btn btn-primary btn-sm w-100 mt-2 fw-medium"
          onClick={() => onSeleccionar(juego)}
        >
          <i className="bi bi-info-circle me-1"></i> Más información
        </button>
      </div>
    </div>
  );
}

export default ItemCard;