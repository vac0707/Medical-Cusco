/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Calendar, 
  ChevronRight, 
  Heart, 
  Menu, 
  X,
  Instagram,
  Facebook,
  Linkedin,
  MessageCircle,
  Plane,
  Truck,
  Activity,
  Microscope,
  Stethoscope,
  Users,
  Award,
  ShieldCheck
} from 'lucide-react';
import { useState, useEffect, FormEvent } from 'react';

// --- Data & Types ---

const NAVIGATION = [
  { name: 'Inicio', href: '#home' },
  { name: 'Nosotros', href: '#about' },
  { name: 'Servicios', href: '#services' },
  { name: 'Centros', href: '#centers' },
  { name: 'Contacto', href: '#contact' },
];

const INSURANCE_LOGOS = [
  "https://res.cloudinary.com/dcnynnstm/image/upload/v1778000806/logo-1_kq3oxo.jpg",
  "https://res.cloudinary.com/dcnynnstm/image/upload/v1778000813/logo-2_dm5smg.jpg",
  "https://res.cloudinary.com/dcnynnstm/image/upload/v1778000826/logo-3_bmbutc.jpg",
  "https://res.cloudinary.com/dcnynnstm/image/upload/v1778000834/logo-4_djov1v.jpg",
  "https://res.cloudinary.com/dcnynnstm/image/upload/v1778000837/logo-5_bwlz89.jpg",
];

const SERVICES = [
  { 
    title: 'Atención en Hotel', 
    icon: HomeIcon, 
    desc: 'Asistencia médica directa en su lugar de alojamiento para su total comodidad.' 
  },
  { 
    title: 'Evacuación Médica', 
    icon: Plane, 
    desc: 'Soporte aéreo y logística para evacuaciones críticas en situaciones complejas.' 
  },
  { 
    title: 'Servicio de Ambulancia', 
    icon: Truck, 
    desc: 'Unidades móviles equipadas para emergencias, traslados y rescates.' 
  },
  { 
    title: 'Rayos X Digital', 
    icon: Activity, 
    desc: 'Diagnóstico rápido y preciso con tecnología de imagen de vanguardia.' 
  },
  { 
    title: 'Laboratorio Clínico', 
    icon: Microscope, 
    desc: 'Análisis clínicos en nuestras propias instalaciones con resultados inmediatos.' 
  },
  { 
    title: 'Observación Médica', 
    icon: Clock, 
    desc: 'Habitaciones equipadas para el monitoreo constante por personal especializado.' 
  },
];

const CENTERS = [
  { city: 'Cusco', alt: '3,350 msnm', detail: 'Sede Administrativa y Clínica Principal' },
  { city: 'Aguas Calientes', alt: '2,050 msnm', detail: 'Atención Directa Machu Picchu' },
  { city: 'Santa Teresa', alt: '1,550 msnm', detail: 'Punto de Asistencia Turística' },
  { city: 'Soraypampa', alt: '4,920 msnm', detail: 'Atención de Alta Montaña' },
];

function HomeIcon(props: any) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      {...props}
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

// --- Components ---

