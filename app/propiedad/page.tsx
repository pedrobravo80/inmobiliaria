'use client'

import { useState } from 'react'
import { Bed, Bath, Square, MapPin, Eye, Heart, Share2, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import PropiedadCard from '@/components/propiedad-card'
import { cn } from '@/lib/utils'

// Dummy data
const propiedad = {
  titulo: "Hermosa Casa de Playa",
  precio: 350000,
  imagenes: [
    "/dummy1.jpg",
    "/dummy2.jpg",
    "/dummy3.jpg",
  ],
  tipo: "Casa",
  estado: "Disponible",
  habitaciones: 3,
  banos: 2,
  area: 120,
  ubicacion: "Barranco",
  ciudad: "Lima",
  vistas: 150,
  descripcion: "Descripción de la propiedad de ejemplo.",
  broker: "Juan Pérez",
  comisionCompartida: true,
  porcentajeComision: 50,
}

const broker = {
  nombre: "Juan Pérez",
  agencia: "Inmobiliaria Demo",
  avatar: "/avatar.jpg",
  telefono: "999663000",
  calificacion: 5,
  ventas: 25,
}

export default function PropiedadDummy() {
  const [imgIdx, setImgIdx] = useState(0)
  const [saved, setSaved] = useState(false)

  const caracteristicas = [
    { label: 'Tipo', value: propiedad.tipo },
    { label: 'Ciudad', value: propiedad.ciudad },
    { label: 'Estado', value: propiedad.estado },
    { label: 'Habitaciones', value: `${propiedad.habitaciones}` },
    { label: 'Baños', value: `${propiedad.banos}` },
    { label: 'Área total', value: `${propiedad.area} m²` },
    { label: 'Publicado por', value: propiedad.broker },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="pt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <h1 className="text-2xl font-bold mb-6">{propiedad.titulo}</h1>

        {/* Gallery */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-card rounded-2xl overflow-hidden border border-border shadow-sm">
              <img src={propiedad.imagenes[imgIdx]} alt={propiedad.titulo} className="w-full h-96 object-cover" />
            </div>

            {/* Info */}
            <div className="bg-card rounded-2xl p-6 border border-border shadow-sm">
              <p>{propiedad.descripcion}</p>
              <div className="flex gap-2 mt-4">
                {caracteristicas.map((c) => (
                  <Badge key={c.label} className="text-xs">{c.label}: {c.value}</Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-5">
            <div className="bg-card rounded-2xl p-6 border border-border shadow-sm sticky top-24">
              <p>Broker: {broker.nombre}</p>
              <p>Tel: {broker.telefono}</p>
              <Button asChild>
                <a href={`https://wa.me/${broker.telefono}`}>WhatsApp</a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}