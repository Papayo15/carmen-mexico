import type { Era } from '@/lib/types';

const contemporaneo: Era = {
  metadata: {
    slug: 'contemporaneo',
    titulo: 'México Contemporáneo',
    periodo: '2000 – presente',
    estados_principales: ['Ciudad de México', 'Nuevo León', 'Oaxaca', 'Sinaloa'],
    icono: '🌐',
    color: 'bg-indigo-700',
    colorText: 'text-indigo-900',
    orden: 16,
  },
  casos: [
    {
      numero: 1,
      titulo: 'La Alternancia del Año 2000',
      categoria: 'civismo-y-etica',
      concepto_clave: 'Transición democrática',
      materia: 'Historia y Civismo',
      estado_destino: 'Ciudad de México',
      estado_slug: 'cdmx',
      investigacion1: {
        narrativa:
          'El 2 de julio del año 2000 alguien robó el sello oficial del partido que gobernó México por 71 años seguidos. La noche en que la pantalla del Palacio Nacional proyectó un resultado que nadie esperaba, el sello desapareció del archivo histórico del Zócalo.',
        objeto_robado: 'Sello oficial del PRI (1929–2000)',
        lugares: [
          {
            lugar: 'Casilla Electoral',
            icono: '🗳️',
            testigo: 'Vocal del IFE',
            pista:
              'La persona que lo tomó llegó a las 11 de la noche, justo cuando los noticieros anunciaban algo que nunca había ocurrido en siete décadas.',
          },
          {
            lugar: 'Palacio Nacional',
            icono: '🏛️',
            testigo: 'Guardia nocturno',
            pista:
              'Vi a un hombre con corbata azul y marino salir corriendo. Lloraba, pero no de tristeza: gritaba "¡por fin, por fin!"',
          },
          {
            lugar: 'Plaza del Zócalo',
            icono: '🎉',
            testigo: 'Vendedor de periódicos',
            pista:
              'La multitud celebraba como en año nuevo, pero era julio. Alguien aprovechó el caos para entrar al edificio sin que nadie lo detuviera.',
          },
        ],
        libreta:
          'En 2000, Vicente Fox (PAN) obtuvo 42.5% de los votos frente a Francisco Labastida (PRI) con 36.1%. Fue la primera alternancia presidencial en México desde 1929. El IFE (Instituto Federal Electoral) garantizó la transparencia del proceso. La capital, sede del poder ejecutivo federal, fue el epicentro del cambio histórico.',
      },
      investigacion2: {
        narrativa:
          'El ladrón fue captado por cámaras comprando un boleto de metro hacia el sur de la ciudad. Llevaba el sello envuelto en un periódico cuyo encabezado decía "¡Ganó el cambio!"',
        pista_mundial:
          'Las transiciones democráticas pacíficas son raras: España tardó 40 años en lograr una después de Franco (1975). Polonia necesitó al sindicato Solidaridad en 1989. México logró la suya sin violencia, convirtiéndose en modelo latinoamericano de alternancia electoral.',
        libreta:
          'El Distrito Federal (hoy CDMX) concentra los tres poderes de la Unión: ejecutivo (Palacio Nacional), legislativo (Cámara de Diputados y Senado) y judicial (Suprema Corte). La capital tiene 9.2 millones de habitantes y es sede del IFE/INE desde su fundación en 1990.',
      },
      reto: {
        enunciado:
          'Si el PRI gobernó 71 años y el período presidencial es de 6 años, ¿cuántos presidentes priistas gobernaron México antes de la alternancia? (Cuenta solo períodos completos de 6 años.)',
        opciones_reto: ['9 presidentes', '11 presidentes', '12 presidentes', '14 presidentes'],
        respuesta_reto: '11 presidentes',
        pista_resultado:
          '71 ÷ 6 ≈ 11.8, redondeando hacia abajo son 11 períodos completos. El ladrón dejó 11 sellos de cera en la puerta de la ciudad más poblada del país.',
      },
      opciones: ['Jalisco', 'Nuevo León', 'Ciudad de México', 'Puebla'],
      respuesta_correcta: 'Ciudad de México',
      explicacion:
        '¡Atrapado! Uniste la celebración nocturna del Zócalo + el metro hacia el sur de la capital + los 11 presidentes priistas y dedujiste que el sello fue a parar a la sede del poder federal: Ciudad de México.',
      regla_oro_check: true,
    },
    {
      numero: 2,
      titulo: 'La Crisis de Seguridad',
      categoria: 'civismo-y-etica',
      concepto_clave: 'Narcoviolencia y Estado',
      materia: 'Civismo e Historia',
      estado_destino: 'Sinaloa',
      estado_slug: 'sinaloa',
      investigacion1: {
        narrativa:
          'En 2006, alguien robó el expediente clasificado que documentaba la ruta del primer "corredor" del crimen organizado en México. El documento incluía mapas de carreteras serranas, nombres clave y la historia del cártel más poderoso del hemisferio occidental.',
        objeto_robado: 'Expediente clasificado del Cártel de Sinaloa (folio 2006-CS)',
        lugares: [
          {
            lugar: 'Cuartel Militar de la Sierra',
            icono: '🏔️',
            testigo: 'Sargento retirado',
            pista:
              'El que lo tomó sabía exactamente qué cajón buscar. Olía a tierra mojada de monte y sus botas tenían barro de camino de herradura, no de asfalto.',
          },
          {
            lugar: 'Ministerio Público Federal',
            icono: '⚖️',
            testigo: 'Secretaria de guardia',
            pista:
              'Era un hombre de mediana edad, con acento del norte. Preguntó por "el expediente de la sierra blanca" antes de que yo pudiera contestar, ya lo había encontrado.',
          },
          {
            lugar: 'Aeropuerto Internacional',
            icono: '✈️',
            testigo: 'Agente de migración',
            pista:
              'Compró un boleto de último minuto a una ciudad costera con puerto pesquero en el Pacífico. Pagó en efectivo y no facturó equipaje.',
          },
        ],
        libreta:
          'En diciembre de 2006, Felipe Calderón declaró la "guerra contra el narcotráfico" y desplegó 6,500 soldados en Michoacán. El Cártel de Sinaloa, con origen en Culiacán, es considerado la organización criminal más poderosa de México. Entre 2006 y 2012 se registraron más de 70,000 homicidios relacionados con el crimen organizado.',
      },
      investigacion2: {
        narrativa:
          'El sospechoso fue visto abordando una lancha en la costa del Pacífico norte. Su destino era una población serrana con tradición agrícola y redes de comunicación montañosa.',
        pista_mundial:
          'La guerra contra las drogas iniciada por Nixon en 1971 en EE.UU. fracasó en erradicar el tráfico. Colombia vivió su propia crisis con los carteles de Medellín y Cali en los 80-90. México heredó las rutas cuando Colombia fue presionada, consolidando el "Triángulo del Pacífico" como la mayor ruta de distribución mundial de narcóticos.',
        libreta:
          'Sinaloa tiene 2.9 millones de habitantes y su capital es Culiacán. Es el estado con mayor producción de vegetales de México (tomate, pepino, maíz). La Sierra Madre Occidental cubre el 30% de su territorio y históricamente sirvió como zona de cultivo ilícito por su inaccesibilidad. Limita con el mar de Cortés al oeste.',
      },
      reto: {
        enunciado:
          'Si en 2006 había 6,500 soldados desplegados y cada unidad de 50 soldados patrullaba 200 km² de sierra, ¿cuántos km² quedaban bajo vigilancia militar?',
        opciones_reto: ['13,000 km²', '26,000 km²', '39,000 km²', '52,000 km²'],
        respuesta_reto: '26,000 km²',
        pista_resultado:
          '6,500 ÷ 50 = 130 unidades × 200 km² = 26,000 km². El ladrón se ocultó en territorio sin vigilancia, en un estado con sierra y costa al Pacífico.',
      },
      opciones: ['Sonora', 'Chihuahua', 'Sinaloa', 'Nayarit'],
      respuesta_correcta: 'Sinaloa',
      explicacion:
        '¡Atrapado! Uniste el barro de camino serrano + el vuelo a ciudad costera del Pacífico + los 26,000 km² de patrullaje en sierra y ubicaste al sospechoso en Sinaloa, cuna del cártel más grande de México.',
      regla_oro_check: true,
    },
    {
      numero: 3,
      titulo: 'La Pandemia de COVID-19',
      categoria: 'ciencia-y-saberes',
      concepto_clave: 'Salud pública y emergencia sanitaria',
      materia: 'Ciencias y Civismo',
      estado_destino: 'Ciudad de México',
      estado_slug: 'cdmx',
      investigacion1: {
        narrativa:
          'En marzo de 2020, alguien robó el protocolo oficial de contingencia sanitaria del hospital más grande de Latinoamérica. El documento incluía los primeros mapas de dispersión del virus en México y los planes de reconversión hospitalaria.',
        objeto_robado: 'Protocolo COVID-19 del IMSS (Folio Emergencia-2020)',
        lugares: [
          {
            lugar: 'Hospital General La Raza',
            icono: '🏥',
            testigo: 'Enfermera en turno nocturno',
            pista:
              'Llevaba bata y mascarilla, igual que todos, pero sus ojos delataban que no era personal médico: miraba los pasillos como turista, no como alguien que conoce cada rincón del lugar.',
          },
          {
            lugar: 'Centro de Comando SSPCDMX',
            icono: '🚨',
            testigo: 'Técnico de comunicaciones',
            pista:
              'Se fue con una memoria USB que brillaba roja. Lo vi salir al metro cuando ya habían cerrado las estaciones al público general.',
          },
          {
            lugar: 'Mercado de la Merced',
            icono: '🛒',
            testigo: 'Locataria de hierbas',
            pista:
              'Preguntó por ruta hacia Tlatelolco. Tosía con la mano en el codo, tal como pedían los carteles del gobierno. Alguien educado pero con prisa.',
          },
        ],
        libreta:
          'México confirmó su primer caso de COVID-19 el 28 de febrero de 2020. La Ciudad de México fue el epicentro: en julio de 2020 concentraba el 35% de los casos nacionales. El IMSS reconvirtió 28 hospitales en el país. Hugo López-Gatell coordinó el semáforo epidemiológico con 4 niveles de alerta. México acumuló más de 330,000 muertes oficiales por COVID-19.',
      },
      investigacion2: {
        narrativa:
          'El sospechoso fue rastreado por las cámaras del Metro hasta la Línea 3, dirección norte. Portaba el protocolo dentro de una mochila con logos de institución académica.',
        pista_mundial:
          'La pandemia de COVID-19 declarada por la OMS en marzo de 2020 afectó a 220 países. La ciudad de Wuhan, China, fue el primer epicentro. Nueva York tuvo 800 muertes diarias en abril de 2020. México adoptó el modelo de "no confinamiento estricto" a diferencia de España o Italia, priorizando el semáforo por colores como herramienta de comunicación pública.',
        libreta:
          'La Ciudad de México tiene 16 alcaldías y una red de metro con 195 estaciones. El IMSS atiende a 72 millones de derechohabientes en todo México. La UNAM, con campus en la capital, fue clave en la investigación de vacunas nacionales. La CDMX implementó el "Registro CDMX" para rastrear contagios a nivel de colonia.',
      },
      reto: {
        enunciado:
          'Si en julio de 2020 la CDMX tenía 35% de los casos nacionales y México reportaba 400,000 contagios totales, ¿cuántos casos había en la capital aproximadamente?',
        opciones_reto: ['100,000 casos', '120,000 casos', '140,000 casos', '160,000 casos'],
        respuesta_reto: '140,000 casos',
        pista_resultado:
          '400,000 × 0.35 = 140,000 casos. El protocolo robado pertenecía al epicentro nacional: la ciudad con más de 9 millones de habitantes y la mayor infraestructura sanitaria del país.',
      },
      opciones: ['Jalisco', 'Estado de México', 'Ciudad de México', 'Nuevo León'],
      respuesta_correcta: 'Ciudad de México',
      explicacion:
        '¡Atrapado! Uniste el hospital más grande de Latinoamérica + el metro de Tlatelolco + los 140,000 casos del epicentro y dedujiste que el protocolo robado estaba en Ciudad de México.',
      regla_oro_check: true,
    },
    {
      numero: 4,
      titulo: 'Silicon Valley del Norte',
      categoria: 'cruce-global',
      concepto_clave: 'Industria tecnológica y manufactura',
      materia: 'Geografía y Economía',
      estado_destino: 'Nuevo León',
      estado_slug: 'nuevo-leon',
      investigacion1: {
        narrativa:
          'Alguien robó el chip prototipo de la primera planta de semiconductores mexicana, instalada en el parque industrial más avanzado del norte del país. El chip valía 40 millones de dólares y representaba el futuro tecnológico de México.',
        objeto_robado: 'Chip prototipo de semiconductores mexicano (Modelo NL-Tech-01)',
        lugares: [
          {
            lugar: 'Parque Industrial Apodaca',
            icono: '🏭',
            testigo: 'Ingeniero de planta',
            pista:
              'Llegó en un auto con placas de Texas, hablaba inglés con acento tejano pero sabía exactamente cómo moverse por el parque como si lo hubiera estudiado en planos.',
          },
          {
            lugar: 'Centro de Innovación KIA',
            icono: '🚗',
            testigo: 'Guardia de seguridad',
            pista:
              'Lo vi entrar con credencial de visitante de una empresa con nombre en alemán. Salió veinte minutos después con una caja de acrílico del tamaño de un libro.',
          },
          {
            lugar: 'Aeropuerto Internacional Mariano Escobedo',
            icono: '✈️',
            testigo: 'Agente de aduana',
            pista:
              'Declaró "muestras de laboratorio" en su maleta. El vuelo era directo a San José, California. Pagó la tarifa de exceso de equipaje sin chistar.',
          },
        ],
        libreta:
          'Nuevo León concentra el 8% del PIB nacional y su área metropolitana de Monterrey alberga a más de 5 millones de personas. Empresas como KIA, Samsung, Ternium y Cemex tienen operaciones ahí. El "nearshoring" post-pandemia trajo 30,000 millones de dólares de inversión extranjera a México en 2023, con Nuevo León como principal destino. La UANL y el Tecnológico de Monterrey forman ingenieros que nutren la industria.',
      },
      investigacion2: {
        narrativa:
          'El chip fue rastreado hasta un hotel de negocios en el área metropolitana de Monterrey. El sospechoso se hospedó bajo nombre falso pero usó tarjeta de crédito corporativa con razón social de Silicon Valley.',
        pista_mundial:
          'El "nearshoring" es la tendencia de reubicar producción cerca del consumidor final. Tras la guerra comercial entre EE.UU. y China (2018–2022), México se convirtió en el principal socio comercial de EE.UU. (superando a China en 2023). El T-MEC garantiza producción manufacturera en México con arancel cero hacia EE.UU., haciendo del norte mexicano la "fábrica de América del Norte".',
        libreta:
          'Monterrey, capital de Nuevo León, es la segunda ciudad industrial de México. El estado limita con Texas al norte, lo que facilita cadenas de suministro binacionales. Tiene 3 universidades en el top 10 nacional (UANL, ITESM, UDEM). El aeropuerto Mariano Escobedo conecta con 60 destinos internacionales. Temperatura promedio de 22°C y clima semiárido.',
      },
      reto: {
        enunciado:
          'Si Nuevo León recibió 30,000 millones de dólares de inversión en 2023 y esto representó el 25% de la inversión extranjera total en México ese año, ¿cuánto recibió México en total?',
        opciones_reto: ['80,000 MDD', '100,000 MDD', '120,000 MDD', '150,000 MDD'],
        respuesta_reto: '120,000 MDD',
        pista_resultado:
          '30,000 ÷ 0.25 = 120,000 millones de dólares. El chip fue rastreado al estado fronterizo con Texas que lidera la inversión industrial del país.',
      },
      opciones: ['Chihuahua', 'Tamaulipas', 'Nuevo León', 'Sonora'],
      respuesta_correcta: 'Nuevo León',
      explicacion:
        '¡Atrapado! Uniste las placas de Texas + el vuelo a San José California + los 120,000 MDD de inversión nacional y localizaste el chip en Nuevo León, el Silicon Valley del norte de México.',
      regla_oro_check: true,
    },
    {
      numero: 5,
      titulo: 'Energía Solar y Eólica',
      categoria: 'ciencia-y-saberes',
      concepto_clave: 'Energías renovables',
      materia: 'Geografía y Ciencias',
      estado_destino: 'Oaxaca',
      estado_slug: 'oaxaca',
      investigacion1: {
        narrativa:
          'Alguien robó el plano maestro del parque eólico más grande de México, ubicado en el istmo de un estado sureño conocido por sus vientos constantes. Los planos incluían la georreferenciación exacta de 300 aerogeneradores.',
        objeto_robado: 'Plano maestro Parque Eólico Istmo Sur (300 aerogeneradores)',
        lugares: [
          {
            lugar: 'Oficina CFE Juchitán',
            icono: '⚡',
            testigo: 'Técnico eléctrico',
            pista:
              'El que lo tomó llegó con mameluco naranja de empresa privada. Olía a aceite de turbina y preguntó por el archivo de "fase dos del corredor del viento".',
          },
          {
            lugar: 'Mercado Benito Juárez',
            icono: '🌽',
            testigo: 'Vendedora de tlayudas',
            pista:
              'Un señor alto, con casco naranja colgado en la mochila, compró memelas y preguntó cómo llegar al istmo tomando la carretera costera, no la autopista de cuota.',
          },
          {
            lugar: 'Puerto de Salina Cruz',
            icono: '⛵',
            testigo: 'Capitán de lancha',
            pista:
              'Me pagó para llevarlo al otro lado del golfo de Tehuantepec. Llevaba un tubo de planos enrollados. El viento era tan fuerte que casi nos vuelca.',
          },
        ],
        libreta:
          'Oaxaca posee el "Corredor Eólico del Istmo de Tehuantepec", con vientos de 9–12 m/s, entre los más constantes del mundo. Tiene capacidad instalada de más de 2,500 MW eólicos. El estado también lidera en energía solar con irradiación de 5.8 kWh/m²/día. México generó el 25% de su electricidad con renovables en 2023. El Istmo de Tehuantepec es el punto más estrecho entre el Atlántico y el Pacífico (215 km).',
      },
      investigacion2: {
        narrativa:
          'El sospechoso fue visto en la costa del Golfo de Tehuantepec, viajando en lancha con los planos. Su destino era una ciudad conocida como capital cultural de un estado con 16 grupos étnicos.',
        pista_mundial:
          'La transición energética global busca alcanzar cero emisiones netas para 2050 (Acuerdo de París, 2015). Dinamarca genera el 50% de su electricidad con viento. China instaló 75 GW de eólica en 2020 solo. México tiene el potencial técnico de generar 5 veces su demanda eléctrica actual solo con renovables, pero la inversión pública en CFE sigue siendo un obstáculo político.',
        libreta:
          'Oaxaca tiene 3.8 millones de habitantes y 570 municipios (el mayor número de México). Su capital, la Ciudad de Oaxaca, fue declarada Patrimonio de la Humanidad por la UNESCO en 1987. La Sierra Madre del Sur cubre el 80% del territorio. El Istmo de Tehuantepec fue propuesto como corredor interoceánico alternativo al Canal de Panamá (Corredor Interoceánico, inaugurado 2023).',
      },
      reto: {
        enunciado:
          'Si un aerogenerador produce 3 MW y el parque tiene 300 turbinas funcionando al 40% de su capacidad, ¿cuántos MW produce el parque en total?',
        opciones_reto: ['180 MW', '360 MW', '540 MW', '720 MW'],
        respuesta_reto: '360 MW',
        pista_resultado:
          '300 × 3 × 0.40 = 360 MW. El parque eólico está en el estado donde el viento del Istmo casi volcó la lancha del fugitivo.',
      },
      opciones: ['Veracruz', 'Guerrero', 'Oaxaca', 'Chiapas'],
      respuesta_correcta: 'Oaxaca',
      explicacion:
        '¡Atrapado! Uniste el viento del Golfo de Tehuantepec + la ruta a la "capital cultural con 16 grupos étnicos" + los 360 MW del parque y localizaste los planos en Oaxaca, líder en energía eólica de México.',
      regla_oro_check: true,
    },
    {
      numero: 6,
      titulo: 'Gastronomía Patrimonio Mundial',
      categoria: 'vida-cotidiana',
      concepto_clave: 'Patrimonio cultural inmaterial',
      materia: 'Historia y Cultura',
      estado_destino: 'Oaxaca',
      estado_slug: 'oaxaca',
      investigacion1: {
        narrativa:
          'Durante la ceremonia de la UNESCO en 2010 donde se reconoció la cocina mexicana como Patrimonio Cultural Inmaterial de la Humanidad, alguien robó el libro de recetas ceremoniales zapotecas más antiguo del mundo, resguardado en el Museo de las Culturas de un estado sureño.',
        objeto_robado: 'Libro de recetas zapotecas ceremoniales (Códice Culinario Siglo XVII)',
        lugares: [
          {
            lugar: 'Museo de las Culturas de Oaxaca',
            icono: '🏺',
            testigo: 'Guía de sala',
            pista:
              'La persona llegó con acento extranjero pero conocía las recetas de memoria. Preguntó si el mole negro llevaba "chiles pasilla oaxaqueños o mulatos". Solo alguien del lugar o muy estudioso sabría esa diferencia.',
          },
          {
            lugar: 'Mercado 20 de Noviembre',
            icono: '🫕',
            testigo: 'Cocinera del pasillo de humo',
            pista:
              'Lo vi salir corriendo con algo envuelto en tela de manta. El olor que dejó era de copal, el mismo que usan en las tumbas de Monte Albán.',
          },
          {
            lugar: 'Templo de Santo Domingo',
            icono: '⛪',
            testigo: 'Sacristán',
            pista:
              'Se confundió entre los turistas de la procesión del lunes. Tomó un taxi hacia el aeropuerto pero antes pasó por el zócalo a comprar una botella de mezcal artesanal. Sabía despedirse.',
          },
        ],
        libreta:
          'En 2010, la UNESCO inscribió la "cocina tradicional mexicana" en la Lista de Patrimonio Cultural Inmaterial de la Humanidad, siendo la primera gastronomía americana en lograrlo. Oaxaca tiene 7 moles: negro, rojo, coloradito, amarillo, verde, chichilo y manchamanteles. El estado produce el 80% del mezcal artesanal de México. Las cocinas comunales zapotecas tienen 3,000 años de historia ininterrumpida.',
      },
      investigacion2: {
        narrativa:
          'El libro fue visto en un mercado de antigüedades de la capital del mismo estado. El vendedor describió al comprador como alguien que pagó con billetes nuevos y preguntó por vuelos internacionales.',
        pista_mundial:
          'La UNESCO creó la Lista de Patrimonio Cultural Inmaterial en 2003 para proteger tradiciones no materiales: idiomas, rituales, gastronomía y artes. Francia fue el primero en inscribir su gastronomía (2010, mismo año que México). Japón tiene 22 elementos inscritos incluyendo el washoku (cocina tradicional). México tiene 9 elementos reconocidos, la gastronomía es el más conocido internacionalmente.',
        libreta:
          'El mezcal oaxaqueño se produce con agave espadín, tobalá y otras variedades silvestres. El estado tiene 570 municipios y 16 grupos étnicos (zapoteca, mixteca, mazateca, entre otros). Monte Albán, su sitio arqueológico más importante, es Patrimonio de la Humanidad desde 1987. El aeropuerto Xoxocotlán conecta con CDMX, Tijuana y destinos de EE.UU.',
      },
      reto: {
        enunciado:
          'Si Oaxaca produce el 80% del mezcal artesanal de México y en 2022 se exportaron 8 millones de litros al mundo, ¿cuántos litros de mezcal oaxaqueño se exportaron?',
        opciones_reto: [
          '4.8 millones de litros',
          '5.6 millones de litros',
          '6.4 millones de litros',
          '7.2 millones de litros',
        ],
        respuesta_reto: '6.4 millones de litros',
        pista_resultado:
          '8,000,000 × 0.80 = 6,400,000 litros. El ladrón compró mezcal artesanal antes de huir, típico souvenir del estado que custodia el libro de recetas zapotecas.',
      },
      opciones: ['Puebla', 'Guerrero', 'Chiapas', 'Oaxaca'],
      respuesta_correcta: 'Oaxaca',
      explicacion:
        '¡Atrapado! Uniste el copal de Monte Albán + el mezcal artesanal del zócalo + los 6.4 millones de litros exportados y recuperaste el libro de recetas en Oaxaca, corazón gastronómico de México.',
      regla_oro_check: true,
    },
    {
      numero: 7,
      titulo: 'Redes Sociales y Cultura Digital',
      categoria: 'vida-cotidiana',
      concepto_clave: 'Tecnología y sociedad',
      materia: 'Tecnología e Historia',
      estado_destino: 'Nuevo León',
      estado_slug: 'nuevo-leon',
      investigacion1: {
        narrativa:
          'En 2012, alguien robó el servidor principal de la primera red social mexicana con más de un millón de usuarios, creada en un campus universitario del norte del país. El servidor contenía datos de jóvenes de 30 estados.',
        objeto_robado: 'Servidor principal Red Social MX-1 (campus universitario norte)',
        lugares: [
          {
            lugar: 'Campus Tecnológico de Monterrey',
            icono: '🎓',
            testigo: 'Estudiante de Sistemas',
            pista:
              'Era un tipo joven con sudadera del MIT. Hablaba de "arquitectura distribuida" y preguntó por el cuarto de servidores como si fuera alumno de posgrado, pero nadie lo conocía.',
          },
          {
            lugar: 'Centro Comercial Galerías',
            icono: '🛍️',
            testigo: 'Guardia de estacionamiento',
            pista:
              'Llegó en un Tesla Model S con placas de Nuevo León. Cargó una caja grande al maletero y pagó con Apple Pay. Un chavo muy moderno para un trabajo tan raro.',
          },
          {
            lugar: 'Parque Fundidora',
            icono: '🏞️',
            testigo: 'Fotógrafo callejero',
            pista:
              'Lo fotografié sin querer mientras capturaba el monumento de los Acereros. Revisando la foto después, la caja que cargaba tenía etiqueta de empresa de hosting con dirección en San Pedro Garza García.',
          },
        ],
        libreta:
          'Monterrey es la ciudad con mayor penetración de internet en México (82% de hogares en 2022). El Tecnológico de Monterrey tiene 18 campus en México y es la universidad privada más grande del país. Nuevo León genera el 8% del PIB nacional pero el 15% de las exportaciones. San Pedro Garza García es el municipio con mayor ingreso per cápita de México (USD 27,000 anuales). El parque Fundidora ocupa el terreno de la antigua Fundidora de Fierro y Acero de Monterrey.',
      },
      investigacion2: {
        narrativa:
          'El servidor fue rastreado a un centro de datos en la zona metropolitana de Monterrey. El sospechoso creó una empresa fantasma con dirección en el municipio más rico de México.',
        pista_mundial:
          'Las redes sociales transformaron la comunicación global: Facebook pasó de 0 a 1,000 millones de usuarios entre 2004 y 2012. Twitter fue clave en la Primavera Árabe (2010–2011). En México, Twitter fue la red más influyente en movimientos políticos como el #YoSoy132 (2012), donde estudiantes universitarios protestaron contra la cobertura mediática sesgada. TikTok superó a Google como sitio más visitado en 2021.',
        libreta:
          'Nuevo León limita al norte con Texas (EE.UU.), al este con Tamaulipas, al sur con Tamaulipas y San Luis Potosí, y al oeste con Coahuila y Zacatecas. Su capital, Monterrey, tiene el apodo de "La Sultana del Norte". El Cerro de la Silla es su símbolo natural más reconocible. La industria siderúrgica fue su base histórica; hoy lidera en tecnología, manufactura y servicios financieros.',
      },
      reto: {
        enunciado:
          'Si el 82% de los hogares de Monterrey tiene internet y la ciudad tiene 1.1 millones de hogares, ¿cuántos hogares tienen acceso a internet?',
        opciones_reto: ['750,000 hogares', '820,000 hogares', '902,000 hogares', '950,000 hogares'],
        respuesta_reto: '902,000 hogares',
        pista_resultado:
          '1,100,000 × 0.82 = 902,000 hogares. El servidor robado terminó en la ciudad con mayor conectividad de México, capital del estado que lidera la cultura digital del norte.',
      },
      opciones: ['Jalisco', 'Chihuahua', 'Nuevo León', 'Baja California'],
      respuesta_correcta: 'Nuevo León',
      explicacion:
        '¡Atrapado! Uniste el campus del Tecnológico + San Pedro Garza García + los 902,000 hogares conectados y recuperaste el servidor en Nuevo León, capital digital del norte de México.',
      regla_oro_check: true,
    },
    {
      numero: 8,
      titulo: 'El Matrimonio Igualitario',
      categoria: 'civismo-y-etica',
      concepto_clave: 'Derechos civiles y reforma legal',
      materia: 'Civismo y Derecho',
      estado_destino: 'Ciudad de México',
      estado_slug: 'cdmx',
      investigacion1: {
        narrativa:
          'En 2010, alguien robó el expediente original de la primera ley de matrimonio igualitario aprobada en América Latina. El documento, firmado por el Jefe de Gobierno, estaba guardado en los archivos del Registro Civil del corazón de la capital mexicana.',
        objeto_robado: 'Expediente original Ley de Matrimonio Igualitario CDMX 2010',
        lugares: [
          {
            lugar: 'Registro Civil de la Asamblea',
            icono: '📋',
            testigo: 'Oficial del Registro',
            pista:
              'La persona que lo tomó llevaba un folder con el logo de la SCJN. Conocía los trámites por dentro: sabía exactamente qué ventanilla pedía qué documento, sin preguntar.',
          },
          {
            lugar: 'Alameda Central',
            icono: '🌳',
            testigo: 'Vendedor de globos',
            pista:
              'Vi a alguien leyendo papeles legales en la banca frente al Palacio de Bellas Artes. Tenía cara de alivio, como cuando terminas algo que tardó muchos años.',
          },
          {
            lugar: 'Metro Bellas Artes',
            icono: '🚇',
            testigo: 'Músico del andén',
            pista:
              'Bajó a la Línea 8 con destino Garibaldi. Llevaba un sobre manila sellado con cinta roja y etiqueta que decía "SCJN – Confidencial". Me lo contó el taquillero.',
          },
        ],
        libreta:
          'El 21 de diciembre de 2009, la Asamblea Legislativa del DF aprobó la reforma al Código Civil que permitía el matrimonio entre personas del mismo sexo, con 39 votos a favor y 20 en contra. Entró en vigor el 4 de marzo de 2010. La Suprema Corte de Justicia de la Nación (SCJN) validó su constitucionalidad en agosto de 2010. Para 2022, los 31 estados y la CDMX lo reconocen. México fue el segundo país de América Latina en legalizarlo (tras Argentina en 2010 a nivel nacional).',
      },
      investigacion2: {
        narrativa:
          'El expediente apareció en un bufete jurídico del Centro Histórico. El abogado que lo poseía argumentó que lo había "rescatado" para documentar el proceso histórico. Los detectives lo ubicaron en la ciudad donde fue redactada y aprobada la ley.',
        pista_mundial:
          'Países Bajos fue el primero en legalizar el matrimonio igualitario en el mundo (2001). En 2015, EE.UU. lo legalizó en todos sus estados tras el fallo Obergefell v. Hodges. Para 2024, más de 35 países lo reconocen. México es el país latinoamericano con más estados que lo garantizan (32 de 32). La ONU considera el matrimonio igualitario un derecho humano bajo el principio de no discriminación.',
        libreta:
          'La Ciudad de México tiene 16 alcaldías y es la única entidad federativa que no es un estado. Tiene autogobierno desde 2016 (antes era el Distrito Federal administrado por el ejecutivo federal). La SCJN tiene su sede en el Centro Histórico de la CDMX. El Registro Civil capitalino registra 50,000 matrimonios anuales. La CDMX fue pionera en legislación de género, identidad y diversidad sexual en México.',
      },
      reto: {
        enunciado:
          'Si la ley fue aprobada con 39 votos a favor de 59 legisladores totales, ¿qué porcentaje votó a favor (redondeado al número entero más cercano)?',
        opciones_reto: ['55%', '61%', '66%', '72%'],
        respuesta_reto: '66%',
        pista_resultado:
          '39 ÷ 59 × 100 ≈ 66%. Dos tercios de los legisladores apoyaron la ley en la ciudad que fue la primera en América Latina en aprobarla.',
      },
      opciones: ['Jalisco', 'Nuevo León', 'Puebla', 'Ciudad de México'],
      respuesta_correcta: 'Ciudad de México',
      explicacion:
        '¡Atrapado! Uniste el Registro Civil de la Asamblea + la SCJN del Centro Histórico + el 66% de votos a favor y recuperaste el expediente en Ciudad de México, pionera de derechos civiles en América Latina.',
      regla_oro_check: true,
    },
    {
      numero: 9,
      titulo: 'Las Consultas Populares',
      categoria: 'civismo-y-etica',
      concepto_clave: 'Democracia participativa',
      materia: 'Civismo e Historia',
      estado_destino: 'Ciudad de México',
      estado_slug: 'cdmx',
      investigacion1: {
        narrativa:
          'En agosto de 2021, alguien robó las urnas originales de la primera consulta popular federal en la historia de México. Las urnas habían sido usadas para que los ciudadanos votaran si se juzgaba a expresidentes, y debían guardarse en el INE como evidencia histórica.',
        objeto_robado: 'Urnas originales Consulta Popular Federal 2021 (INE)',
        lugares: [
          {
            lugar: 'Sede Central del INE',
            icono: '🗳️',
            testigo: 'Consejero electoral',
            pista:
              'El que las tomó tenía credencial de visitante expedida esa misma mañana. Conocía el código del almacén de actas. O tenía cómplice adentro o había estudiado el edificio durante semanas.',
          },
          {
            lugar: 'Viaducto Miguel Alemán',
            icono: '🚗',
            testigo: 'Taxista',
            pista:
              'Me pidió que manejara despacio por el Anillo Periférico. Llevaba una caja de cartón con logo del INE y no paraba de ver el espejo retrovisor. Bajó en Insurgentes Sur.',
          },
          {
            lugar: 'Universidad Iberoamericana',
            icono: '📚',
            testigo: 'Estudiante de Derecho',
            pista:
              'Lo vi entrando a la biblioteca jurídica con la caja. Preguntó por libros sobre "referéndum revocatorio". Parecía más académico que delincuente.',
          },
        ],
        libreta:
          'La Consulta Popular del 1 de agosto de 2021 fue la primera en la historia de México a nivel federal, establecida por el artículo 35 constitucional reformado en 2019. Participaron 7.1 millones de ciudadanos (6.7% del padrón electoral). La pregunta era si se debía investigar judicialmente a expresidentes. El INE organizó 57,000 casillas en todo el país. La sede central del INE está en Periférico Sur, en la CDMX.',
      },
      investigacion2: {
        narrativa:
          'Las urnas fueron encontradas en una colonia al sur de la capital, en el domicilio de un investigador político. El sospechoso argumentó que quería estudiar el mecanismo de participación ciudadana.',
        pista_mundial:
          'Los referéndums y consultas populares son instrumentos de democracia directa. Suiza es el país con más referéndums: realiza 4–5 por año desde 1848. En Bolivia (2004) y Ecuador (2008) se usaron para aprobar constituciones. Italia celebra referéndums frecuentes (el más famoso: 1946, monarquía vs. república). México tiene también la figura de "revocación de mandato", usada por primera vez en 2022 para el presidente López Obrador.',
        libreta:
          'El INE (Instituto Nacional Electoral) tiene 32 juntas locales en todo el país y su sede central está en la CDMX. El padrón electoral mexicano tiene más de 93 millones de ciudadanos (2021). La Constitución de 1917 prevé la participación ciudadana, pero los mecanismos de democracia directa (consulta, iniciativa ciudadana, revocación) se reglamentaron hasta 2014–2019. El artículo 35 constitucional lista los derechos del ciudadano.',
      },
      reto: {
        enunciado:
          'Si votaron 7.1 millones de ciudadanos de un padrón de 93 millones, ¿qué porcentaje del padrón participó? (Redondea a un decimal.)',
        opciones_reto: ['5.2%', '6.7%', '7.6%', '8.9%'],
        respuesta_reto: '7.6%',
        pista_resultado:
          '7.1 ÷ 93 × 100 ≈ 7.6%. La participación fue baja, pero histórica: fue la primera consulta federal de México y sus urnas terminaron en la capital donde el INE tiene su sede.',
      },
      opciones: ['Querétaro', 'Estado de México', 'Hidalgo', 'Ciudad de México'],
      respuesta_correcta: 'Ciudad de México',
      explicacion:
        '¡Atrapado! Uniste la sede del INE en Periférico Sur + la colonia al sur de la capital + el 7.6% de participación histórica y recuperaste las urnas en Ciudad de México, epicentro de la democracia participativa mexicana.',
      regla_oro_check: true,
    },
    {
      numero: 10,
      titulo: 'México en el Siglo XXI Global',
      categoria: 'cruce-global',
      concepto_clave: 'Integración económica global',
      materia: 'Geografía y Economía',
      estado_destino: 'Nuevo León',
      estado_slug: 'nuevo-leon',
      investigacion1: {
        narrativa:
          'En 2023, alguien robó el contrato original del mayor acuerdo de inversión extranjera en la historia de México: una planta de vehículos eléctricos de una empresa alemana que eligió el norte del país como sede de su operación latinoamericana.',
        objeto_robado: 'Contrato inversión planta automotriz nearshoring NL-2023',
        lugares: [
          {
            lugar: 'Secretaría de Economía, Oficina Norte',
            icono: '💼',
            testigo: 'Subsecretario de Inversión',
            pista:
              'El visitante llegó con traje gris y maletín plateado. Habló en alemán por teléfono antes de entrar. Salió con una carpeta sellada que no traía cuando llegó.',
          },
          {
            lugar: 'Zona Industrial Santa Catarina',
            icono: '🏗️',
            testigo: 'Obrero de construcción',
            pista:
              'Un carro negro blindado recogió a un traje gris en la entrada de la planta en construcción. La placa decía "Monterrey" y el tipo no pisó el barro: fue directo del auto a la oficina móvil.',
          },
          {
            lugar: 'Hotel Quinta Real Monterrey',
            icono: '🏨',
            testigo: 'Gerente del hotel',
            pista:
              'Se hospedó tres noches bajo el nombre de una empresa de consultoría de Frankfurt. En su cuarto encontramos folletos de parques industriales en Apodaca, García y Santa Catarina.',
          },
        ],
        libreta:
          'En 2023, México superó a China como principal socio comercial de EE.UU., con intercambio bilateral de 798,000 millones de dólares. Nuevo León recibió el 25% de la inversión extranjera directa de México ese año. El T-MEC (Tratado entre México, EE.UU. y Canadá, en vigor desde 2020) sustituyó al TLCAN. El "nearshoring" trajo empresas como Tesla, BMW, Samsung y TSMC a México. La zona metropolitana de Monterrey es el clúster industrial más diversificado del país.',
      },
      investigacion2: {
        narrativa:
          'El contrato fue encontrado en una suite de hotel de negocios en la zona metropolitana de Monterrey. El sospechoso planeaba vender una copia a un consorcio rival, pero fue detenido en el aeropuerto mientras compraba boleto a Frankfurt.',
        pista_mundial:
          'El T-MEC (2020) es el tratado comercial más grande del mundo por PIB combinado: EE.UU. + México + Canadá = 29 billones de dólares. El Brexit (2020) mostró los riesgos del proteccionismo: Reino Unido perdió el 4% de su PIB en 5 años. La "desglobalización" post-COVID aceleró el nearshoring: las empresas acortaron cadenas de suministro. México tiene 13 tratados de libre comercio con 50 países, más que cualquier nación latinoamericana.',
        libreta:
          'Nuevo León tiene 5.8 millones de habitantes y su PIB per cápita es el más alto entre los estados no petroleros de México (USD 18,000). Monterrey tiene el aeropuerto con más vuelos internacionales del norte de México. Los parques industriales de Apodaca, Santa Catarina y García concentran 600 empresas de manufactura avanzada. La UANL y el ITESM forman 40,000 ingenieros al año, la mayor oferta de talento técnico de América Latina.',
      },
      reto: {
        enunciado:
          'Si el intercambio comercial México–EE.UU. fue de 798,000 millones de dólares y las exportaciones mexicanas representaron el 55% del total, ¿cuánto exportó México a EE.UU. en 2023?',
        opciones_reto: ['389,000 MDD', '415,000 MDD', '439,000 MDD', '461,000 MDD'],
        respuesta_reto: '439,000 MDD',
        pista_resultado:
          '798,000 × 0.55 = 438,900 ≈ 439,000 MDD. México exportó más que nunca a EE.UU., liderado por el estado fronterizo que concentra el 25% de la inversión extranjera: Nuevo León.',
      },
      opciones: ['Chihuahua', 'Coahuila', 'Tamaulipas', 'Nuevo León'],
      respuesta_correcta: 'Nuevo León',
      explicacion:
        '¡Atrapado! Uniste el traje alemán de Frankfurt + los parques industriales de Apodaca y Santa Catarina + los 439,000 MDD de exportaciones y recuperaste el contrato en Nuevo León, motor económico del México del siglo XXI.',
      regla_oro_check: true,
    },
  ],
};

export default contemporaneo;
