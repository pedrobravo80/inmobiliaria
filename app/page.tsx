'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  Search,
  Building2,
  Users,
  HandshakeIcon,
  PenLine,
  Bell,
  TrendingUp,
  ArrowRight,
  Star,
  CheckCircle2,
  ChevronRight,
  Home,
  Briefcase,
  UserCircle,
  Shield,
  Network,
  BarChart3,
  FileSignature,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import PropiedadCard from '@/components/propiedad-card'
import { propiedades, brokers } from '@/lib/data'

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' },
  }),
}

const stats = [
  { value: '+2,400', label: 'Propiedades activas' },
  { value: '+850', label: 'Brokers registrados' },
  { value: '+18k', label: 'Leads generados' },
  { value: '96%', label: 'Tasa de satisfacción' },
]

const comoFunciona = [
  {
    icon: Home,
    title: 'Para Compradores',
    color: 'bg-blue-50 text-blue-600',
    steps: [
      'Busca propiedades por ubicación, precio y tipo',
      'Contacta directamente al broker responsable',
      'Agenda visitas y recibe asesoría personalizada',
      'Cierra tu compra con firma digital segura',
    ],
  },
  {
    icon: Briefcase,
    title: 'Para Brokers',
    color: 'bg-accent/10 text-accent',
    steps: [
      'Publica y gestiona tus propiedades fácilmente',
      'Recibe leads calificados en tiempo real',
      'Colabora con otros brokers compartiendo comisiones',
      'Gestiona tu equipo y cierra más negocios',
    ],
  },
  {
    icon: UserCircle,
    title: 'Para Propietarios',
    color: 'bg-purple-50 text-purple-600',
    steps: [
      'Publica tu inmueble en minutos sin complicaciones',
      'Tu propiedad llega a cientos de brokers activos',
      'Recibe ofertas y leads directamente',
      'Gestiona documentos con firma digital',
    ],
  },
]

const ventajas = [
  {
    icon: Network,
    title: 'Red de Brokers',
    desc: 'Accede a una red nacional de brokers verificados listos para colaborar.',
    color: 'text-blue-500',
    bg: 'bg-blue-50',
  },
  {
    icon: HandshakeIcon,
    title: 'Comisión Compartida',
    desc: 'Comparte comisiones con otros brokers y cierra más ventas en menos tiempo.',
    color: 'text-accent',
    bg: 'bg-accent/10',
  },
  {
    icon: Shield,
    title: 'Gestión Asistida',
    desc: 'Panel intuitivo para gestionar propiedades, leads y agentes desde un solo lugar.',
    color: 'text-indigo-500',
    bg: 'bg-indigo-50',
  },
  {
    icon: FileSignature,
    title: 'Firma Digital',
    desc: 'Firma contratos y documentos de forma segura sin salir de la plataforma.',
    color: 'text-violet-500',
    bg: 'bg-violet-50',
  },
  {
    icon: Bell,
    title: 'Alertas de Leads',
    desc: 'Recibe notificaciones instantáneas cuando un comprador se interesa en tu propiedad.',
    color: 'text-orange-500',
    bg: 'bg-orange-50',
  },
  {
    icon: BarChart3,
    title: 'Estadísticas Avanzadas',
    desc: 'Analiza el rendimiento de tus propiedades con métricas en tiempo real.',
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
  },
]

