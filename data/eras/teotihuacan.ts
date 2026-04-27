import type { Era } from '@/lib/types';
const teotihuacan: Era = {
  metadata: {
    slug:'teotihuacan', titulo:'Teotihuacán y Zapotecas', periodo:'100 a.C. – 700 d.C.',
    estados_principales:['Estado de México','Oaxaca'],
    icono:'🌞', color:'bg-yellow-800', colorText:'text-yellow-900', orden:3,
  },
  casos:[
    { numero:1, titulo:'La Pirámide del Sol', subtitulo:'Estado de México',
      categoria:'grandes-hitos', concepto_clave:'La metrópoli más grande del México antiguo',
      materia:'Historia', estado_destino:'Estado de México', estado_slug:'estado-de-mexico',
      pista:'El guía del valle dice: "La ciudad más grande de Mesoamérica durante siglos está a menos de 50 km de la CDMX. Puedes subir dos pirámides enormes: una dedicada al Sol y otra a la Luna. Desde arriba ves toda la Calzada de los Muertos. Ese valle está en el estado que rodea a la capital del país."',
      libreta:`Nombre: "Lugar donde los hombres se convierten en dioses" (nombre náhuatl posterior)
Distancia a CDMX: 48 km al noreste
Pirámide del Sol: 65 m de altura — tercera más grande del mundo
Calzada de los Muertos: 4 km orientados norte–sur
Población en apogeo: 100,000–200,000 habitantes (siglos IV–V d.C.)
Estado actual: El que rodea geográficamente a la Ciudad de México`,
      opciones:['Estado de México','Hidalgo','Tlaxcala','Puebla'],
      respuesta_correcta:'Estado de México',
      explicacion:'Teotihuacán está en el Estado de México, a 48 km de la CDMX. La Pirámide del Sol (65 m) y la Calzada de los Muertos son los hitos principales de la ciudad que albergó hasta 200,000 habitantes.',
      regla_oro_check:true },
    { numero:2, titulo:'Monte Albán: La Ciudad en el Cerro', subtitulo:'Oaxaca',
      categoria:'grandes-hitos', concepto_clave:'Capital zapoteca del sur de México',
      materia:'Historia', estado_destino:'Oaxaca', estado_slug:'oaxaca',
      pista:'El sacerdote zapoteco dice: "Los constructores del sur aplastaron la cima de un cerro y pusieron allí su ciudad sagrada. Desde arriba dominaban todo el valle. Sus templos estaban alineados con las estrellas. Ese estado hoy es famoso por el mezcal y el mole negro."',
      libreta:`Sitio: Monte Albán — capital zapoteca sobre cerro nivelado artificialmente
Altitud del sitio: 400 m sobre el nivel del valle circundante
Periodo de apogeo: Años 500 a.C.–700 d.C.
Templo astronómico: Los Danzantes — alineado con constelación de Orión
UNESCO: Patrimonio de la Humanidad desde año 1987
Estado: El más biodiverso del sur, famoso por sus destilados de agave`,
      opciones:['Oaxaca','Guerrero','Chiapas','Puebla'],
      respuesta_correcta:'Oaxaca',
      explicacion:'Monte Albán está en Oaxaca, declarada Patrimonio UNESCO en 1987. El cerro nivelado artificialmente, la alineación astronómica y la cercanía al mezcal y mole negro confirman el estado sureño.',
      regla_oro_check:true },
    { numero:3, titulo:'El Comercio de Obsidiana', subtitulo:'Hidalgo',
      categoria:'grandes-hitos', concepto_clave:'Redes comerciales del altiplano central',
      materia:'Historia', estado_destino:'Hidalgo', estado_slug:'hidalgo',
      pista:'El comerciante del altiplano dice: "Teotihuacán controlaba las minas del vidrio volcánico más valorado de Mesoamérica. Con ese material se hacían navajas, puntas de flecha y espejos. Las minas estaban en el estado vecino del norte, famoso hoy por los Atlantes toltecas y sus aguas termales."',
      libreta:`Material: Obsidiana (vidrio volcánico) — filo más agudo posible sin metal
Yacimientos principales: Pachuca y Tulancingo — en el estado norteño del altiplano
Distribución: Encontrada en 15 regiones mesoamericanas
Dominio teotihuacano: Monopolio comercial sobre la obsidiana verde (la más valiosa)
Estado actual de las minas: Al norte de la CDMX, famoso por los Atlantes de Tula
Temperatura de las aguas termales de Tequisquiapan: 37–40°C (recurso turístico del estado)`,
      opciones:['Hidalgo','Estado de México','Querétaro','Tlaxcala'],
      respuesta_correcta:'Hidalgo',
      explicacion:'Los yacimientos de obsidiana verde más importantes estaban en Pachuca y Tulancingo, Hidalgo. El monopolio teotihuacano sobre este "vidrio volcánico" fue la base de su poder comercial regional.',
      regla_oro_check:true },
    { numero:4, titulo:'El Código de Colores de Teotihuacán', subtitulo:'Estado de México',
      categoria:'ciencia-y-saberes', concepto_clave:'Pigmentos y química del arte antiguo',
      materia:'Ciencias / Arte', estado_destino:'Estado de México', estado_slug:'estado-de-mexico',
      pista:'El pintor del tiempo dice: "Los artistas de la ciudad sin nombre pintaban sus murales con colores que resistían el paso de los siglos. Un rojo intenso hecho de un mineral de mercurio era el favorito. Hoy ese pigmento se estudia en laboratorios de química. El sitio está en el estado que rodea a la capital."',
      libreta:`Pigmento rojo: Cinabrio (HgS — sulfuro de mercurio) — el rojo más vibrante de la antigüedad
Azul teotihuacano: Mezcla de índigo + arcilla palgorskita — resistente siglos
Fuentes de cinabrio: Minas en Querétaro y Guerrero, pero procesado en la ciudad del altiplano
Muros pintados: Palacio de Tepantitla, Atetelco, Tetitla — todos en el Estado de México
Temperatura de cocción de los pigmentos: 400–600°C (hornos documentados en excavaciones)
Análisis actual: Espectroscopía Raman — técnica para identificar composición química`,
      opciones:['Estado de México','Hidalgo','Querétaro','Morelos'],
      respuesta_correcta:'Estado de México',
      explicacion:'Los palacios pintados de Teotihuacán (Tepantitla, Atetelco, Tetitla) están en el Estado de México. El cinabrio rojo (HgS) y el azul con índigo + palgorskita son los pigmentos más documentados del sitio.',
      regla_oro_check:true },
    { numero:5, titulo:'La Escritura Zapoteca', subtitulo:'Oaxaca',
      categoria:'ciencia-y-saberes', concepto_clave:'Primer sistema de escritura de México',
      materia:'Español / Historia', estado_destino:'Oaxaca', estado_slug:'oaxaca',
      pista:'La lingüista del tiempo dice: "El primer pueblo en México que desarrolló un sistema de escritura con signos propios fueron los zapotecas del sur. Sus inscripciones en piedra son las más antiguas de Mesoamérica. El estado donde las descubrieron tiene el mercado de artesanías más diverso del país."',
      libreta:`Sistema: Escritura logosilábica zapoteca — circa año 500 a.C.
Soporte: Estelas de piedra y dinteles de edificios
Sitio más importante: Danzantes de Monte Albán — 300+ bajorrelieves con inscripciones
Antigüedad: Anterior a la escritura maya clásica y a la azteca
Desciframiento: Parcial — decenas de signos identificados pero no traducidos completamente
Estado de los descubrimientos: El que tiene la mayor diversidad artesanal del país`,
      opciones:['Oaxaca','Chiapas','Veracruz','Guerrero'],
      respuesta_correcta:'Oaxaca',
      explicacion:'La escritura zapoteca de Monte Albán (circa 500 a.C.) es la más antigua de Mesoamérica. Los Danzantes con más de 300 bajorrelieves inscritos están en Oaxaca, el estado de la mayor diversidad artesanal.',
      regla_oro_check:true },
    { numero:6, titulo:'La Comida de los Dioses', subtitulo:'Estado de México',
      categoria:'vida-cotidiana', concepto_clave:'Alimentación en la gran ciudad antigua',
      materia:'Ciencias / Historia', estado_destino:'Estado de México', estado_slug:'estado-de-mexico',
      pista:'La cocinera del altiplano dice: "En la ciudad más grande de su época, los mercados vendían productos de toda Mesoamérica. Los ciudadanos comían maíz, chile, aguacate y una bebida fermentada de maguey. El aguacate que hoy come todo el mundo viene de las mismas tierras donde está esa gran ciudad del altiplano."',
      libreta:`Aguacate: Persea americana — domesticado en el altiplano central circa 5000 a.C.
Cultivo actual en el estado: Texcoco y otros municipios del Valle de México
Pulque: Bebida fermentada de Agave salmiana — consumo ritual y cotidiano documentado
Mercados teotihuacanos: Intercambio de cacao, vainilla, jade, plumas y alimentos
Dieta documentada (análisis de isótopos): Maíz (70% de la dieta), conejos, venados, peces
Estado actual del aguacate: Michoacán es el mayor productor, pero su domesticación fue en el altiplano`,
      opciones:['Estado de México','Michoacán','Morelos','Hidalgo'],
      respuesta_correcta:'Estado de México',
      explicacion:'El aguacate fue domesticado en el altiplano central (zona del Estado de México). El pulque de maguey, el cacao de los mercados y la dieta de maíz al 70% son características documentadas en Teotihuacán.',
      regla_oro_check:true },
    { numero:7, titulo:'El Arte Funerario Zapoteca', subtitulo:'Oaxaca',
      categoria:'vida-cotidiana', concepto_clave:'Creencias y vida cotidiana zapoteca',
      materia:'Arte / Historia', estado_destino:'Oaxaca', estado_slug:'oaxaca',
      pista:'El ceramista del tiempo dice: "Los zapotecas del sur enterraban a sus muertos con urnas de cerámica en forma de sus dioses. Cada figura representa a una deidad diferente. Esas urnas funerarias son hoy los objetos arqueológicos más comunes en los museos del estado sureño del mole negro."',
      libreta:`Urnas zapotecas: Vasijas funerarias con figuras de dioses — cultura material más representativa
Deidad principal: Cocijo — dios de la lluvia y del rayo
Material: Barro gris local — técnica diferente al barro negro artesanal actual
Excavaciones: Monte Albán tiene más de 170 tumbas funerarias documentadas
Período de fabricación: Años 200 a.C.–700 d.C.
Museos con mayor colección: Museo de las Culturas de Oaxaca (ex convento de Santo Domingo)`,
      opciones:['Oaxaca','Chiapas','Guerrero','Veracruz'],
      respuesta_correcta:'Oaxaca',
      explicacion:'Las urnas funerarias zapotecas con Cocijo (dios de la lluvia) son el objeto arqueológico más representativo de Oaxaca. El Museo de las Culturas de Oaxaca en el ex convento de Santo Domingo es la principal colección.',
      regla_oro_check:true },
    { numero:8, titulo:'La Organización de Teotihuacán', subtitulo:'Estado de México',
      categoria:'civismo-y-etica', concepto_clave:'Modelo de ciudad sin rey conocido',
      materia:'Formación Cívica', estado_destino:'Estado de México', estado_slug:'estado-de-mexico',
      pista:'La gobernante misteriosa dice: "Investigador, hay algo extraño en esta gran ciudad: a diferencia de otras civilizaciones antiguas, no encontramos retratos de un solo gobernante en sus murales. Parece que el poder era compartido, quizá entre sacerdotes o linajes. El sitio está muy cerca de la capital actual del país."',
      libreta:`Enigma político: No se han identificado retratos individuales de gobernantes en los murales
Hipótesis: Gobierno de consejos sacerdotales o linajes múltiples (no monarquía típica)
Evidencia de jerarquía: Palacios diferenciados por tamaño y decoración
Comparativa: Otras civilizaciones antiguas (Egipto, China, Mesopotamia) sí tienen retratos reales
Distancia a CDMX: 48 km — se puede visitar en un día desde la capital
Nombre azteca de la ciudad: "Teotihuacán" — los aztecas llegaron siglos después a un sitio abandonado`,
      opciones:['Estado de México','Hidalgo','Tlaxcala','Morelos'],
      respuesta_correcta:'Estado de México',
      explicacion:'Teotihuacán (Estado de México) es única entre las grandes civilizaciones antiguas: no hay retratos identificados de un gobernante individual. La hipótesis del gobierno colegiado o sacerdotal es la más aceptada actualmente.',
      regla_oro_check:true },
    { numero:9, titulo:'El Sistema de Barrios de Teotihuacán', subtitulo:'Estado de México',
      categoria:'civismo-y-etica', concepto_clave:'Organización urbana y diversidad',
      materia:'Formación Cívica / Geografía', estado_destino:'Estado de México', estado_slug:'estado-de-mexico',
      pista:'La urbanista del tiempo dice: "La gran ciudad del altiplano tenía barrios especializados donde vivían artesanos del mismo oficio juntos. También tenía un barrio para extranjeros de otras culturas, con sus propios templos. Era una ciudad multicultural antes de que existiera esa palabra. El sitio está en el estado vecino al norte de la CDMX."',
      libreta:`Barrios identificados: +20 barrios residenciales de especialistas
Barrio de Oaxaca: Residentes zapotecas con cerámica y entierros zapotecas dentro de la ciudad
Barrio Merchant: Posibles mercaderes del Golfo — cerámica veracruzana identificada
Cuartos promedio por unidad habitacional: 30–100 cuartos compartidos por linajes
Densidad: 2,000–5,000 hab/km² — comparable a ciudades medievales europeas
Evidencia de diversidad: ADN antiguo revela múltiples orígenes genéticos de los habitantes`,
      opciones:['Estado de México','Hidalgo','Querétaro','Puebla'],
      respuesta_correcta:'Estado de México',
      explicacion:'Teotihuacán (Estado de México) tenía barrios de oaxaqueños, mercaderes del Golfo y artesanos especializados. El ADN antiguo confirma que era una ciudad multicultural con habitantes de múltiples orígenes genéticos.',
      regla_oro_check:true },
    { numero:10, titulo:'Teotihuacán y Roma', subtitulo:'Cruce Global',
      categoria:'cruce-global', concepto_clave:'Ciudades del mundo en el siglo IV d.C.',
      materia:'Historia Universal', estado_destino:'Estado de México', estado_slug:'estado-de-mexico',
      pista:'El historiador global dice: "En el siglo IV después de Cristo, mientras Roma dominaba el mundo mediterráneo, en el altiplano de México existía una ciudad de tamaño comparable. Sin contacto entre sí, ambas civilizaciones resolvieron el problema de cómo organizar a cientos de miles de personas en un mismo espacio. El sitio mexicano está muy cerca de la capital actual del país."',
      libreta:`Teotihuacán en siglo IV d.C.: 100,000–200,000 habitantes (estimaciones actuales)
Roma en siglo IV d.C.: Aprox. 500,000–800,000 habitantes (ciudad más grande del mundo)
Contemporáneos: Diocleciano (Roma, año 284 d.C.) y apogeo teotihuacano (año 350 d.C.)
Similitudes funcionales: Ambas con acueductos/canales, barrios especializados, mercados centrales
Sin contacto: Las dos civilizaciones nunca se comunicaron — desarrollo paralelo e independiente
Diferencia clave: Roma tenía escritura fonética y retratos de emperadores; Teotihuacán, ninguno`,
      opciones:['Estado de México','Puebla','Hidalgo','Morelos'],
      respuesta_correcta:'Estado de México',
      explicacion:'Teotihuacán (Estado de México) y Roma fueron contemporáneas en el siglo IV d.C. Roma era mayor (500,000+ vs 100,000-200,000), pero ambas eran megalópolis para su época. La diferencia más intrigante: Roma tenía emperadores retratados; Teotihuacán, ningún gobernante identificado.',
      regla_oro_check:true },
  ],
};
export default teotihuacan;
