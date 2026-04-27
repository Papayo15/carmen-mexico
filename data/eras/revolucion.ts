import type { Era } from '@/lib/types';
const revolucion: Era = {
  metadata: {
    slug:'revolucion', titulo:'Revolución Mexicana', periodo:'1910 – 1920 d.C.',
    estados_principales:['Chihuahua','Morelos','Sonora'],
    icono:'⚔️', color:'bg-red-800', colorText:'text-red-900', orden:12,
  },
  casos:[
    { numero:1, titulo:'El Plan de San Luis', subtitulo:'San Luis Potosí',
      categoria:'grandes-hitos', concepto_clave:'Documento que inició la Revolución',
      materia:'Historia', estado_destino:'San Luis Potosí', estado_slug:'san-luis-potosi',
      pista:'El periodista del tiempo dice: "El hacendado que desafió al dictador lanzó su llamado a la rebelión desde la prisión. Su documento se llamó igual que la ciudad donde estaba encerrado su autor. Su lema era sencillo: las elecciones habían sido un fraude."',
      libreta:`Documento: Plan de San Luis Potosí — 5 de octubre de año 1910
Autor: Francisco I. Madero — encarcelado tras las elecciones fraudulentas
Convocatoria: 20 de noviembre de año 1910 como fecha de inicio del levantamiento
Lema: Sufragio Efectivo, No Reelección
Estado: Centro del país, sin costas, famoso por minas de plata y arquitectura colonial
El nombre del estado y del documento son idénticos`,
      opciones:['San Luis Potosí','Coahuila','Tamaulipas','Zacatecas'],
      respuesta_correcta:'San Luis Potosí',
      explicacion:'El Plan de San Luis fue redactado mientras Madero estaba preso en la ciudad de San Luis Potosí. El lema "Sufragio Efectivo, No Reelección" y el 20 de noviembre de 1910 como fecha confirman el documento fundacional.',
      regla_oro_check:true },
    { numero:2, titulo:'La División del Norte', subtitulo:'Chihuahua',
      categoria:'grandes-hitos', concepto_clave:'Pancho Villa y la guerrilla norteña',
      materia:'Historia', estado_destino:'Chihuahua', estado_slug:'chihuahua',
      pista:'El Centauro del Norte dice: "Mi ejército tomó la ciudad fronteriza más importante del norte en mayo de 1911 y eso obligó al dictador a renunciar. Recorrí a caballo el estado más grande del país. La sierra me protegía cuando los federales me perseguían."',
      libreta:`Formación: División del Norte — año 1913
Comandante: Francisco Villa (Doroteo Arango)
Primera victoria: Toma de Ciudad Juárez — 10 de mayo de año 1911
Superficie del estado: 247,455 km² — el más extenso de México
Sierra de refugio: Sierra Madre Occidental al poniente
Colindancias: EUA al norte (Nuevo México y Texas)`,
      opciones:['Chihuahua','Sonora','Durango','Coahuila'],
      respuesta_correcta:'Chihuahua',
      explicacion:'La División del Norte operó en Chihuahua, el estado más grande del país. La toma de Ciudad Juárez (frontera con EUA) fue el primer gran triunfo que precipitó la renuncia de Díaz.',
      regla_oro_check:true },
    { numero:3, titulo:'El Plan de Ayala', subtitulo:'Morelos',
      categoria:'grandes-hitos', concepto_clave:'Reforma agraria zapatista',
      materia:'Historia', estado_destino:'Morelos', estado_slug:'morelos',
      pista:'El líder campesino dice: "Mi Plan prometía devolver las tierras a las comunidades que el Porfiriato les había robado. Lo firmé en noviembre del año en que empezó todo. Mi estado es el más cercano al sur de la capital y su cultivo histórico es la caña de azúcar."',
      libreta:`Documento: Plan de Ayala — 28 de noviembre de año 1911
Autor: Emiliano Zapata Salazar
Principio central: "La tierra es de quien la trabaja"
Hacienda del asesinato de Zapata: Chinameca — 10 de abril de año 1919
Cultivo emblemático regional: Caña de azúcar (Saccharum officinarum)
Posición geográfica: El estado limítrofe más próximo al sur de la CDMX`,
      opciones:['Morelos','Guerrero','Tlaxcala','Puebla'],
      respuesta_correcta:'Morelos',
      explicacion:'El Plan de Ayala de 1911 y el asesinato en Chinameca (1919) ocurrieron en Morelos. La caña de azúcar y la posición al sur de la CDMX confirman el estado zapatista por excelencia.',
      regla_oro_check:true },
    { numero:4, titulo:'El Telégrafo en la Guerra', subtitulo:'Chihuahua',
      categoria:'ciencia-y-saberes', concepto_clave:'Tecnología de comunicación en el conflicto',
      materia:'Ciencias / Historia', estado_destino:'Chihuahua', estado_slug:'chihuahua',
      pista:'El telegrafista del tiempo dice: "La Revolución fue la primera guerra en México donde los cables de comunicación eran un objetivo militar. Los jefes que los cortaban primero aislaban a sus enemigos. El ejército más ágil en esta táctica actuaba en el estado fronterizo más grande del país."',
      libreta:`Red telegráfica en año 1910: 90,000 km de líneas en todo México
Táctica de Villa: Cortar líneas + tomar estaciones antes de cada ataque
Ferrocarril: Villa movió 10,000 soldados en tren — movilidad inédita en América Latina
Ruta estratégica: Ciudad Juárez–CDMX (atraviesa todo Chihuahua)
Corresponsal internacional: John Reed cubrió a Villa en Chihuahua (libro: Insurgent Mexico, año 1914)
Velocidad del telegrama: De días (correo) a minutos — ventaja militar decisiva`,
      opciones:['Chihuahua','Sonora','Coahuila','Tamaulipas'],
      respuesta_correcta:'Chihuahua',
      explicacion:'Chihuahua fue el escenario de las tácticas de Villa de cortar telégrafos y usar ferrocarriles para mover tropas. John Reed reportó esas operaciones en 1914. La ruta Ciudad Juárez–CDMX atraviesa el estado completo.',
      regla_oro_check:true },
    { numero:5, titulo:'Las Adelitas: Soldaderas', subtitulo:'Chihuahua',
      categoria:'ciencia-y-saberes', concepto_clave:'El rol de las mujeres en la Revolución',
      materia:'Historia / Formación Cívica', estado_destino:'Chihuahua', estado_slug:'chihuahua',
      pista:'La soldadera del tiempo dice: "En esta guerra, muchas mujeres no solo cocinaban o curaban heridos: pelearon con rifle, espiaron al enemigo y tomaron decisiones de campo. La canción que las hizo famosas lleva el nombre de la más conocida de estas guerreras. La región donde más se les fotografió fue el norte del país."',
      libreta:`Nombre: Soldaderas o Adelitas — término genérico de las mujeres combatientes
Funciones: Combatientes, enfermeras, espías, cocineras de campo, portadoras de munición
Canción: "La Adelita" — origen incierto, circa año 1910, región norteña
Fotógrafo documentador: Agustín Víctor Casasola — miles de imágenes de soldaderas
Voto femenino en México: Reconocido hasta año 1953 — 33 años después de la Revolución
Mayor concentración: División del Norte (Chihuahua, Durango, Sonora)`,
      opciones:['Chihuahua','Morelos','Veracruz','Jalisco'],
      respuesta_correcta:'Chihuahua',
      explicacion:'La División del Norte (Chihuahua) tuvo la mayor documentación fotográfica de soldaderas. "La Adelita" nació en el norte. Las mujeres no pudieron votar en México hasta 1953, 33 años después de la Revolución.',
      regla_oro_check:true },
    { numero:6, titulo:'La Cocina de las Trincheras', subtitulo:'Morelos',
      categoria:'vida-cotidiana', concepto_clave:'Alimentación en tiempo de guerra',
      materia:'Ciencias / Historia', estado_destino:'Morelos', estado_slug:'morelos',
      pista:'La cocinera del campamento dice: "Los ejércitos zapatistas dependían de las comunidades locales para su alimento. Las soldaderas molían maíz a mano, hacían tortillas en el campo y preparaban caldos con lo disponible. El estado del sur donde operaban era famoso por su arroz, sus chiles y su milpa recuperada a las haciendas."',
      libreta:`Dieta base zapatista: Tortillas de maíz nixtamalizado + frijoles + chile + arroz
Proceso de nixtamalización: Cal Ca(OH)₂ + maíz seco → masa → tortilla
Aporte nutricional: El nixtamal libera niacina (vitamina B3) — previene la pelagra
Cultivo de Morelos: Arroz (clima cálido) + milpa recuperada a haciendas durante la Revolución
Gastronomía actual: Cecina de Yecapixtla, arroz a la tumbada, guajolotas de feria
Haciendas azucareras de Morelos: 24 controlaban 80% del territorio en año 1910`,
      opciones:['Morelos','Guerrero','Puebla','Tlaxcala'],
      respuesta_correcta:'Morelos',
      explicacion:'Morelos, base zapatista, tenía clima cálido para el arroz y milpas recuperadas de haciendas. La nixtamalización que libera niacina explica por qué las comunidades mesoamericanas evitaban la pelagra. Las 24 haciendas azucareras son el detonador histórico.',
      regla_oro_check:true },
    { numero:7, titulo:'La Fotografía de Casasola', subtitulo:'Ciudad de México',
      categoria:'vida-cotidiana', concepto_clave:'Fotoperiodismo y memoria histórica',
      materia:'Arte / Historia', estado_destino:'Ciudad de México', estado_slug:'cdmx',
      pista:'El fotógrafo del tiempo dice: "La Revolución fue la primera guerra mexicana documentada masivamente con cámaras. Un capitalino creó el archivo visual más importante del evento. Sus miles de negativos de vidrio con imágenes de soldaderas y generales están hoy en el archivo nacional de fotografía de México."',
      libreta:`Fotógrafo: Agustín Víctor Casasola (1874–1938)
Archivo: Fototeca Nacional — INAH, Ciudad de México
Negativos conservados: Más de 500,000 placas de vidrio
Tecnología: Cámara de fuelle + placas de nitrato de plata — sensibilidad ISO equivalente a 25
Primera guerra fotográfica de México: Simultánea a la I Guerra Mundial (años 1914–1918)
Uso posterior: Base iconográfica de murales de Diego Rivera y José Clemente Orozco`,
      opciones:['Ciudad de México','Chihuahua','Veracruz','Jalisco'],
      respuesta_correcta:'Ciudad de México',
      explicacion:'La Fototeca Nacional del INAH en la CDMX resguarda los 500,000 negativos de Casasola. La documentación visual de la Revolución fue contemporánea de la I Guerra Mundial europea, marcando el nacimiento del fotoperiodismo mexicano.',
      regla_oro_check:true },
    { numero:8, titulo:'La Constitución de 1917', subtitulo:'Querétaro',
      categoria:'civismo-y-etica', concepto_clave:'Primera constitución social del mundo',
      materia:'Formación Cívica', estado_destino:'Querétaro', estado_slug:'queretaro',
      pista:'La constituyente del tiempo dice: "El resultado más importante de la Revolución no fue un balazo sino un documento. En una ciudad del centro-norte del país se redactó la primera constitución del mundo en reconocer derechos de los trabajadores y derechos sociales. Esa misma ciudad tiene el centro histórico declarado Patrimonio de la Humanidad."',
      libreta:`Constitución: Promulgada el 5 de febrero de año 1917
Sede: Teatro de la República, capital de un estado del centro-norte
Artículo 27: Propiedad originaria de la nación sobre tierras, aguas y subsuelo
Artículo 123: Jornada máxima de 8 horas, descanso semanal, salario mínimo
Comparativa: Constitución de Weimar (Alemania, año 1919) — segunda en el mundo con derechos sociales
Vigencia: La misma constitución (con más de 700 reformas) rige México hasta hoy`,
      opciones:['Querétaro','San Luis Potosí','Aguascalientes','Guanajuato'],
      respuesta_correcta:'Querétaro',
      explicacion:'El Teatro de la República en Querétaro fue sede del Congreso Constituyente de 1917. La Constitución mexicana precedió en 2 años a la de Weimar (1919) en el reconocimiento de derechos laborales — fue la primera "constitución social" del mundo.',
      regla_oro_check:true },
    { numero:9, titulo:'El Ejido: La Tierra Recuperada', subtitulo:'Morelos',
      categoria:'civismo-y-etica', concepto_clave:'Reforma agraria y justicia social',
      materia:'Formación Cívica / Geografía', estado_destino:'Morelos', estado_slug:'morelos',
      pista:'El ejidatario del tiempo dice: "La demanda más urgente de la Revolución era la tierra. Las haciendas del sur habían despojado a las comunidades campesinas durante décadas. El artículo de la nueva ley fundamental que ordenó devolver esas tierras fue el más debatido de todos. Las comunidades más afectadas estaban en el estado del líder del sur."',
      libreta:`Artículo 27 constitucional: Propiedad originaria de la nación — base del reparto agrario
Haciendas en el estado del sur en año 1910: 24 haciendas controlaban 80% del territorio
Comunidades despojadas: 33 pueblos perdieron tierras entre años 1876–1910
Ejido: Propiedad colectiva restablecida (del latín "exitus" — salida de la villa)
Reparto zapatista informal: Comunidades tomaron sus tierras antes de que la ley lo ordenara
Reparto agrario mayor posterior: Cárdenas repartió 18 millones de ha en años 1934–1940`,
      opciones:['Morelos','Guerrero','Tlaxcala','Hidalgo'],
      respuesta_correcta:'Morelos',
      explicacion:'Las 24 haciendas de Morelos que controlaban el 80% del territorio estatal fueron el detonador del zapatismo y la causa directa del Art. 27. El ejido como propiedad colectiva fue la respuesta legal al despojo documentado en el estado.',
      regla_oro_check:true },
    { numero:10, titulo:'Revolución y Primera Guerra Mundial', subtitulo:'Cruce Global',
      categoria:'cruce-global', concepto_clave:'México y el mundo en la misma década',
      materia:'Historia Universal', estado_destino:'Sonora', estado_slug:'sonora',
      pista:'El historiador global dice: "Mientras México vivía su Revolución, Europa vivía su peor guerra hasta ese momento. Ambos eventos ocurrieron en la misma década. Los presidentes que firmaron la paz mexicana venían del estado norteño fronterizo con Estados Unidos. Irónicamente, las armas de ambas guerras salían de las mismas fábricas."',
      libreta:`Contemporáneos (años 1910–1920):
• Europa: I Guerra Mundial (años 1914–1918) — 20 millones de muertos
• México: Revolución (años 1910–1920) — 1–2 millones de muertos
• Rusia: Revolución bolchevique año 1917 — mismo año que Constitución mexicana
Armas compartidas: Rifles Winchester y Mauser — usados en ambas guerras
Presidentes que consolidaron la paz mexicana: Obregón (año 1920) y Calles (año 1924)
Estado de origen de ambos: Frontera norte con Arizona`,
      opciones:['Sonora','Chihuahua','Coahuila','Sinaloa'],
      respuesta_correcta:'Sonora',
      explicacion:'Obregón y Calles (los consolidadores de la paz posrevolucionaria) eran de Sonora, en la frontera con Arizona. La coincidencia con la I Guerra Mundial y la Revolución Rusa de 1917 ubica a México en el contexto de transformaciones globales de esa década.',
      regla_oro_check:true },
  ],
};
export default revolucion;
