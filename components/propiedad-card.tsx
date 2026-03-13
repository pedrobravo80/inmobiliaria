import Link from 'next/link'
import { Bed, Bath, Square, MapPin } from 'lucide-react'
import { Propiedad, formatPrecio, estadoColors } from '@/lib/data'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

interface PropiedadCardProps {
  propiedad: Propiedad
  href?: string
}

export default function PropiedadCard({ propiedad, href }: PropiedadCardProps) {
  const link = href ?? `/propiedad/${propiedad.id}`

  return (
    <Link href={link} className="group block">
      <article className="bg-card rounded-2xl overflow-hidden shadow-sm border border-border hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
        {/* Image */}
        <div className="relative h-52 overflow-hidden bg-muted">
          <img
            src={propiedad.imagen}
            alt={propiedad.titulo}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-3 left-3 flex gap-2 flex-wrap">
            <Badge className={cn('text-xs font-semibold', estadoColors[propiedad.estado])}>
              {propiedad.estado}
            </Badge>
            {propiedad.comisionCompartida && (
              <Badge className="text-xs font-semibold bg-primary/90 text-primary-foreground">
                Comisión Compartida
              </Badge>
            )}
          </div>
          <Badge className="absolute top-3 right-3 text-xs font-medium bg-card/90 text-foreground backdrop-blur-sm">
            {propiedad.tipo}
          </Badge>
        </div>

        {/* Content */}
        <div className="p-4 space-y-3">
          <div>
            <p className="text-xl font-bold text-accent">{formatPrecio(propiedad.precio)}</p>
            <h3 className="text-sm font-semibold text-foreground leading-snug line-clamp-1 mt-0.5">
              {propiedad.titulo}
            </h3>
          </div>

          <div className="flex items-center gap-1.5 text-muted-foreground">
            <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
            <span className="text-xs line-clamp-1">{propiedad.ubicacion}</span>
          </div>

          <div className="flex items-center gap-4 pt-1 border-t border-border text-muted-foreground">
            {propiedad.habitaciones > 0 && (
              <div className="flex items-center gap-1.5 text-xs">
                <Bed className="w-3.5 h-3.5" />
                <span>{propiedad.habitaciones} hab.</span>
              </div>
            )}
            {propiedad.banos > 0 && (
              <div className="flex items-center gap-1.5 text-xs">
                <Bath className="w-3.5 h-3.5" />
                <span>{propiedad.banos} baños</span>
              </div>
            )}
            <div className="flex items-center gap-1.5 text-xs">
              <Square className="w-3.5 h-3.5" />
              <span>{propiedad.area} m²</span>
            </div>
          </div>
        </div>
      </article>
    </Link>
  )
}
