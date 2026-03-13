'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Building2, Eye, EyeOff, Briefcase, UserCircle, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const tiposCuenta = [
  {
    id: 'broker',
    icon: Briefcase,
    label: 'Broker',
    desc: 'Publica propiedades, gestiona leads y colabora con otros brokers.',
  },
  {
    id: 'propietario',
    icon: UserCircle,
    label: 'Propietario',
    desc: 'Publica tu inmueble y conéctate con brokers de toda la red.',
  },
]

export default function RegistroPage() {
  const [tipo, setTipo] = useState<'broker' | 'propietario'>('broker')
  const [showPass, setShowPass] = useState(false)
  const [form, setForm] = useState({ nombre: '', email: '', telefono: '', password: '' })

  return (
    <div className="min-h-screen bg-background flex">
      {/* Left Panel */}
      <div className="hidden lg:flex w-1/2 bg-primary p-12 flex-col justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-xl bg-accent flex items-center justify-center">
            <Building2 className="w-5 h-5 text-accent-foreground" />
          </div>
          <span className="text-xl font-bold text-white">Broker en Línea</span>
        </Link>

        <div>
          <h2 className="text-4xl font-bold text-white leading-tight mb-4 text-balance">
            Únete a la red inmobiliaria más activa del país
          </h2>
          <p className="text-white/60 leading-relaxed mb-8">
            Crea tu cuenta gratis y comienza a publicar propiedades, recibir leads y cerrar más negocios hoy mismo.
          </p>
          <div className="space-y-3">
            {[
              '14 días de prueba gratuita en plan Profesional',
              'Sin tarjeta de crédito requerida',
              'Acceso inmediato a todas las herramientas',
              'Soporte en español incluido',
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 text-white/80 text-sm">
                <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                {item}
              </div>
            ))}
          </div>
        </div>

        <p className="text-white/40 text-xs">Confiado por +850 brokers en todo el Perú</p>
      </div>

      {/* Right Panel */}
      <div className="flex-1 flex flex-col justify-center items-center p-8 overflow-y-auto">
        {/* Mobile logo */}
        <Link href="/" className="flex items-center gap-2 mb-6 lg:hidden">
          <div className="w-8 h-8 rounded-xl bg-primary flex items-center justify-center">
            <Building2 className="w-4 h-4 text-primary-foreground" />
          </div>
          <span className="text-lg font-bold text-foreground">Broker en Línea</span>
        </Link>

        <div className="w-full max-w-md">
          <h1 className="text-2xl font-bold text-foreground mb-1">Crear cuenta</h1>
          <p className="text-muted-foreground text-sm mb-8">Completa el formulario para comenzar.</p>

          {/* Tipo de cuenta */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-foreground mb-3">Tipo de cuenta</label>
            <div className="grid grid-cols-2 gap-3">
              {tiposCuenta.map((t) => {
                const Icon = t.icon
                return (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setTipo(t.id as 'broker' | 'propietario')}
                    className={cn(
                      'flex flex-col items-center gap-2 p-4 rounded-2xl border-2 text-center transition-all',
                      tipo === t.id
                        ? 'border-accent bg-accent/5'
                        : 'border-border hover:border-border/80 bg-card'
                    )}
                  >
                    <div className={cn(
                      'w-10 h-10 rounded-xl flex items-center justify-center',
                      tipo === t.id ? 'bg-accent text-accent-foreground' : 'bg-secondary text-muted-foreground'
                    )}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className={cn('text-sm font-semibold', tipo === t.id ? 'text-accent' : 'text-foreground')}>
                        {t.label}
                      </p>
                      <p className="text-xs text-muted-foreground mt-0.5 leading-tight">{t.desc}</p>
                    </div>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Form */}
          <form className="space-y-4" onSubmit={(e) => { e.preventDefault() }}>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Nombre completo</label>
              <input
                type="text"
                placeholder="Tu nombre"
                required
                value={form.nombre}
                onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-border bg-background text-sm outline-none focus:ring-2 focus:ring-ring transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Correo electrónico</label>
              <input
                type="email"
                placeholder="tu@email.com"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-border bg-background text-sm outline-none focus:ring-2 focus:ring-ring transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Teléfono / WhatsApp</label>
              <input
                type="tel"
                placeholder="+51 999 000 000"
                value={form.telefono}
                onChange={(e) => setForm({ ...form, telefono: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-border bg-background text-sm outline-none focus:ring-2 focus:ring-ring transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Contraseña</label>
              <div className="relative">
                <input
                  type={showPass ? 'text' : 'password'}
                  placeholder="Mínimo 8 caracteres"
                  required
                  minLength={8}
                  value={form.password}
                  onChange={(e) => setForm({ ...form, password: e.target.value })}
                  className="w-full px-4 py-3 pr-11 rounded-xl border border-border bg-background text-sm outline-none focus:ring-2 focus:ring-ring transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPass(!showPass)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  aria-label={showPass ? 'Ocultar contraseña' : 'Mostrar contraseña'}
                >
                  {showPass ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <p className="text-xs text-muted-foreground">
              Al registrarte aceptas nuestros{' '}
              <Link href="#" className="text-accent hover:underline">Términos de Uso</Link>{' '}
              y{' '}
              <Link href="#" className="text-accent hover:underline">Política de Privacidad</Link>.
            </p>

            <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold h-11 rounded-xl" asChild>
              <Link href="/dashboard/broker">Crear mi cuenta</Link>
            </Button>
          </form>

          <p className="text-center text-sm text-muted-foreground mt-6">
            ¿Ya tienes cuenta?{' '}
            <Link href="/login" className="text-accent font-medium hover:underline">
              Iniciar sesión
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
