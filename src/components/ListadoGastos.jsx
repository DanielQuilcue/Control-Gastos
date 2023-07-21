import Gasto from "./Gasto"
// eslint-disable-next-line react/prop-types
function ListadoGastos({ gastos, setgastoEditar, eliminarGasto }) {
  return (
    <div className="listado-gastos contenedor">
      <h2>{gastos.length ? 'Gastos' : 'No Hay Gastos aún'}</h2>
      {
        gastos.map(gasto => (
          <Gasto 
            key={gasto.id}
            gasto={gasto}
            setgastoEditar={setgastoEditar}
            eliminarGasto={eliminarGasto}
          />
        ))
      }
    </div>
  )
}

export default ListadoGastos