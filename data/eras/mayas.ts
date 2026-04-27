import type { Era } from '@/lib/types';
const mayas: Era = {
  metadata: {
    slug: 'mayas', titulo: 'Cultura Maya', periodo: '2000 a.C. – 1500 d.C.',
    estados_principales: ['Yucatán', 'Chiapas', 'Campeche'],
    icono: '🏛️', color: 'bg-emerald-800', colorText: 'text-emerald-900', orden: 2,
  },
  casos: [
    { numero:1, titulo:'El Imperio de Chichén Itzá', subtitulo:'Yucatán',
      categoria:'grandes-hitos', concepto_clave:'Ciudad maya más visitada del mundo',
      materia:'Historia', estado_destino:'Yucatán', estado_slug:'yucatan',
      pista:'El explorador del norte dice: "La ciudad maya que se convirtió en Maravilla del Mundo Moderno está en una península plana sin ríos visibles. Su pirámide más famosa tiene exactamente tantos escalones como días tiene el año solar. En el equinoccio, la sombra de la serpiente baja por la escalinata."',
      libreta:`Declaración: Maravilla del Mundo Moderno, año 2007
Pirámide: Kukulcán — 91 escalones × 4 lados + plataforma = 365
Coordenadas: 20°41'N, 88°34'O — interior de la península
Fenómeno: Descenso de la serpiente en equinoccios de marzo y septiembre
Cenotes cercanos: Más de 6,000 en la península — fuente principal de agua dulce
Superficie de la zona arqueológica: 25 km²`,
      opciones:['Yucatán','Campeche','Quintana Roo','Chiapas'],
      respuesta_correcta:'Yucatán',
      explicacion:'Las coordenadas 20°41\'N, 88°34\'O ubican Chichén Itzá en Yucatán. Los 365 escalones, el fenómeno equinoccial y los cenotes como fuente de agua son marcadores específicos de la peninsula yucateca.',
      regla_oro_check:true },
    { numero:2, titulo:'La Tumba del Rey Pakal', subtitulo:'Chiapas',
      categoria:'grandes-hitos', concepto_clave:'Arquitectura funeraria maya de las tierras altas',
      materia:'Historia', estado_destino:'Chiapas', estado_slug:'chiapas',
      pista:'La arqueóloga del sur reporta: "En una ciudad maya rodeada de montañas selváticas, los obreros encontraron una cámara secreta dentro de la pirámide principal. El gobernante enterrado allí reinó por más de 60 años. Su lápida es tan rica que algunos la confundieron con la cabina de una nave espacial. Ese estado es el que está más al sur y es frontera con Guatemala."',
      libreta:`Sitio: Palenque — tierras altas mayas
Gobernante: K'inich Janaab' Pakal (reinó de año 615 a 683 d.C.)
Descubrimiento de la tumba: Alberto Ruz Lhuillier, año 1952
Profundidad de la cámara: 25 m bajo el nivel del suelo
Ecosistema: Selva tropical húmeda con más de 3,000 mm de lluvia/año
Frontera sur del estado: Guatemala (río Usumacinta)`,
      opciones:['Chiapas','Tabasco','Campeche','Oaxaca'],
      respuesta_correcta:'Chiapas',
      explicacion:'Palenque está en Chiapas, frontera con Guatemala por el Usumacinta. La tumba de Pakal, a 25 m de profundidad, descubierta en 1952, está en la selva húmeda con 3,000 mm de lluvia anual.',
      regla_oro_check:true },
    { numero:3, titulo:'El Códice de Dresden', subtitulo:'Yucatán',
      categoria:'grandes-hitos', concepto_clave:'Escritura y libros mayas',
      materia:'Español / Historia', estado_destino:'Yucatán', estado_slug:'yucatan',
      pista:'La bibliotecaria del tiempo dice: "Los mayas escribían en libros hechos de corteza de árbol doblada como acordeón. La mayoría fue quemada por los conquistadores españoles, pero sobrevivieron tres. El más importante registra los ciclos de Venus y predicciones astronómicas. Ese libro fue rescatado en Europa y su contenido viene del área maya del norte, la de las tierras bajas sin montañas."',
      libreta:`Nombre: Códice de Dresden — conservado en Alemania desde siglo XVIII
Contenido: Tablas de Venus (ciclo de 584 días), eclipses y rituales
Material: Papel amate (Ficus cotinifolia) recubierto con estuco blanco
Longitud: 3.56 m extendido, 39 páginas dobles
Región de origen: Tierras bajas del norte — área de la península sin serranías
Civilización: Posclásico maya (años 900–1500 d.C.)`,
      opciones:['Yucatán','Chiapas','Campeche','Tabasco'],
      respuesta_correcta:'Yucatán',
      explicacion:'El Códice de Dresden proviene de las tierras bajas mayas del norte, la zona de la península sin montañas. Yucatán es el área más representativa de ese período posclásico maya.',
      regla_oro_check:true },
    { numero:4, titulo:'Las Matemáticas del Cero', subtitulo:'Yucatán',
      categoria:'ciencia-y-saberes', concepto_clave:'Invención independiente del cero',
      materia:'Matemáticas', estado_destino:'Yucatán', estado_slug:'yucatan',
      pista:'El matemático del tiempo dice: "Los mayas inventaron el símbolo del cero de forma independiente, sin conocer a los matemáticos de la India o de Arabia. Ese invento les permitió calcular fechas con miles de años de anticipación. Las estelas con más registros matemáticos están en la zona maya del norte, donde el suelo es tan plano que se puede ver hasta el horizonte."',
      libreta:`Símbolo del cero maya: Concha marina estilizada (representación visual)
Periodo de uso documentado: Siglo IV d.C. — anterior al cero arábigo en Europa
Sistema: Vigesimal (base 20) con posición
Cálculo más largo: Fecha a 90 millones de años en el pasado (estela de Quiriguá, Guatemala)
Terreno de la zona norte maya: Planicie calcárea kárstica — sin ríos superficiales
Uso práctico: Calendarios, astronomía y contabilidad de tributos`,
      opciones:['Yucatán','Chiapas','Tabasco','Campeche'],
      respuesta_correcta:'Yucatán',
      explicacion:'Las estelas con mayor densidad de registros matemáticos mayas pertenecen al área de las tierras bajas del norte (Yucatán). La planicie kárstica sin ríos y el suelo calcáreo confirman la región.',
      regla_oro_check:true },
    { numero:5, titulo:'La Medicina de los Herbolarios', subtitulo:'Chiapas',
      categoria:'ciencia-y-saberes', concepto_clave:'Medicina herbal y conocimiento botánico maya',
      materia:'Ciencias Naturales', estado_destino:'Chiapas', estado_slug:'chiapas',
      pista:'La curandera del tiempo dice: "Los sabios mayas conocían cientos de plantas medicinales de la selva. Usaban la corteza de un árbol para bajar la fiebre, el cacao para dar energía y varias raíces para curar heridas. Ese conocimiento se transmitía de generación en generación en la selva más biodiversa de México."',
      libreta:`Plantas documentadas: Más de 500 especies medicinales en códices y textos coloniales
Corteza antipirética: Cinchona — fuente de quinina (quinine) usada siglos después en Europa
Cacao: Theobroma cacao — bebida ritual y energética
Biodiversidad del estado sureño: 13,000 especies vegetales — la mayor de México
Selva: Lacandona — 350,000 ha de bosque tropical húmedo
Transmisión del conocimiento: Ah men (especialistas curanderos)`,
      opciones:['Chiapas','Yucatán','Veracruz','Campeche'],
      respuesta_correcta:'Chiapas',
      explicacion:'Chiapas tiene la mayor biodiversidad vegetal del país (13,000 especies) y la Selva Lacandona con 350,000 ha. Los ah men (curanderos) mayas de esta región conservaron y aplicaron el conocimiento herbal documentado en los códices.',
      regla_oro_check:true },
    { numero:6, titulo:'El Pozol y la Alimentación Maya', subtitulo:'Chiapas',
      categoria:'vida-cotidiana', concepto_clave:'Dieta y gastronomía maya',
      materia:'Ciencias Naturales / Historia', estado_destino:'Chiapas', estado_slug:'chiapas',
      pista:'La cocinera del tiempo dice: "La bebida más antigua de Mesoamérica se hace moliendo maíz cocido con cacao y agua. Se toma fría o tibia y todavía hoy la venden en los mercados del sureste. La región donde más se conserva esa tradición es la frontera con Guatemala, en el estado más meridional de México."',
      libreta:`Bebida: Pozol — masa de maíz nixtamalizado + agua + cacao
Origen documentado: Códices mayas del periodo Clásico
Contenido nutricional: Carbohidratos complejos + teobromina (cacao)
Proceso: Nixtamalización (maíz hervido con cal — Ca(OH)₂)
Estado de mayor consumo actual: Frontera sur del país
Mercados tradicionales: San Cristóbal de las Casas y Tuxtla Gutiérrez`,
      opciones:['Chiapas','Yucatán','Tabasco','Campeche'],
      respuesta_correcta:'Chiapas',
      explicacion:'El pozol se conserva principalmente en Chiapas y Tabasco, pero los mercados de San Cristóbal de las Casas y Tuxtla Gutiérrez (capitales chiapanecas) son su epicentro actual. La frontera con Guatemala y el estado más al sur confirman Chiapas.',
      regla_oro_check:true },
    { numero:7, titulo:'El Arte de los Murales', subtitulo:'Campeche',
      categoria:'vida-cotidiana', concepto_clave:'Pintura mural maya y vida cotidiana',
      materia:'Arte', estado_destino:'Campeche', estado_slug:'campeche',
      pista:'El pintor del tiempo dice: "En una ciudad maya descubierta en el siglo XX, encontraron murales tan bien conservados que muestran exactamente cómo vivían las personas: mercados, guerras, procesiones y ceremonias. Esos frescos están en un sitio arqueológico de un estado peninsular que limita con Yucatán al norte y con Guatemala al sureste."',
      libreta:`Sitio: Calakmul — descubierto formalmente en año 1931
Murales famosos también en: Bonampak (Chiapas) — escenas bélicas
Calakmul UNESCO: Patrimonio Natural y Cultural desde año 2002
Ubicación: Sur del estado, dentro de la Reserva de la Biosfera
Superficie de la reserva: 723,185 ha — la más grande de México en selva tropical
Colindancias del estado: Yucatán al norte, Quintana Roo al este, Guatemala al sureste`,
      opciones:['Campeche','Yucatán','Chiapas','Tabasco'],
      respuesta_correcta:'Campeche',
      explicacion:'Calakmul está en la Reserva de la Biosfera de Campeche (723,185 ha). Sus murales y el Patrimonio UNESCO de 2002 confirman el estado. Bonampak (murales bélicos) está en Chiapas, pero la mayor reserva maya está en Campeche.',
      regla_oro_check:true },
    { numero:8, titulo:'El Sistema de Ciudades-Estado', subtitulo:'Campeche',
      categoria:'civismo-y-etica', concepto_clave:'Organización política maya sin emperador central',
      materia:'Formación Cívica', estado_destino:'Campeche', estado_slug:'campeche',
      pista:'La politóloga del tiempo dice: "Los mayas nunca tuvieron un solo rey para todo su territorio, como los romanos o los aztecas. Cada ciudad tenía su propio gobernante que competía con las demás. La rivalidad más famosa fue entre dos ciudades: una en el estado con la mayor reserva boscosa de México, y otra en Guatemala."',
      libreta:`Sistema político: Ciudades-Estado independientes (no imperio unificado)
Rivalidad principal: Calakmul (México) vs Tikal (Guatemala) — siglos V–IX d.C.
Calakmul: Ubicada en el estado mexicano con mayor cobertura forestal relativa
Territorio controlado por Calakmul: Aprox. 130 ciudades tributarias
Título del gobernante maya: K'uhul ajaw — "Señor Sagrado"
Producto de exportación de la zona: Cacao de alta calidad (región de Xibalbá)`,
      opciones:['Campeche','Yucatán','Chiapas','Tabasco'],
      respuesta_correcta:'Campeche',
      explicacion:'Calakmul, la gran rival de Tikal, está en Campeche, el estado con mayor cobertura forestal relativa en México. El sistema de ciudades-estado sin emperador central y el cacao de Xibalbá confirman la región.',
      regla_oro_check:true },
    { numero:9, titulo:'El Colapso Maya', subtitulo:'Yucatán',
      categoria:'civismo-y-etica', concepto_clave:'Causas del colapso de una civilización',
      materia:'Formación Cívica / Ciencias', estado_destino:'Yucatán', estado_slug:'yucatan',
      pista:'La ecóloga del tiempo dice: "Investigador, la gran civilización del sur colapsó en el siglo IX por varias causas combinadas: sequías prolongadas, guerras entre ciudades rivales, deforestación y agotamiento del suelo. Las ciudades del norte sobrevivieron más tiempo porque se adaptaron. La lección sobre el uso responsable de los recursos naturales sigue vigente hoy."',
      libreta:`Periodo del colapso: Siglo IX d.C. — abandono masivo de ciudades del sur
Causas identificadas: Sequías (registradas en espeleotemas de cuevas) + guerra + deforestación
Evidencia climática: Isótopos de oxígeno en estalagmitas de Belice
Ciudades sobrevivientes: Las del norte peninsular (menor dependencia de lluvia tropical)
Población perdida: De 2–3 millones a menos de 200,000 en áreas del sur
Área de supervivencia prolongada: Tierras bajas del norte — la zona semiárida de la península`,
      opciones:['Yucatán','Chiapas','Campeche','Tabasco'],
      respuesta_correcta:'Yucatán',
      explicacion:'Las ciudades mayas del norte (Yucatán) sobrevivieron al colapso del siglo IX porque la zona semiárida dependía de cenotes —no de lluvia tropical— para su agua. Las tierras bajas yucatecas fueron más resilientes que las selvas del sur.',
      regla_oro_check:true },
    { numero:10, titulo:'Mayas y el Mundo Medieval', subtitulo:'Cruce Global',
      categoria:'cruce-global', concepto_clave:'Astronomía maya vs astronomía medieval europea',
      materia:'Historia Universal', estado_destino:'Yucatán', estado_slug:'yucatan',
      pista:'El cronista global dice: "Mientras los mayas predecían eclipses con exactitud sin telescopio, en Europa los astrónomos medievales todavía creían que la Tierra era el centro del universo. Los mayas calcularon el año solar con un margen de error de solo 17 segundos. El área donde hicieron sus mejores observaciones es la peninsula del sureste de México."',
      libreta:`Año solar maya: 365.2420 días (error vs real: 17 segundos por año)
Año solar gregoriano actual: 365.2425 días
Contemporáneos (siglo IX–XIII d.C.):
• Europa: Alta Edad Media — Carlomagno (siglo IX), cruzadas (siglos XI–XIII)
• China: Dinastía Song — imprenta y pólvora (siglos X–XII)
• Islam: Edad de Oro — Al-Jwarizmi inventa el álgebra (siglo IX)
Ventaja maya: Sin telescopio, calcularon ciclos de Venus con error < 14 segundos/año`,
      opciones:['Yucatán','Chiapas','Campeche','Tabasco'],
      respuesta_correcta:'Yucatán',
      explicacion:'El Caracol de Chichén Itzá (Yucatán) es el observatorio maya más documentado. El cálculo del año solar con error de 17 segundos, contemporáneo de la Alta Edad Media europea, muestra la sofisticación astronómica maya sin instrumentos ópticos.',
      regla_oro_check:true },
  ],
};
export default mayas;
