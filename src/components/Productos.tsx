import { useEffect, useState } from "react";
import { Producto } from "../types/Producto";
import "./Productos.css";
import { API_URL } from "../utils";

interface ProductosProps {
  codigocategoria: number;
}

function Productos({ codigocategoria }: ProductosProps) {
  console.log(codigocategoria);

  const [listaProductos, setListaProductos] = useState<Producto[]>([]);

  useEffect(() => {
    leerServicio(codigocategoria);
  }, [codigocategoria]);

  const leerServicio = async (idcategoria: number) => {
    /*fetch(API_URL + "productos.php?idcategoria=" + idcategoria)
      .then((response) => response.json())
      .then((data: Producto[]) => {
        console.log(data);
        setListaProductos(data);
      })
      .catch((error) => {
        console.error("Error consultando datos:", error);
      });
      */

    const response = await fetch(
      API_URL + "productos.php?idcategoria=" + idcategoria
    );
    try {
      const data: Producto[] = await response.json();
      console.log(data);
      setListaProductos(data);
    } catch (error) {
      console.log("Error consultando datos:", error);
    }
  };

  const dibujarCuadricula = () => {
    return (
      <div
        id="cards-productos"
        className="row row-cols-xxl-5 row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-1 g-4"
      >
        {listaProductos.map((item) => {
          const precioRebajado = Number(item.preciorebajado);
          const precio = Number(item.precio);
          return (
            <div className="col" key={item.idproducto}>
              <div className="card h-100">
                <img
                  src={
                    item.imagenchica === null
                      ? API_URL + "imagenes/nofoto.jpg"
                      : API_URL + item.imagenchica
                  }
                  className="card-img-top"
                  alt="..."
                />

                <i
                  className="bi bi-eye icon-quick-view"
                  title="Vista rapida"
                  data-bs-toggle="modal"
                  data-bs-target="#quickViewModal"
                ></i>

                {precioRebajado !== 0 ? (
                  <div className="porcentaje-descuento">
                    {Math.round((1 - precioRebajado / precio) * 100) + "%"}
                  </div>
                ) : (
                  ""
                )}

                <div className="card-body">
                  <h6 className="card-title">{item.nombre}</h6>
                  <p className="card-text">
                    S/
                    {precioRebajado === 0
                      ? precio.toFixed(2)
                      : precioRebajado.toFixed(2)}
                    <span className="precio-anterior">
                      {precioRebajado === 0 ? "" : "S/" + precio.toFixed(2)}
                    </span>
                    <i
                      className="bi bi-basket icon-cart"
                      title="Añadir al carrito"
                    ></i>
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  const showQuickView = () => {
    return (
      <div
        className="modal fade"
        id="quickViewModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog  modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title fs-5" id="exampleModalLabel">
                Modal title
              </h3>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">...</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cerrar
              </button>
              <button type="button" className="btn btn-primary">
                Añadir al carrito
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      {dibujarCuadricula()}
      {showQuickView()}
    </>
  );
}

export default Productos;
