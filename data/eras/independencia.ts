import type { Era } from '@/lib/types';
const independencia: Era = {
  metadata: {
    slug:'independencia', titulo:'Independencia de México', periodo:'1810 – 1821 d.C.',
    estados_principales:['Guanajuato','Querétaro','Michoacán'],
    icono:'🔔', color:'bg-green-800', colorText:'text-green-900', orden:8,
  },
  casos:[
    { numero:1, titulo:'El Grito de Dolores', subtitulo:'Guanajuato',
      categoria:'grandes-hitos', concepto_clave:'Inicio de la guerra de independencia',
      materia:'Historia', estado_destino:'Guanajuato', estado_slug:'guanajuato',
      pista:'El cura rebelde dice: "En la madrugada del 16 de septiembre de 1810, el sacerdote de un pueblo minero tocó las campanas de su iglesia para convocar a su feligresía. No era la hora de misa: era el inicio de una guerra. Ese pueblo hoy se llama igual que el personaje histórico que vivía allí."',
      libreta:`Evento: El "Grito de Independencia" — madrugada del 16 de septiembre de año 1810
Protagonista: Miguel Hidalgo y Costilla — cura de Dolores
Municipio: Dolores Hidalgo (antes: Dolores, Villa de Nuestra Señora de los Dolores)
Estado: El de los callejones de colores y las minas de plata
Estandarte usado: Imagen de la Virgen de Guadalupe de Atotonilco
Eco del grito: La campana original está hoy en el Palacio Nacional de la CDMX`,
      opciones:['Guanajuato','Michoacán','Querétaro','San Luis Potosí'],
      respuesta_correcta:'Guanajuato',
      explicacion:'Dolores Hidalgo está en Guanajuato, el estado de los callejones coloridos y las minas de plata. La campana que tocó Hidalgo fue llevada al Palacio Nacional. El municipio fue renombrado en honor al héroe.',
      regla_oro_check:true },
    { numero:2, titulo:'La Toma de la Alhóndiga', subtitulo:'Guanajuato',
      categoria:'grandes-hitos', concepto_clave:'Primera gran batalla insurgente',
      materia:'Historia', estado_destino:'Guanajuato', estado_slug:'guanajuato',
      pista:'El soldado insurgente dice: "Días después del Grito, el ejército del cura tomó el granero más importante de la ciudad minera más rica del virreinato. Un joven minero usó una losa de piedra como escudo para abrir la puerta mientras lo atacaban. Ese edificio sigue de pie y hoy es un museo en el corazón de la ciudad capital del mismo estado."',
      libreta:`Batalla: Toma de la Alhóndiga de Granaditas — 28 de septiembre de año 1810
Héroe anónimo: El Pípila — Juan José Martínez (apodo: pato)
Ciudad: Guanajuato capital — 1,726 m s.n.m.
Función original del edificio: Almacén de granos (alhóndiga = mercado de cereales)
Uso actual: Museo Regional de Guanajuato — Alhóndiga de Granaditas
Consecuencia: Primeras semanas del movimiento insurgente marcadas por violencia`,
      opciones:['Guanajuato','San Luis Potosí','Zacatecas','Jalisco'],
      respuesta_correcta:'Guanajuato',
      explicacion:'La Alhóndiga de Granaditas está en la ciudad de Guanajuato a 1,726 m s.n.m. El Pípila, con su losa improvisada, abrió la puerta el 28 de septiembre de 1810. Hoy es el Museo Regional del estado.',
      regla_oro_check:true },
    { numero:3, titulo:'La Conspiración de Querétaro', subtitulo:'Querétaro',
      categoria:'grandes-hitos', concepto_clave:'Planeación clandestina de la independencia',
      materia:'Historia', estado_destino:'Querétaro', estado_slug:'queretaro',
      pista:'La corregidora dice: "Meses antes del Grito, un grupo de criollos se reunía bajo el pretexto de un club literario para planear la rebelión. Cuando la Corona los descubrió, la esposa del funcionario más importante de la ciudad avisó a los insurgentes golpeando el suelo con su tacón desde su celda. Esa ciudad hoy es Patrimonio Mundial de la UNESCO."',
      libreta:`Evento: Conspiración de Querétaro — descubierta en septiembre de año 1810
Protagonista: Josefa Ortiz de Domínguez (La Corregidora) — esposa del Corregidor
Método de aviso: Golpes en el suelo de su encierro para alertar a un carcelero
Centro histórico: Patrimonio de la Humanidad UNESCO desde año 1996
Ubicación: Centro-norte sin salida al mar
Colindancias: Estado de México, Hidalgo, San Luis Potosí, Guanajuato`,
      opciones:['Querétaro','Hidalgo','San Luis Potosí','Michoacán'],
      respuesta_correcta:'Querétaro',
      explicacion:'La Conspiración fue descubierta en Querétaro. Josefa Ortiz de Domínguez alertó a los insurgentes desde su encierro. El centro histórico de Querétaro es Patrimonio UNESCO desde 1996. Está en el centro-norte del país sin costas.',
      regla_oro_check:true },
    { numero:4, titulo:'Los Cañones de Morelos', subtitulo:'Michoacán',
      categoria:'ciencia-y-saberes', concepto_clave:'Ingeniería militar insurgente',
      materia:'Ciencias / Historia', estado_destino:'Michoacán', estado_slug:'michoacan',
      pista:'El artillero del tiempo dice: "El segundo gran líder de la independencia era un cura que no tenía formación militar pero aprendió rápido. Su ejército necesitaba cañones y no tenía fundiciones. Resolvió el problema fundiendo campanas de iglesias en moldes improvisados. Ese cura venía del estado del lago Pátzcuaro y la mariposa monarca."',
      libreta:`Personaje: José María Morelos y Pavón — cura de Carácuaro
Origen: Valladolid (hoy Morelia), estado de Michoacán
Innovación técnica: Conversión de campanas en artillería improvisada
Campañas militares: Sur de México (años 1810–1815)
Lago del estado: Pátzcuaro — hábitat de la acócil (Cambarellus patzcuarensis)
Mariposa: Danaus plexippus — reserva biósfera en el estado`,
      opciones:['Michoacán','Guerrero','Oaxaca','Jalisco'],
      respuesta_correcta:'Michoacán',
      explicacion:'Morelos era de Valladolid (hoy Morelia), Michoacán. Su innovación de fundir campanas en cañones fue una solución de ingeniería militar improvisada. El lago Pátzcuaro y la mariposa monarca confirman el estado.',
      regla_oro_check:true },
    { numero:5, titulo:'El Primer Congreso de Chilpancingo', subtitulo:'Guerrero',
      categoria:'ciencia-y-saberes', concepto_clave:'Primeras constituciones y derechos',
      materia:'Formación Cívica', estado_destino:'Guerrero', estado_slug:'guerrero',
      pista:'La constitucionalista del tiempo dice: "En plena guerra de independencia, los insurgentes convocaron a los representantes de varias regiones para redactar las primeras leyes de una nación libre. El congreso se reunió en una ciudad del sur, en un estado que hoy lleva el nombre del principal organizador de ese acto histórico."',
      libreta:`Evento: Congreso de Anáhuac — noviembre de año 1813
Sede: Chilpancingo — capital actual del estado del sur
Documento generado: Solemne Acto de la Declaración de Independencia de América Septentrional
Organizador: José María Morelos y Pavón
Estado que lleva su nombre: Guerrero — nombrado en honor a Vicente Guerrero (siglo XIX)
Primer principio: La soberanía emana del pueblo (antecede a la Constitución de año 1824)`,
      opciones:['Guerrero','Oaxaca','Morelos','Michoacán'],
      respuesta_correcta:'Guerrero',
      explicacion:'Chilpancingo, capital de Guerrero, fue sede del Congreso de Anáhuac en 1813. El estado fue nombrado después en honor a Vicente Guerrero. El Solemne Acto fue la primera declaración de soberanía popular del México independiente.',
      regla_oro_check:true },
    { numero:6, titulo:'Los Sentimientos de la Nación', subtitulo:'Guerrero',
      categoria:'vida-cotidiana', concepto_clave:'Primer proyecto de sociedad justa',
      materia:'Español / Formación Cívica', estado_destino:'Guerrero', estado_slug:'guerrero',
      pista:'El filósofo insurgente dice: "Morelos escribió un documento que soñaba con una sociedad donde la esclavitud fuera abolida, los impuestos fueran justos y los ricos no tuvieran tanto poder sobre los pobres. Era una visión del futuro que nadie había puesto por escrito antes en América. Lo presentó en el mismo congreso del sur."',
      libreta:`Documento: Sentimientos de la Nación — 14 de septiembre de año 1813
Puntos clave: Abolición de la esclavitud, igualdad de todos los habitantes, eliminación de castas
Autor y lector: José María Morelos y Pavón
Lugar de presentación: Congreso de Chilpancingo, Guerrero
Innovación social: Primer texto en México que propone igualdad sin distinción de origen
Influencia: Declaración de Independencia de EUA (año 1776) y Revolución Francesa (año 1789)`,
      opciones:['Guerrero','Oaxaca','Michoacán','Morelos'],
      respuesta_correcta:'Guerrero',
      explicacion:'Los Sentimientos de la Nación fueron leídos en Chilpancingo, Guerrero, el 14 de septiembre de 1813. La abolición de la esclavitud y la igualdad sin castas eran ideas radicales para América Latina de la época.',
      regla_oro_check:true },
    { numero:7, titulo:'El Plan de Iguala', subtitulo:'Guerrero',
      categoria:'vida-cotidiana', concepto_clave:'El pacto que consumó la independencia',
      materia:'Historia', estado_destino:'Guerrero', estado_slug:'guerrero',
      pista:'El negociador del tiempo dice: "La independencia se logró finalmente no con una batalla sino con un acuerdo político entre un general realista que se cambió de bando y el último guerrillero insurgente. El documento que firmaron prometía un México unido para todos: criollos, indígenas y mestizos. Se firmó en una ciudad del mismo estado del sur."',
      libreta:`Documento: Plan de Iguala — 24 de febrero de año 1821
Firmantes: Agustín de Iturbide (ex realista) + Vicente Guerrero (insurgente)
Las Tres Garantías: Independencia, Religión católica, Unión de todos los habitantes
Ejército que lo ejecutó: Ejército Trigarante (de las tres garantías)
Ciudad de firma: Iguala de la Independencia — dentro del estado que lleva el apellido de Guerrero
Resultado: En 7 meses, el virrey firmó los Tratados de Córdoba`,
      opciones:['Guerrero','Morelos','Michoacán','Oaxaca'],
      respuesta_correcta:'Guerrero',
      explicacion:'Iguala de la Independencia está en el estado de Guerrero. El Plan de Iguala del 24 de febrero de 1821, con las Tres Garantías, fue el instrumento que unió fuerzas realistas e insurgentes para completar la independencia en 7 meses.',
      regla_oro_check:true },
    { numero:8, titulo:'La Abolición de la Esclavitud', subtitulo:'Guanajuato',
      categoria:'civismo-y-etica', concepto_clave:'Primeros derechos humanos en México',
      materia:'Formación Cívica / Ética', estado_destino:'Guanajuato', estado_slug:'guanajuato',
      pista:'La activista del tiempo dice: "El primer acto de justicia social de la independencia fue abolir la esclavitud. El cura que inició la guerra lo decretó antes de ganar una sola batalla importante. Ese decreto se produjo en la misma ciudad minera donde había tomado el granero principal. México abolió la esclavitud 44 años antes que Estados Unidos."',
      libreta:`Decreto de Hidalgo: Abolición de la esclavitud — octubre de año 1810 en Guadalajara
Contexto comparativo: EUA abolió la esclavitud en año 1865 (13ª Enmienda)
México: Primer país de América en abolir la esclavitud (antes que Gran Bretaña en 1833)
Esclavos en Nueva España: Aprox. 10,000 africanos + mayor número de indígenas en condición análoga
Ciudad más relacionada con el decreto de Hidalgo: Guadalajara — aunque él era de Dolores, Guanajuato
Impacto real: Aplicación limitada durante la guerra; consolidada en Constitución de año 1824`,
      opciones:['Guanajuato','Jalisco','Michoacán','San Luis Potosí'],
      respuesta_correcta:'Guanajuato',
      explicacion:'Aunque el decreto formal fue en Guadalajara (Jalisco), Hidalgo era el líder insurgente nacido y basado en Guanajuato. La Alhóndiga y Dolores Hidalgo ubican el corazón de la insurgencia en Guanajuato. México fue el primer país del continente en abolir la esclavitud formalmente.',
      regla_oro_check:true },
    { numero:9, titulo:'Las Castas y la Sociedad Colonial', subtitulo:'Querétaro',
      categoria:'civismo-y-etica', concepto_clave:'Sistema de castas y desigualdad colonial',
      materia:'Formación Cívica / Historia', estado_destino:'Querétaro', estado_slug:'queretaro',
      pista:'La socióloga del tiempo dice: "Una de las razones de la independencia fue el sistema de castas que clasificaba a las personas por su origen étnico. Los criollos, aunque ricos, no podían ocupar los puestos más altos del gobierno porque habían nacido en América, no en España. Esa desigualdad legal hervía en las ciudades del centro, como la que tiene el centro histórico patrimonio mundial."',
      libreta:`Sistema de castas novohispano: 16 categorías raciales mixtas documentadas
Criollos: Hijos de españoles nacidos en América — excluidos de puestos virreinales superiores
Penínsulares (gachupines): Nacidos en España — ocupaban cargos de gobierno
Mestizos: Aprox. 22% de la población en año 1810
Centro histórico Patrimonio UNESCO: Declarado en año 1996
Queretanas famosas: Josefa Ortiz de Domínguez — criolla que desafió al sistema`,
      opciones:['Querétaro','Guanajuato','San Luis Potosí','Hidalgo'],
      respuesta_correcta:'Querétaro',
      explicacion:'El centro histórico de Querétaro (UNESCO 1996) fue el escenario donde criollos como Josefa Ortiz desafiaron el sistema de castas. La conspiración fue precisamente una rebelión criolla contra la exclusión de puestos de poder.',
      regla_oro_check:true },
    { numero:10, titulo:'Independencia y el Mundo Atlántico', subtitulo:'Cruce Global',
      categoria:'cruce-global', concepto_clave:'México en el contexto de las revoluciones atlánticas',
      materia:'Historia Universal', estado_destino:'Guanajuato', estado_slug:'guanajuato',
      pista:'El historiador global dice: "La independencia de México no fue un evento aislado: ocurrió en la misma oleada de revoluciones que cambió el mundo atlántico. Estados Unidos se independizó 34 años antes; Haití, 6 años antes; y Simón Bolívar liberaba Venezuela al mismo tiempo. El epicentro de esta ola en México fue el estado de las minas de plata."',
      libreta:`Ola de independencias americanas:
• EUA: año 1776 (34 años antes que México)
• Haití: año 1804 (6 años antes, primera nación negra libre del mundo)
• Venezuela (Bolívar): año 1811 (mismo año que el inicio formal mexicano)
• México: año 1821
• Brasil: año 1822 (un año después, en forma pacífica)
Inspiración intelectual: Ilustración francesa (Voltaire, Rousseau) + Revolución Francesa (año 1789)
Estado más rico de Nueva España al momento del Grito: Guanajuato — mayor productor mundial de plata`,
      opciones:['Guanajuato','Oaxaca','Veracruz','Jalisco'],
      respuesta_correcta:'Guanajuato',
      explicacion:'Guanajuato era el mayor productor mundial de plata al inicio de la independencia, lo que lo convirtió en el objetivo estratégico central. En el contexto atlántico, México se independizó en la misma ola que Venezuela (Bolívar) y un año antes que Brasil.',
      regla_oro_check:true },
  ],
};
export default independencia;
