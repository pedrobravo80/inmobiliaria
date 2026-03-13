'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  Search, Building2, MessageCircle, FileSignature,
  PlusCircle, UserCheck, TrendingUp, Bell, Users, Home, CheckCircle2,
  ArrowRight,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

const pasos = [
  {
    title: 'Para Compradores',
    icon: Search,
    color: 'text-blue-600',
    bg: 'bg-blue-50',
    steps: [
      {
        icon: Search,
        title: 'Busca tu propiedad ideal',
        desc: 'Usa nuestros filtros avanzados para encontrar exactamente lo que buscas: ubicación, precio, tipo, habitaciones y más.',
      },
      {
        icon: MessageCircle,
        title: 'Contacta al broker',
        desc: 'Envía una consulta o escribe directamente por WhatsApp al broker responsable de la propiedad.',
      },
      {
        icon: Home,
        title: 'Visita y negocia',
        desc: 'Agenda una visita virtual o presencial y negocia las condiciones directamente con el broker.',
      },
      {
        icon: FileSignature,
        title: 'Firma digitalmente',
        desc: 'Formaliza la operación con firma digital segura desde cualquier dispositivo, sin trámites presenciales.',
      },
    ],
  },
  {
    title: 'Para Brokers',
    icon: UserCheck,
    color: 'text-accent',
    bg: 'bg-accent/10',
    steps: [
      {
        icon: PlusCircle,
        title: 'Publica propiedades',
        desc: 'Sube fotos, describe el inmueble y configura si deseas compartir comisión con otros brokers de la red.',
      },
      {
        icon: Bell,
        title: 'Recibe leads en tiempo real',
        desc: 'Cuando un comprador se interesa en tu propiedad recibes una notificación instantánea con sus datos de contacto.',
      },
      {
        icon: Users,
        title: 'Gestiona tu equipo',
        desc: 'Crea subusuarios para tus agentes, asígnales propiedades y monitorea su rendimiento desde el panel.',
      },
      {
        icon: TrendingUp,
        title: 'Analiza y crece',
        desc: 'Revisa estadísticas de visitas, leads, conversiones y optimiza tu estrategia de publicación.',
      },
    ],
  },
  {
    title: 'Para Propietarios',
    icon: Building2,
    color: 'text-purple-600',
    bg: 'bg-purple-50',
    steps: [
      {
        icon: PlusCircle,
        title: 'Publica tu inmueble',
        desc: 'Crea tu cuenta de propietario, completa el formulario con los datos del inmueble y sube las fotografías.',
      },
      {
        icon: Users,
        title: 'Conecta con brokers',
        desc: 'Tu propiedad llega automáticamente a nuestra red de más de 850 brokers activos en todo el país.',
      },
      {
        icon: Bell,
        title: 'Recibe consultas directas',
        desc: 'Gestiona tus leads desde el panel de propietario y responde a los interesados cuando quieras.',
      },
      {
        icon: FileSignature,
        title: 'Cierra con firma digital',
        desc: 'Finaliza el proceso de venta o arrendamiento con documentos legales firmados digitalmente de forma segura.',
      },
    ],
  },
]

export default function ComoFuncionaPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-24 pb-16 bg-primary">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Badge className="mb-4 bg-accent/20 text-accent border-accent/30">Cómo Funciona</Badge>
          <h1 className="text-4xl font-bold text-white mb-4 text-balance">
            Simple, rápido y transparente
          </h1>
          <p className="text-white/70 text-lg leading-relaxed max-w-xl mx-auto">
            Descubre cómo Broker en Línea conecta compradores, brokers y propietarios de forma eficiente para cerrar operaciones inmobiliarias.
          </p>
        </div>
      </section>

      {/* Steps for each user type */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {pasos.map((grupo, gi) => {
            const GroupIcon = grupo.icon
            return (
              <div key={grupo.title} className={`mb-16 ${gi < pasos.length - 1 ? 'pb-16 border-b border-border' : ''}`}>
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 mb-10"
                >
                  <div className={`w-12 h-12 rounded-2xl ${grupo.bg} flex items-center justify-center`}>
                    <GroupIcon className={`w-6 h-6 ${grupo.color}`} />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">{grupo.title}</h2>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                  {grupo.steps.map((step, si) => {
                    const StepIcon = step.icon
                    return (
                      <motion.div
                        key={si}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: si * 0.1 }}
                        className="relative"
                      >
                        {/* Connector line */}
                        {si < grupo.steps.length - 1 && (
                          <div className="hidden lg:block absolute top-6 left-full w-full h-0.5 bg-border z-0 -translate-y-1/2" style={{ width: 'calc(100% - 3rem)', left: '3rem' }} />
                        )}

                        <div className="bg-card rounded-2xl p-5 border border-border hover:shadow-md transition-shadow relative z-10">
                          <div className="flex items-center gap-3 mb-3">
                            <div className={`w-9 h-9 rounded-xl ${grupo.bg} flex items-center justify-center flex-shrink-0`}>
                              <StepIcon className={`w-4 h-4 ${grupo.color}`} />
                            </div>
                            <span className={`text-sm font-bold ${grupo.color}`}>Paso {si + 1}</span>
                          </div>
                          <h3 className="font-semibold text-foreground mb-2 text-sm">{step.title}</h3>
                          <p className="text-xs text-muted-foreground leading-relaxed">{step.desc}</p>
                        </div>
                      </motion.div>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">¿Listo para comenzar?</h2>
          <p className="text-white/70 mb-8">Crea tu cuenta gratuita y empieza a publicar en minutos.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold h-12 px-8" asChild>
              <Link href="/registro">Crear cuenta gratis</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white/30 text-white hover:bg-white/10 h-12 px-8" asChild>
              <Link href="/buscar">Ver propiedades <ArrowRight className="w-4 h-4 ml-2" /></Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
