import type { Era } from '@/lib/types';
const crisis: Era = {
  metadata: {
    slug:'crisis', titulo:'Crisis y Modernización', periodo:'1970 – 2000 d.C.',
    estados_principales:['Ciudad de México','Chiapas','Nuevo León'],
    icono:'📉', color:'bg-purple-800', colorText:'text-purple-900', orden:15,
  },
  casos:[
    { numero:1, titulo:'La Crisis de 1982', subtitulo:'Ciudad de México',
      categoria:'grandes-hitos', concepto_clave:'La deuda externa y el fin del Milagro Mexicano',
      materia:'Historia / Geografía', estado_destino:'Ciudad de México', estado_slug:'cdmx',
      pista:'El ministro de finanzas del tiempo dice: "El viernes negro llegó en el verano del año 1982. Anunciamos al mundo que México no podía pagar sus deudas. El peso se devaluó de golpe y los ahorradores perdieron la mitad de su dinero en días. Los bancos fueron nacionalizados de urgencia. Fue la crisis económica más grave del siglo XX en el país, manejada desde la capital."',
      libreta:`Crisis de deuda: 12 de agosto de año 1982 — México suspende pagos de deuda externa
Deuda externa en año 1982: 87,000 millones de dólares — la mayor de América Latina en ese momento
Devaluación: Peso pasó de 26 a 148 pesos/dólar en año 1982 (devaluación del 470%)
Nacionalización bancaria: 1 de septiembre de año 1982 — decreto de José López Portillo
Causa raíz: Caída del precio del petróleo + tasas de interés internacionales al alza
Consecuencia: FMI impuso programas de ajuste estructural — privatizaciones y recortes sociales`,
      opciones:['Ciudad de México','Monterrey','Guadalajara','Veracruz'],
      respuesta_correcta:'Ciudad de México',
      explicacion:'La crisis del 12 de agosto de 1982 fue el fin del modelo económico del Milagro Mexicano. México suspendió pagos de una deuda de 87,000 millones de dólares, la mayor de América Latina. El peso pasó de 26 a 148 por dólar. López Portillo nacionalizó la banca el 1 de septiembre. Las medidas del FMI detonaron una década perdida de austeridad.',
      regla_oro_check:true },
    { numero:2, titulo:'El Terremoto de 1985', subtitulo:'Ciudad de México',
      categoria:'grandes-hitos', concepto_clave:'El desastre y la sociedad civil organizada',
      materia:'Historia / Ciencias', estado_destino:'Ciudad de México', estado_slug:'cdmx',
      pista:'El rescatista del tiempo dice: "En la madrugada del día 19 del noveno mes del año 1985, el suelo de la capital tembló durante dos minutos que parecieron eternos. Miles de edificios cayeron. El gobierno no dio respuesta suficiente y fue la gente común la que organizó las brigadas de rescate sin que nadie lo ordenara. Ese día nació la sociedad civil organizada de México."',
      libreta:`Terremoto: 19 de septiembre de año 1985 — 7:19 a.m. hora local
Magnitud: 8.1 Mw (escala de momento sísmico)
Muertos oficiales: 6,000–10,000 (estimaciones no oficiales: 20,000–40,000)
Edificios derrumbados: más de 800 en la CDMX — mayormente del Gobierno Federal
Zona de licuefacción: El antiguo lago de Texcoco — suelo blando amplificó las ondas sísmicas
Consecuencia política: Pérdida de confianza en el PRI; nacimiento de organizaciones civiles independientes`,
      opciones:['Ciudad de México','Jalisco','Colima','Guerrero'],
      respuesta_correcta:'Ciudad de México',
      explicacion:'El terremoto del 19 de septiembre de 1985 (8.1 Mw) destruyó más de 800 edificios en la Ciudad de México. La licuefacción del suelo del antiguo lago de Texcoco amplificó las ondas sísmicas. La respuesta insuficiente del gobierno y la autoorganización ciudadana marcaron el nacimiento de la sociedad civil mexicana. Fue el antecedente directo de la democratización.',
      regla_oro_check:true },
    { numero:3, titulo:'El EZLN y Chiapas', subtitulo:'Chiapas',
      categoria:'grandes-hitos', concepto_clave:'La rebelión indígena y los derechos autonómicos',
      materia:'Historia / Formación Cívica', estado_destino:'Chiapas', estado_slug:'chiapas',
      pista:'El subcomandante del tiempo dice: "En la medianoche del primer día del año del TLC, miles de combatientes indígenas tomamos los municipios del estado más al sur del país. Nuestra carta al mundo decía que el libre comercio nos mataría. El gobierno quería modernidad para algunos; nosotros pedíamos dignidad para todos. Nuestra zona de operaciones era la selva del estado fronterizo con Guatemala."',
      libreta:`EZLN: Ejército Zapatista de Liberación Nacional
Levantamiento: 1 de enero de año 1994 — mismo día que entró en vigor el TLC con EUA y Canadá
Zonas tomadas: San Cristóbal de las Casas, Ocosingo, Las Margaritas, Altamirano — Chiapas
Vocero: Subcomandante Marcos (Rafael Sebastián Guillén)
Demandas: Autonomía indígena, tierra, educación, salud — Acuerdos de San Andrés (año 1996)
Estado: Chiapas — frontera con Guatemala; el más pobre de México en año 1994`,
      opciones:['Chiapas','Guerrero','Oaxaca','Tabasco'],
      respuesta_correcta:'Chiapas',
      explicacion:'El EZLN se levantó el 1 de enero de 1994 en Chiapas, el estado más pobre de México, en la fecha exacta de entrada en vigor del TLC. Tomaron San Cristóbal de las Casas y otros municipios. Los Acuerdos de San Andrés (1996) reconocieron derechos indígenas pero nunca fueron plenamente implementados. El movimiento visibilizó la brecha entre la modernización económica y la pobreza indígena.',
      regla_oro_check:true },
    { numero:4, titulo:'El TLC y la Globalización Industrial', subtitulo:'Nuevo León',
      categoria:'ciencia-y-saberes', concepto_clave:'El libre comercio y la reconversión industrial',
      materia:'Ciencias / Geografía', estado_destino:'Nuevo León', estado_slug:'nuevo-leon',
      pista:'El empresario regio dice: "Cuando el tratado de libre comercio entró en vigor, las fábricas de mi ciudad ya llevaban décadas siendo las más modernas del país. La apertura comercial nos benefició: ahora exportábamos acero, vidrio, cerveza y materiales de construcción directamente al norte. Mi estado fue el que mejor aprovechó el tratado porque ya tenía la infraestructura y la cultura industrial."',
      libreta:`TLC (TLCAN): Tratado de Libre Comercio de América del Norte — vigente desde 1 de enero de año 1994
Países: México, EUA, Canadá
Exportaciones mexicanas en año 1993: 52,000 millones de dólares
Exportaciones mexicanas en año 2000: 166,000 millones de dólares (triplicadas en 7 años)
Nuevo León en el TLC: Centro industrial con acero (AHMSA/Hylsamex), vidrio (VITRO), cemento (CEMEX)
Zona metropolitana de Monterrey: PIB per cápita más alto de México — superando a CDMX`,
      opciones:['Nuevo León','Chihuahua','Tamaulipas','Coahuila'],
      respuesta_correcta:'Nuevo León',
      explicacion:'Nuevo León fue el gran ganador del TLC (1994): su base industrial preexistente (VITRO, CEMEX, Hylsamex) se benefició directamente de la apertura. Las exportaciones mexicanas se triplicaron entre 1993 y 2000. La zona metropolitana de Monterrey tiene el PIB per cápita más alto de México, superando a la Ciudad de México. CEMEX se convirtió en una multinacional global gracias al TLC.',
      regla_oro_check:true },
    { numero:5, titulo:'Internet Llega a México', subtitulo:'Nuevo León',
      categoria:'ciencia-y-saberes', concepto_clave:'La revolución digital y la conectividad',
      materia:'Ciencias / Historia', estado_destino:'Nuevo León', estado_slug:'nuevo-leon',
      pista:'El ingeniero en sistemas del tiempo dice: "La primera conexión a la red global de computadoras en el país se hizo desde una universidad del estado industrial del norte. Un año antes de que el famoso buscador más popular del mundo fuera fundado, México ya tenía presencia en internet. El estado donde ocurrió eso era el mismo que sería el hub tecnológico de América Latina décadas después."',
      libreta:`Primera conexión a internet en México: 28 de febrero de año 1989
Universidad pionera: ITESM Campus Monterrey — Nuevo León
Conexión: Red BITNET → Internet (protocolo TCP/IP)
Primer dominio .mx: Registrado en año 1989
Usuarios de internet en México en año 1994: 30,000 (población: 90 millones)
Penetración en año 2000: 3.6 millones de usuarios — 3.7% de la población`,
      opciones:['Nuevo León','Ciudad de México','Jalisco','Guanajuato'],
      respuesta_correcta:'Nuevo León',
      explicacion:'La primera conexión a internet en México ocurrió el 28 de febrero de 1989 en el ITESM Campus Monterrey, Nuevo León, a través de la red BITNET. En 1994, apenas 30,000 mexicanos tenían acceso. Para el año 2000 eran 3.6 millones (3.7% de la población). Nuevo León se confirmó como el hub tecnológico del país, rol que mantiene hasta hoy.',
      regla_oro_check:true },
    { numero:6, titulo:'Las Telenovelas: Industria Cultural', subtitulo:'Ciudad de México',
      categoria:'vida-cotidiana', concepto_clave:'La cultura popular televisiva y su impacto global',
      materia:'Arte / Español', estado_destino:'Ciudad de México', estado_slug:'cdmx',
      pista:'La actriz del tiempo dice: "Las historias de amor imposible que producíamos en los estudios de la capital se veían en más de cien países. Desde Rusia hasta Brasil, desde China hasta España, millones de personas aprendieron algunas palabras en español siguiendo a nuestras protagonistas. Los estudios más grandes de producción estaban en el sur de la capital."',
      libreta:`Telenovelas mexicanas exportadas: Distribuidas en más de 100 países en años 1980–2000
"El derecho de nacer" (año 1966): Primera telenovela de impacto masivo en México
"Los ricos también lloran" (año 1979): Vendida a 150 países incluyendo URSS — fenómeno global
"María la del barrio" (año 1995): Thalia — vendida a más de 180 países
Estudios: Televicentro (CDMX) + Televisa San Ángel (sur de la CDMX)
Modelo narrativo: Telenovela = melodrama + clases sociales + happy ending — exportable a cualquier cultura`,
      opciones:['Ciudad de México','Guadalajara','Monterrey','Veracruz'],
      respuesta_correcta:'Ciudad de México',
      explicacion:'Las telenovelas mexicanas, producidas en los estudios de Televicentro y San Ángel en la Ciudad de México, se exportaron a más de 180 países. "Los ricos también lloran" (1979) fue un fenómeno en la URSS. "María la del barrio" (1995) con Thalía estableció el récord de distribución. El formato melodramático resultó universalmente comprensible.',
      regla_oro_check:true },
    { numero:7, titulo:'La Música Grupera y Regional', subtitulo:'Jalisco',
      categoria:'vida-cotidiana', concepto_clave:'La música popular del México en crisis',
      materia:'Arte / Español', estado_destino:'Jalisco', estado_slug:'jalisco',
      pista:'El músico del tiempo dice: "Mientras las crisis económicas golpeaban a las familias, la música que resonaba en las cantinas, las fiestas de barrio y los taxis era nuestra. No era la de los conservatorios: era la del pueblo que migraba del campo a la ciudad. El estado donde nació el género más popular de esa era fue también el de la tradición musical más arraigada del occidente."',
      libreta:`Música grupera: Fusión de ranchera + cumbia + balada — década de años 1970–1980
Grupos emblemáticos: Los Yonics (Jalisco, año 1975), Los Bukis (Michoacán, año 1976)
Cumbia norteña: Surgida en la frontera norte — fusión de acordeón norteño + ritmo caribeño
Origen geográfico del grupero: Occidente de México — Jalisco + Michoacán + Guanajuato
Función social: Música de migrantes rurales a ciudades industriales durante las crisis
Venta de cassettes: Mercados informales — distribución masiva sin control de derechos`,
      opciones:['Jalisco','Michoacán','Sinaloa','Guanajuato'],
      respuesta_correcta:'Jalisco',
      explicacion:'Jalisco fue el epicentro del género grupero: Los Yonics (fundados en Guadalajara en 1975) fueron el grupo más vendedor del país. La cumbia norteña y la ranchera eléctrica se fusionaron para crear el sonido de los migrantes rurales que llegaban a las ciudades en crisis. El mercado de cassettes informales distribuyó masivamente esta música sin pasar por las discográficas.',
      regla_oro_check:true },
    { numero:8, titulo:'El IFE y la Democracia Electoral', subtitulo:'Ciudad de México',
      categoria:'civismo-y-etica', concepto_clave:'La transición democrática y los derechos ciudadanos',
      materia:'Formación Cívica', estado_destino:'Ciudad de México', estado_slug:'cdmx',
      pista:'El consejero electoral del tiempo dice: "Durante décadas, el partido de gobierno controlaba la organización de las elecciones. La reforma que cambió eso creó un organismo ciudadano e independiente que organizara los comicios. La credencial que surgió de ese proceso se convirtió en el documento de identidad más usado por los mexicanos. El organismo tenía su sede en la capital."',
      libreta:`IFE: Instituto Federal Electoral — creado el 11 de octubre de año 1990
Reforma que lo creó: Reforma electoral de año 1990 (respuesta al fraude electoral de año 1988)
Elección de año 1988: "Se cayó el sistema" — supuesto fraude en favor de Salinas de Gortari
Credencial para votar con fotografía: Introducida en año 1992 — hoy el documento de identidad más usado
Consejeros ciudadanos: Nombrados por el Congreso, no por el ejecutivo — desde año 1994
Transformación: IFE → INE (Instituto Nacional Electoral) en año 2014`,
      opciones:['Ciudad de México','Guadalajara','Monterrey','Querétaro'],
      respuesta_correcta:'Ciudad de México',
      explicacion:'El IFE fue creado en 1990 en la Ciudad de México como respuesta al fraude electoral de 1988. La credencial de elector con fotografía (1992) se convirtió en el documento de identidad más universal de México. Los consejeros ciudadanos independientes (1994) garantizaron la autonomía del organismo. En 2014 se transformó en el INE (Instituto Nacional Electoral).',
      regla_oro_check:true },
    { numero:9, titulo:'La CNDH y los Derechos Humanos', subtitulo:'Ciudad de México',
      categoria:'civismo-y-etica', concepto_clave:'La institucionalización de los derechos humanos',
      materia:'Formación Cívica / Historia', estado_destino:'Ciudad de México', estado_slug:'cdmx',
      pista:'La activista del tiempo dice: "Después del terremoto del 85 y de las denuncias de torturas y desapariciones, el gobierno creó un organismo para recibir quejas contra las autoridades. No podía castigar, solo señalar y avergonzar. Pero su existencia fue el primer reconocimiento oficial de que el Estado mexicano violaba derechos. La sede estaba en la capital."',
      libreta:`CNDH: Comisión Nacional de los Derechos Humanos — fundada el 6 de junio de año 1990
Naturaleza jurídica: Organismo autónomo (desde año 1992) — no puede imponer sanciones
Instrumento: Recomendaciones — documentos públicos que denuncian violaciones de derechos
Primera presidenta: Jorge Carpizo MacGregor (año 1990) — luego Mireille Roccatti (primera mujer, año 1997)
Inspiración: Modelos europeos de ombudsman (Suecia, año 1809; España, año 1978)
Sede: Ciudad de México — con delegaciones en cada estado de la república`,
      opciones:['Ciudad de México','Jalisco','Monterrey','Oaxaca'],
      respuesta_correcta:'Ciudad de México',
      explicacion:'La CNDH fue fundada el 6 de junio de 1990 en la Ciudad de México, inspirada en el modelo europeo del ombudsman. Sin poder sancionatorio, su arma es la recomendación pública que avergüenza a las autoridades. Fue el primer reconocimiento oficial de que el Estado violaba derechos humanos sistemáticamente. En 1992 adquirió plena autonomía constitucional.',
      regla_oro_check:true },
    { numero:10, titulo:'México en la Globalización', subtitulo:'Cruce Global',
      categoria:'cruce-global', concepto_clave:'México ante el nuevo orden mundial post-Guerra Fría',
      materia:'Historia Universal', estado_destino:'Nuevo León', estado_slug:'nuevo-leon',
      pista:'El economista global dice: "Con la caída del Muro de Berlín, el mundo entró en una nueva era y México eligió integrarse al bloque del norte. El tratado de libre comercio nos unió al país más poderoso del mundo justo cuando los demás países socialistas buscaban cómo sobrevivir. El estado que mejor aprovechó esa integración fue el industrial del norte, el que no tiene costas pero tiene la mayor industria del país."',
      libreta:`Caída del Muro de Berlín: 9 de noviembre de año 1989
Fin de la URSS: 25 de diciembre de año 1991
TLC firmado: 17 de diciembre de año 1992 — vigente desde 1 de enero de año 1994
PIB de México en año 1994: Lugar 14 del mundo
Maquiladoras en año 2000: más de 3,700 plantas — 80% del crecimiento industrial fue en el norte
Concentración industrial: Nuevo León, Chihuahua, Coahuila y Tamaulipas — el "México del norte"`,
      opciones:['Nuevo León','Chihuahua','Sonora','Tamaulipas'],
      respuesta_correcta:'Nuevo León',
      explicacion:'Nuevo León fue el principal beneficiario de la integración de México al bloque del norte después del fin de la Guerra Fría (1989-1991). Con el TLC (1994), el norte industrial (Nuevo León, Chihuahua, Coahuila) concentró el 80% del crecimiento de maquiladoras. En 2000 había más de 3,700 plantas maquiladoras. Monterrey superó a la CDMX en ingreso per cápita.',
      regla_oro_check:true },
  ],
};
export default crisis;
