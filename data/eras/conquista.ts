import type { Era } from '@/lib/types';
const conquista: Era = {
  metadata: {
    slug:'conquista', titulo:'Conquista de México', periodo:'1519 – 1521 d.C.',
    estados_principales:['Veracruz','Tlaxcala','Ciudad de México'],
    icono:'⚓', color:'bg-amber-800', colorText:'text-amber-900', orden:6,
  },
  casos:[
    { numero:1, titulo:'La Llegada a las Costas', subtitulo:'Veracruz',
      categoria:'grandes-hitos', concepto_clave:'Primer contacto y fundación de la Vera Cruz',
      materia:'Historia', estado_destino:'Veracruz', estado_slug:'veracruz',
      pista:'El marinero español dice: "Nuestras naves llegaron a una costa de arenas blancas en Viernes Santo del año 1519. El capitán fundó ahí mismo una villa para legitimar su empresa ante el rey de España. Ese acto convirtió a ese punto costero en la primera ciudad europea fundada en tierra firme del continente americano."',
      libreta:`Fecha de arribo: Viernes Santo — 22 de abril de año 1519
Fundación: Villa Rica de la Vera Cruz — primera villa española en tierra firme continental
Capitán: Hernán Cortés Monroy — procedente de Cuba
Número de soldados: aproximadamente 508 infantes, 16 jinetes, 14 piezas de artillería
Puerto de origen: Santiago de Cuba — gobernador Diego Velázquez de Cuéllar
Costa de desembarco: Litoral del Golfo de México, frente a la isla de San Juan de Ulúa`,
      opciones:['Veracruz','Tabasco','Campeche','Tamaulipas'],
      respuesta_correcta:'Veracruz',
      explicacion:'Hernán Cortés desembarcó en la costa de Veracruz el 22 de abril de 1519 (Viernes Santo) y fundó la Villa Rica de la Vera Cruz frente a la isla de San Juan de Ulúa. Fue el primer asentamiento español en tierra firme continental de América.',
      regla_oro_check:true },
    { numero:2, titulo:'La Alianza con Tlaxcala', subtitulo:'Tlaxcala',
      categoria:'grandes-hitos', concepto_clave:'La coalición indígena que hizo posible la conquista',
      materia:'Historia', estado_destino:'Tlaxcala', estado_slug:'tlaxcala',
      pista:'El señor tlaxcalteca dice: "Nosotros no éramos aliados de los mexicas: éramos sus enemigos de siglos. Cuando los extranjeros llegaron y nos derrotaron en batalla, decidimos que era mejor aliarnos con ellos que seguir resistiendo solos. Nuestro estado es el más pequeño del país y el único sin costas, encerrado entre montañas del centro."',
      libreta:`Estado independiente: República de Tlaxcala — jamás sometida por la Triple Alianza
Líderes tlaxcaltecas: Xicoténcatl el Viejo + Xicoténcatl el Joven (opuesto a la alianza)
Alianza formal: Octubre de año 1519 — tras batallar contra los españoles y rendirse
Soldados aportados: Estimaciones de 6,000–20,000 guerreros tlaxcaltecas en Tenochtitlán
Estado actual: El más pequeño de México — 4,016 km², sin salida al mar
Beneficio colonial: Tlaxcala recibió privilegios especiales de la Corona por su alianza`,
      opciones:['Tlaxcala','Puebla','Hidalgo','Morelos'],
      respuesta_correcta:'Tlaxcala',
      explicacion:'Tlaxcala, enemiga histórica de los mexicas, se alió con Cortés en octubre de 1519 tras una inicial derrota. Esta alianza fue decisiva en la caída de Tenochtitlán. Tlaxcala es el estado más pequeño de México, encerrado entre Puebla, Hidalgo, Morelos y Veracruz.',
      regla_oro_check:true },
    { numero:3, titulo:'La Caída de Tenochtitlán', subtitulo:'Ciudad de México',
      categoria:'grandes-hitos', concepto_clave:'El sitio final y la rendición mexica',
      materia:'Historia', estado_destino:'Ciudad de México', estado_slug:'cdmx',
      pista:'El guerrero mexica dice: "Resistimos ochenta días de sitio. Nos cortaron el agua, nos bloquearon los canales y quemaron nuestros graneros. Cuando nuestro último tlatoani fue capturado en una canoa mientras intentaba escapar, la gran metrópoli del lago cayó. Hoy, encima de sus ruinas, está la ciudad más grande del país."',
      libreta:`Sitio de Tenochtitlán: mayo–agosto de año 1521
Duración del sitio final: 75–80 días
Último tlatoani: Cuauhtémoc — capturado el 13 de agosto de año 1521
Aliados indígenas de Cortés: Tlaxcaltecas + Texcocanos + Totonacas + otros
Bergantines: 13 embarcaciones construidas en Tlaxcala y transportadas al lago de Texcoco
Muertos en el sitio: estimados 100,000–240,000 mexicas (hambre, guerra y epidemias)`,
      opciones:['Ciudad de México','Estado de México','Tlaxcala','Hidalgo'],
      respuesta_correcta:'Ciudad de México',
      explicacion:'Tenochtitlán cayó el 13 de agosto de 1521 con la captura de Cuauhtémoc. Los 13 bergantines de Cortés controlaron el lago de Texcoco. Sobre las ruinas de la ciudad mexica se construyó la Ciudad de México, capital del virreinato y luego de la nación.',
      regla_oro_check:true },
    { numero:4, titulo:'Caballos, Cañones y Acero', subtitulo:'Veracruz',
      categoria:'ciencia-y-saberes', concepto_clave:'Ventaja tecnológica en la conquista',
      materia:'Ciencias / Historia', estado_destino:'Veracruz', estado_slug:'veracruz',
      pista:'El artillero español dice: "Los defensores nunca habían visto animales tan grandes y veloces como los nuestros. Tampoco conocían el trueno que salía de los tubos de metal. Y nuestras armaduras resistían sus flechas de obsidiana. Todo llegó al continente por el puerto del Golfo y cambió para siempre el equilibrio de las guerras en América."',
      libreta:`Caballos: Equus caballus — extintos en América desde 10,000 a.C., reintroducidos en año 1519
Acero español: Aleación de hierro-carbono (0.3–1.5% C) — dureza superior a la obsidiana
Cañones: Piezas de bronce de 2–4 kg de bola — detonación: pólvora (KNO₃ + C + S)
Puerto de entrada: Veracruz — único punto de desembarco en la costa del Golfo
Obsidiana mexica: Vidrio volcánico — filo agudo pero frágil ante el metal europeo
Ventaja real: La viruela fue más letal que las armas — precedió al ejército de Cortés`,
      opciones:['Veracruz','Tabasco','Tamaulipas','Campeche'],
      respuesta_correcta:'Veracruz',
      explicacion:'Todas las ventajas tecnológicas (caballos, cañones, acero) desembarcaron por Veracruz en abril de 1519. El caballo había estado extinto en América 10,000 años. La pólvora y el acero superaban a la obsidiana, pero fue la viruela —también llegada por ese puerto— la mayor arma de la conquista.',
      regla_oro_check:true },
    { numero:5, titulo:'La Epidemia que Decidió la Guerra', subtitulo:'Ciudad de México',
      categoria:'ciencia-y-saberes', concepto_clave:'Las enfermedades europeas como arma involuntaria',
      materia:'Ciencias / Historia', estado_destino:'Ciudad de México', estado_slug:'cdmx',
      pista:'El médico del tiempo dice: "Antes de que los españoles entraran a la ciudad del lago por segunda vez, un enemigo invisible ya había matado a la mitad de sus defensores. Era una enfermedad que los europeos conocían de siglos pero los americanos nunca habían visto. El propio rey mexica murió de ella, no de una espada. La epidemia llegó cuando se preparaba el sitio final de la gran metrópoli lacustre."',
      libreta:`Enfermedad: Viruela (Variola major) — virus de la familia Poxviridae
Tasa de mortalidad en poblaciones sin inmunidad: 25–90%
Primer brote en Tenochtitlán: octubre–noviembre de año 1520 (durante el sitio)
Víctima notable: Cuitláhuac — tlatoani mexica, murió de viruela en diciembre de año 1520
Mecanismo: Sin inmunidad previa (naïve population) — sin anticuerpos ni historia de exposición
Estimación demográfica: México pasó de ~25 millones en año 1519 a ~1 millón en año 1600`,
      opciones:['Ciudad de México','Veracruz','Tlaxcala','Puebla'],
      respuesta_correcta:'Ciudad de México',
      explicacion:'La viruela llegó a Tenochtitlán (hoy CDMX) en 1520, mató al tlatoani Cuitláhuac y diezmó a los defensores antes del sitio final. La población mesoamericana pasó de ~25 millones a ~1 millón en 80 años. La epidemia fue más decisiva que la tecnología militar española.',
      regla_oro_check:true },
    { numero:6, titulo:'La Malinche: Lengua y Poder', subtitulo:'Tabasco',
      categoria:'vida-cotidiana', concepto_clave:'La intermediaria que habilitó la conquista',
      materia:'Historia / Español', estado_destino:'Tabasco', estado_slug:'tabasco',
      pista:'La traductora dice: "Me llamaban Malintzin, también Doña Marina. Era de noble origen y hablaba la lengua de los mexicas y otras del sur. Me entregaron como esclava a los hombres que venían del mar. Sin mí, su capitán no habría podido negociar ni entender nada. Llegué con otros esclavos desde las costas pantanosas del sureste."',
      libreta:`Nombre: Malintzin — bautizada como Marina por los españoles
Origen: Costa de Tabasco o Coatzacoalcos, Veracruz (fuentes divergen)
Lenguas: Náhuatl (lengua madre) + Maya chontal (aprendido en esclavitud)
Entrega: Don de esclavos de los caciques de Tabasco a Cortés — marzo de año 1519
Función: Intérprete náhuatl-español a través de Jerónimo de Aguilar (español-maya)
Hijo con Cortés: Martín Cortés Malintzin — uno de los primeros mestizos documentados de México`,
      opciones:['Tabasco','Veracruz','Campeche','Chiapas'],
      respuesta_correcta:'Tabasco',
      explicacion:'La Malinche fue entregada a Cortés por los caciques de Tabasco en marzo de 1519, como parte de un grupo de esclavas. Hablaba náhuatl y maya chontal. La cadena de traducción fue: náhuatl→Malinche→maya→Aguilar→español, lo que permitió a Cortés negociar con Moctezuma.',
      regla_oro_check:true },
    { numero:7, titulo:'El Intercambio Colombino', subtitulo:'Veracruz',
      categoria:'vida-cotidiana', concepto_clave:'Alimentos que cruzaron el Atlántico',
      materia:'Ciencias / Historia', estado_destino:'Veracruz', estado_slug:'veracruz',
      pista:'El cocinero del encuentro dice: "El momento en que dos mundos se tocaron fue también el momento en que dos cocinas se mezclaron para siempre. Por el mismo puerto costero donde llegaron los conquistadores salieron hacía Europa los frutos de América que hoy nadie puede imaginar sin ellos. Y por ese mismo puerto entraron los animales y los cereales del Viejo Mundo."',
      libreta:`Intercambio Colombino (término acuñado por Alfred W. Crosby, año 1972)
América → Europa: Tomate, chile, maíz, papa, cacao, vainilla, aguacate, jitomate
Europa → América: Trigo, arroz, caña de azúcar, caballos, cerdos, vacas, pollos
Puerto central: Veracruz — único puerto autorizado de la Nueva España por siglos
Impacto demográfico en Europa: Papa e maíz permitieron duplicar la población europea en el siglo XVIII
Impacto en México: Ganado vacuno transformó el paisaje de sabanas y valles`,
      opciones:['Veracruz','Tabasco','Campeche','Oaxaca'],
      respuesta_correcta:'Veracruz',
      explicacion:'Veracruz fue el único puerto autorizado de la Nueva España durante siglos. Por ahí salieron hacia Europa el tomate, el cacao, la vainilla y el chile. Y por ahí entraron el trigo, el ganado y el cerdo. Alfred Crosby llamó a este fenómeno "Intercambio Colombino" en 1972.',
      regla_oro_check:true },
    { numero:8, titulo:'Las Leyes de Burgos', subtitulo:'Ciudad de México',
      categoria:'civismo-y-etica', concepto_clave:'Primeras leyes coloniales sobre indígenas',
      materia:'Formación Cívica / Historia', estado_destino:'Ciudad de México', estado_slug:'cdmx',
      pista:'El jurista colonial dice: "La Corona española se vio obligada a regular el trato que los conquistadores daban a los indígenas. Las primeras leyes se hicieron en España antes de que terminara la conquista de México, pero se aplicaron desde la capital del nuevo virreinato. Eran insuficientes, pero fueron el primer reconocimiento legal de que los indígenas tenían alma y derechos."',
      libreta:`Leyes de Burgos: promulgadas el 27 de diciembre de año 1512
Leyes Nuevas: ampliación en año 1542 — abolición formal de la encomienda
Sistema de encomienda: Un español recibía trabajo indígena a cambio de "protección" y evangelización
Fray Bartolomé de las Casas: Defensor de los indígenas — "Brevísima relación de la destrucción de las Indias" (año 1542)
Centro administrativo virreinal: Ciudad de México — sede de la Real Audiencia desde año 1527
Limitación real: Las leyes se incumplían masivamente en las regiones alejadas`,
      opciones:['Ciudad de México','Veracruz','Puebla','Oaxaca'],
      respuesta_correcta:'Ciudad de México',
      explicacion:'La Ciudad de México fue sede de la Real Audiencia desde 1527, desde donde se aplicaban (o ignoraban) las leyes coloniales. Las Leyes de Burgos (1512) y las Leyes Nuevas (1542) intentaron regular la encomienda. Bartolomé de las Casas fue el principal defensor de los derechos indígenas.',
      regla_oro_check:true },
    { numero:9, titulo:'La Resistencia de Tlaxcala', subtitulo:'Tlaxcala',
      categoria:'civismo-y-etica', concepto_clave:'Ambigüedad moral de la alianza con los conquistadores',
      materia:'Formación Cívica / Ética', estado_destino:'Tlaxcala', estado_slug:'tlaxcala',
      pista:'El historiador ético dice: "La alianza con los españoles salvó a una nación de una opresión pero creó otra. Los guerreros del estado montañoso del centro lucharon con enorme valentía, pero su victoria fue la victoria de quienes los terminarían colonizando también. Hoy, ese estado más pequeño del país exhibe con orgullo su historia en murales del siglo XX que retratan esa decisión compleja."',
      libreta:`Murales de Tlaxcala: Desiderio Hernández Xochitiotzin — Palacio de Gobierno de Tlaxcala (siglo XX)
Beneficios coloniales recibidos: Exención de tributo, uso del escudo de armas propio, nobleza reconocida
Tlaxcaltecas en la colonización norte: Colonizadores de Zacatecas, San Luis Potosí y Nuevo México
Paradoja histórica: Tlaxcala fue aliada y después también colonizada por el mismo sistema
Extensión: 4,016 km² — el estado más pequeño de México
Población indígena actual: Nahua tlaxcalteca con lengua y tradiciones vivas`,
      opciones:['Tlaxcala','Puebla','Hidalgo','Morelos'],
      respuesta_correcta:'Tlaxcala',
      explicacion:'Tlaxcala, el estado más pequeño de México, recibió privilegios coloniales por su alianza, pero terminó colonizada también. Los murales de Desiderio Hernández Xochitiotzin en el Palacio de Gobierno narran esa historia compleja. Los tlaxcaltecas luego colonizaron el norte como aliados españoles.',
      regla_oro_check:true },
    { numero:10, titulo:'La Conquista y el Renacimiento', subtitulo:'Cruce Global',
      categoria:'cruce-global', concepto_clave:'El encuentro de dos mundos en el siglo XVI',
      materia:'Historia Universal', estado_destino:'Veracruz', estado_slug:'veracruz',
      pista:'El historiador global dice: "El mismo año en que los españoles llegaron a las costas del Golfo, Leonardo da Vinci llevaba tres años muerto y Miguel Ángel pintaba la Capilla Sixtina. La conquista de México ocurrió en plena efervescencia del Renacimiento europeo. Por el puerto del Golfo llegaron no solo soldados sino también ideas, libros y la imprenta — la misma que Gutenberg había inventado 70 años antes."',
      libreta:`Contemporáneos de la conquista de México (años 1519–1521):
• Europa: Carlos V — rey de España y Sacro Emperador Romano
• Arte: Miguel Ángel — Capilla Sixtina concluida en año 1512; trabajando en San Pedro
• Ciencia: Nicolás Copérnico — elaborando De revolutionibus (publicado en año 1543)
• Tecnología: Imprenta de Gutenberg (año 1450) — 70 años antes; primera imprenta en México: año 1539
• Exploración: Magallanes circunnavegaba el globo (años 1519–1522) — mismo año que Cortés
Primera imprenta de América continental: Ciudad de México (año 1539) — llegó por Veracruz`,
      opciones:['Veracruz','Tabasco','Campeche','Yucatán'],
      respuesta_correcta:'Veracruz',
      explicacion:'En 1519, Magallanes circunnavegaba el globo y Copérnico preparaba su teoría heliocéntrica. Cortés desembarcó en Veracruz ese mismo año. La primera imprenta del continente americano llegó a la Ciudad de México en 1539, también por el puerto de Veracruz, 70 años después de Gutenberg.',
      regla_oro_check:true },
  ],
};
export default conquista;
