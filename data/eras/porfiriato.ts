import type { Era } from '@/lib/types';
const porfiriato: Era = {
  metadata: {
    slug:'porfiriato', titulo:'Porfiriato', periodo:'1876 – 1910 d.C.',
    estados_principales:['Ciudad de México','Veracruz','Chihuahua'],
    icono:'🏭', color:'bg-zinc-700', colorText:'text-zinc-900', orden:11,
  },
  casos:[
    { numero:1, titulo:'El Ferrocarril de México', subtitulo:'Veracruz',
      categoria:'grandes-hitos', concepto_clave:'La modernización del transporte y el territorio',
      materia:'Historia / Geografía', estado_destino:'Veracruz', estado_slug:'veracruz',
      pista:'El maquinista del tiempo dice: "El sueño del virreinato era conectar el océano Atlántico con la capital. En el Porfiriato ese sueño se cumplió: una máquina de vapor trazó rieles desde el puerto del Golfo hasta la capital en menos de un día de viaje. Antes tardabas diez días en diligencia. El presidente que lo inauguró en el año final del gobierno de Juárez lo terminó él mismo décadas después."',
      libreta:`Ferrocarril Mexicano (México–Veracruz): Inaugurado el 1 de enero de año 1873
Longitud: 424 km — primer ferrocarril de larga distancia de México
Tiempo de viaje: 12 horas (vs. 8–12 días en diligencia)
Velocidad máxima: 40–60 km/h
Red total en el Porfiriato: De 640 km en año 1876 a 19,280 km en año 1910
Inversión: Capital inglés y estadounidense — Pearson & Son + otros consorcios`,
      opciones:['Veracruz','Tamaulipas','Tabasco','Campeche'],
      respuesta_correcta:'Veracruz',
      explicacion:'El Ferrocarril Mexicano (México-Veracruz, 424 km) fue inaugurado en 1873. En el Porfiriato la red creció de 640 a 19,280 km. Veracruz fue el eje de esta expansión: era el puerto de entrada de locomotoras inglesas y el destino de las exportaciones. El tren redujo el viaje de 10 días a 12 horas.',
      regla_oro_check:true },
    { numero:2, titulo:'Porfirio Díaz: El Hombre Necesario', subtitulo:'Ciudad de México',
      categoria:'grandes-hitos', concepto_clave:'La dictadura modernizadora del Porfiriato',
      materia:'Historia', estado_destino:'Ciudad de México', estado_slug:'cdmx',
      pista:'El periodista extranjero dice: "El presidente que gobernó México más de treinta años me dijo que el país no estaba listo para la democracia. Traía orden, inversión extranjera y progreso, pero los trabajadores no tenían derechos y los campesinos perdían sus tierras. Su palacio de gobierno y su mansión estaban en la capital, donde el Paseo de la Reforma se construyó a su imagen."',
      libreta:`Porfirio Díaz: Presidente de México en años 1876–1880 y años 1884–1911
Estado de origen: Oaxaca — (ver era de Reforma)
Lema del régimen: "Orden y Progreso" — adaptado del positivismo de Auguste Comte
Paseo de la Reforma: Ampliado y embellecido durante el Porfiriato — inspirado en los Campos Elíseos
Capitales culturales del Porfiriato: Palacio de Bellas Artes (iniciado en año 1904) + Correo Mayor (año 1907)
Política económica: "México para los extranjeros" — 80% del capital industrial era extranjero en año 1910`,
      opciones:['Ciudad de México','Veracruz','Puebla','Jalisco'],
      respuesta_correcta:'Ciudad de México',
      explicacion:'La Ciudad de México fue el escaparate del Porfiriato. El Paseo de la Reforma fue ampliado siguiendo el modelo de los Campos Elíseos parisinos. El Palacio de Bellas Artes y el Correo Mayor se construyeron para mostrar la modernidad del régimen. El 80% del capital industrial del país era extranjero en 1910.',
      regla_oro_check:true },
    { numero:3, titulo:'El Centenario de la Independencia', subtitulo:'Ciudad de México',
      categoria:'grandes-hitos', concepto_clave:'La fiesta del régimen y su caída inminente',
      materia:'Historia', estado_destino:'Ciudad de México', estado_slug:'cdmx',
      pista:'El cronista del tiempo dice: "Las celebraciones del mes de septiembre del año redondo fueron las más esplendorosas en la historia del país hasta ese momento. Desfiles, banquetes y monumentos inaugurados ante la vista del mundo. El viejo presidente cumplía 80 años y quería mostrar que todo estaba bajo control. Cuatro meses después, estalló la revolución."',
      libreta:`Centenario: 15–16 de septiembre de año 1910
Inversión: 20 millones de pesos en festividades — cifra astronómica para la época
Inauguraciones: Columna de la Independencia (El Ángel), Hemiciclo a Juárez, Palacio de Correos
El Ángel de la Independencia: 36 metros de altura — inaugurado el 16 de septiembre de año 1910
Huéspedes internacionales: 30 embajadas + representaciones de 20 países
Ironía histórica: Madero publicó el Plan de San Luis el 5 de octubre — 19 días después del Centenario`,
      opciones:['Ciudad de México','Guanajuato','Querétaro','Puebla'],
      respuesta_correcta:'Ciudad de México',
      explicacion:'El Centenario de septiembre de 1910 fue la última gran exhibición del Porfiriato. El Ángel de la Independencia fue inaugurado ese día en la CDMX con 30 delegaciones diplomáticas presentes. Sólo 19 días después, Madero publicó el Plan de San Luis que convocó la Revolución para el 20 de noviembre.',
      regla_oro_check:true },
    { numero:4, titulo:'La Electricidad Llega a México', subtitulo:'Ciudad de México',
      categoria:'ciencia-y-saberes', concepto_clave:'La electrificación y la segunda revolución industrial',
      materia:'Ciencias / Historia', estado_destino:'Ciudad de México', estado_slug:'cdmx',
      pista:'El ingeniero del tiempo dice: "En la misma década en que Edison patentaba su bombilla en Nueva York, la capital del país del altiplano comenzaba a iluminarse también con electricidad. Primero el Zócalo, luego las casas de los ricos, luego las fábricas. Las compañías eléctricas eran extranjeras pero la luz llegó al mismo centro de poder donde habían estado los virreyes."',
      libreta:`Primera iluminación eléctrica en México: año 1881 — Teatro Nacional de la CDMX
Empresa pionera: Mexican Light and Power Company — capital canadiense y británico
Central hidroeléctrica: Necaxtla (Puebla) — año 1895, primera gran hidroeléctrica del país
Potencia instalada en año 1910: ~100 MW — equivalente a 100,000 focos de 1,000 W
Tranvías eléctricos en CDMX: Reemplazaron a los de mulitas a partir de año 1900
Comparativa mundial: Edison patentó la bombilla en año 1879 — México siguió solo 2 años después`,
      opciones:['Ciudad de México','Veracruz','Puebla','Jalisco'],
      respuesta_correcta:'Ciudad de México',
      explicacion:'La electrificación de la Ciudad de México comenzó en 1881, apenas 2 años después de la patente de Edison (1879). La Mexican Light and Power Company introdujo la electricidad en la capital, luego los tranvías eléctricos (1900). La central hidroeléctrica de Necaxtla (Puebla, 1895) fue la primera gran fuente de generación.',
      regla_oro_check:true },
    { numero:5, titulo:'La Industria Textil de Puebla', subtitulo:'Puebla',
      categoria:'ciencia-y-saberes', concepto_clave:'La primera industrialización de México',
      materia:'Ciencias / Historia', estado_destino:'Puebla', estado_slug:'puebla',
      pista:'El obrero del tiempo dice: "Las primeras máquinas de vapor que hilaban algodón en México llegaron a las fábricas del estado de los volcanes décadas antes del Porfiriato, pero fue durante ese régimen que la producción se disparó. Los ríos que bajaban de los volcanes daban energía hidráulica a las fábricas. Fue en ese estado donde estalló también la primera gran huelga industrial."',
      libreta:`Primera fábrica textil de México: La Constancia Mexicana (Puebla) — año 1835
Tecnología: Telares mecánicos Jacquard + husos de hilar hidráulicos
Energía: Ríos Atoyac y San Francisco — fuerza hidráulica de los volcanes circundantes
Producción en año 1910: 146 fábricas textiles en el país (42% en Puebla y Estado de México)
Huelga de Río Blanco: enero de año 1907 — Orizaba, Veracruz — primera gran huelga industrial
Condiciones laborales: 14–16 horas diarias, sin prestaciones, tiendas de raya (pago en vales)`,
      opciones:['Puebla','Jalisco','Estado de México','Hidalgo'],
      respuesta_correcta:'Puebla',
      explicacion:'Puebla fue el primer centro industrial de México: la fábrica La Constancia Mexicana (1835) fue la primera con maquinaria industrial. Los ríos Atoyac y San Francisco, que bajan del Popocatépetl e Iztaccíhuatl, generaban la energía hidráulica. La huelga de Río Blanco (1907, Veracruz) fue el primer gran estallido obrero, preludio de la Revolución.',
      regla_oro_check:true },
    { numero:6, titulo:'El Arte de la Caricatura Política', subtitulo:'Ciudad de México',
      categoria:'vida-cotidiana', concepto_clave:'La crítica al poder a través del dibujo',
      materia:'Arte / Formación Cívica', estado_destino:'Ciudad de México', estado_slug:'cdmx',
      pista:'El dibujante perseguido dice: "El régimen controlaba los periódicos serios, pero los dibujantes encontraron la forma de criticar al poder con imágenes que todos entendían. Nos encarcelaban y nos censuraban, pero seguíamos dibujando. El más famoso de nosotros pasó años en la cárcel por sus críticas al presidente desde la capital."',
      libreta:`Caricaturista más influyente: José Guadalupe Posada (1852–1913) — Aguascalientes/CDMX
La Calavera Garbancera (La Catrina): creada circa año 1910 — símbolo cultural de México
Publicaciones: El Hijo del Ahuizote, La Patria Ilustrada — periódicos de oposición
Censura: Ley de imprenta de año 1882 — castigaba "la ofensa a la autoridad"
Técnica de Posada: Grabado en relieve sobre metal — técnica de reproducción masiva barata
Diego Rivera: Reinterpretó La Catrina en el mural "Sueño de una tarde dominical" (año 1947)`,
      opciones:['Ciudad de México','Aguascalientes','Jalisco','Guanajuato'],
      respuesta_correcta:'Ciudad de México',
      explicacion:'José Guadalupe Posada trabajó en la Ciudad de México donde publicaba en periódicos de oposición. La Calavera Garbancera (ca. 1910) se convirtió en "La Catrina" gracias a Diego Rivera en 1947. El grabado en metal permitía la reproducción masiva barata, haciendo la caricatura política accesible a todos.',
      regla_oro_check:true },
    { numero:7, titulo:'Arquitectura del Progreso', subtitulo:'Ciudad de México',
      categoria:'vida-cotidiana', concepto_clave:'El estilo europeo como símbolo de modernidad',
      materia:'Arte / Historia', estado_destino:'Ciudad de México', estado_slug:'cdmx',
      pista:'El arquitecto del tiempo dice: "El presidente quería que la capital pareciera París. Contrató ingenieros italianos para diseñar el teatro de ópera más grande, belgas para el Correo Mayor y franceses para las mansiones de Paseo de la Reforma. El resultado fue una ciudad que miraba hacia Europa y le daba la espalda al México indígena y mestizo que la rodeaba."',
      libreta:`Palacio de Bellas Artes: Iniciado año 1904 por Adamo Boari (Italia) — mármol de Carrara
Palacio de Correos: Inaugurado año 1907 — Adamo Boari — estilo plateresco veneciano
Mansiones de Reforma: Estilo Second Empire francés + Art Nouveau — importadas de Europa
Columna de la Independencia: Inaugurada año 1910 — ingeniero Antonio Rivas Mercado
Materiales importados: Mármol de Italia, hierro de Bélgica, vidrio de Francia
Contraste urbano: Casas de adobe de las clases populares + palacios de mármol de la élite`,
      opciones:['Ciudad de México','Veracruz','Puebla','Guadalajara'],
      respuesta_correcta:'Ciudad de México',
      explicacion:'El Porfiriato transformó el centro de la Ciudad de México con arquitectura europea: Bellas Artes (mármol de Carrara, Adamo Boari), Palacio de Correos (plateresco veneciano) y la Columna de la Independencia (1910). Todos los materiales se importaban. El contraste con las viviendas populares de adobe era radical.',
      regla_oro_check:true },
    { numero:8, titulo:'Las Haciendas y el Peonaje', subtitulo:'Chihuahua',
      categoria:'civismo-y-etica', concepto_clave:'La servidumbre por deudas en el campo porfiriano',
      materia:'Formación Cívica / Historia', estado_destino:'Chihuahua', estado_slug:'chihuahua',
      pista:'El peón del tiempo dice: "Mi familia trabajaba en la hacienda desde antes de que yo naciera. Nunca habíamos podido salir: debíamos dinero a la tienda de la misma hacienda y mientras esa deuda existiera, éramos prisioneros aunque no hubiera rejas. Los estados del norte, donde la hacienda ganadera era enorme, fueron los primeros en rebelarse contra ese sistema."',
      libreta:`Tienda de raya: Sistema de crédito-deuda dentro de la hacienda — pago en vales (no efectivo)
Deuda heredable: Las deudas pasaban de padres a hijos — mecanismo de retención laboral
Ley de colonización (año 1883): Permitió despojar "tierras baldías" — millones de hectáreas a latifundistas
Haciendas en Chihuahua: Terrazas-Creel — familia que controlaba hasta 7 millones de hectáreas
Campesinos despojados en año 1910: Estimados 3 millones sin tierra en todo México
Causa de la Revolución: El despojo agrario porfiriano fue el detonador del movimiento armado`,
      opciones:['Chihuahua','Durango','Sonora','Coahuila'],
      respuesta_correcta:'Chihuahua',
      explicacion:'La familia Terrazas-Creel controlaba hasta 7 millones de hectáreas en Chihuahua, el estado más grande de México. El peonaje por deudas —mediante la tienda de raya— ataba a los campesinos a las haciendas. La Ley de Colonización de 1883 despojó millones de hectáreas. Chihuahua fue el primer escenario de la Revolución en 1910.',
      regla_oro_check:true },
    { numero:9, titulo:'La Huelga de Cananea', subtitulo:'Sonora',
      categoria:'civismo-y-etica', concepto_clave:'Los derechos laborales y el movimiento obrero',
      materia:'Formación Cívica / Historia', estado_destino:'Sonora', estado_slug:'sonora',
      pista:'El minero huelguista dice: "Trabajábamos la misma cantidad de horas que los mineros norteamericanos pero nos pagaban la mitad. En el año 1906, miles de nosotros nos detuvimos en la mina de cobre más grande del país y exigimos igualdad de trato. El gobernador del estado más norteño del Pacífico pidió la entrada de Rangers de Arizona para aplastarnos."',
      libreta:`Huelga: Cananea — 1 de junio de año 1906
Empresa: Consolidated Copper Company (C.C.C.) — dueño: coronel William C. Greene (EUA)
Demandas: Salario mínimo de 5 pesos/día (igualando a mineros estadounidenses), jornada de 8 h
Muertos: 23 mineros + 2 hombres de la empresa
Intervención: Rangers de Arizona cruzaron la frontera a petición del gobernador porfirista
Estado: Frontera noroeste con Arizona — el estado de origen de Obregón y Calles`,
      opciones:['Sonora','Chihuahua','Coahuila','Baja California'],
      respuesta_correcta:'Sonora',
      explicacion:'La huelga de Cananea (1906) en Sonora fue el primer gran conflicto laboral del México moderno. Los mineros pedían igualdad salarial con los empleados estadounidenses. La entrada de Rangers de Arizona a territorio mexicano para sofocar la huelga fue una humillación nacional. La huelga es considerada uno de los antecedentes directos de la Revolución.',
      regla_oro_check:true },
    { numero:10, titulo:'El Porfiriato y la Belle Époque', subtitulo:'Cruce Global',
      categoria:'cruce-global', concepto_clave:'México en el auge globalizado del capitalismo industrial',
      materia:'Historia Universal', estado_destino:'Ciudad de México', estado_slug:'cdmx',
      pista:'El historiador global dice: "El período de paz y prosperidad del dictador oaxaqueño coincidió con la época de mayor optimismo de Europa occidental: la Belle Époque. En ambos lados del Atlántico, las clases altas disfrutaban del progreso tecnológico mientras las clases trabajadoras no tenían derechos. La capital de México era tan parisina como podía ser, y la desigualdad era tan extrema como en Manchester o Lyon."',
      libreta:`Belle Époque europea: años 1871–1914 — paz relativa + industrialización + arte modernista
Contemporáneos del Porfiriato:
• Francia: Torre Eiffel (año 1889) — misma época que el auge del Paseo de la Reforma
• Gran Bretaña: Victoria I — apogeo del Imperio
• EUA: Edad Dorada (Gilded Age) — Rockefeller, Carnegie, Morgan
• Rusia: Pogroms y revolución de año 1905 — paralelismo con huelgas de Cananea y Río Blanco
Inversión extranjera en México (año 1910): 1,200 millones de dólares — EUA (40%), Gran Bretaña (30%), Francia (20%)`,
      opciones:['Ciudad de México','Veracruz','Puebla','Jalisco'],
      respuesta_correcta:'Ciudad de México',
      explicacion:'El Porfiriato (1876-1910) es el equivalente mexicano de la Belle Époque europea: paz relativa, progreso para las élites, opresión para los trabajadores. Los 1,200 millones de dólares invertidos en México (1910) venían de EUA, Gran Bretaña y Francia. La CDMX se transformó en escaparate de esa modernidad importada con el Paseo de la Reforma y sus palacios.',
      regla_oro_check:true },
  ],
};
export default porfiriato;
