'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Check, Star, Zap, Building2, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

const planes = [
  {
    id: 'basico',
    nombre: 'Básico',
    precio: 49,
    periodo: '/mes',
    icon: Zap,
    color: 'border-border',
    headerBg: 'bg-secondary',
    headerText: 'text-foreground',
    badge: null,
    features: [
      { label: '5 propiedades publicadas', included: true },
      { label: 'Acceso a leads básicos', included: true },
      { label: 'Perfil de broker', included: true },
      { label: 'Estadísticas básicas', included: true },
      { label: 'Red de brokers', included: false },
      { label: 'Firma digital', included: false },
      { label: 'Equipo de agentes', included: false },
      { label: 'Soporte prioritario', included: false },
    ],
  },
  {
    id: 'profesional',
    nombre: 'Profesional',
    precio: 129,
    periodo: '/mes',
    icon: Star,
    color: 'border-accent',
    headerBg: 'bg-accent',
    headerText: 'text-accent-foreground',
    badge: 'Más popular',
    features: [
      { label: '20 propiedades publicadas', included: true },
      { label: 'Leads ilimitados + alertas', included: true },
      { label: 'Perfil de broker verificado', included: true },
      { label: 'Estadísticas avanzadas', included: true },
      { label: 'Red de brokers (comisión)', included: true },
      { label: '5 firmas digitales/mes', included: true },
      { label: '3 agentes en equipo', included: true },
      { label: 'Soporte prioritario', included: false },
    ],
  },
  {
    id: 'agencia',
    nombre: 'Agencia',
    precio: 299,
    periodo: '/mes',
    icon: Building2,
    color: 'border-primary',
    headerBg: 'bg-primary',
    headerText: 'text-primary-foreground',
    badge: 'Para agencias',
    features: [
      { label: 'Propiedades ilimitadas', included: true },
      { label: 'Leads ilimitados + CRM avanzado', included: true },
      { label: 'Perfil de agencia destacado', included: true },
      { label: 'Dashboard con BI y reportes', included: true },
      { label: 'Red de brokers prioritaria', included: true },
      { label: 'Firmas digitales ilimitadas', included: true },
      { label: 'Agentes ilimitados', included: true },
      { label: 'Soporte 24/7 dedicado', included: true },
    ],
  },
]

const faqs = [
  {
    q: '¿Puedo cambiar de plan en cualquier momento?',
    a: 'Sí, puedes actualizar o bajar de plan cuando quieras. Los cambios se aplican en el próximo ciclo de facturación.',
  },
  {
    q: '¿Qué métodos de pago aceptan?',
    a: 'Aceptamos tarjetas de crédito/débito Visa, Mastercard, transferencias bancarias y Yape/Plin.',
  },
  {
    q: '¿Hay periodo de prueba gratuito?',
    a: 'Ofrecemos 14 días de prueba gratuita en los planes Profesional y Agencia. No se requiere tarjeta de crédito.',
  },
  {
    q: '¿Qué es la comisión compartida?',
    a: 'Es una funcionalidad que permite a los brokers colaborar: uno publica la propiedad y otro aporta al comprador, dividiendo la comisión de venta según lo acordado.',
  },
]

export default function PlanesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-24 pb-16 bg-primary">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Badge className="mb-4 bg-accent/20 text-accent border-accent/30">Planes y Precios</Badge>
          <h1 className="text-4xl font-bold text-white mb-4 text-balance">
            Elige el plan ideal para tu negocio
          </h1>
          <p className="text-white/70 text-lg leading-relaxed">
            Desde brokers independientes hasta grandes agencias. Tenemos la solución perfecta para ti.
          </p>
        </div>
      </section>

      {/* Plans Grid */}
      <section className="py-16 -mt-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {planes.map((plan, i) => {
              const Icon = plan.icon
              return (
                <motion.div
                  key={plan.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className={`bg-card rounded-2xl border-2 ${plan.color} overflow-hidden shadow-sm relative`}
                >
                  {plan.badge && (
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-accent text-accent-foreground font-semibold text-xs">{plan.badge}</Badge>
                    </div>
                  )}

                  {/* Header */}
                  <div className={`${plan.headerBg} ${plan.headerText} p-6`}>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-lg font-bold">{plan.nombre}</h3>
                    </div>
                    <div className="flex items-end gap-1">
                      <span className="text-4xl font-bold">S/ {plan.precio}</span>
                      <span className="text-sm opacity-70 mb-1">{plan.periodo}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="p-6 space-y-3">
                    {plan.features.map((feature, j) => (
                      <div key={j} className={`flex items-center gap-3 text-sm ${!feature.included ? 'opacity-40' : ''}`}>
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                          feature.included ? 'bg-accent/15 text-accent' : 'bg-muted text-muted-foreground'
                        }`}>
                          <Check className="w-3 h-3" />
                        </div>
                        <span className="text-foreground">{feature.label}</span>
                      </div>
                    ))}
                  </div>

                  <div className="px-6 pb-6">
                    <Button
                      className={`w-full font-semibold h-11 ${
                        plan.id === 'profesional'
                          ? 'bg-accent hover:bg-accent/90 text-accent-foreground'
                          : plan.id === 'agencia'
                          ? 'bg-primary hover:bg-primary/90 text-primary-foreground'
                          : 'bg-secondary text-secondary-foreground hover:bg-secondary/80 border border-border'
                      }`}
                      asChild
                    >
                      <Link href="/registro">Contratar plan</Link>
                    </Button>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Comparison note */}
      <section className="py-8 bg-secondary/50">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground">
            Todos los planes incluyen soporte técnico, actualizaciones automáticas y acceso a la plataforma web y móvil.
            Los precios están en Soles peruanos (PEN) e incluyen IGV.
          </p>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-foreground text-center mb-10">Preguntas frecuentes</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card rounded-2xl p-6 border border-border"
              >
                <h3 className="font-semibold text-foreground mb-2">{faq.q}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">¿Necesitas una solución personalizada?</h2>
          <p className="text-white/70 mb-6">Contáctanos para planes corporativos a medida para tu agencia.</p>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold h-12 px-8" asChild>
            <Link href="mailto:ventas@brokerenlinea.pe">Hablar con ventas</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
