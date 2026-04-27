import type { Era } from '@/lib/types';

const olmecas: Era = {
  metadata: {
    slug: 'olmecas', titulo: 'Cultura Olmeca', periodo: '1500 – 400 a.C.',
    estados_principales: ['Veracruz', 'Tabasco'],
    icono: '🗿', color: 'bg-teal-800', colorText: 'text-teal-900', orden: 1,
  },
  casos: [
    {
      numero: 1, titulo: 'El Misterio de La Venta', subtitulo: 'Tabasco',
      categoria: 'grandes-hitos', concepto_clave: 'Capital olmeca tardía y centro ceremonial',
      materia: 'Historia', estado_destino: 'Tabasco', estado_slug: 'tabasco',
      pista: 'El informante Pájaro de Jade dice: "La ciudad más poderosa de la primera gran civilización de México se construyó en tierras pantanosas donde el agua dulce y el agua salada se mezclan. Sus líderes ordenaron mover bloques de piedra desde montañas muy lejanas para crear monumentos sagrados. Todavía hoy puedes ver sus altares y esculturas en ese estado."',
      libreta: `Sitio: La Venta — asentamiento urbano olmeca tardío
Periodo de apogeo: Años 900–400 a.C.
Ubicación: Islote entre pantanos, al oeste de la entidad
Monumentos: 4 altares, 3 tumbas, pirámide de barro de 30 m
Materiales transportados: Basalto de las Tuxtlas (distancia: 90 km)
Colindancia: Limítrofe con Veracruz al poniente`,
      opciones: ['Tabasco', 'Campeche', 'Veracruz', 'Oaxaca'],
      respuesta_correcta: 'Tabasco',
      explicacion: 'La Venta está en Tabasco, en un islote entre pantanos. El transporte de basalto desde las Tuxtlas (Veracruz) a 90 km y los altares monumentales son marcadores exclusivos de este sitio tabasqueño.',
      regla_oro_check: true,
    },
    {
      numero: 2, titulo: 'Las Cabezas de Basalto', subtitulo: 'Veracruz',
      categoria: 'grandes-hitos', concepto_clave: 'Arte monumental y logística prehispánica',
      materia: 'Historia', estado_destino: 'Veracruz', estado_slug: 'veracruz',
      pista: 'La anciana del mercado te susurra: "Cadete, busca el estado donde los escultores de la primera civilización tallaron retratos de sus gobernantes en roca volcánica tan pesada que necesitaban cientos de personas para moverla. Esas caras gigantes parecen guerreros con casco redondo. En ese mismo estado también está el puerto más activo de México."',
      libreta: `Número de cabezas descubiertas: 17 en total (San Lorenzo: 10, La Venta: 4, Tres Zapotes: 2, Rancho la Cobata: 1)
Peso promedio: 8–40 toneladas por escultura
Material: Basalto olivínico de origen volcánico
Sitios en la entidad: San Lorenzo Tenochtitlán y Tres Zapotes
Puerto comercial activo: El más importante del Golfo de México
Coordenadas de San Lorenzo: 17°49'N, 94°47'O`,
      opciones: ['Veracruz', 'Tabasco', 'Chiapas', 'Oaxaca'],
      respuesta_correcta: 'Veracruz',
      explicacion: 'San Lorenzo (10 cabezas) y Tres Zapotes (2) están en Veracruz. Las coordenadas 17°49\'N, 94°47\'O y el puerto activo del Golfo confirman el estado. La Venta (4 cabezas) está en Tabasco.',
      regla_oro_check: true,
    },
    {
      numero: 3, titulo: 'El Jaguar de Jade', subtitulo: 'Guerrero',
      categoria: 'grandes-hitos', concepto_clave: 'Influencia olmeca fuera del área nuclear',
      materia: 'Historia', estado_destino: 'Guerrero', estado_slug: 'guerrero',
      pista: 'El agente Serpiente Emplumada reporta: "La influencia de la primera gran cultura llegó mucho más lejos de sus ciudades principales. En las cuevas de un estado del sur, en las costas del Pacífico, pintaron figuras mitad humano mitad animal con características olmecas. Ese estado hoy es famoso por sus playas y por el puerto de Acapulco."',
      libreta: `Sitio de influencia: Cueva de Oxtotitlán y Juxtlahuaca
Tipo de evidencia: Pinturas rupestres con iconografía olmeca (figuras felinas)
Ubicación: Sierra de Guerrero, a 700 km del núcleo olmeca del Golfo
Producto de intercambio: Jade, ilmenita y magnetita
Costa del estado: Pacífico (no Golfo)
Ciudad costera famosa: Puerto turístico de fama internacional desde siglo XX`,
      opciones: ['Guerrero', 'Oaxaca', 'Chiapas', 'Michoacán'],
      respuesta_correcta: 'Guerrero',
      explicacion: 'Las cuevas de Oxtotitlán y Juxtlahuaca, con pinturas olmecas, están en la Sierra de Guerrero, a 700 km del núcleo olmeca. La costa del Pacífico y Acapulco confirman el estado.',
      regla_oro_check: true,
    },
    {
      numero: 4, titulo: 'El Sistema de Riego', subtitulo: 'Veracruz',
      categoria: 'ciencia-y-saberes', concepto_clave: 'Ingeniería hidráulica prehispánica',
      materia: 'Ciencias', estado_destino: 'Veracruz', estado_slug: 'veracruz',
      pista: 'El ingeniero del tiempo te dice: "Investigador, los primeros arquitectos de México resolvieron un problema enorme: vivían en tierras que se inundaban con las lluvias pero se secaban en temporada de calor. Construyeron canales y terrazas para guardar el agua cuando sobra y usarla cuando falta. Ese sistema permitió alimentar a miles de personas en la costa del Golfo."',
      libreta: `Técnica: Drenaje y canalización de humedales — documentada en San Lorenzo
Evidencia arqueológica: 8 km de canales de piedra en el sitio principal veracruzano
Función: Control de inundaciones + almacenamiento de agua dulce
Periodo: Años 1500–900 a.C. (anterior a la ingeniería hidráulica maya)
Suelo: Vertisoles — arcillas expansivas con alta retención hídrica
Cultivos principales: Maíz, frijol y calabaza (milpa)`,
      opciones: ['Veracruz', 'Hidalgo', 'Guanajuato', 'Tlaxcala'],
      respuesta_correcta: 'Veracruz',
      explicacion: 'Los 8 km de canales de San Lorenzo (Veracruz) son la evidencia más antigua de ingeniería hidráulica en México. Los vertisoles del Golfo y la milpa confirman el estado costeño.',
      regla_oro_check: true,
    },
    {
      numero: 5, titulo: 'El Primer Calendario', subtitulo: 'Tabasco',
      categoria: 'ciencia-y-saberes', concepto_clave: 'Astronomía y matemáticas prehispánicas',
      materia: 'Matemáticas', estado_destino: 'Tabasco', estado_slug: 'tabasco',
      pista: 'La astrónoma de la misión dice: "Agente, los primeros sabios de Mesoamérica ya observaban el movimiento del Sol y los ciclos de las lluvias para saber cuándo sembrar. En las estelas de su ciudad más importante dejaron grabados los primeros registros de fechas del continente americano. Esos monumentos están en el estado más plano y pantanoso del sureste."',
      libreta: `Estela C de Tres Zapotes: Contiene fecha equivalente a 32 a.C. — más antigua de Mesoamérica
Sistema: Cuenta Larga (puntos y barras para registrar días)
Entidad con mayor concentración de estelas fechadas: La Venta
Topografía: Planicie aluvial a menos de 10 m s.n.m.
Fenómeno climático dominante: Inundaciones estacionales del Grijalva y Usumacinta
Cultivo rector del calendario: Ciclo del maíz (120 días de siembra a cosecha)`,
      opciones: ['Tabasco', 'Veracruz', 'Campeche', 'Yucatán'],
      respuesta_correcta: 'Tabasco',
      explicacion: 'La Estela C de Tres Zapotes y la concentración de registros calendáricos en La Venta ubican esta misión en Tabasco. La planicie a menos de 10 m s.n.m. y las inundaciones del Grijalva confirman el estado.',
      regla_oro_check: true,
    },
    {
      numero: 6, titulo: 'El Juego de la Pelota', subtitulo: 'Chiapas',
      categoria: 'vida-cotidiana', concepto_clave: 'Deporte ritual y vida social mesoamericana',
      materia: 'Educación Física / Historia', estado_destino: 'Chiapas', estado_slug: 'chiapas',
      pista: 'El guía del museo te explica: "En la primera gran civilización de México ya practicaban un deporte donde no podías usar las manos para mover la pelota. La pelota era de hule natural y pesaba varios kilos. Las canchas más antiguas que se conocen de ese deporte aparecieron en una región selvática del sur, cerca de Guatemala."',
      libreta: `Cancha más antigua conocida: Paso de la Amada, circa 1400 a.C.
Ubicación: Costa de Chiapas, cerca de la frontera sur del país
Material de la pelota: Caucho natural (Castilla elastica) vulcanizado
Peso de la pelota: 3–4 kg
Reglas básicas: Golpear con caderas, codos o rodillas — sin manos
Dimensión de las canchas olmecas: 80 m de longitud`,
      opciones: ['Chiapas', 'Guerrero', 'Oaxaca', 'Puebla'],
      respuesta_correcta: 'Chiapas',
      explicacion: 'Paso de la Amada, en la costa de Chiapas, tiene las canchas del juego de pelota más antiguas de Mesoamérica (1400 a.C.). La frontera con Guatemala y la selva selvática confirman el estado sureño.',
      regla_oro_check: true,
    },
    {
      numero: 7, titulo: 'El Chapopote y el Hule', subtitulo: 'Veracruz',
      categoria: 'vida-cotidiana', concepto_clave: 'Primeros usos del petróleo y el caucho',
      materia: 'Ciencias / Historia', estado_destino: 'Veracruz', estado_slug: 'veracruz',
      pista: 'El químico del tiempo dice: "Los olmecas fueron los primeros en usar una sustancia negra y viscosa que brotaba del suelo para impermeabilizar sus barcos y antorchas. También mezclaban plantas con otro material elástico para hacer pelotas que rebotaban. Esas materias primas naturales abundan en la costa del Golfo de México."',
      libreta: `Chapopote (asfalto natural): Nombre náhuatl del petróleo aflorante
Uso documentado: Impermeabilizante, adhesivo, incienso ritual y pintura
Hule: Látex de Castilla elastica mezclado con jugo de Ipomoea alba
Proceso: Vulcanización artesanal — descubierta 3,000 años antes que Goodyear (siglo XIX)
Región productora: Costa del Golfo (cuenca petrolera actual de México)
Sitio de evidencia: San Lorenzo — bolas de chapopote en contextos arqueológicos`,
      opciones: ['Veracruz', 'Tabasco', 'Campeche', 'Tamaulipas'],
      respuesta_correcta: 'Veracruz',
      explicacion: 'San Lorenzo (Veracruz) tiene la evidencia más clara del uso de chapopote como impermeabilizante. La cuenca petrolera del Golfo, donde aún hoy se extrae petróleo, y las plantas de Castilla elastica confirman Veracruz como destino.',
      regla_oro_check: true,
    },
    {
      numero: 8, titulo: 'El Cacique y Su Pueblo', subtitulo: 'Tabasco',
      categoria: 'civismo-y-etica', concepto_clave: 'Primeras formas de organización política',
      materia: 'Formación Cívica', estado_destino: 'Tabasco', estado_slug: 'tabasco',
      pista: 'El politólogo del tiempo dice: "La primera gran sociedad organizada de México ya no era igualitaria. Había un gobernante poderoso que se hacía retratar en monumentos enormes, artesanos especializados, agricultores y guerreros. Ese tipo de sociedad con capas se llama cacicazgo complejo. Las evidencias más claras están en la zona más pantanosa del sureste."',
      libreta: `Tipo de sociedad: Cacicazgo complejo — entre tribu y Estado
Evidencia de jerarquía: Tumbas diferenciadas por riqueza en La Venta
Capas sociales identificadas: Gobernante, sacerdotes-artesanos, agricultores, posibles esclavos
Área de control de La Venta: Aprox. 1,000 km² de territorio tributario
Planicie del sureste: Altitud promedio 5 m s.n.m. — inundable en temporada de lluvias
Ríos de la zona: Tributarios del Golfo de México que desembocan en ese estado`,
      opciones: ['Tabasco', 'Veracruz', 'Chiapas', 'Oaxaca'],
      respuesta_correcta: 'Tabasco',
      explicacion: 'Las tumbas diferenciadas de La Venta (Tabasco) son la prueba más clara de jerarquía social olmeca. La planicie a 5 m s.n.m., inundable, y los ríos del Golfo confirman el estado tabasqueño.',
      regla_oro_check: true,
    },
    {
      numero: 9, titulo: 'Las Rutas de Comercio', subtitulo: 'Oaxaca',
      categoria: 'civismo-y-etica', concepto_clave: 'Redes comerciales prehispánicas',
      materia: 'Geografía / Historia', estado_destino: 'Oaxaca', estado_slug: 'oaxaca',
      pista: 'La mercader del tiempo dice: "Los olmecas no vivían solos: tenían redes de intercambio con pueblos muy lejanos. En un estado del sur, en valles montañosos, dejaron figurillas y hachas de jade olmeca. A cambio recibían minerales preciosos como la magnetita y la ilmenita que brillaban como espejos. Ese estado sureño hoy es famoso por su artesanía y sus ruinas zapotecas."',
      libreta: `Objeto de intercambio olmeca: Hachas ceremoniales de jade verde (celtas)
Objetos recibidos: Magnetita (Fe₃O₄), ilmenita (FeTiO₃) y espejo de pirita
Sitio receptor: San José Mogote — valle de Oaxaca
Función de los minerales: Espejos de chamanes y ornamentos rituales
Ruta comercial estimada: 700 km desde el Golfo hasta los valles centrales del sur
Ruinas zapotecas del estado receptor: Monte Albán (construida siglos después)`,
      opciones: ['Oaxaca', 'Guerrero', 'Puebla', 'Morelos'],
      respuesta_correcta: 'Oaxaca',
      explicacion: 'San José Mogote, en el valle central de Oaxaca, recibió hachas de jade olmeca y exportó magnetita e ilmenita. Las ruinas de Monte Albán (zapoteca, posterior) y la artesanía son marcadores de Oaxaca.',
      regla_oro_check: true,
    },
    {
      numero: 10, titulo: 'Olmecas y el Mundo Antiguo', subtitulo: 'Cruce Global',
      categoria: 'cruce-global', concepto_clave: '¿Por qué distintas civilizaciones hacen pirámides?',
      materia: 'Historia Universal', estado_destino: 'Veracruz', estado_slug: 'veracruz',
      pista: 'La historiadora global dice: "Investigador, mientras los olmecas construían su ciudad de barro en el trópico americano, al otro lado del planeta los faraones del Imperio Nuevo egipcio edificaban templos en el desierto y los chinos de la dinastía Zhou desarrollaban su filosofía. Todas estas culturas surgieron de forma independiente, sin contacto entre sí. El estado donde los olmecas tuvieron mayor presencia hoy concentra la industria petrolera más importante de México."',
      libreta: `Contemporáneos olmecas (años 1200–400 a.C.):
• Egipto: Imperio Nuevo → Ramsés II (siglo XIII a.C.)
• China: Dinastía Zhou → Confucio (siglo VI a.C.)
• Grecia: Período Arcaico → Pitágoras (siglo VI a.C.)
• Mesoamérica: Olmeca → La Venta (900–400 a.C.)
Razón de las pirámides: Forma estable + visibilidad ritual — convergencia funcional, no contacto
Estado con mayor legado arqueológico olmeca Y mayor producción petrolera actual: Costa del Golfo`,
      opciones: ['Veracruz', 'Yucatán', 'Chihuahua', 'Baja California'],
      respuesta_correcta: 'Veracruz',
      explicacion: 'Las pirámides de culturas sin contacto (Egipto, olmecas, mayas, chinas) son convergencia funcional: la forma triangular es estructuralmente estable y visualmente imponente. Veracruz tiene el mayor legado arqueológico olmeca (San Lorenzo, Tres Zapotes) y hoy es también el centro de la industria petrolera del Golfo.',
      regla_oro_check: true,
    },
  ],
};
export default olmecas;
