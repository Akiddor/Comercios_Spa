import { ComercioCard } from "./comercio-card"

const comercios = [
  {
    nombre: "Yiria Camargo - Beauty Artist",
    descripcion: "Especializado en diseño de Cejas y Pestañas.",
    direccion: "A.F Carbonel 5112",
    horario: "Lun-Sáb: 10:00-20:00",
    telefono: "+52 614 131 1082",
    imagenUrl: "SpaYiria.jpg",
    link: "https://yiria-camargo-beauty-artist.vercel.app/", // Enlace para este comercio
  },
  {
    nombre: "Biby Ortiz - Skin & Body",
    descripcion: "Creemos en la fusión perfecta entre salud y belleza.",
    direccion: "Calle Republica de Panama 301",
    horario: "Lun-Dom: 08:00-23:00",
    telefono: "+52 614 532 9344",
    imagenUrl: "SpaBiby.jpg",
    link: "https://biby-ortiz-spa.vercel.app/", // Enlace para este comercio
  },
];



export function ComerciosMenu() {
  return (
    <div className="bg-white text-gray-900 p-4 space-y-6">
      <h1 className="text-3xl font-bold mb-6">Comercios Locales</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {comercios.map((comercio, index) => (
          <ComercioCard key={index} {...comercio} />
        ))}
      </div>
    </div>
  )
}

