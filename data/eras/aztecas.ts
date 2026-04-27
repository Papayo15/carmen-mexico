import type { Era } from '@/lib/types';
const aztecas: Era = {
  metadata: {
    slug:'aztecas', titulo:'Imperio Azteca', periodo:'1300 – 1521 d.C.',
    estados_principales:['Ciudad de México'],
    icono:'🦅', color:'bg-orange-800', colorText:'text-orange-900', orden:5,
  },
  casos:[
    { numero:1, titulo:'Tenochtitlán en el Lago', subtitulo:'Ciudad de México',
      categoria:'grandes-hitos', concepto_clave:'Capital azteca y fundación de la CDMX',
      materia:'Historia', estado_destino:'Ciudad de México', estado_slug:'cdmx',
      pista:'El cronista náhuatl dice: "El dios del Sol ordenó a su pueblo fundar la capital donde vieran un águila devorando una serpiente sobre un nopal, en medio de un lago. Esa ciudad creció hasta tener 200,000 habitantes y cuatro grandes calzadas que la conectaban a tierra. Hoy es la capital del país."',
      libreta:`Fundación: Año 1325 d.C. (año 2-Casa según calendario azteca)
Extensión: 13 km² en isla artificial, lago de Texcoco
Calzadas: Tepeyac (norte), Iztapalapa (sur), Tlacopan (poniente) — 4 accesos
Población al colapso: 200,000–300,000 (mayor que Londres en año 1500)
Símbolo actual: El águila, la serpiente y el nopal están en la Bandera de México
Zócalo actual: Exactamente sobre el centro ceremonial azteca`,
      opciones:['Ciudad de México','Estado de México','Hidalgo','Morelos'],
      respuesta_correcta:'Ciudad de México',
      explicacion:'La Ciudad de México está construida sobre Tenochtitlán. El Zócalo, el Templo Mayor y las cuatro calzadas estaban donde hoy es la capital. El símbolo de la bandera nacional proviene directamente de la leyenda fundacional azteca.',
      regla_oro_check:true },
    { numero:2, titulo:'El Templo Mayor', subtitulo:'Ciudad de México',
      categoria:'grandes-hitos', concepto_clave:'Arquitectura religiosa azteca',
      materia:'Historia / Arte', estado_destino:'Ciudad de México', estado_slug:'cdmx',
      pista:'La arqueóloga de la capital dice: "En el corazón de la ciudad más grande del país, debajo de edificios coloniales, estaba el templo más importante del mundo azteca. Lo descubrieron accidentalmente en el siglo XX cuando estaban haciendo obras para el sistema eléctrico. Hoy puedes visitarlo a solo pasos del Zócalo."',
      libreta:`Nombre original: Huey Teocalli ("Gran Casa de Dios")
Descubrimiento moderno: Año 1978 — trabajadores eléctricos hallaron la Coyolxauhqui
Altura estimada: 60 m (reconstrucción de la fase más reciente)
Advocaciones: Huitzilopochtli (sol/guerra) al sur + Tláloc (lluvia/agricultura) al norte
Museo del Templo Mayor: Inaugurado en año 1987
Coordenadas: 19°26'N, 99°7'O — a 200 m del Zócalo`,
      opciones:['Ciudad de México','Estado de México','Tlaxcala','Puebla'],
      respuesta_correcta:'Ciudad de México',
      explicacion:'El Templo Mayor está a 200 m del Zócalo de la CDMX (19°26\'N, 99°7\'O). Descubierto en 1978, el monolito de Coyolxauhqui es uno de los hallazgos arqueológicos más importantes del siglo XX en México.',
      regla_oro_check:true },
    { numero:3, titulo:'La Triple Alianza', subtitulo:'Ciudad de México',
      categoria:'grandes-hitos', concepto_clave:'Sistema político de la Triple Alianza',
      materia:'Historia', estado_destino:'Ciudad de México', estado_slug:'cdmx',
      pista:'El embajador del tiempo dice: "El imperio azteca no era de un solo pueblo sino de una alianza de tres ciudades que compartían el control del territorio. La ciudad más poderosa de las tres era la que estaba en la isla del lago. Las otras dos estaban en las orillas. Juntas controlaban desde el Golfo hasta el Pacífico."',
      libreta:`Alianza formada: Año 1428 d.C. — Tenochtitlán + Texcoco + Tlacopan
Reparto de tributos: 2/5 para cada ciudad principal, 1/5 para Tlacopan
Provincias tributarias: 38 (según Matrícula de Tributos)
Ciudad dominante: Tenochtitlán — 200,000+ habitantes (hoy Ciudad de México)
Territorio controlado: Costa del Golfo, Oaxaca, Puebla, partes de Guerrero y Veracruz
Exclusiones: Tlaxcala, Yopitzinco — nunca sometidos`,
      opciones:['Ciudad de México','Texcoco','Tlacopan','Tlaxcala'],
      respuesta_correcta:'Ciudad de México',
      explicacion:'Tenochtitlán, la ciudad dominante de la Triple Alianza, es hoy la Ciudad de México. Controlaba 38 provincias tributarias desde el Golfo hasta el Pacífico. Tlaxcala fue el único territorio que nunca se sometió.',
      regla_oro_check:true },
    { numero:4, titulo:'Las Chinampas: Huertos sobre el Agua', subtitulo:'Ciudad de México',
      categoria:'ciencia-y-saberes', concepto_clave:'Agricultura hidráulica azteca',
      materia:'Ciencias', estado_destino:'Ciudad de México', estado_slug:'cdmx',
      pista:'El agrónomo del tiempo dice: "Los aztecas resolvieron el problema de tener su ciudad en medio de un lago: construyeron islas artificiales ancladas con raíces de árbol sauce en las que sembraban verduras y flores. Ese sistema agrícola todavía existe en funcionamiento en la misma ciudad donde estuvo Tenochtitlán."',
      libreta:`Técnica: Chinampas — islotes de vegetación + lodo lacustre + raíces de ahuehuete
Rendimiento: 2–3 cosechas al año (mayor productividad agrícola prehispánica)
Extensión en apogeo: 12,000 hectáreas en el lago de Texcoco y Xochimilco
Chinampas actuales: Xochimilco, CDMX — Patrimonio Mundial UNESCO desde año 1987
Sistema de canales: 100 km navegables en Xochimilco hoy
Especie ancla: Ahuehuete (Taxodium mucronatum) — árbol nacional de México`,
      opciones:['Ciudad de México','Estado de México','Morelos','Puebla'],
      respuesta_correcta:'Ciudad de México',
      explicacion:'Las chinampas de Xochimilco (CDMX) son la herencia viva del sistema azteca, declaradas Patrimonio UNESCO en 1987. Los 100 km de canales actuales y el ahuehuete (árbol nacional) confirman la capital.',
      regla_oro_check:true },
    { numero:5, titulo:'La Medicina Azteca', subtitulo:'Ciudad de México',
      categoria:'ciencia-y-saberes', concepto_clave:'Herbolaria y cirugía prehispánica',
      materia:'Ciencias Naturales', estado_destino:'Ciudad de México', estado_slug:'cdmx',
      pista:'El médico del tiempo dice: "Los curanderos aztecas conocían miles de plantas y realizaban operaciones como sacar flechas sin anestesia química. Tenían hospitales donde atendían a los guerreros heridos. Su conocimiento fue tan impresionante que los españoles enviaron un naturalista para estudiarlo y documentarlo en el siglo XVI."',
      libreta:`Herbolario documentado: Códice de la Cruz-Badiano, año 1552 (primer libro médico de América)
Plantas documentadas: 251 especies con indicaciones terapéuticas
Naturalista enviado: Francisco Hernández — recorrió México de años 1571 a 1577
Tizici (médicos): Especialistas diferenciados (huesos, ojos, partos, plantas)
Planta anestésica: Datura stramonium (toloache) — usada en procedimientos quirúrgicos
Institución de atención: Telpochcalli y casas para guerreros heridos`,
      opciones:['Ciudad de México','Morelos','Veracruz','Oaxaca'],
      respuesta_correcta:'Ciudad de México',
      explicacion:'El Códice de la Cruz-Badiano (1552), primer libro médico de América, fue elaborado en la CDMX. Francisco Hernández llegó a la misma ciudad para documentar 251 plantas medicinales aztecas. El toloache como anestésico es un hallazgo farmacológico de primer orden.',
      regla_oro_check:true },
    { numero:6, titulo:'El Mercado de Tlatelolco', subtitulo:'Ciudad de México',
      categoria:'vida-cotidiana', concepto_clave:'Comercio y vida económica azteca',
      materia:'Historia / Economía', estado_destino:'Ciudad de México', estado_slug:'cdmx',
      pista:'El mercader del tiempo dice: "El mercado más grande de Mesoamérica estaba en la ciudad gemela de Tenochtitlán. Hernán Cortés lo describió como superior a los mercados de Sevilla y Salamanca juntos. Allí vendían desde esclavos y plumas de quetzal hasta comida y medicamentos. Ese lugar hoy es una plaza famosa por otro evento histórico del siglo XX."',
      libreta:`Nombre del mercado: Tianguis de Tlatelolco
Visitantes diarios: 25,000–60,000 según cronistas españoles
Productos: 700 categorías documentadas (esclavos, plumas, jade, cacao-moneda)
Moneda de cambio: Semillas de cacao y mantas de algodón (quachtli)
Descripción: Hernán Cortés, Carta de Relación año 1519
Plaza actual: Plaza de las Tres Culturas — escenario del 2 de octubre de año 1968`,
      opciones:['Ciudad de México','Texcoco','Puebla','Tlaxcala'],
      respuesta_correcta:'Ciudad de México',
      explicacion:'El Tianguis de Tlatelolco estaba en lo que hoy es la Plaza de las Tres Culturas, Ciudad de México. Cortés lo describió en 1519 como superior a los mercados europeos. El cacao como moneda y las 700 categorías de productos confirman su sofisticación.',
      regla_oro_check:true },
    { numero:7, titulo:'La Poesía Náhuatl', subtitulo:'Ciudad de México',
      categoria:'vida-cotidiana', concepto_clave:'Literatura y filosofía azteca',
      materia:'Español / Literatura', estado_destino:'Ciudad de México', estado_slug:'cdmx',
      pista:'La poeta del tiempo dice: "Los aztecas tenían una tradición de poesía filosófica que preguntaba sobre el significado de la vida. Su poeta más famoso escribió sobre la brevedad de la existencia usando la metáfora de flores y cantos. Sus palabras sobrevivieron porque un fraile franciscano las escribió en papel europeo. Ese sabio vivió en la capital del poder azteca."',
      libreta:`Poeta: Nezahualcoyotl — rey de Texcoco (años 1402–1472)
Obra conservada: 36 poemas en náhuatl, copiados en siglo XVI por Sahagún
Tema central: "Flor y canto" (xochitl in cuicatl) — metáfora de arte y poesía
Frase emblemática: "¿Acaso de verdad se vive en la tierra?"
Fraile compilador: Bernardino de Sahagún — Historia General de las Cosas de Nueva España
Archivos: Conservados en Biblioteca Medicea Laurenziana, Florencia (Códice Florentino)`,
      opciones:['Ciudad de México','Texcoco','Tlaxcala','Puebla'],
      respuesta_correcta:'Ciudad de México',
      explicacion:'Aunque Nezahualcoyotl reinó en Texcoco, su obra fue compilada por Sahagún en el centro de la CDMX (Tlatelolco). La poesía náhuatl sobrevivió en el Códice Florentino, obra del centro del poder colonial que sustituyó a Tenochtitlán.',
      regla_oro_check:true },
    { numero:8, titulo:'Las Leyes de Tenochtitlán', subtitulo:'Ciudad de México',
      categoria:'civismo-y-etica', concepto_clave:'Sistema legal azteca',
      materia:'Formación Cívica', estado_destino:'Ciudad de México', estado_slug:'cdmx',
      pista:'La jueza del tiempo dice: "El pueblo azteca tenía un sistema de leyes escritas y jueces especializados. Los castigos eran muy severos: el robo podía pagarse con esclavitud, y la embriaguez pública estaba prohibida para los jóvenes. El palacio de justicia estaba en el centro del poder político, que hoy es la plaza principal del país."',
      libreta:`Sistema: Huehuetlatolli (código de conducta oral) + jueces permanentes
Tribunal supremo: Cihuacoatl — segundo en poder tras el tlatoani
Penas documentadas: Esclavitud por deudas, muerte por traición, rapado por ebriedad
Embriaguez: Prohibida para menores de 52 años excepto en ceremonias
Cárceles: Documentadas en el Palacio Real de Tenochtitlán
Apelaciones: Sistema de revisión por jueces de mayor rango`,
      opciones:['Ciudad de México','Texcoco','Morelos','Hidalgo'],
      respuesta_correcta:'Ciudad de México',
      explicacion:'El Tribunal Supremo (Cihuacoatl) y el Palacio Real con cárceles estaban en Tenochtitlán, hoy Ciudad de México. El sistema legal azteca con apelaciones y jueces especializados era comparable en sofisticación a sistemas europeos contemporáneos.',
      regla_oro_check:true },
    { numero:9, titulo:'El Sistema de Educación', subtitulo:'Ciudad de México',
      categoria:'civismo-y-etica', concepto_clave:'Educación obligatoria prehispánica',
      materia:'Formación Cívica', estado_destino:'Ciudad de México', estado_slug:'cdmx',
      pista:'La maestra del tiempo dice: "El pueblo azteca tenía escuelas obligatorias para todos los niños, sin importar si eran hijos de guerreros o de campesinos. Los hijos de nobles iban a la escuela del templo y los demás a la escuela del barrio. Ese sistema de educación obligatoria existió siglos antes que en Europa. Las instituciones estaban en la capital del poder azteca."',
      libreta:`Escuelas: Calmecac (nobles + sacerdotes) y Telpochcalli (resto del pueblo)
Obligatoriedad: Todos los varones desde los 15 años — sin excepción de clase
Materias: Historia, calendario, religión, música, artes marciales y oficios
Cuicacalli: Escuela de canto y danza — asistencia mixta (hombres y mujeres)
Sistema análogo europeo: La educación obligatoria llegó a Europa en siglo XIX
Ubicación institucional: Barrios y templos de Tenochtitlán (actual CDMX)`,
      opciones:['Ciudad de México','Texcoco','Tlaxcala','Puebla'],
      respuesta_correcta:'Ciudad de México',
      explicacion:'El Calmecac y el Telpochcalli, las escuelas aztecas obligatorias para todos los varones, estaban en Tenochtitlán (CDMX). El sistema azteca de educación universal precedió en siglos a la educación obligatoria europea del siglo XIX.',
      regla_oro_check:true },
    { numero:10, titulo:'Aztecas y el Renacimiento Europeo', subtitulo:'Cruce Global',
      categoria:'cruce-global', concepto_clave:'México y Europa al momento del contacto',
      materia:'Historia Universal', estado_destino:'Ciudad de México', estado_slug:'cdmx',
      pista:'El cronista global dice: "En el año en que Hernán Cortés llegó a México, Miguel Ángel ya había pintado el techo de la Capilla Sixtina y Maquiavelo acababa de escribir El Príncipe. Mientras Europa vivía su Renacimiento, en el Altiplano Central de México florecía la civilización más grande de América. El centro de ese mundo era la ciudad más poblada del continente."',
      libreta:`Año del encuentro: 1519 d.C.
Contemporáneos mundiales:
• Europa: Alto Renacimiento — Miguel Ángel, Leonardo, Erasmo
• Capilla Sixtina: Pintada años 1508–1512
• El Príncipe: Maquiavelo, año 1513
• Imperio Otomano: Selim I conquistó Egipto en año 1517
Tenochtitlán en año 1519: 200,000–300,000 habitantes (mayor que cualquier ciudad europea)
Comparativa: Londres tenía 50,000 habitantes; París, 200,000 en ese periodo`,
      opciones:['Ciudad de México','Guadalajara','Monterrey','Puebla'],
      respuesta_correcta:'Ciudad de México',
      explicacion:'Tenochtitlán en 1519 tenía 200,000-300,000 habitantes, comparable a París y mayor que Londres. La Ciudad de México es el heredero directo de esa metrópoli. El encuentro con el Renacimiento europeo transformó a ambas civilizaciones.',
      regla_oro_check:true },
  ],
};
export default aztecas;
