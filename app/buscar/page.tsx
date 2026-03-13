'use client'

import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Search, SlidersHorizontal, X, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import PropiedadCard from '@/components/propiedad-card'
import { propiedades } from '@/lib/data'

const TIPOS = ['Todos', 'Casa', 'Apartamento', 'Oficina', 'Local', 'Terreno']
const CIUDADES = ['Todas', 'Lima', 'Arequipa', 'Cusco', 'Trujillo']
const HABITACIONES = ['Cualquiera', '1', '2', '3', '4+']

export default function BuscarPage() {
  const [busqueda, setBusqueda] = useState('')
  const [tipoSeleccionado, setTipoSeleccionado] = useState('Todos')
  const [ciudadSeleccionada, setCiudadSeleccionada] = useState('Todas')
  const [precioMin, setPrecioMin] = useState('')
  const [precioMax, setPrecioMax] = useState('')
  const [habitaciones, setHabitaciones] = useState('Cualquiera')
  const [banos, setBanos] = useState('Cualquiera')
  const [filtersOpen, setFiltersOpen] = useState(false)

  const filtradas = useMemo(() => {
    return propiedades.filter((p) => {
      const matchBusqueda =
        !busqueda ||
        p.titulo.toLowerCase().includes(busqueda.toLowerCase()) ||
        p.ubicacion.toLowerCase().includes(busqueda.toLowerCase()) ||
        p.ciudad.toLowerCase().includes(busqueda.toLowerCase())

      const matchTipo = tipoSeleccionado === 'Todos' || p.tipo === tipoSeleccionado
      const matchCiudad = ciudadSeleccionada === 'Todas' || p.ciudad === ciudadSeleccionada
      const matchPrecioMin = !precioMin || p.precio >= parseInt(precioMin)
      const matchPrecioMax = !precioMax || p.precio <= parseInt(precioMax)

      const matchHab =
        habitaciones === 'Cualquiera' ||
        (habitaciones === '4+' ? p.habitaciones >= 4 : p.habitaciones === parseInt(habitaciones))

      const matchBanos =
        banos === 'Cualquiera' ||
        (banos === '4+' ? p.banos >= 4 : p.banos === parseInt(banos))

      return matchBusqueda && matchTipo && matchCiudad && matchPrecioMin && matchPrecioMax && matchHab && matchBanos
    })
  }, [busqueda, tipoSeleccionado, ciudadSeleccionada, precioMin, precioMax, habitaciones, banos])

  const resetFiltros = () => {
    setBusqueda('')
    setTipoSeleccionado('Todos')
    setCiudadSeleccionada('Todas')
    setPrecioMin('')
    setPrecioMax('')
    setHabitaciones('Cualquiera')
    setBanos('Cualquiera')
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Search */}
      <section className="pt-24 pb-8 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-white mb-2">Buscar Propiedades</h1>
          <p className="text-white/70 text-sm mb-6">{filtradas.length} propiedades disponibles</p>
          <div className="flex gap-3 max-w-2xl">
            <div className="flex-1 flex items-center gap-3 bg-white rounded-xl px-4 py-3 border border-border shadow-sm">
              <Search className="w-4 h-4 text-muted-foreground flex-shrink-0" />
              <input
                type="text"
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
                placeholder="Busca por distrito, ciudad o zona..."
                className="bg-transparent text-sm outline-none w-full text-foreground placeholder:text-muted-foreground"
              />
              {busqueda && (
                <button onClick={() => setBusqueda('')} className="text-muted-foreground hover:text-foreground">
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
            <Button
              variant="outline"
              className="bg-white/10 border-white/30 text-white hover:bg-white/20"
              onClick={() => setFiltersOpen(!filtersOpen)}
            >
              <SlidersHorizontal className="w-4 h-4 mr-2" />
              Filtros
            </Button>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Sidebar Filters */}
          <aside
            className={`w-72 flex-shrink-0 hidden lg:block`}
            aria-label="Filtros de búsqueda"
          >
            <div className="bg-card rounded-2xl p-6 border border-border shadow-sm sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-semibold text-foreground">Filtros</h2>
                <button
                  onClick={resetFiltros}
                  className="text-xs text-accent hover:underline"
                >
                  Limpiar todo
                </button>
              </div>

              <div className="space-y-6">
                {/* Ciudad */}
                <div>
                  <label className="text-sm font-medium text-foreground block mb-2">Ciudad</label>
                  <div className="flex flex-wrap gap-2">
                    {CIUDADES.map((c) => (
                      <button
                        key={c}
                        onClick={() => setCiudadSeleccionada(c)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                          ciudadSeleccionada === c
                            ? 'bg-primary text-primary-foreground border-primary'
                            : 'bg-background text-muted-foreground border-border hover:border-primary/50'
                        }`}
                      >
                        {c}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Precio */}
                <div>
                  <label className="text-sm font-medium text-foreground block mb-2">Precio (USD)</label>
                  <div className="flex gap-2">
                    <input
                      type="number"
                      placeholder="Mín."
                      value={precioMin}
                      onChange={(e) => setPrecioMin(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl border border-border bg-background text-sm outline-none focus:ring-1 focus:ring-ring"
                    />
                    <input
                      type="number"
                      placeholder="Máx."
                      value={precioMax}
                      onChange={(e) => setPrecioMax(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl border border-border bg-background text-sm outline-none focus:ring-1 focus:ring-ring"
                    />
                  </div>
                </div>

                {/* Tipo */}
                <div>
                  <label className="text-sm font-medium text-foreground block mb-2">Tipo de Propiedad</label>
                  <div className="flex flex-wrap gap-2">
                    {TIPOS.map((t) => (
                      <button
                        key={t}
                        onClick={() => setTipoSeleccionado(t)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                          tipoSeleccionado === t
                            ? 'bg-accent text-accent-foreground border-accent'
                            : 'bg-background text-muted-foreground border-border hover:border-accent/50'
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Habitaciones */}
                <div>
                  <label className="text-sm font-medium text-foreground block mb-2">Habitaciones</label>
                  <div className="flex gap-2">
                    {HABITACIONES.map((h) => (
                      <button
                        key={h}
                        onClick={() => setHabitaciones(h)}
                        className={`flex-1 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                          habitaciones === h
                            ? 'bg-primary text-primary-foreground border-primary'
                            : 'bg-background text-muted-foreground border-border hover:border-primary/50'
                        }`}
                      >
                        {h}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Baños */}
                <div>
                  <label className="text-sm font-medium text-foreground block mb-2">Baños</label>
                  <div className="flex gap-2">
                    {HABITACIONES.map((b) => (
                      <button
                        key={b}
                        onClick={() => setBanos(b)}
                        className={`flex-1 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                          banos === b
                            ? 'bg-primary text-primary-foreground border-primary'
                            : 'bg-background text-muted-foreground border-border hover:border-primary/50'
                        }`}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Results */}
          <main className="flex-1 min-w-0">
            {/* Mobile Filters */}
            {filtersOpen && (
              <div className="lg:hidden bg-card rounded-2xl p-5 border border-border mb-6 shadow-sm">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-medium text-foreground block mb-1.5">Tipo</label>
                    <select
                      value={tipoSeleccionado}
                      onChange={(e) => setTipoSeleccionado(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl border border-border bg-background text-sm outline-none"
                    >
                      {TIPOS.map((t) => <option key={t}>{t}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="text-xs font-medium text-foreground block mb-1.5">Ciudad</label>
                    <select
                      value={ciudadSeleccionada}
                      onChange={(e) => setCiudadSeleccionada(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl border border-border bg-background text-sm outline-none"
                    >
                      {CIUDADES.map((c) => <option key={c}>{c}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="text-xs font-medium text-foreground block mb-1.5">Precio mín.</label>
                    <input
                      type="number"
                      placeholder="USD"
                      value={precioMin}
                      onChange={(e) => setPrecioMin(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl border border-border bg-background text-sm outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-foreground block mb-1.5">Precio máx.</label>
                    <input
                      type="number"
                      placeholder="USD"
                      value={precioMax}
                      onChange={(e) => setPrecioMax(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl border border-border bg-background text-sm outline-none"
                    />
                  </div>
                </div>
                <button onClick={resetFiltros} className="mt-3 text-xs text-accent hover:underline">Limpiar filtros</button>
              </div>
            )}

            {/* Sort & Count */}
            <div className="flex items-center justify-between mb-6">
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">{filtradas.length}</span> propiedades encontradas
              </p>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>Ordenar por:</span>
                <select className="bg-card border border-border rounded-lg px-3 py-1.5 text-sm outline-none text-foreground">
                  <option>Más recientes</option>
                  <option>Precio: menor a mayor</option>
                  <option>Precio: mayor a menor</option>
                  <option>Más vistos</option>
                </select>
              </div>
            </div>

            {filtradas.length === 0 ? (
              <div className="text-center py-20">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-7 h-7 text-muted-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Sin resultados</h3>
                <p className="text-muted-foreground text-sm mb-4">Prueba ajustando los filtros de búsqueda.</p>
                <Button variant="outline" size="sm" onClick={resetFiltros}>Limpiar filtros</Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                {filtradas.map((propiedad, i) => (
                  <motion.div
                    key={propiedad.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.3 }}
                  >
                    <PropiedadCard propiedad={propiedad} />
                  </motion.div>
                ))}
              </div>
            )}
          </main>
        </div>
      </div>

      <Footer />
    </div>
  )
}
