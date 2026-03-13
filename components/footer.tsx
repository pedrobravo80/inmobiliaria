import Link from 'next/link'
import { Building2, Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-accent flex items-center justify-center">
                <Building2 className="w-5 h-5 text-accent-foreground" />
              </div>
              <span className="text-xl font-bold">Broker en Línea</span>
            </div>
            <p className="text-sm text-primary-foreground/70 leading-relaxed">
              El portal inmobiliario donde brokers colaboran, publican propiedades y cierran más negocios juntos.
            </p>
            <div className="flex items-center gap-3 pt-1">
              {[Facebook, Instagram, Linkedin, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-8 h-8 rounded-lg bg-white/10 hover:bg-accent transition-colors flex items-center justify-center"
                  aria-label="Red social"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/50 mb-4">Portal</h3>
            <ul className="space-y-2.5">
              {['Inicio', 'Buscar Propiedades', 'Cómo Funciona', 'Planes', 'Para Brokers'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Account */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/50 mb-4">Mi Cuenta</h3>
            <ul className="space-y-2.5">
              {['Iniciar Sesión', 'Crear Cuenta', 'Panel de Broker', 'Panel de Propietario', 'Soporte'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/50 mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-primary-foreground/70">
                <MapPin className="w-4 h-4 text-accent flex-shrink-0" />
                Av. Larco 1301, Miraflores, Lima
              </li>
              <li className="flex items-center gap-3 text-sm text-primary-foreground/70">
                <Phone className="w-4 h-4 text-accent flex-shrink-0" />
                +51 (1) 700-4000
              </li>
              <li className="flex items-center gap-3 text-sm text-primary-foreground/70">
                <Mail className="w-4 h-4 text-accent flex-shrink-0" />
                hola@brokerenlinea.pe
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-primary-foreground/50">
            © 2025 Broker en Línea. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-4">
            {['Política de Privacidad', 'Términos de Uso', 'Cookies'].map((item) => (
              <Link key={item} href="#" className="text-xs text-primary-foreground/50 hover:text-accent transition-colors">
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