export default function HomePage() {
  const destacadas = propiedades.filter((p) => p.destacada).slice(0, 6)
  const ultimas = propiedades.slice(-6).reverse()

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-24 pb-20 overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=80"
            alt="Fondo inmobiliario"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/85" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              custom={0}
            >
              <Badge className="mb-6 bg-accent/20 text-accent border-accent/30 text-sm font-medium px-4 py-1.5">
                Portal Inmobiliario Profesional
              </Badge>
            </motion.div>

            <motion.h1
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              custom={1}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight text-balance mb-6"
            >
              El portal donde los brokers colaboran y{' '}
              <span className="text-accent">cierran más negocios</span>
            </motion.h1>

            <motion.p
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              custom={2}
              className="text-lg text-white/75 leading-relaxed mb-8 max-w-xl"
            >
              Publica propiedades, gestiona leads y comparte comisiones con otros brokers. Todo en una sola plataforma.
            </motion.p>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              custom={3}
              className="flex flex-wrap gap-3"
            >
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold h-12 px-6" asChild>
                <Link href="/buscar">
                  <Search className="w-4 h-4 mr-2" />
                  Buscar Propiedades
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20 h-12 px-6" asChild>
                <Link href="/registro">
                  <Building2 className="w-4 h-4 mr-2" />
                  Publicar Inmueble
                </Link>
              </Button>
            </motion.div>
          </div>

          {/* Search bar quick */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            custom={5}
            className="mt-12 max-w-3xl"
          >
            <div className="bg-card rounded-2xl p-4 shadow-2xl flex flex-col sm:flex-row gap-3">
              <div className="flex-1 flex items-center gap-3 bg-background rounded-xl px-4 py-2.5 border border-border">
                <Search className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                <input
                  type="text"
                  placeholder="Busca por distrito, ciudad o zona..."
                  className="bg-transparent text-sm outline-none w-full text-foreground placeholder:text-muted-foreground"
                />
              </div>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold h-10 px-5 rounded-xl" asChild>
                <Link href="/buscar">Buscar</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                custom={i}
                className="py-6 px-4 text-center"
              >
                <p className="text-2xl font-bold text-accent">{stat.value}</p>
                <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Propiedades Destacadas */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <div>
              <Badge className="mb-3 bg-accent/10 text-accent border-accent/20">Propiedades Destacadas</Badge>
              <h2 className="text-3xl font-bold text-foreground">Las mejores oportunidades</h2>
              <p className="text-muted-foreground mt-2">Propiedades seleccionadas por nuestro equipo de brokers expertos.</p>
            </div>
            <Button variant="ghost" className="hidden md:flex items-center gap-1.5 text-accent hover:text-accent" asChild>
              <Link href="/buscar">
                Ver todas <ChevronRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {destacadas.map((propiedad, i) => (
              <motion.div
                key={propiedad.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                variants={fadeIn}
                custom={i * 0.5}
              >
                <PropiedadCard propiedad={propiedad} />
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold" asChild>
              <Link href="/buscar">
                Ver todas las propiedades <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Cómo Funciona */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <Badge className="mb-3 bg-accent/10 text-accent border-accent/20">Cómo Funciona</Badge>
            <h2 className="text-3xl font-bold text-foreground">Diseñado para todos</h2>
            <p className="text-muted-foreground mt-2 max-w-xl mx-auto">
              Ya seas comprador, broker o propietario, tenemos el flujo perfecto para ti.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {comoFunciona.map((item, i) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-50px' }}
                  variants={fadeIn}
                  custom={i}
                  className="bg-card rounded-2xl p-7 shadow-sm border border-border"
                >
                  <div className={`w-12 h-12 rounded-2xl ${item.color} flex items-center justify-center mb-5`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-4">{item.title}</h3>
                  <ul className="space-y-3">
                    {item.steps.map((step, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground leading-relaxed">{step}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="ghost" size="sm" className="mt-5 text-accent hover:text-accent px-0" asChild>
                    <Link href="/como-funciona">
                      Saber más <ArrowRight className="w-3.5 h-3.5 ml-1" />
                    </Link>
                  </Button>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Ventajas */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <Badge className="mb-3 bg-accent/10 text-accent border-accent/20">Ventajas del Portal</Badge>
            <h2 className="text-3xl font-bold text-foreground">Todo lo que necesitas en un solo lugar</h2>
            <p className="text-muted-foreground mt-2 max-w-xl mx-auto">
              Herramientas poderosas para que cierres más negocios en menos tiempo.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ventajas.map((v, i) => {
              const Icon = v.icon
              return (
                <motion.div
                  key={v.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-50px' }}
                  variants={fadeIn}
                  custom={i * 0.3}
                  className="bg-card rounded-2xl p-6 border border-border hover:shadow-md transition-shadow duration-300"
                >
                  <div className={`w-11 h-11 rounded-xl ${v.bg} flex items-center justify-center mb-4`}>
                    <Icon className={`w-5 h-5 ${v.color}`} />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{v.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Últimos inmuebles */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <div>
              <Badge className="mb-3 bg-accent/10 text-accent border-accent/20">Recién Publicados</Badge>
              <h2 className="text-3xl font-bold text-foreground">Últimos inmuebles</h2>
              <p className="text-muted-foreground mt-2">Las publicaciones más recientes en el portal.</p>
            </div>
            <Button variant="ghost" className="hidden md:flex items-center gap-1.5 text-accent hover:text-accent" asChild>
              <Link href="/buscar">
                Ver todos <ChevronRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ultimas.map((propiedad, i) => (
              <motion.div
                key={propiedad.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                variants={fadeIn}
                custom={i * 0.3}
              >
                <PropiedadCard propiedad={propiedad} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Brokers Destacados */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-3 bg-accent/10 text-accent border-accent/20">Nuestra Red</Badge>
            <h2 className="text-3xl font-bold text-foreground">Brokers verificados</h2>
            <p className="text-muted-foreground mt-2">Profesionales de confianza en todo el país.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {brokers.map((broker, i) => (
              <motion.div
                key={broker.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                custom={i * 0.2}
                className="bg-card rounded-2xl p-5 text-center border border-border hover:shadow-md transition-shadow"
              >
                <img
                  src={broker.avatar}
                  alt={broker.nombre}
                  className="w-16 h-16 rounded-full mx-auto mb-3 object-cover border-2 border-accent/20"
                />
                <p className="text-sm font-semibold text-foreground leading-tight">{broker.nombre}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{broker.agencia}</p>
                <div className="flex items-center justify-center gap-1 mt-2">
                  <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                  <span className="text-xs font-medium text-foreground">{broker.calificacion}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 bg-primary">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <Badge className="mb-6 bg-accent/20 text-accent border-accent/30">Únete hoy</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white text-balance mb-5">
              Únete a la red de brokers inmobiliarios
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-xl mx-auto">
              Más de 850 brokers ya están cerrando más negocios con Broker en Línea. Empieza gratis hoy.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold h-12 px-8" asChild>
                <Link href="/registro">Crear cuenta de broker</Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white/30 text-white hover:bg-white/10 h-12 px-8" asChild>
                <Link href="/planes">Ver planes</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
