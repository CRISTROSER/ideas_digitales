import { useEffect, useState } from "react";
import PageHeader from "../components/PageHeader";
import "./Employees.css";

// Definición de tipo Cliente localmente (elimina la dependencia de ../types/Clientes)
interface Cliente {
  idcliente: number;
  nombres: string;
  apellidos: string;
  email: string;
  telefono: string;
  direccion: string;
  fechanacimiento: string;
  estado: boolean;
}

function Employees() {
  const [listaClientes, setListaClientes] = useState<Cliente[]>([]);
  const [cargando, setCargando] = useState<boolean>(true);

  useEffect(() => {
    leerServicio();
  }, []);

  const leerServicio = () => {
    setCargando(true);
    // Usando API_URL en lugar de la URL hardcodeada
    fetch(`${import.meta.env.VITE_API_URL || "https://servicios.campus.pe"}/clientes.php`)
      .then((response) => response.json())
      .then((data: Cliente[]) => {
        setListaClientes(data);
        setCargando(false);
      })
      .catch((error) => {
        console.error("Error consultando datos:", error);
        setCargando(false);
      });
  };

  return (
    <>
      <PageHeader pageTitle="Clientes" />
      <section id="employees" className="padded">
        <div className="container">
          {cargando ? (
            <div className="text-center">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Cargando...</span>
              </div>
              <p>Cargando clientes...</p>
            </div>
          ) : (
            <div className="table-responsive">
              <table className="table table-striped table-hover">
                <thead className="table-dark">
                  <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Email</th>
                    <th>Teléfono</th>
                    <th>Dirección</th>
                    <th>Fecha Nac.</th>
                    <th>Estado</th>
                  </tr>
                </thead>
                <tbody>
                  {listaClientes.map((cliente) => (
                    <tr key={cliente.idcliente}>
                      <td>{cliente.idcliente}</td>
                      <td>
                        {cliente.nombres} {cliente.apellidos}
                      </td>
                      <td>{cliente.email}</td>
                      <td>{cliente.telefono}</td>
                      <td>{cliente.direccion}</td>
                      <td>{new Date(cliente.fechanacimiento).toLocaleDateString()}</td>
                      <td>
                        <span className={`badge ${cliente.estado ? 'bg-success' : 'bg-secondary'}`}>
                          {cliente.estado ? 'Activo' : 'Inactivo'}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default Employees;