import type { Era } from '@/lib/types';
const caudillismo: Era = {
  metadata: {
    slug:'caudillismo', titulo:'Caudillismo y Cardenismo', periodo:'1920 – 1940 d.C.',
    estados_principales:['Sonora','Michoacán','Ciudad de México'],
    icono:'🌽', color:'bg-orange-800', colorText:'text-orange-900', orden:13,
  },
  casos:[
    { numero:1, titulo:'Obregón: El General de la Paz', subtitulo:'Sonora',
      categoria:'grandes-hitos', concepto_clave:'La reconstrucción posrevolucionaria',
      materia:'Historia', estado_destino:'Sonora', estado_slug:'sonora',
      pista:'El general del norte dice: "Fui el primer presidente que logró terminar su mandato y entregar el poder sin que el país volviera a la guerra. Venía del estado fronterizo del noroeste, el mismo de donde saldrían los presidentes que construirían las instituciones del México moderno. Perdí un brazo en la batalla de Celaya pero gané la presidencia."',
      libreta:`Álvaro Obregón: Presidente de México años 1920–1924
Origen: Huatabampo, Sonora — frontera con Arizona
Batalla de Celaya: año 1915 — derrotó a Pancho Villa; perdió brazo derecho en Trincheras (año 1915)
Logro clave: Primer presidente posrevolucionario en entregar el poder en paz
Política educativa: José Vasconcelos como Secretario de Educación — murales y escuelas rurales
Asesinado: 17 de julio de año 1928 — restaurante La Bombilla, CDMX — por Toral (reeleccionista)`,
      opciones:['Sonora','Chihuahua','Coahuila','Sinaloa'],
      respuesta_correcta:'Sonora',
      explicacion:'Álvaro Obregón era de Huatabampo, Sonora. Fue el primer presidente posrevolucionario en entregar el poder pacíficamente (1924). Nombró a Vasconcelos en Educación, lo que detonó el muralismo mexicano. Fue asesinado en 1928 cuando intentaba reelegirse, lo que llevó a la fundación del PNR (antecedente del PRI).',
      regla_oro_check:true },
    { numero:2, titulo:'La Guerra Cristera', subtitulo:'Jalisco',
      categoria:'grandes-hitos', concepto_clave:'El conflicto entre la Iglesia y el Estado laico',
      materia:'Historia / Formación Cívica', estado_destino:'Jalisco', estado_slug:'jalisco',
      pista:'El cristero del tiempo dice: "Cuando el gobierno quiso aplicar las leyes que prohibían a la Iglesia poseer bienes y participar en política, los católicos del occidente nos alzamos en armas. Nuestro grito de guerra era una frase de fe. La guerra duró tres años y la libré principalmente en los Altos del estado del mariachi y el tequila."',
      libreta:`Cristiada (Guerra Cristera): años 1926–1929
Causa: Aplicación estricta de artículos anticlericales de la Constitución de año 1917
Grito de guerra: "¡Viva Cristo Rey!" — de ahí el nombre "cristeros"
Centro de la rebelión: Los Altos de Jalisco + Guanajuato + Michoacán
Muertos estimados: 70,000–90,000 personas (combatientes + civiles)
Resolución: Arreglos de año 1929 — mediados por el embajador Dwight Morrow (EUA)`,
      opciones:['Jalisco','Guanajuato','Michoacán','Colima'],
      respuesta_correcta:'Jalisco',
      explicacion:'Los Altos de Jalisco fueron el epicentro de la Cristiada (1926-1929). La región, profundamente católica, resistió la aplicación de los artículos anticlericales de la Constitución de 1917. El conflicto costó 70,000-90,000 vidas y se resolvió con acuerdos mediados por el embajador estadounidense Dwight Morrow en 1929.',
      regla_oro_check:true },
    { numero:3, titulo:'Cárdenas y el Petróleo', subtitulo:'Ciudad de México',
      categoria:'grandes-hitos', concepto_clave:'La expropiación petrolera y el nacionalismo económico',
      materia:'Historia / Formación Cívica', estado_destino:'Ciudad de México', estado_slug:'cdmx',
      pista:'El presidente del pueblo dice: "El 18 de marzo de 1938, desde el Palacio Nacional de la capital, anuncié que el petróleo de México volvería a ser de los mexicanos. Las compañías extranjeras que explotaban nuestros recursos durante décadas tuvieron que irse. Las mujeres del país donaron sus joyas para pagar la deuda. Ese día cambió para siempre la relación entre México y el capital extranjero."',
      libreta:`Expropiación petrolera: 18 de marzo de año 1938 — Decreto presidencial de Lázaro Cárdenas
Empresas afectadas: 17 compañías — Standard Oil, Shell, El Águila (British-Dutch)
Indemnización pagada: 130 millones de pesos en 10 años — financiada por donaciones populares
PEMEX: Petróleos Mexicanos — empresa estatal fundada el mismo día
Sede del anuncio: Palacio Nacional — CDMX
Reacción internacional: Boicot de petróleo mexicano por Gran Bretaña y EUA — superado gracias a la II Guerra Mundial`,
      opciones:['Ciudad de México','Veracruz','Tamaulipas','Tabasco'],
      respuesta_correcta:'Ciudad de México',
      explicacion:'El decreto de expropiación petrolera fue firmado en el Palacio Nacional de la CDMX el 18 de marzo de 1938. PEMEX nació ese mismo día. Las donaciones populares (joyas, monedas de plata) pagaron la indemnización de 130 millones de pesos. El boicot internacional fue superado porque la II Guerra Mundial necesitaba el petróleo mexicano.',
      regla_oro_check:true },
    { numero:4, titulo:'El Muralismo Mexicano', subtitulo:'Ciudad de México',
      categoria:'ciencia-y-saberes', concepto_clave:'El arte como política y educación popular',
      materia:'Arte / Historia', estado_destino:'Ciudad de México', estado_slug:'cdmx',
      pista:'El pintor del tiempo dice: "El ministro de educación nos encargó cubrir los edificios públicos del país con pinturas que contaran la historia de México a un pueblo mayoritariamente analfabeto. Los tres más famosos pintamos en el corazón de la capital. Lo que hicimos en las paredes de los edificios del gobierno se convirtió en el movimiento artístico más importante de América Latina del siglo XX."',
      libreta:`Los Tres Grandes: Diego Rivera, José Clemente Orozco, David Alfaro Siqueiros
Patrocinador: José Vasconcelos — Secretario de Educación (años 1921–1924)
Primer mural: Diego Rivera en la Escuela Nacional Preparatoria (Anfiteatro Bolívar) — año 1922
Técnica principal: Fresco al buon fresco — pigmentos en cal húmeda
Edificio icónico: Palacio Nacional, CDMX — "Historia de México" (Rivera, años 1929–1951)
Influencia internacional: Muralismo influyó en el New Deal de EUA (WPA murals, año 1935)`,
      opciones:['Ciudad de México','Jalisco','Oaxaca','Guanajuato'],
      respuesta_correcta:'Ciudad de México',
      explicacion:'El muralismo nació en la Ciudad de México con el encargo de Vasconcelos en 1921. Rivera pintó el Palacio Nacional (1929-1951), Orozco la Preparatoria Nacional y Siqueiros el Sindicato de Electricistas. La técnica del fresco al buon fresco requería pintar sobre cal húmeda. El movimiento influyó directamente en los murales del New Deal estadounidense (1935).',
      regla_oro_check:true },
    { numero:5, titulo:'La UNAM y la Educación Pública', subtitulo:'Ciudad de México',
      categoria:'ciencia-y-saberes', concepto_clave:'La masificación de la educación pública',
      materia:'Ciencias / Formación Cívica', estado_destino:'Ciudad de México', estado_slug:'cdmx',
      pista:'El rector universitario dice: "En este período, el gobierno tomó la decisión de que la educación era un derecho y no un privilegio. Construyeron escuelas rurales en todo el país y refundaron la universidad más antigua del continente con autonomía plena. El campus que construyeron décadas después se convirtió en el más grande de América Latina."',
      libreta:`Autonomía universitaria: 1929 — UNAM recibe autonomía por decreto presidencial
UNAM: Universidad Nacional Autónoma de México — fundada en año 1910 (refundada)
Ciudad Universitaria (CU): Construida en años 1950–1954 — Luis Barragán, Juan O'Gorman, Mario Pani
Bibliotecas rurales (Vasconcelos, años 1921–1924): 2,000 bibliotecas + 1,000 escuelas rurales nuevas
Maestros rurales misioneros: Brigadas de jóvenes maestros a comunidades sin escuela
Matrícula universitaria en año 1940: 18,000 estudiantes; en año 2024: más de 350,000`,
      opciones:['Ciudad de México','Jalisco','Guanajuato','Michoacán'],
      respuesta_correcta:'Ciudad de México',
      explicacion:'La UNAM obtuvo autonomía en 1929 en la Ciudad de México. El programa de Vasconcelos (1921-1924) creó 2,000 bibliotecas rurales y 1,000 escuelas nuevas. Ciudad Universitaria (1950-1954) fue declarada Patrimonio UNESCO en 2007. La matrícula pasó de 18,000 (1940) a más de 350,000 estudiantes.',
      regla_oro_check:true },
    { numero:6, titulo:'La Época de Oro del Cine', subtitulo:'Ciudad de México',
      categoria:'vida-cotidiana', concepto_clave:'Hollywood mexicano y la cultura de masas',
      materia:'Arte / Historia', estado_destino:'Ciudad de México', estado_slug:'cdmx',
      pista:'El director de cine dice: "En los años cuarenta y cincuenta, los estudios de filmación de la capital producían películas que se veían en toda América Latina y España. Nuestros actores eran estrellas continentales. El cantante de rancheras se convirtió en el símbolo del hombre mexicano en toda la pantalla grande. Los estudios estaban en la capital."',
      libreta:`Época de Oro del cine mexicano: años 1935–1959
Estudios: Estudios Churubusco (CDMX) — inaugurados en año 1945
Directores: Emilio "El Indio" Fernández + Fernando de Fuentes + Ismael Rodríguez
Actores icónicos: Jorge Negrete, Pedro Infante, María Félix, Dolores del Río, Cantinflas
Idioma de producción: Español — ventaja sobre Hollywood para el mercado latinoamericano
Películas producidas: hasta 120 por año en los mejores momentos — años 1940s–1950s`,
      opciones:['Ciudad de México','Jalisco','Nuevo León','Veracruz'],
      respuesta_correcta:'Ciudad de México',
      explicacion:'Los Estudios Churubusco (inaugurados en 1945 en la CDMX) fueron el corazón de la Época de Oro del cine mexicano (1935-1959). Jorge Negrete y Pedro Infante eran estrellas de todo el continente hispanohablante. El español fue la ventaja competitiva sobre Hollywood. México producía hasta 120 películas por año en su mejor momento.',
      regla_oro_check:true },
    { numero:7, titulo:'El Mariachi, Voz de México', subtitulo:'Jalisco',
      categoria:'vida-cotidiana', concepto_clave:'La música popular como identidad nacional',
      materia:'Arte / Historia', estado_destino:'Jalisco', estado_slug:'jalisco',
      pista:'El músico de traje bordado dice: "Nuestra música nació en los campos y las haciendas del occidente, pero fue en los años del cine de oro cuando el mundo entero la conoció. Las películas del galán que montaba a caballo siempre tenían nuestras canciones. El estado donde nacimos es el mismo que dio nombre a nuestra bebida más famosa y al deporte ecuestre que nos define."',
      libreta:`Mariachi: Conjunto musical de cuerdas + trompetas + voz — origen en Jalisco, siglo XIX
Instrumentos base: Violín, vihuela, guitarra, guitarrón, trompeta
UNESCO: Declarado Patrimonio Cultural Inmaterial de la Humanidad — año 2011
Difusión nacional: Cine de la Época de Oro — Jorge Negrete como icono del cantante mariachi
Mariachi Vargas de Tecalitlán: Fundado en año 1898 en Jalisco — el más famoso del mundo
Plaza Garibaldi (CDMX): Centro de contratación de mariachis desde principios del siglo XX`,
      opciones:['Jalisco','Guanajuato','Michoacán','Colima'],
      respuesta_correcta:'Jalisco',
      explicacion:'El mariachi nació en Jalisco en el siglo XIX y fue difundido al mundo por el cine de la Época de Oro. Jorge Negrete lo convirtió en símbolo del México masculino. El Mariachi Vargas de Tecalitlán (fundado en 1898 en Jalisco) es el conjunto más famoso. La UNESCO lo declaró Patrimonio Cultural Inmaterial en 2011.',
      regla_oro_check:true },
    { numero:8, titulo:'El PNR y el Partido Único', subtitulo:'Ciudad de México',
      categoria:'civismo-y-etica', concepto_clave:'La institucionalización del poder político',
      materia:'Formación Cívica / Historia', estado_destino:'Ciudad de México', estado_slug:'cdmx',
      pista:'El político del tiempo dice: "Tras el asesinato del presidente reelecto, los caciques militares decidieron crear una organización que sustituyera las balas por las negociaciones. Así nació el partido que gobernaría México por más de setenta años. Su primer nombre se cambió dos veces antes de llegar al que todos conocen. El acto de fundación fue en la capital."',
      libreta:`PNR: Partido Nacional Revolucionario — fundado el 4 de marzo de año 1929
Fundador: Plutarco Elías Calles ("El Jefe Máximo")
Transformación: PNR (año 1929) → PRM (año 1938, Cárdenas) → PRI (año 1946)
Propósito: Evitar guerras civiles posrevolucionarias mediante competencia interna institucionalizada
Sede permanente: Ciudad de México
Hegemonía: Gobernó México ininterrumpidamente hasta el año 2000 (71 años)`,
      opciones:['Ciudad de México','Sonora','Jalisco','Veracruz'],
      respuesta_correcta:'Ciudad de México',
      explicacion:'El PNR fue fundado en la Ciudad de México el 4 de marzo de 1929 por Plutarco Elías Calles. Transformado en PRM (1938) por Cárdenas y luego en PRI (1946), gobernó México 71 años consecutivos hasta el 2000. El partido fue el mecanismo que sustituyó los golpes de Estado por la negociación interna entre caudillos.',
      regla_oro_check:true },
    { numero:9, titulo:'El Reparto Agrario Cardenista', subtitulo:'Michoacán',
      categoria:'civismo-y-etica', concepto_clave:'La reforma agraria más grande de México',
      materia:'Formación Cívica / Geografía', estado_destino:'Michoacán', estado_slug:'michoacan',
      pista:'El ejidatario del tiempo dice: "El presidente que vino del estado del lago Pátzcuaro y la mariposa monarca cumplió la promesa de la Revolución: repartió más tierra a los campesinos que todos los presidentes anteriores juntos. En seis años entregó más de dieciocho millones de hectáreas en forma de ejidos colectivos. Mi parcela fue una de ellas."',
      libreta:`Lázaro Cárdenas: Presidente años 1934–1940 — originario de Jiquilpan, Michoacán
Tierra repartida: 18.8 millones de hectáreas — el mayor reparto agrario de la historia de México
Ejidos creados: más de 11,000 ejidos colectivos
Beneficiarios directos: ~810,000 campesinos
Ejido colectivo más famoso: La Laguna (Coahuila/Durango) — año 1936, algodonero
Estado de origen de Cárdenas: Michoacán — lago Pátzcuaro, reserva de la mariposa monarca`,
      opciones:['Michoacán','Guerrero','Oaxaca','Morelos'],
      respuesta_correcta:'Michoacán',
      explicacion:'Lázaro Cárdenas nació en Jiquilpan, Michoacán. Repartió 18.8 millones de hectáreas en 6 años (más que todos sus predecesores juntos) y creó más de 11,000 ejidos. El ejido colectivo de La Laguna (1936) fue el más famoso. Michoacán es el estado del lago Pátzcuaro y la reserva de la mariposa monarca.',
      regla_oro_check:true },
    { numero:10, titulo:'México y la Guerra Civil Española', subtitulo:'Cruce Global',
      categoria:'cruce-global', concepto_clave:'México como refugio del antifascismo mundial',
      materia:'Historia Universal', estado_destino:'Ciudad de México', estado_slug:'cdmx',
      pista:'El refugiado español dice: "Cuando Franco y los fascistas ganaron en nuestro país, el presidente del país del altiplano fue el único en el mundo que nos abrió las puertas sin condiciones. Miles de científicos, artistas y maestros republicanos llegamos a la capital y cambiamos para siempre la cultura de ese país. La deuda es mutua."',
      libreta:`Exilio republicano español: años 1939–1940 — tras la victoria de Franco
Refugiados acogidos por México: 25,000–30,000 personas
Decreto de Cárdenas: México fue el único país latinoamericano en reconocer al gobierno republicano en exilio
Aportaciones culturales: Casa de España → El Colegio de México (fundado en año 1940)
Científicos exiliados: físicos, médicos, arquitectos, escritores — transformaron la educación superior
Contemporáneo: II Guerra Mundial comenzó en año 1939 — mismo año que el exilio masivo`,
      opciones:['Ciudad de México','Veracruz','Jalisco','Michoacán'],
      respuesta_correcta:'Ciudad de México',
      explicacion:'Cárdenas fue el único líder mundial que abrió sus puertas masivamente a los republicanos españoles derrotados por Franco (1939). Llegaron 25,000-30,000 personas a México. La Casa de España (1938) se convirtió en El Colegio de México (1940), institución que transformó la investigación en humanidades. La Ciudad de México fue el centro de ese exilio.',
      regla_oro_check:true },
  ],
};
export default caudillismo;
