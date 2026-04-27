import type { Era } from '@/lib/types';
const reforma: Era = {
  metadata: {
    slug:'reforma', titulo:'La Reforma y Juárez', periodo:'1855 – 1872 d.C.',
    estados_principales:['Oaxaca','Ciudad de México'],
    icono:'⚖️', color:'bg-cyan-800', colorText:'text-cyan-900', orden:10,
  },
  casos:[
    { numero:1, titulo:'El Benemérito de las Américas', subtitulo:'Oaxaca',
      categoria:'grandes-hitos', concepto_clave:'Benito Juárez y el estado laico',
      materia:'Historia', estado_destino:'Oaxaca', estado_slug:'oaxaca',
      pista:'El pastor zapoteco dice: "El presidente que defendió México de tres potencias europeas empezó siendo un niño que pastoreaba ovejas sin saber español. Llegó a ser el abogado más importante del país. Su estado natal es famoso por el mole negro y el mezcal."',
      libreta:`Nombre: Benito Pablo Juárez García (1806–1872)
Pueblo: San Pablo Guelatao, Sierra Norte de Oaxaca
Idioma materno: Zapoteco (aprendió español a los 12 años)
Primer empleo en la capital estatal: Sirviente del librero Antonio Maza
Bebida destilada del estado: Mezcal (Agave angustifolia) — denominación de origen
Gastronomía icónica: Mole negro con más de 30 ingredientes incluyendo chile y chocolate`,
      opciones:['Oaxaca','Guerrero','Chiapas','Michoacán'],
      respuesta_correcta:'Oaxaca',
      explicacion:'Benito Juárez nació en San Pablo Guelatao, Oaxaca. Habló zapoteco como primer idioma. El mezcal con denominación de origen y el mole negro son marcadores únicos de Oaxaca.',
      regla_oro_check:true },
    { numero:2, titulo:'Las Leyes de Reforma', subtitulo:'Ciudad de México',
      categoria:'grandes-hitos', concepto_clave:'Separación Iglesia-Estado en México',
      materia:'Historia / Formación Cívica', estado_destino:'Ciudad de México', estado_slug:'cdmx',
      pista:'La abogada del tiempo dice: "El conjunto de leyes más importante del siglo XIX ordenó separar al gobierno de la religión. Los cementerios pasaron a manos civiles, el matrimonio se volvió contrato legal y los templos religiosos no podían tener propiedades ajenas al culto. Esas leyes se aplicaron desde la capital del país."',
      libreta:`Ley Lerdo: Desamortización de bienes eclesiásticos (año 1856)
Ley Juárez: Supresión de fueros militares y eclesiásticos (año 1855)
Matrimonio civil: Primera vez que el Estado registra uniones en México (año 1857)
Iglesia poseía antes de la Reforma: Aprox. 50% del territorio urbano nacional
Constitución liberal: 5 de febrero de año 1857 — base del sistema jurídico moderno
Promulgadas formalmente: Ciudad de México (sede del gobierno liberal)`,
      opciones:['Ciudad de México','Veracruz','Oaxaca','Jalisco'],
      respuesta_correcta:'Ciudad de México',
      explicacion:'Las Leyes de Reforma y la Constitución de 1857 se instrumentaron desde la Ciudad de México. La Iglesia poseía el 50% del territorio urbano antes de estas leyes. El matrimonio civil y la supresión de fueros son hitos de la secularización del Estado.',
      regla_oro_check:true },
    { numero:3, titulo:'La Batalla del 5 de Mayo', subtitulo:'Puebla',
      categoria:'grandes-hitos', concepto_clave:'Resistencia a la intervención extranjera',
      materia:'Historia', estado_destino:'Puebla', estado_slug:'puebla',
      pista:'El general Zaragoza dice: "El 5 de mayo de 1862, 4,000 soldados mexicanos mal equipados derrotaron a 6,000 tropas del ejército más poderoso de Europa en ese momento. La batalla ocurrió en la ciudad que hoy celebra ese aniversario con la fiesta más conocida de México en el extranjero."',
      libreta:`Fecha: 5 de mayo de año 1862
General victorioso: Ignacio Zaragoza
Tropas francesas: 6,000 (Napoleón III) vs mexicanos: 4,000
Único triunfo: Los franceses tomaron la ciudad un año después, en año 1863
Celebración internacional: Cinco de Mayo — más festejado en comunidades mexicanas de EUA
Significado: Símbolo de resistencia popular ante una potencia militar superior`,
      opciones:['Puebla','Veracruz','Tlaxcala','Hidalgo'],
      respuesta_correcta:'Puebla',
      explicacion:'La Batalla del 5 de Mayo de 1862 ocurrió en Puebla. Zaragoza con 4,000 hombres venció a las tropas de Napoleón III. El Cinco de Mayo hoy es más conocido en EUA que en México.',
      regla_oro_check:true },
    { numero:4, titulo:'El Telégrafo Juarista', subtitulo:'Ciudad de México',
      categoria:'ciencia-y-saberes', concepto_clave:'Tecnología al servicio del gobierno liberal',
      materia:'Ciencias / Historia', estado_destino:'Ciudad de México', estado_slug:'cdmx',
      pista:'El telegrafista del tiempo dice: "El gobierno liberal fue el primero en usar la comunicación instantánea para controlar el territorio. Desde el despacho en la capital podía saber en minutos lo que pasaba en Sonora o Veracruz. Esa ventaja tecnológica fue clave para mantener unido al país durante las guerras civiles."',
      libreta:`Primer telégrafo en México: Año 1851 — línea CDMX–Nopalucan (Puebla)
Expansión bajo el liberalismo: De 300 km (año 1855) a 3,800 km (año 1872)
Velocidad vs. correo: De semanas a minutos para comunicaciones urgentes
Uso militar: Coordinación de ejércitos contra la Intervención Francesa
Nodo central de la red: Ciudad de México — todas las líneas convergían aquí
Costo por palabra en año 1860: 1 real (equivalente a 1 hora de trabajo)`,
      opciones:['Ciudad de México','Veracruz','Puebla','Guanajuato'],
      respuesta_correcta:'Ciudad de México',
      explicacion:'La CDMX fue el nodo central de la red telegráfica juarista. La expansión de 300 a 3,800 km de líneas durante el liberalismo convirtió al telégrafo en instrumento de unidad nacional.',
      regla_oro_check:true },
    { numero:5, titulo:'La Escuela de Medicina Moderna', subtitulo:'Ciudad de México',
      categoria:'ciencia-y-saberes', concepto_clave:'Secularización de la ciencia médica',
      materia:'Ciencias', estado_destino:'Ciudad de México', estado_slug:'cdmx',
      pista:'El médico del tiempo dice: "Durante la época liberal, la medicina mexicana se liberó del control religioso. La primera escuela donde se disecaban cadáveres para aprender anatomía abrió en la capital. Un filósofo positivista reorganizó todo el sistema educativo del país desde esa misma ciudad."',
      libreta:`Escuela Nacional de Medicina: Reformada en época juarista — Plaza de Santo Domingo, CDMX
Primera enseñanza anatómica con cadáveres en México: Aprobada en época liberal
Reformador educativo: Gabino Barreda — introdujo el positivismo de Auguste Comte
Escuela Nacional Preparatoria: Fundada en año 1867 — base del sistema educativo laico
Palacio de la Inquisición: Reconvertido en escuela de medicina (simbolismo anticlerical)
Influencia posterior: Base del sistema de educación pública de la SEP (siglo XX)`,
      opciones:['Ciudad de México','Puebla','Jalisco','Guanajuato'],
      respuesta_correcta:'Ciudad de México',
      explicacion:'La Escuela de Medicina en el ex Palacio de la Inquisición (CDMX) y la Escuela Nacional Preparatoria de 1867 son los pilares de la reforma educativa laica. El positivismo de Barreda fue la base del sistema educativo que hoy conocemos.',
      regla_oro_check:true },
    { numero:6, titulo:'La Gastronomía Oaxaqueña', subtitulo:'Oaxaca',
      categoria:'vida-cotidiana', concepto_clave:'Identidad cultural y alimentaria de Oaxaca',
      materia:'Ciencias / Historia', estado_destino:'Oaxaca', estado_slug:'oaxaca',
      pista:'La cocinera del tiempo dice: "Mientras los políticos debatían en la capital, los mercados del estado del benemérito seguían con sus sabores ancestrales. La salsa más compleja de México se hacía allí con más de 30 ingredientes. También había insectos tostados que tienen más proteína que la carne."',
      libreta:`Mole negro oaxaqueño: Hasta 36 ingredientes — chilhuacle negro, mulato, chocolate, plátano
Chapulines: Sphenarium purpurascens — 60–70% proteína (vs 26% en carne de res)
Nixtamalización local: Maíz bolita oaxaqueño — variedad endémica de la región
Grana cochinilla: Dactylopius coccus — tinte rojo de nopal, exportado desde siglo XVI
Denominación de origen: Mezcal (1994) y Mole oaxaqueño (en trámite)
Mercado central de Oaxaca: De los más antiguos continuamente activos de México`,
      opciones:['Oaxaca','Chiapas','Guerrero','Veracruz'],
      respuesta_correcta:'Oaxaca',
      explicacion:'El mole negro (36 ingredientes), los chapulines (60-70% proteína) y la grana cochinilla son exclusivos de Oaxaca. El maíz bolita endémico y la denominación de origen del mezcal confirman el estado natal de Juárez.',
      regla_oro_check:true },
    { numero:7, titulo:'La Prensa Liberal', subtitulo:'Ciudad de México',
      categoria:'vida-cotidiana', concepto_clave:'Periodismo y libertad de expresión',
      materia:'Español / Literatura', estado_destino:'Ciudad de México', estado_slug:'cdmx',
      pista:'El periodista del tiempo dice: "La época de Juárez fue la de los grandes periódicos de debate. Los escritores liberales usaban la pluma como arma política. La mayoría de los periódicos y editoriales del país estaban concentrados en la capital. El pensador más radical escribía columnas que escandalizaban a la Iglesia."',
      libreta:`Periódico más influyente: El Monitor Republicano (CDMX, años 1844–1896)
Columnista radical: Ignacio Ramírez "El Nigromante" — anticlerical y defensor de los indígenas
Guillermo Prieto: Cronista y poeta de la vida cotidiana liberal
Ley Orgánica de Instrucción: Año 1867 — educación laica, gratuita y obligatoria
Imprentas: Concentradas en la CDMX — primer clúster editorial del país
Influencia filosófica: Voltaire y Rousseau circulaban en traducciones capitalinas`,
      opciones:['Ciudad de México','Veracruz','Jalisco','Puebla'],
      respuesta_correcta:'Ciudad de México',
      explicacion:'El Monitor Republicano, El Nigromante y Guillermo Prieto operaron desde la CDMX. La concentración de imprentas en la capital fue el vehículo del pensamiento liberal que respaldó las reformas de Juárez.',
      regla_oro_check:true },
    { numero:8, titulo:'El Código Civil de 1870', subtitulo:'Ciudad de México',
      categoria:'civismo-y-etica', concepto_clave:'Derecho civil moderno en México',
      materia:'Formación Cívica', estado_destino:'Ciudad de México', estado_slug:'cdmx',
      pista:'La jurista del tiempo dice: "El gobierno liberal actualizó las leyes que regulan la vida cotidiana: contratos, herencias, divorcios y nacimientos. El primer Código Civil moderno del país se promulgó en la capital y fue la base del sistema legal que rige hasta hoy."',
      libreta:`Código Civil de 1870: Primer código civil unificado de México
Modelo: Código Napoleónico (Francia, año 1804) adaptado al contexto mexicano
Derechos incorporados: Divorcio legal, registro civil de nacimientos, herencia sin distinción de ilegitimidad
Promulgado: Ciudad de México
Vigencia: Base del sistema de derecho civil actual en estados mexicanos
Promotor: Ministro de Justicia Ignacio Mariscal`,
      opciones:['Ciudad de México','Veracruz','Puebla','Jalisco'],
      respuesta_correcta:'Ciudad de México',
      explicacion:'El Código Civil de 1870, promulgado en la CDMX y basado en el Código Napoleónico, estableció el matrimonio civil, el divorcio y el registro de nacimientos. Sigue siendo la base del derecho civil mexicano.',
      regla_oro_check:true },
    { numero:9, titulo:'Las Comunidades Indígenas y la Reforma', subtitulo:'Oaxaca',
      categoria:'civismo-y-etica', concepto_clave:'Paradojas del liberalismo',
      materia:'Formación Cívica / Historia', estado_destino:'Oaxaca', estado_slug:'oaxaca',
      pista:'El comunero del tiempo dice: "Las Leyes de Reforma tenían una paradoja: al quitarle propiedades a la Iglesia, también afectaron a las tierras colectivas de las comunidades indígenas. La ley que prohibía corporaciones con propiedades impactó tanto a los conventos como a los ejidos. Los pueblos más afectados estaban en el estado natal del propio Juárez."',
      libreta:`Ley Lerdo (año 1856): "Desamortización" afectó bienes de Iglesia Y de comunidades indígenas
Corporaciones incluidas: Conventos + comunidades (sus ejidos y tierras colectivas)
Estado más afectado: Comunidades zapotecas y mixtecas perdieron tierras en Oaxaca
Paradoja: Juárez, zapoteco oaxaqueño, firmó leyes que dañaron a su pueblo de origen
Resistencia: Comunidades mantuvieron "usos y costumbres" fuera del sistema legal
Reconocimiento tardío: Art. 2 constitucional de año 2001 reconoció autonomía indígena`,
      opciones:['Oaxaca','Chiapas','Guerrero','Michoacán'],
      respuesta_correcta:'Oaxaca',
      explicacion:'La Ley Lerdo afectó más a Oaxaca, donde comunidades zapotecas y mixtecas perdieron tierras que la ley consideraba "corporativas". La paradoja de Juárez (zapoteco que firmó leyes contra su comunidad) es uno de los dilemas más complejos del liberalismo mexicano.',
      regla_oro_check:true },
    { numero:10, titulo:'Juárez y Lincoln: Liberalismo Global', subtitulo:'Cruce Global',
      categoria:'cruce-global', concepto_clave:'Liberalismo del siglo XIX en América',
      materia:'Historia Universal', estado_destino:'Oaxaca', estado_slug:'oaxaca',
      pista:'El historiador global dice: "Juárez y Lincoln fueron presidentes al mismo tiempo y enfrentaron problemas análogos: ambos defendían repúblicas contra fuerzas que querían destruirlas. Lincoln reconoció al gobierno de Juárez mientras EUA vivía su propia guerra interna. Ambos provenían de orígenes humildes en estados marginales de sus países."',
      libreta:`Contemporaneidad: Juárez (años 1858–1872) — Lincoln (años 1861–1865)
Reconocimiento mutuo: EUA mantuvo relaciones con Juárez durante la Intervención Francesa
Abolición comparada: México abolió la esclavitud en año 1824 — EUA en año 1865 (13ª Enmienda)
Origen de Lincoln: Kentucky — estado fronterizo y "periférico" del EUA del siglo XIX
Origen de Juárez: Oaxaca — estado del sur, indígena y marginal en el México del siglo XIX
Fin de sus adversarios: Maximiliano fusilado año 1867 + Confederación derrotada año 1865`,
      opciones:['Oaxaca','Guerrero','Chiapas','Veracruz'],
      respuesta_correcta:'Oaxaca',
      explicacion:'Juárez y Lincoln fueron contemporáneos que defendían repúblicas contra fuerzas de disgregación. México abolió la esclavitud 41 años antes que EUA. Ambos venían de orígenes humildes en estados "periféricos" — Kentucky y Oaxaca.',
      regla_oro_check:true },
  ],
};
export default reforma;
