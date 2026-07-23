import ItemCard from './ItemCard';

function ListaItems({ juegos, onSeleccionar }) {
  return (
    <section>
      <h2 className="h4 mb-4 pb-2 border-bottom text-secondary fw-semibold">Catálogo Disponible</h2>
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {juegos.map((juego) => (
          <div className="col" key={juego.id}>
            <ItemCard juego={juego} onSeleccionar={onSeleccionar} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default ListaItems;