const LOGO_URL = "https://res.cloudinary.com/dcnynnstm/image/upload/v1777999348/LOGO_MEDICAL_CUSCO_SCL_snf_1_wenbb2.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'glass-morphism py-2 shadow-lg' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#home" className="block relative">
              <img 
                src={LOGO_URL} 
                alt="Medical Cusco Logo" 
                className={`h-12 md:h-16 w-auto transition-transform duration-300 ${isScrolled ? 'scale-90' : 'scale-100'}`}
                referrerPolicy="no-referrer"
              />
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-10">
            {NAVIGATION.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-xs font-bold text-brand-900/70 hover:text-brand-500 transition-all uppercase tracking-widest"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#appointment" 
              className="px-6 py-2.5 bg-brand-500 text-white text-[10px] font-black rounded-full hover:bg-brand-600 transition-all shadow-md active:scale-95 uppercase tracking-widest"
            >
              Contactar Médico
            </a>
          </div>

          <button className="md:hidden p-2 rounded-xl bg-slate-50 border border-slate-100" onClick={() => setMobileMenuOpen(true)}>
            <Menu className="w-6 h-6 text-brand-950" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-white z-[60] flex flex-col p-8"
          >
            <div className="flex justify-between items-center mb-16">
              <img src={LOGO_URL} alt="Medical Cusco" className="h-14 w-auto" referrerPolicy="no-referrer" />
              <button onClick={() => setMobileMenuOpen(false)} className="p-3 bg-slate-50 rounded-full">
                <X className="w-8 h-8 text-brand-950" />
              </button>
            </div>
            <div className="flex flex-col space-y-8">
              {NAVIGATION.map((link) => (
                <a 
                  key={link.name} href={link.href} onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-display font-black text-brand-900 border-b border-slate-50 pb-4"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#appointment" onClick={() => setMobileMenuOpen(false)}
                className="mt-8 w-full py-5 bg-brand-500 text-white text-center text-xl font-black rounded-2xl shadow-xl"
              >
                Atención Médica
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const HERO_IMAGES = [
  "https://res.cloudinary.com/dcnynnstm/image/upload/v1778003797/FOT3_qi6wes.jpg",
  "https://res.cloudinary.com/dcnynnstm/image/upload/v1778003797/FOT_2_oqh02l.jpg",
  "https://res.cloudinary.com/dcnynnstm/image/upload/v1778003797/fot1_dl4xaf.jpg",
  "https://res.cloudinary.com/dcnynnstm/image/upload/v1778001168/home-inner-1_dzq0qs.png"
];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-brand-950">
      {/* Background Slider */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImage}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <div className="absolute inset-0 bg-brand-950/60 z-10" />
            <img 
              src={HERO_IMAGES[currentImage]} 
              alt="Medical Care"
              className="h-full w-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </AnimatePresence>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="lg:w-3/4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="inline-flex items-center px-4 py-2 bg-brand-500/20 backdrop-blur-md text-brand-100 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-8 border border-white/10">
              <Activity className="w-4 h-4 mr-2 text-brand-400" />
              SOPORTE MÉDICO PROFESIONAL 24/7 EN CUSCO
            </div>
            <h1 className="text-5xl lg:text-8xl font-display font-black text-white leading-[0.95] mb-8 drop-shadow-2xl">
              <span className="text-brand-500">Asistencia</span> Médica <br />
              <span className="text-white">en Tiempo Real.</span>
            </h1>
            <p className="text-lg lg:text-2xl text-slate-200 mb-12 max-w-2xl leading-relaxed font-medium drop-shadow-lg">
              La plataforma de respuesta médica más rápida para viajeros en Cusco y el Camino Inca. Conectamos pacientes con especialistas en minutos, estés donde estés.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
              <a href="#appointment" className="px-12 py-6 bg-brand-500 text-white font-black rounded-2xl hover:bg-brand-600 transition-all text-center shadow-2xl active:scale-95 flex items-center justify-center text-sm uppercase tracking-[0.2em]">
                Reserva Ahora
                <Calendar className="ml-3 w-5 h-5" />
              </a>
              <a href="https://wa.me/51987577080" className="px-12 py-6 bg-white/10 backdrop-blur-md border-2 border-white/20 text-white font-black rounded-2xl hover:bg-white hover:text-brand-900 transition-all text-center flex items-center justify-center text-sm uppercase tracking-[0.2em]">
                Atención Inmediata
                <MessageCircle className="ml-3 w-5 h-5" />
              </a>
            </div>

            <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-10">
              <div>
                <p className="text-3xl lg:text-4xl font-black text-white">+200k</p>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Atenciones</p>
              </div>
              <div>
                <p className="text-3xl lg:text-4xl font-black text-white">24/7</p>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Disponibilidad</p>
              </div>
              <div className="hidden md:block">
                <p className="text-3xl lg:text-4xl font-black text-white">ISO</p>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Certificación</p>
              </div>
              <div className="hidden md:block">
                <p className="text-3xl lg:text-4xl font-black text-white">RED</p>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Estratégica</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const About = () => (
  <section id="about" className="py-24 bg-slate-50 relative overflow-hidden">
    <div className="absolute top-0 left-0 w-64 h-64 bg-brand-100 rounded-full blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2" />
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      <div className="lg:grid lg:grid-cols-2 lg:gap-20 items-center">
        <div className="relative group">
          <div className="absolute -inset-4 bg-gradient-to-r from-brand-500 to-accent-500 rounded-[3rem] opacity-20 blur-xl group-hover:opacity-30 transition-opacity" />
          <img 
            src="https://images.unsplash.com/photo-1504813184591-01572f98c85f?auto=format&fit=crop&q=80&w=1200" 
            alt="Medical Team" 
            className="relative rounded-[2.5rem] shadow-2xl z-10"
            referrerPolicy="no-referrer"
          />
          <div className="absolute bottom-10 right-10 bg-white p-8 rounded-3xl shadow-2xl z-20 max-w-xs border border-slate-100">
            <Award className="text-brand-500 w-10 h-10 mb-4" />
            <p className="text-sm font-bold text-brand-900 leading-tight">
              Excelencia Humana y Profesional desde el 2013 en Aguas Calientes.
            </p>
          </div>
        </div>

        <div className="mt-16 lg:mt-0">
          <h2 className="text-sm font-bold text-brand-500 uppercase tracking-[0.3em] mb-4">La Plataforma</h2>
          <h3 className="text-4xl lg:text-5xl font-display font-black text-brand-900 mb-8 leading-tight">
            Asistencia <span className="text-gradient">Inteligente</span> en cada ruta.
          </h3>
          <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
            <p>
              Somos la solución digital líder en <span className="font-bold text-brand-900">Aguas Calientes y Cusco</span>, diseñada para eliminar las barreras de acceso a la salud durante tu viaje.
            </p>
            <p>
              Nuestra infraestructura combina <span className="font-bold text-brand-900">tecnología logística</span> con el mejor equipo médico local para garantizar una respuesta en tiempo récord.
            </p>
          </div>
          
          <div className="mt-12 flex items-center space-x-10">
            <div className="flex items-center">
              <Activity className="text-brand-500 w-6 h-6 mr-3" />
              <span className="font-bold text-brand-900">Red Conectada</span>
            </div>
            <div className="flex items-center">
              <Clock className="text-brand-500 w-6 h-6 mr-3" />
              <span className="font-bold text-brand-900">Atención 24/7</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Insurance = () => (
  <section className="py-20 bg-white border-y border-slate-100 overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-2 text-center">Respaldo Internacional</p>
        <h4 className="text-2xl font-display font-bold text-brand-900">Trabajamos con Seguros de Europa, Asia y América</h4>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20">
        {INSURANCE_LOGOS.map((logo, idx) => (
          <div key={idx} className="w-32 md:w-40 h-20 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-700 opacity-60 hover:opacity-100 transform hover:scale-105">
            <img 
              src={logo} 
              alt={`Seguro Internacional ${idx + 1}`} 
              className="max-w-full max-h-full object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Centers = () => (
  <section id="centers" className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 space-y-4">
        <div>
          <h2 className="text-sm font-bold text-brand-500 uppercase tracking-widest mb-3">Cobertura Estratégica</h2>
          <h3 className="text-4xl lg:text-5xl font-display font-black text-brand-900">Donde nos necesites</h3>
        </div>
        <p className="text-slate-500 max-w-sm font-medium">
          Nuestros centros están ubicados en los puntos clave de la región para garantizar tiempos de respuesta mínimos.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {CENTERS.map((center, idx) => (
          <div key={idx} className="group p-8 rounded-[2rem] bg-slate-50 border border-slate-100 hover:bg-brand-900 hover:scale-[1.02] transition-all duration-500">
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-brand-500 transition-colors">
              <MapPin className="text-brand-500 w-6 h-6 group-hover:text-white" />
            </div>
            <h4 className="text-2xl font-display font-bold text-brand-900 group-hover:text-white mb-2">{center.city}</h4>
            <div className="inline-block px-3 py-1 bg-brand-50 text-brand-600 rounded-full text-[10px] font-bold mb-4 group-hover:bg-brand-800 group-hover:text-brand-300">
              {center.alt}
            </div>
            <p className="text-slate-500 text-sm group-hover:text-slate-400 font-medium">{center.detail}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Responsibility = () => (
  <section className="py-24 bg-brand-900 text-white overflow-hidden relative">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-500/10 via-transparent to-transparent pointer-events-none" />
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
        <div className="mb-12 lg:mb-0">
          <h2 className="text-sm font-bold text-brand-400 uppercase tracking-[0.4em] mb-6">Impacto Social</h2>
          <h3 className="text-4xl lg:text-6xl font-display font-black mb-8 leading-tight">
            Llevando Salud a <span className="text-brand-400">Zonas Vulnerables</span>.
          </h3>
          <p className="text-lg text-slate-300 mb-10 leading-relaxed">
            Nuestra responsabilidad va más allá de la clínica. Desarrollamos campañas médicas de odontología, oftalmología y nutrición en Santa Teresa, Soraypampa y comunidades altoandinas.
          </p>
          <ul className="space-x-4 flex overflow-x-auto pb-4 scrollbar-hide">
            {['Odontología', 'Oftalmología', 'Lucha Desnutrición', 'Campañas Rurales'].map((tag) => (
              <li key={tag} className="flex-shrink-0 px-6 py-2 bg-slate-800/50 rounded-full border border-slate-700 text-sm font-bold text-brand-300">
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <img src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=600" alt="Social Impact" className="rounded-2xl h-64 w-full object-cover grayscale hover:grayscale-0 transition-all" referrerPolicy="no-referrer" />
          <img src="https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&q=80&w=600" alt="Social Impact" className="rounded-2xl h-64 w-full object-cover mt-8 grayscale hover:grayscale-0 transition-all" referrerPolicy="no-referrer" />
        </div>
      </div>
    </div>
  </section>
);

const HowItWorks = () => (
  <section className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-20">
        <h2 className="text-sm font-bold text-brand-500 uppercase tracking-widest mb-4">Plataforma Ágil</h2>
        <h3 className="text-4xl lg:text-5xl font-display font-black text-brand-900">Atención médica en 3 pasos</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
        <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-8 z-0" />
        
        {[
          { step: '01', title: 'Conexión', desc: 'Inicia tu solicitud vía WhatsApp o Web. Un coordinador médico te responderá en segundos.', icon: MessageCircle },
          { step: '02', title: 'Coordinación', desc: 'Geolocalizamos tu posición y enviamos al equipo médico más cercano o coordinamos tu traslado.', icon: Plane },
          { step: '03', title: 'Resolución', desc: 'Atención especializada en tu hotel, ruta o en nuestros centros de alta complejidad.', icon: Stethoscope },
        ].map((item, idx) => (
          <div key={idx} className="relative z-10 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-brand-500 text-white rounded-2xl flex items-center justify-center mb-8 shadow-xl">
              <item.icon className="w-8 h-8" />
            </div>
            <span className="text-xs font-black text-brand-500 mb-2 uppercase tracking-widest">Paso {item.step}</span>
            <h4 className="text-2xl font-display font-bold text-brand-900 mb-4 uppercase tracking-tight">{item.title}</h4>
            <p className="text-slate-500 font-medium leading-relaxed max-w-xs">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const AppointmentSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="appointment" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-24 items-center">
          <div>
            <h2 className="text-5xl font-display font-black text-brand-900 mb-8 leading-tight">Resolución Rápida</h2>
            <p className="text-slate-500 mb-10 text-lg font-medium">Contáctanos ahora y un médico especialista atenderá tu solicitud de inmediato.</p>
            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="w-14 h-14 bg-brand-50 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Phone className="text-brand-500 w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">Central de Emergencias</p>
                  <p className="text-2xl font-display font-bold text-brand-900">+51 987 577 080</p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="w-14 h-14 bg-brand-50 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-brand-500 w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">Cusco (San Sebastián)</p>
                  <p className="text-xl font-display font-bold text-brand-900">Av. Cuzco 111</p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="w-14 h-14 bg-brand-50 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="text-brand-500 w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">Correo Corporativo</p>
                  <p className="text-xl font-display font-bold text-brand-900">medicalcusco327@gmail.com</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 p-6 bg-slate-50 rounded-3xl border border-slate-200">
              <div className="flex items-center space-x-4">
                <div className="p-2 bg-brand-500 rounded-lg">
                  <Heart className="text-white w-5 h-5" />
                </div>
                <span className="font-bold text-brand-900">Certificación ISO 9001:2015 en proceso</span>
              </div>
            </div>
          </div>

          <div className="mt-16 lg:mt-0 relative" id="contact">
            <div className="absolute inset-0 bg-brand-500 transform rotate-3 rounded-[3rem] opacity-5 -z-10" />
            <div className="bg-white p-8 lg:p-12 rounded-[3.5rem] shadow-2xl border border-slate-100">
              <div className="mb-8">
                <h4 className="text-2xl font-display font-black text-brand-900 uppercase tracking-tight">Triage de Atención</h4>
                <p className="text-slate-500 text-sm font-medium">Complete los datos para asistencia inmediata.</p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-1">Nombre</label>
                    <input type="text" className="w-full px-5 py-4 rounded-2xl bg-slate-50 border-transparent focus:bg-white focus:ring-2 focus:ring-brand-500 transition-all font-bold text-sm" placeholder="Nombre completo" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-1">Teléfono</label>
                    <input type="tel" className="w-full px-5 py-4 rounded-2xl bg-slate-50 border-transparent focus:bg-white focus:ring-2 focus:ring-brand-500 transition-all font-bold text-sm" placeholder="Ej. +51 987..." required />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-1">Ubicación Actual</label>
                  <input type="text" className="w-full px-5 py-4 rounded-2xl bg-slate-50 border-transparent focus:bg-white focus:ring-2 focus:ring-brand-500 transition-all font-bold text-sm" placeholder="Hotel / Ruta / GPS" required />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-1">Tipo de Atención</label>
                    <select className="w-full px-5 py-4 rounded-2xl bg-slate-50 border-transparent focus:bg-white focus:ring-2 focus:ring-brand-500 transition-all font-bold text-sm appearance-none">
                      <option>Asistencia en Hotel</option>
                      <option>Emergencia Crítica</option>
                      <option>Evacuación Médica</option>
                      <option>Consulta General</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-1">Urgencia</label>
                    <select className="w-full px-5 py-4 rounded-2xl bg-slate-50 border-transparent focus:bg-white focus:ring-2 focus:ring-brand-500 transition-all font-bold text-sm appearance-none">
                      <option>⚡ Alta / Crítica</option>
                      <option>⚠️ Media</option>
                      <option>✓ Baja / Control</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-1">Detalles Adicionales</label>
                  <textarea rows={3} className="w-full px-5 py-4 rounded-2xl bg-slate-50 border-transparent focus:bg-white focus:ring-2 focus:ring-brand-500 transition-all font-bold text-sm" placeholder="Ej. Síntomas de altura, dolor abdominal..."></textarea>
                </div>
                
                <button 
                  disabled={submitted}
                  className={`w-full py-5 rounded-2xl font-black text-white text-lg transition-all shadow-xl active:scale-95 ${submitted ? 'bg-accent-500' : 'bg-brand-500 hover:bg-brand-600 uppercase tracking-widest'}`}
                >
                  {submitted ? '¡Asistencia en Camino!' : 'Solicitar Atención Ahora'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ServicesSection = () => (
  <section id="services" className="py-24 bg-slate-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-20">
        <h2 className="text-sm font-bold text-brand-500 uppercase tracking-widest mb-4">Soluciones Médicas</h2>
        <h3 className="text-4xl lg:text-6xl font-display font-black text-brand-900 leading-tight">Servicios de Clase Mundial</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {SERVICES.map((service, idx) => (
          <motion.div 
            key={idx} whileHover={{ y: -8 }}
            className="group bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100"
          >
            <div className="w-16 h-16 bg-brand-50 text-brand-500 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brand-500 group-hover:text-white transition-all duration-500 transform group-hover:rotate-6">
              <service.icon className="w-8 h-8" />
            </div>
            <h4 className="text-2xl font-display font-bold text-brand-900 mb-4">{service.title}</h4>
            <p className="text-slate-500 leading-relaxed font-medium mb-6">{service.desc}</p>
            <div className="w-12 h-1 bg-brand-100 rounded-full group-hover:w-full transition-all duration-500" />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-brand-900 text-white pt-24 pb-12 overflow-hidden relative">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
        <div className="col-span-1">
          <div className="flex items-center lg:justify-start mb-10">
            <img src={LOGO_URL} alt="Medical Cusco" className="h-16 w-auto brightness-0 invert" referrerPolicy="no-referrer" />
          </div>
          <p className="text-slate-400 font-medium leading-relaxed mb-10 text-sm">
            Líderes en asistencia médica de altura y atención al viajero. Salvaguardando su salud en los Andes peruanos desde 2013.
          </p>
          <div className="flex justify-center lg:justify-start space-x-5">
            {[Facebook, Instagram, Linkedin].map((Icon, i) => (
              <a key={i} href="#" className="w-12 h-12 rounded-2xl bg-slate-800 flex items-center justify-center hover:bg-brand-500 hover:-translate-y-1 transition-all">
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-xs font-black mb-10 uppercase tracking-[0.3em] text-brand-100">Centros de Red</h4>
          <ul className="space-y-6 text-slate-400 text-sm">
            <li className="flex flex-col">
              <span className="text-white font-bold mb-1">Machu Picchu</span>
              <span>Aguas Calientes - Tupac Yupanqui 1301</span>
            </li>
            <li className="flex flex-col">
              <span className="text-white font-bold mb-1">Cusco Central</span>
              <span>San Sebastián - Av. Cuzco 111</span>
            </li>
            <li className="flex flex-col">
              <span className="text-white font-bold mb-1">Santa Teresa</span>
              <span>Plaza La Solidaridad S/N</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-black mb-10 uppercase tracking-[0.3em] text-brand-100">Directorio</h4>
          <ul className="space-y-5 text-slate-400 font-bold text-sm tracking-widest">
            <li><a href="#about" className="hover:text-brand-500 transition-all block">SOBRE NOSOTROS</a></li>
            <li><a href="#services" className="hover:text-brand-500 transition-all block">SERVICIOS</a></li>
            <li><a href="#centers" className="hover:text-brand-500 transition-all block">CENTROS</a></li>
            <li><a href="#appointment" className="hover:text-brand-500 transition-all block">CONTACTO</a></li>
          </ul>
        </div>

        <div className="bg-slate-800/50 p-8 rounded-[2.5rem] border border-slate-700/50">
          <h4 className="text-sm font-black mb-6 text-white uppercase tracking-widest">Atención Digital</h4>
          <p className="text-slate-400 text-xs mb-6 font-medium">Recibe protocolos de salud para altura y noticias de nuestra red médica.</p>
          <div className="flex flex-col space-y-3">
            <input type="email" placeholder="Correo" className="bg-slate-900 border-none rounded-xl px-5 py-4 text-xs focus:ring-1 focus:ring-brand-500" />
            <button className="bg-brand-500 px-6 py-4 rounded-xl text-sm font-black uppercase tracking-widest hover:bg-brand-600 transition-all shadow-lg active:scale-95">Suscribirse</button>
          </div>
        </div>
      </div>
      
      <div className="border-t border-slate-800 pt-12 flex flex-col md:flex-row justify-between items-center text-slate-500 text-[10px] font-black tracking-[0.2em]">
        <p>© 2013-{new Date().getFullYear()} MEDICAL CUSCO - TURISMO & SALUD DE EXCELENCIA.</p>
        <div className="flex space-x-8 mt-6 md:mt-0">
          <a href="#" className="hover:text-white">PRIVACIDAD</a>
          <a href="#" className="hover:text-white">TÉRMINOS</a>
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="bg-white selection:bg-brand-50 selection:text-brand-500 min-h-screen font-sans text-brand-900">
      <Navbar />
      <Hero />
      <Insurance />
      <HowItWorks />
      {/* Cobertura Exclusiva Banner */}
      <section className="py-20 bg-brand-50 border-y border-brand-100 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h3 className="text-2xl md:text-3xl font-display font-black text-brand-900 mb-4">Líderes en Cobertura de Rutas Turísticas</h3>
          <p className="text-slate-600 mb-10 max-w-2xl mx-auto font-medium">
            Somos la única plataforma médica oficial con presencia permanente en el **Camino Inca, Soraypampa y Aguas Calientes**. No solo estamos en la ciudad, estamos donde ocurre la acción.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {['Machu Picchu', 'Camino Inca', 'Salkantay Trek', 'Valle Sagrado'].map(route => (
              <span key={route} className="px-5 py-2 bg-white rounded-full text-xs font-bold text-brand-500 border border-brand-200 shadow-sm">
                {route}
              </span>
            ))}
          </div>
        </div>
      </section>

      <About />
      <ServicesSection />
      
      {/* ISO Badge / Trust Banner */}
      <section className="bg-accent-50 py-10 border-y border-accent-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-12">
            <div className="flex items-center space-x-3">
              <Award className="text-accent-500 w-6 h-6" />
              <span className="text-xs font-black text-accent-500 uppercase tracking-widest">Calidad Certificada ISO 9001:2015</span>
            </div>
            <div className="flex items-center space-x-3">
              <ShieldCheck className="text-accent-500 w-6 h-6" />
              <span className="text-xs font-black text-accent-500 uppercase tracking-widest">Seguros Internacionales Aceptados</span>
            </div>
          </div>
        </div>
      </section>

      <Centers />
      <Responsibility />
      
      <section className="py-24 bg-brand-50">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-display font-black text-brand-900 mb-6 uppercase tracking-tight">Experiencia Clínica en los Andes</h3>
          <p className="text-slate-600 mb-10 font-medium leading-relaxed">
            Nuestros programas de voluntariado y campañas sociales aseguran que la excelencia médica llegue a cada rincón de Cusco.
          </p>
          <a href="#contact" className="inline-flex items-center px-10 py-5 bg-brand-900 text-white font-black rounded-2xl hover:bg-brand-950 transition-all shadow-xl uppercase tracking-widest text-xs">
            Unirse al Voluntariado
            <ChevronRight className="ml-2 w-5 h-5 text-brand-500" />
          </a>
        </div>
      </section>

      <AppointmentSection />
      <Footer />
      
      {/* SOS Emergency Widget */}
      <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end space-y-3">
        <motion.div 
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="flex flex-col items-end space-y-2"
        >
          <a 
            href="tel:+51987577080"
            className="flex items-center space-x-3 px-6 py-3 bg-brand-500 text-white rounded-full shadow-2xl border-4 border-white hover:scale-105 transition-all group animate-pulse"
          >
            <div className="flex flex-col items-end">
              <span className="text-[10px] font-black uppercase tracking-tighter opacity-80">Llamada de</span>
              <span className="text-sm font-black uppercase tracking-widest">EMERGENCIA</span>
            </div>
            <Phone className="w-5 h-5 fill-current" />
          </a>
          
          <a 
            href="https://wa.me/51987577080"
            target="_blank"
            className="flex items-center space-x-3 px-6 py-3 bg-[#25D366] text-white rounded-full shadow-2xl border-4 border-white hover:scale-105 transition-all group"
          >
            <div className="flex flex-col items-end">
              <span className="text-[10px] font-black uppercase tracking-tighter opacity-80">Asistencia</span>
              <span className="text-sm font-black uppercase tracking-widest">WHATSAPP</span>
            </div>
            <MessageCircle className="w-5 h-5 fill-current" />
          </a>
        </motion.div>
      </div>
    </div>
  );
}
