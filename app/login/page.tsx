'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Building2, Eye, EyeOff } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function LoginPage() {
  const [showPass, setShowPass] = useState(false)
  const [form, setForm] = useState({ email: '', password: '' })

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
            El portal donde los brokers cierran más negocios
          </h2>
          <p className="text-white/60 leading-relaxed">
            Más de 850 brokers ya confían en nuestra plataforma para gestionar propiedades, leads y comisiones compartidas.
          </p>
        </div>

        <div className="flex gap-6">
          {['+2,400 propiedades', '+850 brokers', '+18k leads'].map((stat) => (
            <div key={stat} className="text-white/80 text-sm">{stat}</div>
          ))}
        </div>
      </div>

      {/* Right Panel */}
      <div className="flex-1 flex flex-col justify-center items-center p-8">
        {/* Mobile logo */}
        <Link href="/" className="flex items-center gap-2 mb-8 lg:hidden">
          <div className="w-8 h-8 rounded-xl bg-primary flex items-center justify-center">
            <Building2 className="w-4 h-4 text-primary-foreground" />
          </div>
          <span className="text-lg font-bold text-foreground">Broker en Línea</span>
        </Link>

        <div className="w-full max-w-md">
          <h1 className="text-2xl font-bold text-foreground mb-1">Iniciar sesión</h1>
          <p className="text-muted-foreground text-sm mb-8">
            Accede a tu cuenta para gestionar tus propiedades y leads.
          </p>

          <form className="space-y-4" onSubmit={(e) => { e.preventDefault() }}>
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
              <label className="block text-sm font-medium text-foreground mb-1.5">Contraseña</label>
              <div className="relative">
                <input
                  type={showPass ? 'text' : 'password'}
                  placeholder="••••••••"
                  required
                  value={form.password}
                  onChange={(e) => setForm({ ...form, password: e.target.value })}
                  className="w-full px-4 py-3 pr-11 rounded-xl border border-border bg-background text-sm outline-none focus:ring-2 focus:ring-ring transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPass(!showPass)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  aria-label={showPass ? 'Ocultar contraseña' : 'Mostrar contraseña'}
                >
                  {showPass ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
              <div className="text-right mt-2">
                <Link href="#" className="text-xs text-accent hover:underline">¿Olvidaste tu contraseña?</Link>
              </div>
            </div>

            <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold h-11 rounded-xl mt-2" asChild>
              <Link href="/dashboard/broker">Iniciar sesión</Link>
            </Button>
          </form>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border" />
            </div>
            <div className="relative flex justify-center text-xs text-muted-foreground">
              <span className="bg-background px-3">o continúa con</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <Button variant="outline" className="h-11 rounded-xl text-sm font-medium">
              Google
            </Button>
            <Button variant="outline" className="h-11 rounded-xl text-sm font-medium">
              Facebook
            </Button>
          </div>

          <p className="text-center text-sm text-muted-foreground mt-8">
            ¿No tienes cuenta?{' '}
            <Link href="/registro" className="text-accent font-medium hover:underline">
              Crear cuenta
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
