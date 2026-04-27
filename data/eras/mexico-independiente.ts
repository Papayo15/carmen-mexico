import type { Era } from '@/lib/types';
const mexicoIndependiente: Era = {
  metadata: {
    slug:'mexico-independiente', titulo:'México Independiente', periodo:'1821 – 1855 d.C.',
    estados_principales:['Veracruz','Ciudad de México','Jalisco'],
    icono:'🦅', color:'bg-green-700', colorText:'text-green-900', orden:9,
  },
  casos:[
    { numero:1, titulo:'El Imperio de Iturbide', subtitulo:'Ciudad de México',
      categoria:'grandes-hitos', concepto_clave:'La primera forma de gobierno de México independiente',
      materia:'Historia', estado_destino:'Ciudad de México', estado_slug:'cdmx',
      pista:'El cortesano imperial dice: "El mismo general que firmó el Plan de Iguala se coronó emperador once meses después de la independencia. No le duró mucho: en menos de dos años, el congreso lo obligó a abdicar. Fue el primer y único emperador nacido en México —no era europeo. Su palacio estaba en la capital del virreinato, que se convirtió en capital del nuevo país."',
      libreta:`Agustín I (Agustín de Iturbide): Coronado el 21 de julio de año 1822
Duración del Imperio: julio de año 1822 – marzo de año 1823 (menos de 9 meses)
Causa del fin: Pronunciamiento de Antonio López de Santa Anna — Plan de Casa Mata (año 1823)
Exilio: Europa (Italia, Gran Bretaña) — regresó en año 1824 y fue fusilado en Tamaulipas
Sede de gobierno: Palacio Nacional de la Ciudad de México (antes Palacio Virreinal)
Decreto de captura: El Congreso lo declaró traidor — precedente de inestabilidad política`,
      opciones:['Ciudad de México','Puebla','Querétaro','Veracruz'],
      respuesta_correcta:'Ciudad de México',
      explicacion:'Agustín de Iturbide fue coronado Agustín I en la Ciudad de México el 21 de julio de 1822. Su Imperio duró menos de 9 meses. El Plan de Casa Mata (1823) liderado por Santa Anna lo obligó a abdicar. Regresó en 1824 y fue fusilado. Fue el único emperador nacido en México.',
      regla_oro_check:true },
    { numero:2, titulo:'La Primera República Federal', subtitulo:'Ciudad de México',
      categoria:'grandes-hitos', concepto_clave:'La Constitución de 1824 y el modelo federal',
      materia:'Historia / Formación Cívica', estado_destino:'Ciudad de México', estado_slug:'cdmx',
      pista:'El constituyente del tiempo dice: "Después de eliminar al emperador, los líderes del nuevo país decidieron copiar el modelo del vecino del norte: un estado federal donde cada territorio tuviera su propio gobierno. La constitución resultante fue redactada en la capital y creó formalmente los estados de la república. Fue el primer pacto nacional de ciudadanos libres."',
      libreta:`Constitución Federal de los Estados Unidos Mexicanos: 4 de octubre de año 1824
Modelo: Inspirada en la Constitución de EUA (año 1787) + Constitución española de año 1812
Primer presidente: Guadalupe Victoria (Félix Fernández) — año 1824
Número de estados originales: 19 estados + 4 territorios + 1 distrito federal
Debate central: Federalismo (estados autónomos) vs. Centralismo (poder central fuerte)
Sede del Congreso Constituyente: Ciudad de México — misma que en el período virreinal`,
      opciones:['Ciudad de México','Querétaro','San Luis Potosí','Guanajuato'],
      respuesta_correcta:'Ciudad de México',
      explicacion:'La Constitución de 1824 fue redactada en la Ciudad de México e inspirada en el modelo estadounidense. Creó 19 estados y 4 territorios. Guadalupe Victoria fue el primer presidente (1824-1828). El debate entre federalistas y centralistas marcaría la política mexicana durante los siguientes 30 años.',
      regla_oro_check:true },
    { numero:3, titulo:'La Intervención Estadounidense', subtitulo:'Veracruz',
      categoria:'grandes-hitos', concepto_clave:'La guerra de 1847 y la pérdida de territorio',
      materia:'Historia', estado_destino:'Veracruz', estado_slug:'veracruz',
      pista:'El soldado defensor dice: "En año 1847, los soldados del país del norte desembarcaron en el mismo puerto por donde llegaron los conquistadores siglos antes. Avanzaron tierra adentro y tomaron la capital. Al final, México perdió más de la mitad de su territorio. El tratado que terminó la guerra se firmó en la villa que hoy da nombre a un municipio del estado central sin costas."',
      libreta:`Guerra: Intervención estadounidense en México (años 1846–1848)
Causa formal: Anexión de Texas por EUA (año 1845) + disputa de límites del Río Bravo
Desembarco: Veracruz — 9 de marzo de año 1847 (General Winfield Scott)
Territorio perdido: 2.38 millones de km² (California, Nuevo México, Arizona, Nevada, Utah, Colorado)
Tratado de Guadalupe Hidalgo: 2 de febrero de año 1848 — firmado en la localidad de ese nombre
Niños Héroes: Cadetes del Colegio Militar (CDMX) que resistieron en el Castillo de Chapultepec`,
      opciones:['Veracruz','Tamaulipas','Tabasco','Campeche'],
      respuesta_correcta:'Veracruz',
      explicacion:'El ejército estadounidense desembarcó en Veracruz el 9 de marzo de 1847 bajo el general Scott. México perdió 2.38 millones de km² (más de la mitad de su territorio) con el Tratado de Guadalupe Hidalgo (1848). Los Niños Héroes resistieron en Chapultepec (CDMX). La herida de esa guerra marcó el orgullo nacional por generaciones.',
      regla_oro_check:true },
    { numero:4, titulo:'La Primera Imprenta y el Periodismo', subtitulo:'Ciudad de México',
      categoria:'ciencia-y-saberes', concepto_clave:'La prensa libre y la formación de opinión pública',
      materia:'Español / Historia', estado_destino:'Ciudad de México', estado_slug:'cdmx',
      pista:'El periodista del tiempo dice: "Con la independencia llegó la libertad de imprenta y con ella docenas de periódicos que debatían el futuro del país. En la capital se imprimían panfletos, libelos y periódicos que llegaban a todas las provincias. El debate entre liberales y conservadores se libraba tanto en los salones como en las páginas de papel."',
      libreta:`Primera imprenta en México: año 1539 — Juan Cromberger (Sevilla) en la CDMX
Primer periódico independiente relevante: El Sol (año 1821) — CDMX
Libertad de imprenta: Ley de año 1820 (Cortes de Cádiz) + reafirmada en Constitución de año 1824
Tiraje típico de la época: 500–2,000 ejemplares por edición
Función política: Arma de debate entre liberales y conservadores durante la República Restaurada
Periódico más influyente: El Monitor Republicano — fundado en año 1844, duró hasta año 1896`,
      opciones:['Ciudad de México','Veracruz','Guadalajara','Puebla'],
      respuesta_correcta:'Ciudad de México',
      explicacion:'La Ciudad de México concentraba la actividad periodística del México independiente. La primera imprenta continental llegó en 1539 y la libertad de prensa se garantizó con la Constitución de 1824. El debate entre liberales y conservadores se libraba en las páginas de periódicos como El Monitor Republicano (1844-1896).',
      regla_oro_check:true },
    { numero:5, titulo:'Los Caminos Reales y los Bandidos', subtitulo:'Veracruz',
      categoria:'ciencia-y-saberes', concepto_clave:'Infraestructura y comercio en el México incipiente',
      materia:'Geografía / Historia', estado_destino:'Veracruz', estado_slug:'veracruz',
      pista:'El arriero del tiempo dice: "La única ruta segura para mover mercancías entre la capital y el océano era el viejo camino de tierra que los virreyes construyeron. Con la independencia, esa ruta cayó en abandono y los salteadores la convirtieron en una trampa. El héroe de esos caminos peligrosos fue un bandido que luego se volvió leyenda en el estado del Golfo."',
      libreta:`Camino Real: Ciudad de México–Veracruz — 420 km, construido en época virreinal
Tiempo de viaje a mediados del siglo XIX: 8–12 días en diligencia, 20+ días en recua
Bandido más famoso: Agustín Lorenzo — salteador de caminos convertido en mito del estado de Veracruz
Estado de los caminos post-independencia: Deteriorados por guerra + sin mantenimiento virreinal
Primer ferrocarril de México: México–Veracruz (inaugurado en año 1873) — solucionó la inseguridad vial
Contexto económico: Sin buena infraestructura, el comercio interior era limitado y costoso`,
      opciones:['Veracruz','Puebla','Estado de México','Hidalgo'],
      respuesta_correcta:'Veracruz',
      explicacion:'El Camino Real de 420 km entre la capital y Veracruz fue la arteria comercial del México independiente. La falta de mantenimiento post-independencia y los bandidos como Agustín Lorenzo lo hacían peligroso. El primer ferrocarril México-Veracruz (1873) resolvió finalmente el problema de comunicación entre la capital y el mar.',
      regla_oro_check:true },
    { numero:6, titulo:'El Charro Mexicano', subtitulo:'Jalisco',
      categoria:'vida-cotidiana', concepto_clave:'La charrería como identidad nacional',
      materia:'Arte / Formación Cívica', estado_destino:'Jalisco', estado_slug:'jalisco',
      pista:'El jinete del tiempo dice: "Cuando México se independizó, los hacendados y vaqueros del occidente del país perfeccionaron un arte ecuestre que combinaba el trabajo del campo con el deporte y el espectáculo. Con el tiempo, el traje y las suertes de ese arte se convirtieron en uno de los símbolos más reconocibles de la identidad nacional. El estado que mejor representa esa tradición es el del tequila y el mariachi."',
      libreta:`Charrería: Deporte y arte ecuestre de origen rancho — siglos XVIII–XIX
Estado de origen: Jalisco y regiones aledañas del occidente mexicano
Suertes charras: Cala de caballo, piales, manganas, jineteo de yegua, espaldazo
Traje de charro: Traje de terciopelo o gamuza con bordados + sombrero de ala ancha
Declaración UNESCO: Patrimonio Cultural Inmaterial de la Humanidad — año 2016
Lienzo charro: El ruedo circular donde se practican las suertes — símbolo de Jalisco`,
      opciones:['Jalisco','Guanajuato','Michoacán','Zacatecas'],
      respuesta_correcta:'Jalisco',
      explicacion:'La charrería se desarrolló en las haciendas ganaderas del occidente mexicano, especialmente en Jalisco. El traje de charro, el mariachi y el tequila conforman la "triada jalisciense" que el mundo identifica como México. La UNESCO declaró la charrería Patrimonio Cultural Inmaterial en 2016.',
      regla_oro_check:true },
    { numero:7, titulo:'La Feria de San Juan de los Lagos', subtitulo:'Jalisco',
      categoria:'vida-cotidiana', concepto_clave:'Comercio, fe y cultura popular en el México independiente',
      materia:'Historia / Geografía', estado_destino:'Jalisco', estado_slug:'jalisco',
      pista:'La peregrina del tiempo dice: "Cada año, desde los tiempos coloniales, miles de personas de todo el país se reunían en un pueblo del estado del occidente para comerciar y venerar a una imagen sagrada. Esa feria era la más grande del país durante el siglo XIX y uno de los eventos económicos más importantes antes del ferrocarril. El pueblo está en el estado del mariachi."',
      libreta:`Feria de San Juan de los Lagos: iniciada en época colonial, auge en siglo XIX
Municipio: San Juan de los Lagos — Los Altos de Jalisco
Duración original: 40 días — enero y febrero
Productos comerciados: Mulas, caballos, plata, textiles, artesanías, productos agrícolas
Asistentes en siglo XIX: Estimados 50,000–80,000 visitantes (cifra enorme para la época)
Virgen: Nuestra Señora de San Juan de los Lagos — imagen milagrosa del siglo XVII`,
      opciones:['Jalisco','Guanajuato','Aguascalientes','Zacatecas'],
      respuesta_correcta:'Jalisco',
      explicacion:'La Feria de San Juan de los Lagos (Jalisco) fue durante el siglo XIX el mayor evento comercial de México, con hasta 80,000 visitantes y 40 días de duración. Los Altos de Jalisco eran el corazón del comercio ganadero. La Virgen de San Juan convierte el evento económico en peregrinación religiosa simultáneamente.',
      regla_oro_check:true },
    { numero:8, titulo:'La Constitución de 1824', subtitulo:'Ciudad de México',
      categoria:'civismo-y-etica', concepto_clave:'El primer pacto constitucional del México libre',
      materia:'Formación Cívica', estado_destino:'Ciudad de México', estado_slug:'cdmx',
      pista:'El diputado constituyente dice: "El gran debate de nuestra generación era cómo organizar el poder: ¿dejamos que cada estado decida por sí mismo, o centralizamos todo en la capital? El modelo que elegimos se parecía mucho al del vecino del norte pero adaptado a nuestra realidad. La constitución que redactamos en la capital fue el primer contrato social entre los mexicanos libres."',
      libreta:`Constitución de 1824: Promulgada el 4 de octubre de año 1824
Inspiración: Constitución de EUA (año 1787) + Constitución de Cádiz (año 1812)
Religión: Declaraba al catolicismo como religión oficial y única permitida
Esclavitud: Abolida formalmente (confirmando el decreto de Hidalgo de año 1810)
Poderes: Ejecutivo, Legislativo (bicameral) y Judicial — tres poderes separados
Derogada por: Constitución Centralista de año 1836 (las Siete Leyes) — detonante de la independencia de Texas`,
      opciones:['Ciudad de México','Querétaro','Aguascalientes','San Luis Potosí'],
      respuesta_correcta:'Ciudad de México',
      explicacion:'La Constitución de 1824 fue redactada en la Ciudad de México y estableció el primer sistema federal de la república. Inspirada en el modelo estadounidense pero con el catolicismo como religión oficial única. Fue derogada en 1836 con las "Siete Leyes" centralistas, lo que provocó la rebelión que terminó con la independencia de Texas.',
      regla_oro_check:true },
    { numero:9, titulo:'Lucas Alamán y el Conservadurismo', subtitulo:'Guanajuato',
      categoria:'civismo-y-etica', concepto_clave:'El debate ideológico fundacional: liberales vs. conservadores',
      materia:'Formación Cívica / Historia', estado_destino:'Guanajuato', estado_slug:'guanajuato',
      pista:'El estadista conservador dice: "Yo creía que México necesitaba orden, tradición e Iglesia para sobrevivir como nación. Los liberales querían copiar a Francia y a Estados Unidos, pero yo decía que éramos diferentes. Nací en el estado de las minas de plata y fui el intelectual más importante del bando que prefería la monarquía a la república."',
      libreta:`Personaje: Lucas Alamán Escalada (1792–1853) — político, historiador, estadista
Origen: Guanajuato — ciudad colonial minera
Postura: Conservador — defensor de la Iglesia, el orden y la monarquía constitucional
Obra intelectual: Historia de México (5 volúmenes) — versión conservadora de la independencia
Fundación: Banco de Avío (año 1830) — primer banco industrial de México (creación propia)
Opositor: Valentín Gómez Farías — liberal radical, su contraparte ideológica exacta`,
      opciones:['Guanajuato','San Luis Potosí','Querétaro','Aguascalientes'],
      respuesta_correcta:'Guanajuato',
      explicacion:'Lucas Alamán nació en Guanajuato y fue el pensador conservador más influyente del México del siglo XIX. Fundó el Banco de Avío (1830) y escribió la "Historia de México" en 5 volúmenes. El debate Alamán (conservador) vs. Gómez Farías (liberal) define la polarización política que llevó a múltiples guerras civiles.',
      regla_oro_check:true },
    { numero:10, titulo:'México y la Doctrina Monroe', subtitulo:'Cruce Global',
      categoria:'cruce-global', concepto_clave:'México en el contexto hemisférico del siglo XIX',
      materia:'Historia Universal', estado_destino:'Veracruz', estado_slug:'veracruz',
      pista:'El diplomático del tiempo dice: "Apenas México se independizó, el país del norte declaró que ninguna potencia europea podía colonizar más territorios en América. En teoría, eso nos protegía. En la práctica, el mismo país que declaró esa doctrina nos invadió 23 años después y nos quitó más de la mitad del territorio. El puerto por donde llegaron esa vez también era el del Golfo."',
      libreta:`Doctrina Monroe: Proclamada por el presidente James Monroe — 2 de diciembre de año 1823
Principio: "América para los americanos" — oposición a nuevas colonias europeas en el hemisferio
Beneficiario teórico: Todas las nuevas repúblicas latinoamericanas, incluyendo México
Contradicción: EUA invadió México (años 1846–1848) y apoyó el bloqueo francés (año 1838, "Guerra de los Pasteles")
Guerra de los Pasteles: Francia bombardeó el puerto del Golfo en año 1838 — EUA no intervino
Puerto atacado en ambos casos: Veracruz — puerta de entrada y salida de invasores`,
      opciones:['Veracruz','Tamaulipas','Tabasco','Campeche'],
      respuesta_correcta:'Veracruz',
      explicacion:'Veracruz fue bombardeada por Francia en la "Guerra de los Pasteles" (1838) y luego invadida por EUA en 1847, ambas veces sin que la Doctrina Monroe la protegiera. La contradicción entre el discurso protector de Monroe y la invasión estadounidense de 1847 es el gran paradojo de la política exterior del siglo XIX mexicano.',
      regla_oro_check:true },
  ],
};
export default mexicoIndependiente;
