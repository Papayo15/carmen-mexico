import type { Era } from '@/lib/types';
const colonia: Era = {
  metadata: {
    slug:'colonia', titulo:'Nueva España (Colonia)', periodo:'1521 – 1810 d.C.',
    estados_principales:['Puebla','Ciudad de México','Guanajuato'],
    icono:'⛪', color:'bg-yellow-800', colorText:'text-yellow-900', orden:7,
  },
  casos:[
    { numero:1, titulo:'La Fundación de Puebla', subtitulo:'Puebla',
      categoria:'grandes-hitos', concepto_clave:'Ciudad planeada del virreinato',
      materia:'Historia', estado_destino:'Puebla', estado_slug:'puebla',
      pista:'El fraile fundador dice: "Esta ciudad no creció sobre las ruinas de ninguna ciudad indígena: la diseñamos desde cero en un valle fértil entre dos volcanes nevados. La planeamos como la ciudad ideal del Renacimiento: calles en cuadrícula, zócalo central, catedral al frente. Fue la segunda ciudad más importante del virreinato durante siglos."',
      libreta:`Fundación: 16 de abril de año 1531
Nombre original: Puebla de los Ángeles
Diseñador: Fray Toribio de Benavente (Motolinía) + obispo Julián Garcés
Plano: Damero (cuadrícula reticular) — modelo renacentista de ciudad ideal
Volcanes vecinos: Popocatépetl (5,452 m) + Iztaccíhuatl (5,286 m) al poniente
Centro histórico: Patrimonio de la Humanidad UNESCO desde año 1987`,
      opciones:['Puebla','Tlaxcala','Morelos','Hidalgo'],
      respuesta_correcta:'Puebla',
      explicacion:'Puebla fue fundada el 16 de abril de 1531 siguiendo el modelo renacentista de ciudad cuadriculada. No se asentó sobre ninguna ciudad indígena preexistente. Flanqueada por el Popocatépetl y el Iztaccíhuatl, fue la segunda ciudad más importante del virreinato. Su centro histórico es Patrimonio UNESCO desde 1987.',
      regla_oro_check:true },
    { numero:2, titulo:'El Tribunal de la Inquisición', subtitulo:'Ciudad de México',
      categoria:'grandes-hitos', concepto_clave:'Control religioso e ideológico colonial',
      materia:'Historia / Formación Cívica', estado_destino:'Ciudad de México', estado_slug:'cdmx',
      pista:'El inquisidor del tiempo dice: "En el corazón de la capital virreinal operaba el tribunal más temido de la colonia. No juzgaba crímenes comunes: perseguía a quienes pensaban diferente, practicaban religiones prohibidas o cuestionaban los dogmas de la iglesia. Sus autos de fe se realizaban en la plaza pública mayor de la capital."',
      libreta:`Tribunal: Santo Oficio de la Inquisición — establecido en Nueva España en año 1571
Sede: Palacio de la Inquisición — hoy Museo de la Medicina (República de Brasil 33, CDMX)
Primer auto de fe en México: año 1574
Víctimas principales: Judaizantes, protestantes, blasfemos, hechiceros
Indígenas: Excluidos de la jurisdicción inquisitorial (tenían tribunal propio)
Abolición: año 1813 (Cortes de Cádiz) — y definitivamente en año 1820`,
      opciones:['Ciudad de México','Puebla','Veracruz','Oaxaca'],
      respuesta_correcta:'Ciudad de México',
      explicacion:'El Santo Oficio de la Inquisición se estableció en la Ciudad de México en 1571. Su sede fue el Palacio de la Inquisición (hoy Museo de la Medicina). Los autos de fe se realizaban en el Zócalo. Los indígenas estaban excluidos de su jurisdicción. Fue abolido por las Cortes de Cádiz en 1813.',
      regla_oro_check:true },
    { numero:3, titulo:'Las Minas de Guanajuato', subtitulo:'Guanajuato',
      categoria:'grandes-hitos', concepto_clave:'La riqueza minera que sostuvo el Imperio español',
      materia:'Historia / Geografía', estado_destino:'Guanajuato', estado_slug:'guanajuato',
      pista:'El minero del tiempo dice: "Las venas de plata de este estado alimentaron al Imperio español durante tres siglos. En su momento de máxima producción, el estado de los callejones coloridos producía más plata que cualquier otro lugar del mundo. Los lingotes salían hacia el puerto del Golfo y de ahí a España, a Asia y al mundo entero."',
      libreta:`Mina más importante: La Valenciana — fundada en año 1558, auge en siglo XVIII
Producción en su mejor momento: 25% de toda la plata mundial (siglo XVIII)
Mineral extraído: Plata nativa + amalgama Ag-Hg (proceso de patio — inventado en México en año 1554)
Ciudad: Guanajuato — declarada Patrimonio UNESCO en año 1988
Proceso de beneficio: Amalgamación con mercurio (Hg) para separar la plata del mineral
El Pípila (héroe independentista): Minero de este estado — confirmando su identidad minera`,
      opciones:['Guanajuato','Zacatecas','San Luis Potosí','Hidalgo'],
      respuesta_correcta:'Guanajuato',
      explicacion:'La mina La Valenciana en Guanajuato produjo el 25% de la plata mundial en el siglo XVIII. El proceso de amalgamación con mercurio (inventado en México en 1554) fue la revolución tecnológica que hizo viable esa escala. La ciudad de Guanajuato es Patrimonio UNESCO desde 1988.',
      regla_oro_check:true },
    { numero:4, titulo:'Sor Juana: Ciencia y Poesía', subtitulo:'Ciudad de México',
      categoria:'ciencia-y-saberes', concepto_clave:'La primera científica y poeta del continente',
      materia:'Español / Ciencias', estado_destino:'Ciudad de México', estado_slug:'cdmx',
      pista:'La monja estudiosa dice: "Me encerraron en un convento porque era mujer y el siglo XVII no tenía otro lugar para las mujeres que querían estudiar. Desde mi celda escribí poesía, filosofía y reflexiones sobre la naturaleza. Defendí el derecho de las mujeres a la educación en una carta que me costó la biblioteca. Mi convento estaba en la capital virreinal."',
      libreta:`Nombre: Sor Juana Inés de la Cruz (1648/1651–1695)
Convento: San Jerónimo — hoy Universidad del Claustro de Sor Juana (CDMX)
Obra científica: Primero Sueño (1692) — poema filosófico sobre el conocimiento y la cosmología
Defensa del saber femenino: Respuesta a Sor Filotea de la Cruz (año 1691)
Biblioteca: Se calcula que poseía más de 4,000 volúmenes — confiscada por el obispo Aguiar
Reconocimiento: Aparece en el billete de $200 pesos mexicanos`,
      opciones:['Ciudad de México','Puebla','Veracruz','Oaxaca'],
      respuesta_correcta:'Ciudad de México',
      explicacion:'Sor Juana vivió en el convento de San Jerónimo en la Ciudad de México, hoy Universidad del Claustro de Sor Juana. Su "Primero Sueño" (1692) es un poema filosófico sobre el conocimiento científico del cosmos. Su "Respuesta a Sor Filotea" (1691) es el primer manifiesto feminista del continente.',
      regla_oro_check:true },
    { numero:5, titulo:'El Galeón de Manila', subtitulo:'Veracruz',
      categoria:'ciencia-y-saberes', concepto_clave:'La ruta comercial transpacífica',
      materia:'Historia / Geografía', estado_destino:'Veracruz', estado_slug:'veracruz',
      pista:'El comerciante del tiempo dice: "La Nueva España era el único punto del mundo donde los productos de Asia y los de Europa se encontraban. Las naves cargadas con seda, porcelana y especias cruzaban el Pacífico hasta el puerto del Pacífico mexicano y de ahí, por tierra, al puerto del Atlántico. Ese segundo puerto era el único autorizado para exportar metales preciosos."',
      libreta:`Ruta: Manila (Filipinas) → Acapulco (Guerrero) → Ciudad de México → Veracruz → Sevilla/Cádiz
Operación: años 1565–1815 — 250 años ininterrumpidos
Productos de Asia: Seda china, porcelana Ming, especias, marfil, tejidos de algodón
Productos de México: Plata en lingotes + cochinilla (colorante rojo) + cacao
Puerto Atlántico autorizado: Veracruz — monopolio imperial de exportación
Descubridor de la ruta de vuelta: Andrés de Urdaneta — año 1565 (corriente del Pacífico norte)`,
      opciones:['Veracruz','Tabasco','Tamaulipas','Campeche'],
      respuesta_correcta:'Veracruz',
      explicacion:'Veracruz fue el único puerto autorizado para exportar la plata que venía desde las minas del interior. La ruta Manila-Acapulco-México-Veracruz funcionó 250 años (1565-1815). La plata mexicana llegó a financiar el comercio de Asia y Europa simultáneamente, haciendo a la Nueva España el nodo global del siglo XVII.',
      regla_oro_check:true },
    { numero:6, titulo:'El Cacao: Bebida de Dioses a Bebida Global', subtitulo:'Veracruz',
      categoria:'vida-cotidiana', concepto_clave:'El cacao como moneda y alimento colonial',
      materia:'Ciencias / Historia', estado_destino:'Veracruz', estado_slug:'veracruz',
      pista:'La cocinera mestiza dice: "Los conquistadores aprendieron a beber la bebida amarga de los dioses y la adaptaron con azúcar de caña para sus paladares. Desde las costas cálidas y húmedas del Golfo partían los cargamentos de semillas oscuras que cambiarían la gastronomía del mundo entero. El mismo estado que fue puerta de entrada y salida del virreinato fue también el principal productor de esas semillas."',
      libreta:`Planta: Theobroma cacao — "alimento de los dioses" (Linneo, año 1753)
Condiciones de cultivo: Clima tropical húmedo — temperatura 20–30°C, alta humedad
Producción colonial: Tabasco y Veracruz — principales regiones productoras de Nueva España
Uso prehispánico: Moneda de trueque + bebida ritual (xocolatl — amarga y especiada)
Transformación colonial: Añadido azúcar de caña → chocolate dulce (innovación mestiza)
Introducción a Europa: España (año 1528) → Italia → Francia → resto del continente`,
      opciones:['Veracruz','Tabasco','Chiapas','Oaxaca'],
      respuesta_correcta:'Veracruz',
      explicacion:'Veracruz y Tabasco fueron los principales productores de cacao colonial. La combinación cacao + azúcar de caña es una innovación mestiza nacida en la Nueva España. El chocolate llegó a Europa en 1528 y cambió la gastronomía global para siempre. Theobroma cacao — "alimento de los dioses" — fue nombrado así por Linneo en 1753.',
      regla_oro_check:true },
    { numero:7, titulo:'El Barroco Novohispano', subtitulo:'Puebla',
      categoria:'vida-cotidiana', concepto_clave:'Arte y arquitectura colonial mestiza',
      materia:'Arte / Historia', estado_destino:'Puebla', estado_slug:'puebla',
      pista:'El arquitecto del tiempo dice: "En ningún lugar del mundo el estilo más ornamentado de Europa se fusionó tan completamente con las manos indígenas como en el estado de los dos volcanes. Sus iglesias están cubiertas de talavera de colores y sus altares son bosques de ángeles y santos. El estilo ultradecorado que los artesanos desarrollaron ahí no se llama barroco normal: tiene su propio nombre."',
      libreta:`Estilo: Barroco churrigueresco (ultrobarroco) — variante extrema de ornamentación
Origen del nombre: José de Churriguera — arquitecto español (años 1665–1725)
Variante local: "Barroco poblano" — con azulejos Talavera + trabajo en estuco blanco
Talavera de la Reina: Cerámica vidriada importada de España, producida localmente desde siglo XVII
Ejemplo clave: Capilla del Rosario (1690) — Santo Domingo, Puebla — "la octava maravilla del mundo"
Artesanos: Maestros indígenas y mestizos — mano de obra que interpretó los diseños europeos`,
      opciones:['Puebla','Oaxaca','Guanajuato','Veracruz'],
      respuesta_correcta:'Puebla',
      explicacion:'Puebla desarrolló el "Barroco poblano", una variante del churrigueresco que combina azulejos Talavera con estuco blanco y ornamentación extrema. La Capilla del Rosario (1690) en Santo Domingo fue llamada "la octava maravilla del mundo". Los artesanos indígenas y mestizos interpretaron el vocabulario europeo con técnicas propias.',
      regla_oro_check:true },
    { numero:8, titulo:'El Sistema de Castas Novohispano', subtitulo:'Puebla',
      categoria:'civismo-y-etica', concepto_clave:'La clasificación racial y sus consecuencias',
      materia:'Formación Cívica / Historia', estado_destino:'Puebla', estado_slug:'puebla',
      pista:'La pintora de castas dice: "Los virreyes encargaron series de pinturas para documentar cómo se mezclaban las razas. Cada combinación tenía un nombre y cada nombre determinaba qué derechos tenías, qué impuestos pagabas y a qué trabajos podías aspirar. El estado donde más se pintaron estas series fue también el más cosmopolita del virreinato después de la capital."',
      libreta:`Sistema: 16 categorías raciales documentadas en "Pinturas de castas" (siglo XVIII)
Categorías principales: Español + India = Mestizo; Español + Negra = Mulato; Mestizo + India = Castizo
Pinturas de castas: Género pictórico único de Nueva España — colecciones en Puebla y CDMX
Efectos legales: Impuestos diferenciados según casta; acceso restringido a gremios y universidades
Producción en Puebla: Juan Rodríguez Juárez y otros pintores activos en la ciudad angelopolitana
Abolición del sistema: Decreto de Hidalgo — octubre de año 1810 (inicio de la Independencia)`,
      opciones:['Puebla','Ciudad de México','Oaxaca','Guanajuato'],
      respuesta_correcta:'Puebla',
      explicacion:'Las "Pinturas de castas" —género pictórico único en el mundo— documentaban las 16 categorías raciales de la Nueva España. Puebla fue un centro importante de producción de estas series. El sistema determinaba impuestos, acceso a gremios y posibilidades de ascenso social. Hidalgo lo abolió en 1810 como primer acto de justicia social.',
      regla_oro_check:true },
    { numero:9, titulo:'La Iglesia y el Diezmo', subtitulo:'Oaxaca',
      categoria:'civismo-y-etica', concepto_clave:'El poder económico de la Iglesia colonial',
      materia:'Formación Cívica / Historia', estado_destino:'Oaxaca', estado_slug:'oaxaca',
      pista:'El obispo del tiempo dice: "Durante tres siglos, las comunidades de indígenas y mestizos entregaron una décima parte de su cosecha o su ingreso a la institución que yo represento. Con ese dinero construimos hospitales, escuelas y los templos más hermosos del continente. El estado del sur, famoso por su diversidad cultural, tenía una de las diócesis más ricas del virreinato."',
      libreta:`Diezmo: 10% del ingreso bruto entregado obligatoriamente a la Iglesia
Propósito declarado: Financiar culto, evangelización, hospitales, colegios
Diócesis de Oaxaca: Fundada en año 1535 — una de las primeras del continente
Catedral de Oaxaca: Construcción iniciada en año 1535 — terminada en siglo XVII
Bienes de la Iglesia: Se estima que al inicio del siglo XIX poseía el 50% de las propiedades urbanas de México
Leyes de Reforma (1855–1861): Nacionalizaron los bienes eclesiásticos — detonante de la guerra civil`,
      opciones:['Oaxaca','Puebla','Chiapas','Veracruz'],
      respuesta_correcta:'Oaxaca',
      explicacion:'La diócesis de Oaxaca, fundada en 1535, fue una de las más ricas del virreinato. La Iglesia colonial acumuló hasta el 50% de la propiedad urbana de México. El diezmo obligatorio (10% del ingreso) fue el mecanismo de acumulación. Las Leyes de Reforma de 1855-1861 nacionalizaron esos bienes, detonando la guerra civil.',
      regla_oro_check:true },
    { numero:10, titulo:'Nueva España y el Mundo Moderno', subtitulo:'Cruce Global',
      categoria:'cruce-global', concepto_clave:'La Nueva España en el sistema-mundo colonial',
      materia:'Historia Universal', estado_destino:'Guanajuato', estado_slug:'guanajuato',
      pista:'El economista del tiempo dice: "La plata del estado de los callejones coloridos no solo financiaba a la Corona española: financiaba el comercio mundial. Sin esa plata, China no habría vendido seda a Europa, la India no habría vendido especias y el comercio global del siglo XVII no habría existido. Un estado minero del centro de México fue literalmente el motor del primer sistema económico global."',
      libreta:`Producción de Guanajuato: 25% de la plata mundial en el siglo XVIII
Flujos monetarios: Plata mexicana → España → Países Bajos → Asia (China e India)
China Ming: Exigía plata en pago de exportaciones — México era el único proveedor suficiente
"Economía mundo" (Fernand Braudel): Sistema global centrado en la plata mesoamericana
Moneda: El "peso de a ocho" (real de a ocho) — primera moneda de reserva mundial
Siglo contemporáneo: El peso mexicano fue moneda de referencia global hasta el siglo XIX`,
      opciones:['Guanajuato','Zacatecas','San Luis Potosí','Durango'],
      respuesta_correcta:'Guanajuato',
      explicacion:'Guanajuato produjo el 25% de la plata mundial en el siglo XVIII. El "peso de a ocho" mexicano fue la primera moneda de reserva global. Sin la plata de Guanajuato (y Zacatecas), China no habría podido financiar su comercio exterior y el sistema económico global del siglo XVII no habría existido en su forma conocida.',
      regla_oro_check:true },
  ],
};
export default colonia;
