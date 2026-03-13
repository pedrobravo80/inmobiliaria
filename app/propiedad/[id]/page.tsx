'use client'

import { use, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  Bed,
  Bath,
  Square,
  MapPin,
  ChevronLeft,
  ChevronRight,
  Phone,
  MessageCircle,
  Send,
  Star,
  Eye,
  Share2,
  Heart,
  CheckCircle2,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import PropiedadCard from '@/components/propiedad-card'
import { propiedades, brokers, formatPrecio, estadoColors } from '@/lib/data'
import { cn } from '@/lib/utils'

export default function PropiedadDetallePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const propiedad = propiedades.find((p) => p.id === id) ?? propiedades[0]
  const broker = brokers.find((b) => b.id === propiedad.brokerId) ?? brokers[0]
  const relacionadas = propiedades.filter((p) => p.id !== propiedad.id && p.tipo === propiedad.tipo).slice(0, 3)

  const [imgIdx, setImgIdx] = useState(0)
  const [saved, setSaved] = useState(false)
  const [formData, setFormData] = useState({ nombre: '', email: '', telefono: '' })
  const [enviado, setEnviado] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setEnviado(true)
    setTimeout(() => setEnviado(false), 3000)
  }

  const caracteristicas = [
    { label: 'Tipo', value: propiedad.tipo },
    { label: 'Ciudad', value: propiedad.ciudad },
    { label: 'Estado', value: propiedad.estado },
    ...(propiedad.habitaciones > 0 ? [{ label: 'Habitaciones', value: `${propiedad.habitaciones}` }] : []),
    ...(propiedad.banos > 0 ? [{ label: 'Baños', value: `${propiedad.banos}` }] : []),
    { label: 'Área total', value: `${propiedad.area} m²` },
    { label: 'Publicado por', value: propiedad.broker },
    { label: 'Fecha publicación', value: new Date(propiedad.fechaPublicacion).toLocaleDateString('es-PE') },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="pt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        {/* Breadcrumb */}
        <div className="py-4 flex items-center gap-2 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-foreground transition-colors">Inicio</Link>
          <ChevronRight className="w-4 h-4" />
          <Link href="/buscar" className="hover:text-foreground transition-colors">Propiedades</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-foreground line-clamp-1">{propiedad.titulo}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Gallery */}
            <div className="bg-card rounded-2xl overflow-hidden border border-border shadow-sm">
              <div className="relative h-72 sm:h-96 bg-muted">
                <img
                  src={propiedad.imagenes[imgIdx]}
                  alt={`${propiedad.titulo} - imagen ${imgIdx + 1}`}
                  className="w-full h-full object-cover"
                />

                {/* Navigation */}
                {propiedad.imagenes.length > 1 && (
                  <>
                    <button
                      onClick={() => setImgIdx(Math.max(0, imgIdx - 1))}
                      disabled={imgIdx === 0}
                      className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-card/90 backdrop-blur-sm flex items-center justify-center disabled:opacity-40 hover:bg-card transition-all shadow-md"
                    >
                      <ChevronLeft className="w-5 h-5 text-foreground" />
                    </button>
                    <button
                      onClick={() => setImgIdx(Math.min(propiedad.imagenes.length - 1, imgIdx + 1))}
                      disabled={imgIdx === propiedad.imagenes.length - 1}
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-card/90 backdrop-blur-sm flex items-center justify-center disabled:opacity-40 hover:bg-card transition-all shadow-md"
                    >
                      <ChevronRight className="w-5 h-5 text-foreground" />
                    </button>
                  </>
                )}

                {/* Actions */}
                <div className="absolute top-3 right-3 flex gap-2">
                  <button
                    onClick={() => setSaved(!saved)}
                    className="w-9 h-9 rounded-full bg-card/90 backdrop-blur-sm flex items-center justify-center hover:bg-card transition-all"
                    aria-label="Guardar propiedad"
                  >
                    <Heart className={cn('w-4 h-4', saved ? 'fill-red-500 text-red-500' : 'text-muted-foreground')} />
                  </button>
                  <button className="w-9 h-9 rounded-full bg-card/90 backdrop-blur-sm flex items-center justify-center hover:bg-card transition-all" aria-label="Compartir">
                    <Share2 className="w-4 h-4 text-muted-foreground" />
                  </button>
                </div>

                {/* Counter */}
                <div className="absolute bottom-3 right-3 bg-card/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium text-foreground">
                  {imgIdx + 1} / {propiedad.imagenes.length}
                </div>
              </div>

              {/* Thumbnails */}
              {propiedad.imagenes.length > 1 && (
                <div className="flex gap-2 p-3 overflow-x-auto">
                  {propiedad.imagenes.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setImgIdx(i)}
                      className={cn(
                        'w-16 h-12 rounded-lg overflow-hidden flex-shrink-0 border-2 transition-all',
                        i === imgIdx ? 'border-accent' : 'border-transparent opacity-60 hover:opacity-100'
                      )}
                    >
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Info */}
            <div className="bg-card rounded-2xl p-6 border border-border shadow-sm">
              <div className="flex flex-wrap items-start gap-3 justify-between mb-4">
                <div>
                  <div className="flex flex-wrap gap-2 mb-2">
                    <Badge className={cn('text-xs font-semibold', estadoColors[propiedad.estado])}>
                      {propiedad.estado}
                    </Badge>
                    <Badge className="text-xs bg-secondary text-secondary-foreground">{propiedad.tipo}</Badge>
                    {propiedad.comisionCompartida && (
                      <Badge className="text-xs bg-accent/10 text-accent border-accent/20">
                        Comisión {propiedad.porcentajeComision}% compartida
                      </Badge>
                    )}
                  </div>
                  <h1 className="text-2xl font-bold text-foreground leading-snug">{propiedad.titulo}</h1>
                </div>
                <p className="text-3xl font-bold text-accent">{formatPrecio(propiedad.precio)}</p>
              </div>

              <div className="flex items-center gap-2 text-muted-foreground mb-5">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm">{propiedad.ubicacion}, {propiedad.ciudad}</span>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap gap-6 py-4 border-y border-border mb-5">
                {propiedad.habitaciones > 0 && (
                  <div className="flex items-center gap-2">
                    <div className="w-9 h-9 bg-secondary rounded-xl flex items-center justify-center">
                      <Bed className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-lg font-bold text-foreground">{propiedad.habitaciones}</p>
                      <p className="text-xs text-muted-foreground">Habitaciones</p>
                    </div>
                  </div>
                )}
                {propiedad.banos > 0 && (
                  <div className="flex items-center gap-2">
                    <div className="w-9 h-9 bg-secondary rounded-xl flex items-center justify-center">
                      <Bath className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-lg font-bold text-foreground">{propiedad.banos}</p>
                      <p className="text-xs text-muted-foreground">Baños</p>
                    </div>
                  </div>
                )}
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 bg-secondary rounded-xl flex items-center justify-center">
                    <Square className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-lg font-bold text-foreground">{propiedad.area}</p>
                    <p className="text-xs text-muted-foreground">m² de área</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 bg-secondary rounded-xl flex items-center justify-center">
                    <Eye className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-lg font-bold text-foreground">{propiedad.vistas}</p>
                    <p className="text-xs text-muted-foreground">Visitas</p>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div>
                <h2 className="font-semibold text-foreground mb-3">Descripción</h2>
                <p className="text-sm text-muted-foreground leading-relaxed">{propiedad.descripcion}</p>
              </div>
            </div>

            {/* Características */}
            <div className="bg-card rounded-2xl p-6 border border-border shadow-sm">
              <h2 className="font-semibold text-foreground mb-4">Características del Inmueble</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {caracteristicas.map((c) => (
                  <div key={c.label} className="flex items-start gap-2.5 p-3 bg-secondary/50 rounded-xl">
                    <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-muted-foreground">{c.label}</p>
                      <p className="text-sm font-medium text-foreground">{c.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-5">
            {/* Broker Card */}
            <div className="bg-card rounded-2xl p-6 border border-border shadow-sm sticky top-24">
              <h3 className="font-semibold text-foreground mb-4">Broker Responsable</h3>
              <div className="flex items-center gap-3 mb-5">
                <img
                  src={broker.avatar}
                  alt={broker.nombre}
                  className="w-14 h-14 rounded-full object-cover border-2 border-accent/20"
                />
                <div>
                  <p className="font-semibold text-foreground">{broker.nombre}</p>
                  <p className="text-sm text-muted-foreground">{broker.agencia}</p>
                  <div className="flex items-center gap-1 mt-1">
                    <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                    <span className="text-xs font-medium text-foreground">{broker.calificacion}</span>
                    <span className="text-xs text-muted-foreground">({broker.ventas} ventas)</span>
                  </div>
                </div>
              </div>

              <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold mb-3" asChild>
                <a
                  href={`https://wa.me/${broker.telefono.replace(/[^0-9]/g, '')}?text=Hola, me interesa la propiedad: ${propiedad.titulo}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Contactar por WhatsApp
                </a>
              </Button>
              <Button variant="outline" className="w-full" asChild>
                <a href={`tel:${broker.telefono}`}>
                  <Phone className="w-4 h-4 mr-2" />
                  {broker.telefono}
                </a>
              </Button>

              {/* Lead Form */}
              <div className="mt-6 pt-6 border-t border-border">
                <h4 className="font-medium text-foreground mb-4">Enviar consulta</h4>
                {enviado ? (
                  <div className="flex items-center gap-2 p-4 bg-accent/10 rounded-xl text-accent text-sm">
                    <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                    ¡Consulta enviada correctamente!
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-3">
                    <input
                      type="text"
                      placeholder="Tu nombre"
                      required
                      value={formData.nombre}
                      onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-xl border border-border bg-background text-sm outline-none focus:ring-1 focus:ring-ring"
                    />
                    <input
                      type="email"
                      placeholder="Tu email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-xl border border-border bg-background text-sm outline-none focus:ring-1 focus:ring-ring"
                    />
                    <input
                      type="tel"
                      placeholder="Tu teléfono"
                      required
                      value={formData.telefono}
                      onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-xl border border-border bg-background text-sm outline-none focus:ring-1 focus:ring-ring"
                    />
                    <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                      <Send className="w-4 h-4 mr-2" />
                      Enviar consulta
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Relacionadas */}
        {relacionadas.length > 0 && (
          <section className="mt-14">
            <h2 className="text-xl font-bold text-foreground mb-6">Propiedades similares</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {relacionadas.map((p) => (
                <PropiedadCard key={p.id} propiedad={p} />
              ))}
            </div>
          </section>
        )}
      </div>

      <Footer />
    </div>
  )
}
