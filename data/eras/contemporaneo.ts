import type { Era } from '@/lib/types';
const contemporaneo: Era = {
  metadata: {
    slug:'contemporaneo', titulo:'México Contemporáneo', periodo:'2000 – 2024 d.C.',
    estados_principales:['Nuevo León','Ciudad de México','Oaxaca'],
    icono:'🌐', color:'bg-teal-700', colorText:'text-teal-900', orden:16,
  },
  casos:[
    { numero:1, titulo:'La Alternancia del año 2000', subtitulo:'Ciudad de México',
      categoria:'grandes-hitos', concepto_clave:'El fin del partido hegemónico y la democracia',
      materia:'Historia / Formación Cívica', estado_destino:'Ciudad de México', estado_slug:'cdmx',
      pista:'El ciudadano del cambio dice: "En la noche del 2 de julio del año del milenio, el candidato que nunca debía ganar ganó. Por primera vez en 71 años, el partido que controlaba todo tuvo que reconocer su derrota. Fue una transición pacífica que el mundo celebró como el inicio de la democracia real de México. El resultado se anunció desde las instalaciones del organismo electoral en la capital."',
      libreta:`Elección presidencial: 2 de julio de año 2000
Ganador: Vicente Fox Quesada — Partido Acción Nacional (PAN)
Perdedor: Francisco Labastida Ochoa — PRI (71 años consecutivos en el poder)
Margen de victoria: 43.4% vs. 36.1% — diferencia incontrovertible
Secretario de Gobernación que reconoció el resultado: Diódoro Carrasco — caso histórico de lealtad institucional
Sede del IFE donde se anunció: Viaducto Tlalpan, Ciudad de México`,
      opciones:['Ciudad de México','Guanajuato','Jalisco','Querétaro'],
      respuesta_correcta:'Ciudad de México',
      explicacion:'El 2 de julio de 2000, Vicente Fox (PAN) derrotó al PRI con el 43.4% vs. 36.1% en la Ciudad de México, donde el IFE anunció el resultado. Fue la primera alternancia pacífica después de 71 años de hegemonía priista. El reconocimiento del secretario de Gobernación fue el símbolo del respeto institucional a los resultados electorales.',
      regla_oro_check:true },
    { numero:2, titulo:'La Crisis de Seguridad', subtitulo:'Sinaloa',
      categoria:'grandes-hitos', concepto_clave:'El crimen organizado y el Estado',
      materia:'Historia / Formación Cívica', estado_destino:'Sinaloa', estado_slug:'sinaloa',
      pista:'El periodista del tiempo dice: "A partir del año 2006, la guerra entre grupos criminales y el ejército se convirtió en el tema dominante de la política nacional. El estado del norte del Pacífico fue el origen del grupo más poderoso. Con decenas de miles de muertos, la crisis de seguridad cambió la geografía del poder criminal y la percepción internacional del país."',
      libreta:`"Guerra contra el narco": Operativo lanzado por Felipe Calderón — diciembre de año 2006
Muertos en conflicto armado: más de 300,000 entre años 2006–2022 (INEGI)
Cártel de Sinaloa: El grupo criminal más poderoso — con presencia en más de 50 países en año 2024
Líderes: Joaquín "El Chapo" Guzmán — capturado 3 veces (año 2014, año 2016, año 2019 extraditado a EUA)
Estado de origen del cártel: Sinaloa — "El Triángulo Dorado": Sinaloa + Chihuahua + Durango
FECSM: Desaparición de 43 normalistas de Ayotzinapa (Guerrero, año 2014) — caso emblemático`,
      opciones:['Sinaloa','Chihuahua','Tamaulipas','Michoacán'],
      respuesta_correcta:'Sinaloa',
      explicacion:'Sinaloa es el estado de origen del Cártel de Sinaloa y del "Triángulo Dorado" (Sinaloa-Chihuahua-Durango). "El Chapo" Guzmán, capturado tres veces y extraditado a EUA en 2019, fue el líder más conocido. La "guerra contra el narco" iniciada en 2006 ha dejado más de 300,000 muertos. El cártel tiene presencia en más de 50 países.',
      regla_oro_check:true },
    { numero:3, titulo:'La Pandemia de COVID-19', subtitulo:'Ciudad de México',
      categoria:'grandes-hitos', concepto_clave:'La pandemia y la respuesta del Estado',
      materia:'Ciencias / Historia', estado_destino:'Ciudad de México', estado_slug:'cdmx',
      pista:'El epidemiólogo del tiempo dice: "En el mes de marzo del año 2020, el virus que ya había paralizado a China y Europa llegó a México. La capital fue el primer foco y el más afectado. La estrategia del gobierno fue diferente a la del resto del mundo: sin confinamiento estricto pero con semáforos de colores. El país acumuló uno de los excesos de mortalidad más altos del continente."',
      libreta:`Primer caso confirmado en México: 27 de febrero de año 2020
Semáforo epidemiológico: Sistema de 4 colores (rojo–naranja–amarillo–verde) — implementado en junio 2020
Muertes oficiales por COVID: 334,336 (al 31 de diciembre de año 2022, SINAVE)
Exceso de mortalidad estimado: más de 600,000 muertes adicionales (INEGI + Lancet)
Vacunación: inicio el 24 de diciembre de año 2020 — primera vacunada: enfermera del IMSS en CDMX
Estado más afectado: Ciudad de México — mayor densidad de población y primer foco`,
      opciones:['Ciudad de México','Jalisco','Nuevo León','Puebla'],
      respuesta_correcta:'Ciudad de México',
      explicacion:'La Ciudad de México fue el epicentro del COVID-19 en México desde el primer caso confirmado (27 de febrero de 2020). El semáforo epidemiológico sustituyó al confinamiento estricto. Con más de 334,000 muertes oficiales y un exceso de mortalidad estimado en 600,000, México fue uno de los países más afectados. La primera vacunación (24 de diciembre de 2020) fue a una enfermera del IMSS en la CDMX.',
      regla_oro_check:true },
    { numero:4, titulo:'Silicon Valley del Norte', subtitulo:'Nuevo León',
      categoria:'ciencia-y-saberes', concepto_clave:'El hub tecnológico e industrial del siglo XXI',
      materia:'Ciencias / Geografía', estado_destino:'Nuevo León', estado_slug:'nuevo-leon',
      pista:'El ingeniero en semiconductores dice: "Cuando el mundo entendió que depender de Asia para sus chips era peligroso, los empresarios y los políticos del estado industrial del norte firmaron contratos con empresas de medio mundo. Las fábricas de componentes electrónicos, semiconductores y electrodomésticos eligieron ese estado precisamente por su proximidad al mercado del norte y su mano de obra calificada."',
      libreta:`"Nearshoring": Fenómeno de relocalización industrial de Asia a México — acelerado desde año 2022
Nuevo León en el nearshoring: Destino #1 de inversión extranjera directa en México en año 2023
Empresas instaladas: Samsung, KIA, Ternium, John Deere, entre 500+ plantas industriales
PIB per cápita de NL: El más alto de México — equivalente a Portugal
UANL + ITESM + UDEM: Universidades que forman ingenieros para la industria local
Área metropolitana de Monterrey: 5.3 millones de habitantes — la segunda más poblada del país`,
      opciones:['Nuevo León','Jalisco','Querétaro','Guanajuato'],
      respuesta_correcta:'Nuevo León',
      explicacion:'Nuevo León se consolidó como el "Silicon Valley del Norte" con el boom del nearshoring (2022-2024). Samsung, KIA y más de 500 plantas industriales eligieron el estado por su infraestructura y proximidad a EUA. Su PIB per cápita es el más alto de México, equivalente al de Portugal. Las universidades locales (ITESM, UANL) forman la mano de obra calificada.',
      regla_oro_check:true },
    { numero:5, titulo:'Energía Solar y Eólica', subtitulo:'Oaxaca',
      categoria:'ciencia-y-saberes', concepto_clave:'La transición energética y las renovables',
      materia:'Ciencias / Geografía', estado_destino:'Oaxaca', estado_slug:'oaxaca',
      pista:'El ingeniero de energías renovables dice: "El estado más ventoso de México es también el más pobre. En el istmo que une las dos costas del sur, vientos constantes de hasta 10 metros por segundo soplan casi todo el año. Cientos de aerogeneradores blancos generan electricidad que se exporta al centro del país. El dilema es que esas tierras son de comunidades indígenas que no siempre fueron consultadas."',
      libreta:`Istmo de Tehuantepec: Región con los mejores recursos eólicos de México y de América Latina
Velocidad del viento: 7–10 m/s promedio anual — óptima para aerogeneradores
Parques eólicos instalados en Oaxaca: más de 50 parques — 2,500+ MW instalados en año 2023
Energía solar en Sonora: el estado soleado compite como polo solar fotovoltaico
Conflicto: Comunidades zapotecas e ikojts rechazan instalaciones en tierras comunales sin consulta previa
SENER: Comisión Federal de Electricidad y privados comparten la generación en la región`,
      opciones:['Oaxaca','Sonora','Tamaulipas','Veracruz'],
      respuesta_correcta:'Oaxaca',
      explicacion:'El Istmo de Tehuantepec en Oaxaca tiene los mejores vientos de América Latina (7-10 m/s). Con más de 50 parques eólicos y 2,500 MW instalados, Oaxaca es el líder nacional en energía eólica. El conflicto con comunidades zapotecas e ikojts por el uso de tierras comunales sin consulta previa ilustra la tensión entre transición energética y derechos indígenas.',
      regla_oro_check:true },
    { numero:6, titulo:'Gastronomía Mexicana: Patrimonio Mundial', subtitulo:'Oaxaca',
      categoria:'vida-cotidiana', concepto_clave:'La cocina como identidad cultural y orgullo nacional',
      materia:'Historia / Ciencias', estado_destino:'Oaxaca', estado_slug:'oaxaca',
      pista:'La cocinera tradicional dice: "En el año 2010, la organización cultural más importante del mundo reconoció que nuestra forma de cocinar era patrimonio de la humanidad. El estado del sur que más representa esa diversidad culinaria tiene siete moles diferentes, tlayudas y chapulines. Esa gastronomía no es solo comida: es conocimiento ancestral, biodiversidad y comunidad."',
      libreta:`UNESCO: Gastronomía Mexicana declarada Patrimonio Cultural Inmaterial — 16 de noviembre de año 2010
Estado más representativo: Oaxaca — "tierra de los siete moles"
Moles oaxaqueños: negro, colorado, amarillo, chichilo, coloradito, manchamanteles, verde
Ingredientes endémicos: Chapulines (saltamontes), tlayudas (tortilla de maíz grande), tasajo, memela
Mercados de Oaxaca: Mercado Benito Juárez y Mercado 20 de Noviembre — referentes gastronómicos
Chefs globales: Rodolfo Castellanos, Hugo Ortega — difusión internacional de la cocina oaxaqueña`,
      opciones:['Oaxaca','Puebla','Veracruz','Yucatán'],
      respuesta_correcta:'Oaxaca',
      explicacion:'La gastronomía mexicana fue declarada Patrimonio Cultural Inmaterial por la UNESCO el 16 de noviembre de 2010. Oaxaca, con sus siete moles, tlayudas, chapulines y tasajo, es el estado más representativo de esa diversidad. Los mercados Benito Juárez y 20 de Noviembre son referentes mundiales. Chefs como Rodolfo Castellanos han llevado la cocina oaxaqueña a restaurantes de todo el mundo.',
      regla_oro_check:true },
    { numero:7, titulo:'Redes Sociales y Cultura Digital', subtitulo:'Nuevo León',
      categoria:'vida-cotidiana', concepto_clave:'La transformación digital de la vida cotidiana',
      materia:'Ciencias / Arte', estado_destino:'Nuevo León', estado_slug:'nuevo-leon',
      pista:'El creador de contenido digital dice: "En la década de los veinte del nuevo milenio, los jóvenes del país del sur de EUA comenzaron a dominar la plataforma del video corto. Los más seguidos en ese servicio digital venían del estado industrial del norte y de la capital. La cultura juvenil del país encontró una nueva forma de expresarse y de llegar al mundo entero sin necesitar una televisora."',
      libreta:`TikTok en México: México = top 5 mercados mundiales con más de 60 millones de usuarios en año 2023
Influencers mexicanos con más de 10 millones de seguidores: más de 50 creadores en año 2023
Ciudades con más creadores de contenido: CDMX + Monterrey (NL) + Guadalajara
Emprendimiento digital en NL: StartupsMX, Startup Grind Monterrey — ecosistema emprendedor
Penetración de internet en México en año 2023: 79% de la población (INEGI)
Identidad digital: Memes, cultura pop, gastronomía y humor como exportaciones culturales informales`,
      opciones:['Nuevo León','Ciudad de México','Jalisco','Querétaro'],
      respuesta_correcta:'Nuevo León',
      explicacion:'Nuevo León (Monterrey) y la CDMX son los dos principales focos de creadores de contenido digital en México. Con más de 60 millones de usuarios en TikTok, México es top 5 mundial. El ecosistema emprendedor de Monterrey (StartupsMX, Startup Grind) apoya a creadores tech. El 79% de penetración de internet (2023) hace viable la economía creadora digital.',
      regla_oro_check:true },
    { numero:8, titulo:'El Matrimonio Igualitario', subtitulo:'Ciudad de México',
      categoria:'civismo-y-etica', concepto_clave:'La expansión de derechos civiles en el siglo XXI',
      materia:'Formación Cívica', estado_destino:'Ciudad de México', estado_slug:'cdmx',
      pista:'La activista del tiempo dice: "La capital fue la primera entidad de México —y de América Latina— en reconocer el derecho de dos personas del mismo sexo a casarse legalmente. La ley fue aprobada en el invierno del año que termina con cero al inicio de la segunda década del milenio. Desde entonces, estado por estado fue siguiendo el ejemplo de la capital."',
      libreta:`Matrimonio igualitario en CDMX: Aprobado el 21 de diciembre de año 2009 — vigente desde 4 de marzo de año 2010
Primera entidad latinoamericana en reconocerlo: Ciudad de México
Resolución SCJN año 2015: Los estados deben reconocer los matrimonios celebrados en otros estados
Resolución SCJN año 2022: El matrimonio igualitario es un derecho constitucional en todo México
Estados que lo aprobaron antes de la resolución 2022: 27 de 32 entidades
Matrimonios registrados (CDMX, año 2010–2022): más de 25,000 parejas del mismo sexo`,
      opciones:['Ciudad de México','Jalisco','Nuevo León','Coahuila'],
      respuesta_correcta:'Ciudad de México',
      explicacion:'La Ciudad de México fue la primera entidad latinoamericana en aprobar el matrimonio igualitario (21 de diciembre de 2009, vigente desde marzo de 2010). La SCJN estableció en 2015 que todos los estados debían reconocerlo. En 2022, la Corte lo declaró derecho constitucional en todo el país. Más de 25,000 parejas del mismo sexo se casaron en la CDMX entre 2010 y 2022.',
      regla_oro_check:true },
    { numero:9, titulo:'Las Consultas Populares', subtitulo:'Ciudad de México',
      categoria:'civismo-y-etica', concepto_clave:'La participación ciudadana directa en la democracia',
      materia:'Formación Cívica', estado_destino:'Ciudad de México', estado_slug:'cdmx',
      pista:'La ciudadana del tiempo dice: "En el año 2021, por primera vez en la historia del país, los ciudadanos fuimos convocados a votar directamente sobre una política pública importante: si se debía investigar a los expresidentes. La participación fue menor a la necesaria para que la decisión fuera vinculante, pero el mecanismo existió. La sede del conteo fue en la capital."',
      libreta:`Primera consulta popular federal: 1 de agosto de año 2021
Pregunta sometida: Si se debía investigar y juzgar a expresidentes por corrupción y violaciones a derechos humanos
Participación: 7.1% — muy por debajo del 40% requerido para ser vinculante
Segunda consulta: Revocación de mandato de López Obrador — 10 de abril de año 2022 — 17.7% de participación
Marco constitucional: Artículo 35 de la Constitución — derecho ciudadano desde la reforma de año 2012
Sede del cómputo: INE — Ciudad de México`,
      opciones:['Ciudad de México','Jalisco','Nuevo León','Veracruz'],
      respuesta_correcta:'Ciudad de México',
      explicacion:'La primera consulta popular federal (1 de agosto de 2021) fue organizada desde la Ciudad de México por el INE. La pregunta sobre investigar a expresidentes solo obtuvo el 7.1% de participación (se requería 40% para ser vinculante). La revocación de mandato de 2022 alcanzó el 17.7%. Ambos ejercicios, aunque con baja participación, establecieron el mecanismo de democracia directa.',
      regla_oro_check:true },
    { numero:10, titulo:'México en el Siglo XXI Global', subtitulo:'Cruce Global',
      categoria:'cruce-global', concepto_clave:'México ante los retos del mundo contemporáneo',
      materia:'Historia Universal', estado_destino:'Nuevo León', estado_slug:'nuevo-leon',
      pista:'El analista global dice: "En la segunda década del siglo XXI, México se convirtió en un actor estratégico por razones nuevas: la guerra comercial entre EUA y China hizo que las fábricas buscaran un lugar cercano al consumidor americano pero más barato que producir en casa. El estado del norte fue el gran ganador de ese reordenamiento global. Su PIB per cápita ya supera al de varios países europeos."',
      libreta:`Guerra comercial EUA–China: aranceles de año 2018 + pandemia año 2020 → nearshoring masivo
México como nearshoring hub: Inversión extranjera directa récord de 36,000 millones de dólares en año 2023
Nuevo León: Destino del 28% de toda la inversión extranjera de México en año 2023
Relación T-MEC: México–EUA–Canadá — sustituto del TLCAN desde año 2020
Exportaciones de México en año 2023: 593,000 millones de dólares — 11º exportador mundial
Reto estructural: Desigualdad regional — Chiapas, Guerrero y Oaxaca con IDH similar a países africanos`,
      opciones:['Nuevo León','Chihuahua','Coahuila','Tamaulipas'],
      respuesta_correcta:'Nuevo León',
      explicacion:'Nuevo León captó el 28% de la inversión extranjera directa de México en 2023 (año récord de 36,000 millones de dólares), impulsada por el nearshoring post-guerra comercial EUA-China. México se convirtió en el 11º exportador mundial en 2023. Sin embargo, la brecha entre el norte (PIB per cápita de Portugal) y el sur (IDH similar a países africanos) es el principal reto del siglo XXI mexicano.',
      regla_oro_check:true },
  ],
};
export default contemporaneo;
