import type { Era } from '@/lib/types';
const toltecas: Era = {
  metadata: {
    slug:'toltecas', titulo:'Toltecas', periodo:'900 – 1200 d.C.',
    estados_principales:['Hidalgo','Querétaro','Estado de México'],
    icono:'🗿', color:'bg-stone-700', colorText:'text-stone-900', orden:4,
  },
  casos:[
    { numero:1, titulo:'Tula, la Ciudad Sagrada', subtitulo:'Hidalgo',
      categoria:'grandes-hitos', concepto_clave:'Capital tolteca en el Altiplano',
      materia:'Historia', estado_destino:'Hidalgo', estado_slug:'hidalgo',
      pista:'El cronista azteca dice: "Mucho antes de que nuestra ciudad existiera, hubo una metrópoli que los sabios llaman Tollan. Fue tan poderosa que su nombre se convirtió en sinónimo de ciudad grande entre todos los pueblos del centro. Sus ruinas están al norte de la capital virreinal, en el estado cuya capital lleva el nombre de un hidalgo."',
      libreta:`Ciudad: Tula de Allende (Tollan-Xicocotitlan)
Período de apogeo: años 900–1150 d.C.
Población estimada: 30,000–60,000 habitantes
Superficie urbana: aproximadamente 14 km²
Ubicación: Altiplano central, a 65 km al norte de la CDMX
Estado actual: limítrofe con Estado de México, Querétaro y San Luis Potosí`,
      opciones:['Hidalgo','Querétaro','Estado de México','San Luis Potosí'],
      respuesta_correcta:'Hidalgo',
      explicacion:'Tula de Allende está en el actual estado de Hidalgo, a 65 km al norte de la CDMX. Los aztecas la llamaron Tollan y la tomaron como modelo de grandeza. La capital estatal lleva el nombre de Miguel Hidalgo.',
      regla_oro_check:true },
    { numero:2, titulo:'Quetzalcóatl el Tolteca', subtitulo:'Hidalgo',
      categoria:'grandes-hitos', concepto_clave:'La serpiente emplumada y el gobernante mítico',
      materia:'Historia', estado_destino:'Hidalgo', estado_slug:'hidalgo',
      pista:'El sacerdote tolteca dice: "Nuestro rey más famoso era tan sabio que fue confundido con un dios. Cuando lo expulsaron de la ciudad sagrada, prometió regresar por el oriente. Los pueblos que vinieron después, incluyendo los mexicas, adoptaron ese mito y ese símbolo como propio. El hombre y el dios tenían el mismo nombre: la serpiente del viento."',
      libreta:`Gobernante histórico: Ce Ácatl Topiltzin Quetzalcóatl — rey-sacerdote de Tula
Período de gobierno: circa años 947–999 d.C.
Deidad asociada: Quetzalcóatl — dios del viento y del conocimiento (Ehecatl)
Exilio: Hacia el oriente (Tlapallan) — posiblemente Yucatán
Paralelismo: Los mayas de Yucatán tienen a Kukulkán — mismo símbolo de serpiente emplumada
Ciudad de residencia: Tollan (estado actual donde nació el héroe de la Independencia)`,
      opciones:['Hidalgo','Morelos','Puebla','Querétaro'],
      respuesta_correcta:'Hidalgo',
      explicacion:'Ce Ácatl Topiltzin Quetzalcóatl gobernó en Tula, Hidalgo. Su mito del exilio y regreso por el oriente fue crucial en la conquista, cuando Moctezuma dudó si Cortés era ese retorno. Kukulkán en Yucatán es el equivalente maya del mismo símbolo.',
      regla_oro_check:true },
    { numero:3, titulo:'La Caída de Tula', subtitulo:'Hidalgo',
      categoria:'grandes-hitos', concepto_clave:'El colapso del poder tolteca',
      materia:'Historia', estado_destino:'Hidalgo', estado_slug:'hidalgo',
      pista:'El arqueólogo del tiempo dice: "Hacia el año 1150, la gran metrópoli del altiplano fue destruida y sus monumentos fueron deliberadamente dañados. Algunas cabezas de las esculturas gigantes fueron enterradas. Los invasores del norte, llamados chichimecas, fueron los principales responsables. La ciudad nunca volvió a ser habitada de manera permanente por un poder central."',
      libreta:`Fecha del colapso: circa año 1150–1168 d.C.
Causas documentadas: Sequías prolongadas + presión de grupos chichimecas del norte
Evidencia arqueológica: Esculturas decapitadas, quema deliberada de edificios
Atlantes enterrados: Cuatro figuras guerreras de 4.6 m halladas en pozo intencional
Dispersión tolteca: Migrantes toltecas llegaron a Cholula (Puebla), Chichén Itzá (Yucatán) y la cuenca de México
Excavaciones modernas: Jorge R. Acosta (INAH) — décadas 1940–1960`,
      opciones:['Hidalgo','Estado de México','Tlaxcala','San Luis Potosí'],
      respuesta_correcta:'Hidalgo',
      explicacion:'La ciudad de Tula (Hidalgo) fue destruida ca. 1150 d.C. Los Atlantes fueron enterrados deliberadamente. Los toltecas dispersos llegaron a Cholula, Chichén Itzá y la cuenca de México, difundiendo su cultura.',
      regla_oro_check:true },
    { numero:4, titulo:'Los Atlantes de Tula', subtitulo:'Hidalgo',
      categoria:'ciencia-y-saberes', concepto_clave:'Ingeniería escultórica y arquitectura guerrera',
      materia:'Ciencias / Arte', estado_destino:'Hidalgo', estado_slug:'hidalgo',
      pista:'El escultor del tiempo dice: "Los artesanos de la ciudad sagrada construyeron guardianes de piedra más altos que dos hombres parados. No eran dioses: eran guerreros del cosmos con sus armas en la mano. Cuatro de ellos todavía sostienen el techo de una pirámide en las ruinas del estado más al norte del Altiplano central."',
      libreta:`Nombre técnico: Atlantes de Tula — columnas-escultura antropomorfas
Altura por figura: 4.6 metros (entre los más altos de Mesoamérica)
Material: Basalto — roca ígnea volcánica de alta dureza
Función estructural: Columnas de soporte del techo del Templo de Tlahuizcalpantecuhtli
Equipamiento esculpido: Atlatl (lanzadardos), espejo de pirita, pectoral de mariposa
Número de figuras en sitio: 4 originales + fragmentos de una quinta`,
      opciones:['Hidalgo','Estado de México','Puebla','Morelos'],
      respuesta_correcta:'Hidalgo',
      explicacion:'Los Atlantes de Tula miden 4.6 m en basalto volcánico. Actúan como columnas estructurales en la Pirámide B de Tula, Hidalgo. Su detalle —atlatl, espejo de pirita, pectoral— es la clave para distinguirlos de otras figuras mesoamericanas.',
      regla_oro_check:true },
    { numero:5, titulo:'La Ruta de la Turquesa', subtitulo:'Querétaro',
      categoria:'ciencia-y-saberes', concepto_clave:'Comercio de larga distancia y metalurgia',
      materia:'Ciencias / Geografía', estado_destino:'Querétaro', estado_slug:'queretaro',
      pista:'El comerciante del tiempo dice: "Los grandes mercaderes de la ciudad del altiplano tenían rutas que llegaban hasta el desierto del norte, más allá de los territorios controlados. Traían piedras de un azul intenso que los gobernantes usaban como símbolo de poder. Una de las rutas pasaba por un estado del centro-norte que hoy es famoso por sus ciudades coloniales y sus industrias tecnológicas."',
      libreta:`Mineral comerciado: Turquesa (CuAl₆(PO₄)₄(OH)₈·4H₂O) — color azul-verde
Origen principal de la turquesa: Suroeste de EUA (Nuevo México, Arizona, Nevada)
Ruta norte: Pasos por el semidesierto —atravesando el Bajío y la Sierra Gorda
Estado intermedio: Zona arqueológica de Ranas y Toluquilla — sierra del estado sin costas
Uso ritual: Mosaicos de turquesa en máscaras y escudos de élite
Hallazgos en Tula: Fragmentos de mosaico de turquesa en ofrenda central`,
      opciones:['Querétaro','Guanajuato','San Luis Potosí','Aguascalientes'],
      respuesta_correcta:'Querétaro',
      explicacion:'La ruta de la turquesa pasaba por la Sierra Gorda de Querétaro, donde están las zonas arqueológicas de Ranas y Toluquilla. La turquesa llegaba desde el suroeste de EUA hasta Tula a través del Bajío. Querétaro es hoy estado tecnológico sin costas.',
      regla_oro_check:true },
    { numero:6, titulo:'El Pulque Sagrado', subtitulo:'Hidalgo',
      categoria:'vida-cotidiana', concepto_clave:'Fermentación ritual y cotidiana',
      materia:'Historia / Ciencias', estado_destino:'Hidalgo', estado_slug:'hidalgo',
      pista:'La sacerdotisa del maguey dice: "En la cultura de la ciudad sagrada, la bebida de los dioses era producida de una planta que crece en el altiplano seco. No podía consumirse a diario por cualquier persona: estaba reservada para rituales, ancianos y sacrificios. El estado donde aún se produce esa bebida en mayor cantidad tiene una larga llanura de magueyes entre sus valles."',
      libreta:`Bebida: Pulque — aguamiel fermentada del maguey (Agave salmiana o A. mapisaga)
Proceso: Raspado del corazón del maguey → recolección de aguamiel → fermentación 24–48 h
Graduación alcohólica: 4–8% — similar a la cerveza
Dios patrono tolteca y azteca: Ometochtli (también llamado Tepoztécatl)
Producción actual: Hidalgo produce el 70% del pulque de México
Centro histórico del pulque: Llanos de Apan — municipios de Apan, Tlanalapa, Almoloya`,
      opciones:['Hidalgo','Estado de México','Tlaxcala','Puebla'],
      respuesta_correcta:'Hidalgo',
      explicacion:'Los Llanos de Apan en Hidalgo producen el 70% del pulque nacional. El maguey Agave salmiana domina ese paisaje. El proceso de fermentación en 24-48 horas es la misma biotecnología que usaban los toltecas en sus rituales.',
      regla_oro_check:true },
    { numero:7, titulo:'Plumas y Textiles Toltecas', subtitulo:'Hidalgo',
      categoria:'vida-cotidiana', concepto_clave:'Artesanía y vestimenta de élite',
      materia:'Arte / Historia', estado_destino:'Hidalgo', estado_slug:'hidalgo',
      pista:'La artesana del tiempo dice: "Los maestros artesanos de la ciudad sagrada eran tan famosos que su nombre se convirtió en sinónimo de artista entre los mexicas. Hacían mantos de plumas que brillaban como espejos y telas con patrones que narraban los cielos. Después de la caída de su ciudad, sus técnicas migraron con ellos hacia el sur y el oriente."',
      libreta:`Término náhuatl: Toltécatl — artesano maestro (de "tolteca" = habitante de Tula)
Plumas utilizadas: Quetzal (Pharomachrus mocinno), cotinga azul, guacamaya
Técnica plumaria: Amantecáyotl — tejido de plumas sobre malla de fibra de maguey
Textiles: Algodón + fibras de maguey — técnica de tapicería con bastidor vertical
Dispersión post-colapso: Artesanos toltecas documentados en Cholula, Texcoco y Tlatelolco
Manto clave: Quechquémitl — prenda femenina de élite, símbolo de rango social`,
      opciones:['Hidalgo','Puebla','Oaxaca','Estado de México'],
      respuesta_correcta:'Hidalgo',
      explicacion:'El término "toltécatl" en náhuatl significa "artesano maestro" por la fama de los artistas de Tula, Hidalgo. La técnica plumaria amantecáyotl y los textiles con algodón se difundieron desde Tula hacia toda Mesoamérica tras la caída de la ciudad.',
      regla_oro_check:true },
    { numero:8, titulo:'El Sacerdocio Guerrero', subtitulo:'Hidalgo',
      categoria:'civismo-y-etica', concepto_clave:'Organización del poder político-religioso',
      materia:'Formación Cívica / Historia', estado_destino:'Hidalgo', estado_slug:'hidalgo',
      pista:'El historiador del poder dice: "En la sociedad de la ciudad sagrada, el poder no era solo del rey: la clase sacerdotal y la clase guerrera compartían el control del estado. Esta dualidad —espada y altar— fue heredada por los pueblos que vinieron después, incluyendo los mexicas. Los templos y las pirámides del estado norteño reflejan esa doble naturaleza del poder tolteca."',
      libreta:`Sistema político: Diarquía sacerdotal-guerrera — poder compartido entre dos órdenes
Órdenes militares: Caballeros Águila y Caballeros Jaguar (documentados también en aztecas)
Fuente: Crónicas aztecas y análisis iconográfico de relieves en Tula
Templo principal: Pirámide B (Tlahuizcalpantecuhtli) — Venus como dios guerrero
Relieves de Tula: Procesiones de guerreros + coyotes + águilas devorando corazones
Heredero histórico: El sistema tolteca fue adoptado casi íntegro por Tenochtitlán`,
      opciones:['Hidalgo','Estado de México','Tlaxcala','Guerrero'],
      respuesta_correcta:'Hidalgo',
      explicacion:'Tula (Hidalgo) instauró el modelo de diarquía sacerdotal-guerrera que los aztecas adoptaron. Los relieves en la Pirámide B muestran las órdenes militares (Águila y Jaguar) que luego dominaron en Tenochtitlán. El sistema político tolteca fue la plantilla del poder mexica.',
      regla_oro_check:true },
    { numero:9, titulo:'Los Chichimecas del Norte', subtitulo:'Querétaro',
      categoria:'civismo-y-etica', concepto_clave:'Fronteras culturales y pueblos nómadas',
      materia:'Historia / Geografía', estado_destino:'Querétaro', estado_slug:'queretaro',
      pista:'El guerrero nómada dice: "Los sedentarios del sur llamaban "chichimecas" a todos los que no teníamos ciudades ni templos. Éramos cazadores y guerreros del desierto y la sierra. Nuestra frontera con los agricultores del sur pasaba justamente por el estado que hoy separa el norte seco del centro templado, el estado sin costas que tiene forma de montaña en el mapa."',
      libreta:`Término: Chichimeca — voz náhuatl, posiblemente "linaje del perro" o "los que succionan sangre"
Gran Chichimeca: Zona de resistencia indígena al norte del Altiplano central (siglos XVI–XVII)
Etnias principales: Guachichiles, Pames, Jonaces, Zacatecos
Frontera cultural: La llamada "Mesoamérica" terminaba aproximadamente en el Bajío
Estado límite: Sierra Gorda — escenario de guerras chichimecas hasta el siglo XVII
Capital estatal actual: Patrimonio de la Humanidad UNESCO desde año 1996`,
      opciones:['Querétaro','Guanajuato','San Luis Potosí','Zacatecas'],
      respuesta_correcta:'Querétaro',
      explicacion:'La Sierra Gorda de Querétaro fue la frontera entre Mesoamérica y la Gran Chichimeca. Los grupos nómadas de esa región (Pames, Jonaces) resistieron la colonización hasta el siglo XVII. El centro histórico de Querétaro es Patrimonio UNESCO desde 1996.',
      regla_oro_check:true },
    { numero:10, titulo:'Toltecas y el Mundo Medieval', subtitulo:'Cruce Global',
      categoria:'cruce-global', concepto_clave:'Mesoamérica y Europa en el siglo X',
      materia:'Historia Universal', estado_destino:'Hidalgo', estado_slug:'hidalgo',
      pista:'El historiador global dice: "Mientras en Tula se levantaban los guerreros de piedra más altos de América, en Europa se construían las primeras catedrales góticas y el califato de Córdoba era el centro del saber mundial. La misma época que vio a los vikingos llegar a América del Norte vio a los toltecas dominar el altiplano mexicano. El año 1000 d.C. fue global."',
      libreta:`Contemporáneos del apogeo tolteca (años 900–1150):
• Europa: Inicio del románico — catedral de Santiago de Compostela (año 1075)
• Al-Ándalus: Califato de Córdoba — biblioteca de 400,000 volúmenes (siglo X)
• China: Dinastía Song — imprenta de tipos móviles (año 1040)
• América del Norte: Vikingos en Vinland (circa año 1000)
• Mesoamérica: Tula controla el Altiplano central y la ruta de la turquesa
Paralelo técnico: Catedrales con columnas-figura (cariátides) vs. Atlantes de Tula como columnas`,
      opciones:['Hidalgo','Estado de México','Querétaro','Puebla'],
      respuesta_correcta:'Hidalgo',
      explicacion:'Tula (Hidalgo) alcanzó su cúspide en el mismo siglo X-XI en que Europa construía sus primeras catedrales románicas. El uso de figuras humanas como columnas estructurales (Atlantes en Tula; cariátides en Grecia/Europa) es un paralelo técnico notable a través de culturas sin contacto.',
      regla_oro_check:true },
  ],
};
export default toltecas;
