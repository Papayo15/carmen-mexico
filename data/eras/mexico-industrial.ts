import type { Era } from '@/lib/types';
const mexicoIndustrial: Era = {
  metadata: {
    slug:'mexico-industrial', titulo:'México Industrial', periodo:'1940 – 1970 d.C.',
    estados_principales:['Ciudad de México','Jalisco','Nuevo León'],
    icono:'🏗️', color:'bg-blue-800', colorText:'text-blue-900', orden:14,
  },
  casos:[
    { numero:1, titulo:'El Milagro Mexicano', subtitulo:'Ciudad de México',
      categoria:'grandes-hitos', concepto_clave:'El crecimiento económico sostenido',
      materia:'Historia / Geografía', estado_destino:'Ciudad de México', estado_slug:'cdmx',
      pista:'El economista del tiempo dice: "Durante más de veinte años consecutivos, la economía del país creció a tasas que eran la envidia de América Latina. La inflación era baja, el peso era estable y las fábricas surgían en todas las grandes ciudades. Los economistas del mundo estudiaban el caso como un modelo exitoso. El centro de ese crecimiento era la capital."',
      libreta:`Milagro Mexicano: años 1940–1970 — crecimiento anual promedio del 6.5%
Política: Industrialización por Sustitución de Importaciones (ISI) — aranceles proteccionistas
Inflación: Menos del 5% anual (comparado con 10–15% en Brasil o Argentina)
Estabilidad cambiaria: Tipo de cambio de 12.50 pesos/dólar — fijo de año 1954 a año 1976
Industrias líderes: Automotriz, química, siderúrgica, cemento, alimentos procesados
Concentración urbana: CDMX pasó de 1.8 millones (año 1940) a 8.5 millones de habitantes (año 1970)`,
      opciones:['Ciudad de México','Monterrey','Guadalajara','Puebla'],
      respuesta_correcta:'Ciudad de México',
      explicacion:'La Ciudad de México fue el epicentro del "Milagro Mexicano" (1940-1970): creció de 1.8 a 8.5 millones de habitantes. La política de Sustitución de Importaciones protegió la industria nacional. El tipo de cambio fijo de 12.50 pesos/dólar (1954-1976) garantizó la estabilidad. El 6.5% de crecimiento anual fue sostenido por más de dos décadas.',
      regla_oro_check:true },
    { numero:2, titulo:'Televisa y los Medios Masivos', subtitulo:'Ciudad de México',
      categoria:'grandes-hitos', concepto_clave:'La televisión y la cultura de masas en México',
      materia:'Historia / Arte', estado_destino:'Ciudad de México', estado_slug:'cdmx',
      pista:'El productor del tiempo dice: "La primera transmisión de televisión en el país se hizo desde un edificio de la capital en el año en que empezó la guerra de Corea. Durante las siguientes dos décadas, la empresa que controlaba las ondas del aire moldearía los gustos, las modas y las opiniones de millones de mexicanos desde sus estudios en la capital."',
      libreta:`Primera transmisión de TV: 1 de septiembre de año 1950 — Canal 4 (XHTV), CDMX
Personaje clave: Rómulo O'Farrill — primer concesionario de TV en México
Telesistema Mexicano: fusión de canales en año 1955 → Televisa: fusión en año 1973
Telenovelas: Primer género de producción masiva — Senda Prohibida (año 1958), primera telenovela
Penetración: En año 1970, más del 50% de hogares urbanos tenía televisor
Sede permanente: Estudios Televisa Televicentro — Av. Chapultepec, CDMX`,
      opciones:['Ciudad de México','Guadalajara','Monterrey','Veracruz'],
      respuesta_correcta:'Ciudad de México',
      explicacion:'La televisión mexicana nació en la Ciudad de México el 1 de septiembre de 1950 (Canal 4, XHTV). Televisa se consolidó en 1973 como el monopolio televisivo desde sus estudios en Av. Chapultepec. La primera telenovela "Senda Prohibida" (1958) estableció el género que dominaría la TV latinoamericana por décadas.',
      regla_oro_check:true },
    { numero:3, titulo:'Tlatelolco: 2 de Octubre de 1968', subtitulo:'Ciudad de México',
      categoria:'grandes-hitos', concepto_clave:'La masacre estudiantil y la apertura democrática',
      materia:'Formación Cívica / Historia', estado_destino:'Ciudad de México', estado_slug:'cdmx',
      pista:'El estudiante del tiempo dice: "Diez días antes de que los Juegos Olímpicos abrieran en nuestra ciudad, el ejército y los granaderos rodearon la plaza donde nos reuníamos. Los disparos empezaron sin que nadie supiera quién lo ordenó. El número de muertos que el gobierno reconoció fue menor al real. Esa plaza y esa fecha son los dos símbolos de la represión de nuestro movimiento."',
      libreta:`Fecha: 2 de octubre de año 1968 — 10 días antes de la inauguración de los Juegos Olímpicos
Lugar: Plaza de las Tres Culturas, Tlatelolco, CDMX
Muertos oficialmente reconocidos: 30–40 (cifra real estimada: 200–300)
Responsable: Batallón Olimpia (agentes del gobierno infiltrados) + ejército + policía
Juegos Olímpicos de México: 12–27 de octubre de año 1968 — primeros en América Latina
Consecuencia política: Detonó la apertura democrática de los años 1970s (Luis Echeverría)`,
      opciones:['Ciudad de México','Guadalajara','Puebla','Monterrey'],
      respuesta_correcta:'Ciudad de México',
      explicacion:'La Plaza de las Tres Culturas en Tlatelolco, CDMX, fue el escenario de la masacre del 2 de octubre de 1968. El gobierno reconoció 30-40 muertos; investigaciones posteriores estiman 200-300. Los Juegos Olímpicos continuaron 10 días después. El movimiento estudiantil de 1968 detonó gradualmente la apertura democrática mexicana.',
      regla_oro_check:true },
    { numero:4, titulo:'El IMSS: Salud para Todos', subtitulo:'Ciudad de México',
      categoria:'ciencia-y-saberes', concepto_clave:'El sistema de salud pública y la demografía',
      materia:'Ciencias / Formación Cívica', estado_destino:'Ciudad de México', estado_slug:'cdmx',
      pista:'El médico del tiempo dice: "En el año de la Segunda Guerra Mundial, el gobierno creó la institución que cubriría la salud de los trabajadores y sus familias. Con ella llegaron clínicas a ciudades que antes no tenían hospital. La mortalidad infantil bajó de manera dramática y la esperanza de vida de los mexicanos creció años en cada década. La sede central siempre fue la capital."',
      libreta:`IMSS: Instituto Mexicano del Seguro Social — fundado el 19 de enero de año 1943
Cobertura inicial: Trabajadores asalariados del sector formal urbano
Modelo: Tripartita — aportaciones del trabajador + empleador + gobierno
Mortalidad infantil en año 1940: 125 por cada 1,000 nacidos vivos
Mortalidad infantil en año 1970: 68 por cada 1,000 — reducción del 45%
Esperanza de vida en año 1940: 41 años; en año 1970: 62 años`,
      opciones:['Ciudad de México','Monterrey','Guadalajara','Puebla'],
      respuesta_correcta:'Ciudad de México',
      explicacion:'El IMSS fue fundado en la Ciudad de México el 19 de enero de 1943, en plena Segunda Guerra Mundial. Su modelo tripartita (trabajador + empleador + gobierno) redujo la mortalidad infantil de 125 a 68 por mil en 30 años. La esperanza de vida aumentó de 41 a 62 años entre 1940 y 1970 — el mayor salto demográfico de la historia mexicana.',
      regla_oro_check:true },
    { numero:5, titulo:'El Petróleo y la Petroquímica', subtitulo:'Veracruz',
      categoria:'ciencia-y-saberes', concepto_clave:'La industrialización basada en recursos naturales',
      materia:'Ciencias / Geografía', estado_destino:'Veracruz', estado_slug:'veracruz',
      pista:'El ingeniero petrolero dice: "Con el petróleo ya en manos del Estado, el siguiente paso fue transformarlo en productos industriales. Las instalaciones más grandes para ese proceso se construyeron en el estado del Golfo, cerca de los pozos. La ciudad que nació de ese proceso industrial se llamó así literalmente: Ciudad Industrial."',
      libreta:`Petroquímica Básica: monopolio de PEMEX desde año 1960 (reforma constitucional)
Complejo Petroquímico de Pajaritos: inaugurado año 1956 — Coatzacoalcos, Veracruz
Ciudad industrial: Coatzacoalcos — apodada "La Ciudad del Petróleo"
Productos petroquímicos: Etileno, propileno, amoniaco, metanol — base de fertilizantes y plásticos
Refinería de Minatitlán (Veracruz): Una de las más antiguas de México — en operación desde año 1914
PIB de Veracruz gracias al petróleo (año 1970): ~20% del PIB estatal provenía del sector energético`,
      opciones:['Veracruz','Tabasco','Campeche','Tamaulipas'],
      respuesta_correcta:'Veracruz',
      explicacion:'Coatzacoalcos (Veracruz) fue el corazón de la petroquímica mexicana. El Complejo Petroquímico de Pajaritos (1956) y la refinería de Minatitlán (en operación desde 1914) convirtieron a Veracruz en el estado energético por excelencia. El petroquímico producía etileno y amoniaco, base de fertilizantes que impulsaron la Revolución Verde en la agricultura.',
      regla_oro_check:true },
    { numero:6, titulo:'El Estadio Azteca y el Fútbol', subtitulo:'Ciudad de México',
      categoria:'vida-cotidiana', concepto_clave:'El deporte y la identidad nacional',
      materia:'Arte / Formación Cívica', estado_destino:'Ciudad de México', estado_slug:'cdmx',
      pista:'El aficionado del tiempo dice: "En el año de las olimpiadas, se inauguró el coloso que sería el escenario de dos mundiales de fútbol y del gol más famoso de la historia. La cancha más grande de América Latina está en el sur de la capital. Ahí Pelé marcó una semifinal y décadas después una mano de otro jugador cambió la historia de otro mundial."',
      libreta:`Estadio Azteca: inaugurado el 29 de mayo de año 1966
Capacidad original: 105,000 espectadores (el más grande del mundo en su época)
Diseñador: Pedro Ramírez Vázquez + Rafael Mijares Alcérreca
Mundiales albergados: México 1970 (Pelé, Brasil campeón) + México 1986 (Argentina campeón)
"El gol del siglo": Diego Maradona vs. Inglaterra — 22 de junio de año 1986
Ubicación: Xochimilco/Tlalpan, Ciudad de México — sur de la capital`,
      opciones:['Ciudad de México','Guadalajara','Monterrey','Puebla'],
      respuesta_correcta:'Ciudad de México',
      explicacion:'El Estadio Azteca fue inaugurado en 1966 en el sur de la Ciudad de México con capacidad para 105,000 espectadores. Albergó dos Copas del Mundo (1970 y 1986). En 1986, el gol de Maradona a mano ("la mano de Dios") y el "gol del siglo" contra Inglaterra se marcaron en esa cancha. Pedro Ramírez Vázquez también diseñó el Museo de Antropología.',
      regla_oro_check:true },
    { numero:7, titulo:'La Torta Ahogada y la Cocina Urbana', subtitulo:'Jalisco',
      categoria:'vida-cotidiana', concepto_clave:'La gastronomía popular del México industrial',
      materia:'Historia / Ciencias', estado_destino:'Jalisco', estado_slug:'jalisco',
      pista:'La cocinera tapatía dice: "La comida de las ciudades obreras industriales no era la de los restaurantes elegantes: era la de los puestos callejeros, los mercados y las fondas. El pan ahogado en salsa picante que nació en la capital del estado del mariachi se convirtió en el símbolo de la comida obrera del occidente. Hoy es Patrimonio Cultural del estado."',
      libreta:`Torta ahogada: Especialidad culinaria de Guadalajara, Jalisco
Ingredientes: Birote salado (pan crujiente de Guadalajara) + carnitas + salsa de chile de árbol
Origen documentado: Siglo XX — relacionado con la cultura obrera e industrial de Guadalajara
Birote: Pan de corteza muy dura — adaptado para no ablandarse con la salsa
Guadalajara: Segunda ciudad más grande de México — área metropolitana de 5 millones
Patrimonio gastronómico de Jalisco: Birria, pozole, tejuino, torta ahogada`,
      opciones:['Jalisco','Sinaloa','Colima','Michoacán'],
      respuesta_correcta:'Jalisco',
      explicacion:'La torta ahogada es el emblema gastronómico de Guadalajara, Jalisco. El birote, pan de corteza extra dura, fue diseñado precisamente para resistir la inmersión en salsa. Guadalajara, segunda ciudad del país con 5 millones en su área metropolitana, desarrolló su propia gastronomía urbana durante el período industrial. La birria y el pozole son también patrimonio jalisciense.',
      regla_oro_check:true },
    { numero:8, titulo:'El Sindicalismo Oficial', subtitulo:'Ciudad de México',
      categoria:'civismo-y-etica', concepto_clave:'Los sindicatos y su relación con el Estado',
      materia:'Formación Cívica / Historia', estado_destino:'Ciudad de México', estado_slug:'cdmx',
      pista:'El líder sindical del tiempo dice: "En el México industrial, los sindicatos no eran independientes del gobierno: eran parte de la estructura del partido. Los trabajadores tenían derechos laborales en papel, pero sus líderes negociaban con el gobierno, no con los patrones. La sede del sindicato más poderoso del país estaba en la capital."',
      libreta:`CTM: Confederación de Trabajadores de México — fundada en año 1936
Líder histórico: Fidel Velázquez — secretario general casi ininterrumpido desde año 1950 hasta año 1997
Modelo: "Sindicalismo corporativo" — sindicatos integrados al PRI, no independientes
Derechos garantizados por ley: Jornada de 8 horas, salario mínimo, aguinaldo, IMSS
Control político: Cambio de líderes sindicales por decreto presidencial — "charros sindicales"
Sede CTM: Ciudad de México — integrada al sector obrero del PRI`,
      opciones:['Ciudad de México','Monterrey','Guadalajara','Puebla'],
      respuesta_correcta:'Ciudad de México',
      explicacion:'La CTM (1936) fue la columna vertebral del sindicalismo mexicano, con sede en la Ciudad de México e integrada al PRI. Fidel Velázquez la controló casi 50 años (1950-1997). El modelo "corporativo" garantizaba derechos laborales en papel pero subordinaba a los trabajadores al partido. Los "charros sindicales" —líderes impuestos por el gobierno— son el símbolo de esa contradicción.',
      regla_oro_check:true },
    { numero:9, titulo:'La CONASUPO y el Abasto Popular', subtitulo:'Ciudad de México',
      categoria:'civismo-y-etica', concepto_clave:'El Estado como garante de la alimentación básica',
      materia:'Formación Cívica / Ciencias', estado_destino:'Ciudad de México', estado_slug:'cdmx',
      pista:'La ama de casa del tiempo dice: "En la tienda del gobierno podíamos comprar tortillas, frijoles, aceite y leche a precios que los pobres podíamos pagar. El gobierno compraba el maíz a los campesinos a precio garantizado y lo vendía a los consumidores urbanos subsidiado. Era un sistema que unía el campo con la ciudad a través de una cadena de tiendas públicas."',
      libreta:`CONASUPO: Compañía Nacional de Subsistencias Populares — fundada en año 1961
Antecedente: CEIMSA (año 1938) — empresa de abasto creada por Cárdenas
Función: Comprar cosechas a precio garantizado + vender alimentos básicos subsidiados
Red de tiendas: Más de 23,000 puntos de venta en zonas urbanas y rurales en su auge
Productos: Maíz, frijol, arroz, aceite, leche LICONSA — el 80% de la canasta básica
Desaparición: Liquidada en año 1999 — dentro de las reformas neoliberales del TLC`,
      opciones:['Ciudad de México','Jalisco','Veracruz','Puebla'],
      respuesta_correcta:'Ciudad de México',
      explicacion:'CONASUPO (1961) fue la empresa estatal de abasto más grande de México, con sede y dirección en la Ciudad de México. Su red de 23,000 tiendas llegaba a zonas marginadas. Compraba maíz a los campesinos a precio garantizado y vendía tortillas y leche subsidiadas a los pobres urbanos. Fue liquidada en 1999 dentro de las reformas del TLC.',
      regla_oro_check:true },
    { numero:10, titulo:'México Industrial y la Guerra Fría', subtitulo:'Cruce Global',
      categoria:'cruce-global', concepto_clave:'México entre el capitalismo y el socialismo',
      materia:'Historia Universal', estado_destino:'Ciudad de México', estado_slug:'cdmx',
      pista:'El diplomático del tiempo dice: "México jugó un papel peculiar durante la guerra entre los dos bloques: era aliado del sistema capitalista por ser vecino del norte, pero mantenía relaciones diplomáticas con Cuba cuando todos los demás del continente las rompían. Esa posición independiente le dio poder negociador en Naciones Unidas y en América Latina. La postura se manejaba desde la capital."',
      libreta:`Guerra Fría: años 1947–1991 — enfrentamiento EUA vs. URSS
Posición de México: "Tercera vía" — capitalista pero con retórica antiimperialista
Cuba: México fue el único país de América Latina en mantener relaciones con Cuba post-1961
Doctrina Estrada (año 1930): No intervención en asuntos de otros países — principio diplomático mexicano
Tlatelolco (año 1967): Tratado que declaró América Latina zona libre de armas nucleares — firmado en CDMX
Crisis de los misiles de Cuba (año 1962): México no participó en el bloqueo — posición neutral`,
      opciones:['Ciudad de México','Veracruz','Monterrey','Jalisco'],
      respuesta_correcta:'Ciudad de México',
      explicacion:'La Ciudad de México fue el centro de la política exterior mexicana durante la Guerra Fría. México fue el único país latinoamericano que no rompió relaciones con Cuba post-1961. El Tratado de Tlatelolco (1967), que declaró América Latina zona libre de armas nucleares, fue firmado en el CDMX. La Doctrina Estrada de no intervención (1930) fue el principio que guió esa postura.',
      regla_oro_check:true },
  ],
};
export default mexicoIndustrial;
