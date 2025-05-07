interface NavItem {
  label: string;
  url: string;
  title: string;
}

export const navItems: NavItem[] = [
  {
    label: "Inversiones",
    url: "/inversiones",
    title: "Observe nuestras inversiones",
  },
  {
    label: "Proveedores",
    url: "/proveedores",
    title: "Conozca nuestras Proveedores",
  },
  {
    label: "Empleados",
    url: "/empleados",
    title: "Nuestro equipo ",
  },
  { label: "Tienda", url: "/tienda", title: "los mejores productos" },
];
