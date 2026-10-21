const STORAGE_KEYS = {
  language: "mca-wiki-language",
  theme: "mca-wiki-theme",
};

const translations = {
  es: {
    "meta.description": "Wiki web de _XavierCodes_ Mod's para MCA Social Expansion y MCA Expressions.",
    "meta.title": "_XavierCodes_ Mod's Wiki",
    "brand.homeAria": "Ir al inicio",
    "brand.title": "_XavierCodes_ Mod's",
    "brand.subtitle": "MCA Social Expansion / Expressions",
    "nav.aria": "Secciones de la wiki",
    "nav.mods": "Mods",
    "nav.social": "MCA Social Expansion",
    "nav.expressions": "MCA Expressions",
    "nav.install": "Instalacion",
    "controls.aria": "Preferencias",
    "controls.language": "Idioma",
    "controls.languageAria": "Seleccionar idioma",
    "language.es": "Español",
    "language.en": "English",
    "menu.open": "Abrir menu",
    "menu.close": "Cerrar menu",
    "theme.light": "Modo claro",
    "theme.dark": "Modo oscuro",
    "theme.aria": "Cambiar modo de color",
    "hero.eyebrow": "Wiki comunitaria para Minecraft Comes Alive",
    "hero.text": "Base de documentacion para ambos mods: sistemas sociales, interfaces, regalos, recetas, gestos, requisitos y tablas utiles para jugadores y modders.",
    "hero.mods": "Ver mods",
    "hero.recipes": "Ver recetas",
    "hero.bannerAria": "Espacio para imagen de banner",
    "hero.bannerAlt": "Banner de MCA Social Expansion",
    "hero.itemsAria": "Objetos principales",
    "mods.eyebrow": "Ambos mods",
    "mods.title": "Ficha rapida",
    "common.version": "Version",
    "mods.social.description": "Relaciones con memoria, regalos personalizados y cuatro interfaces para mantener el contacto con tus aldeanos, incluso a distancia.",
    "mods.social.fact1": "Smartphone, Crystal Social, Letter Social y espejo mágico, con retratos persistentes.",
    "mods.social.fact2": "Mensajes espontáneos con respuestas, conversaciones por temas, disculpas y reconciliación.",
    "mods.social.fact3": "Afinidad, romance, confianza, regalos, Conocer y diálogos para hijos, nietos y bisnietos.",
    "mods.social.viewMod": "Ver mod",
    "mods.expressions.tagAddon": "Addon de MCA Reborn",
    "mods.expressions.description": "Agrega cinco gestos fisicos con aldeanos de MCA, animaciones sincronizadas y respuestas que cambian segun la edad, la familia y la relacion.",
    "mods.expressions.fact1": "Cinco expresiones: acariciar cabeza y mejilla, abrazar, besar la mejilla y tomar de la mano.",
    "mods.expressions.fact2": "Variantes adaptadas a niños, familiares, parejas, personalidades reservadas y adultos con enanismo.",
    "mods.expressions.fact3": "Dialogos contextuales, camara libre, control de distancia y compatibilidad opcional con MCA Social Expansion.",
    "mods.expressions.viewMod": "Ver mod",
    "mods.expressions.viewDetails": "Ver detalles",
    "social.title": "MCA Social Expansion",
    "social.text": "Conoce a tus aldeanos, descubre sus gustos y construye relaciones que recuerdan lo que ocurre entre ustedes. La versión 0.9.2 amplía la comunicación remota y mejora los contactos, los retratos y la familia.",
    "interfaces.title": "Interfaces y objetos",
    "interfaces.text": "Los cuatro objetos dan acceso a contactos, conversaciones y ajustes. Puedes convertir tu dispositivo desde su menú de interfaces pagando los materiales indicados. Los regalos se entregan en persona.",
    "interfaces.phone.alt": "Interfaz de Social Smartphone",
    "interfaces.phone.text": "Interfaz moderna tipo app para contactos y conversaciones remotas.",
    "interfaces.phone.fact1": "Permite revisar aldeanos conocidos desde una pantalla compacta.",
    "interfaces.phone.fact2": "Ordena contactos por amistad, romance y familia.",
    "interfaces.phone.fact3": "Recibe mensajes espontáneos y permite responder desde la bandeja de entrada.",
    "interfaces.crystal.alt": "Interfaz de Crystal Social",
    "interfaces.crystal.text": "Interfaz magica para abrir el sistema social con estetica de cristal.",
    "interfaces.crystal.fact1": "Presenta una variante visual del canal remoto Crystal.",
    "interfaces.crystal.fact2": "Mantiene acceso a contactos, amistad y relacion.",
    "interfaces.crystal.fact3": "Tiene aviso sonoro propio y una entrega más lenta que el teléfono.",
    "interfaces.letter.alt": "Interfaz de Letter Social",
    "interfaces.letter.text": "Interfaz de carta para una experiencia mas narrativa y clasica.",
    "interfaces.letter.fact1": "Convierte la comunicacion social en una vista escrita.",
    "interfaces.letter.fact2": "Usa un estilo de papel para separar su identidad del telefono.",
    "interfaces.letter.fact3": "Usa el mayor tiempo de entrega en los modos corto e inmersivo.",
    "interfaces.mirror.alt": "Interfaz del espejo mágico",
    "interfaces.mirror.title": "Espejo mágico",
    "interfaces.mirror.text": "Una cuarta interfaz con marco dorado para comunicarte con tus contactos.",
    "interfaces.mirror.fact1": "Reúne conversación, cariño o romance, humor, conflicto y Conocer.",
    "interfaces.mirror.fact2": "Muestra el retrato del contacto y sus valores de amistad, romance o confianza.",
    "interfaces.mirror.fact3": "Se fabrica o se obtiene por conversión; comparte los tiempos de entrega del teléfono.",
    "systems.eyebrow": "MCA Social Expansion",
    "systems.title": "Sistemas de Social Expansion",
    "systems.affinity.title": "Afinidad",
    "systems.affinity.text": "Sube con saludos, bromas, elogios, apoyo, historias, acciones familiares y humor.",
    "systems.romance.title": "Romance",
    "systems.romance.text": "El coqueteo exige afinidad minima y las acciones romanticas avanzan por umbrales.",
    "systems.trust.title": "Confianza",
    "systems.trust.text": "Desbloquea opciones profundas para bebes, menores, adolescentes y familiares adultos.",
    "systems.fatigue.title": "Fatiga social",
    "systems.fatigue.text": "Repetir acciones demasiado rapido genera respuestas neutrales, hartazgo y bloqueos.",
    "systems.personality.value": "8 rasgos",
    "systems.personality.title": "Personalidad",
    "systems.personality.text": "Extrovertido, timido, ambicioso, chismoso, orgulloso, leal, sarcastico y romantico.",
    "systems.roles.value": "Familia",
    "systems.roles.title": "Roles",
    "systems.roles.text": "Reconoce etapas de vida, cónyuges, hijos, nietos y bisnietos, con formas de dirigirse al jugador según su parentesco.",
    "communication.title": "Contactos, mensajes y memoria",
    "communication.text": "Tus contactos pueden escribirte por iniciativa propia. Las respuestas y las conversaciones tienen en cuenta la relación, el contexto y los encuentros anteriores.",
    "contacts.title": "Agenda y retratos",
    "contacts.register.name": "Añadir un contacto",
    "contacts.register.value": "Objeto social en mano",
    "contacts.register.text": "Interactúa con un aldeano de MCA sosteniendo uno de los cuatro objetos sociales. Después podrás encontrarlo en tu agenda.",
    "contacts.organize.name": "Filtros y favoritos",
    "contacts.organize.value": "Tu agenda ordenada",
    "contacts.organize.text": "Marca contactos con la estrella, filtra por familia, amistad, romance o conocidos y ordena por actividad reciente, nombre, afinidad o romance.",
    "contacts.forget.name": "Olvidar un contacto",
    "contacts.forget.text": "Escribe el comando seguido del nombre completo del contacto o de su UUID. Si varios contactos comparten el nombre, usa el UUID para elegir uno.",
    "contacts.photo.name": "Foto persistente",
    "contacts.photo.text": "Los retratos se guardan por mundo o servidor y siguen disponibles cuando el aldeano está lejos. Las nuevas fotos tienen una resolución máxima de 128 × 128 píxeles.",
    "contacts.retake.name": "Volver a tomar la foto",
    "contacts.retake.value": "Clic en el retrato",
    "contacts.retake.text": "La captura queda pendiente hasta que el aldeano esté cerca y despierto. La 0.9.2 carga y guarda las fotos en segundo plano y limita los reintentos fallidos.",
    "contacts.revival.name": "Aldeanos revividos",
    "contacts.revival.value": "Registro recuperado",
    "contacts.revival.text": "Vuelve a interactuar con el NPC revivido sosteniendo un objeto social para añadirlo otra vez. Las interfaces abiertas bloquean acciones si el NPC acaba de morir.",
    "messages.title": "Mensajes espontáneos",
    "messages.receive.name": "Quién puede escribirte",
    "messages.receive.value": "Familia, pareja y conocidos",
    "messages.receive.text": "Lleva un objeto social en el inventario. Pueden escribirte familiares, tu cónyuge y adultos con al menos 25 de afinidad. Los bebés y los menores ajenos a tu familia quedan excluidos.",
    "messages.frequency.name": "Frecuencia",
    "messages.frequency.value": "Hasta 2 por día de Minecraft",
    "messages.frequency.text": "El sistema comprueba cada dos minutos si se genera un mensaje; recibirlo depende de la probabilidad y la relación. Un mismo contacto espera al menos tres días de Minecraft para escribir de nuevo.",
    "messages.reply.name": "Responder",
    "messages.reply.value": "Cálida, breve o sin respuesta",
    "messages.reply.text": "Una respuesta cálida suma +1 de afinidad; una breve no suma puntos. Ambas generan una respuesta final del NPC tras el tiempo de entrega y una pequeña pausa. Cada mensaje se responde una sola vez.",
    "messages.context.name": "Contexto y ajustes",
    "messages.context.text": "Hay mensajes específicos para el Nether y el End, sonidos de llegada según la interfaz y un sonido de envío. En ajustes puedes activar o desactivar los mensajes espontáneos.",
    "narrative.title": "Conversaciones y conflictos",
    "narrative.topics.name": "Intereses, planes y recuerdos",
    "narrative.topics.value": "Conversación por temas",
    "narrative.topics.text": "Elige un tema desde conversación. Las respuestas dependen de la personalidad, edad y cercanía. Una conversación sin tensión puede sumar +1 de afinidad y aportar evidencia a Conocer.",
    "narrative.conflict.name": "Insultos y tensión",
    "narrative.conflict.value": "Consecuencias acumuladas",
    "narrative.conflict.text": "Puedes elegir un insulto leve, directo o duro. Los conflictos afectan afinidad y confianza; los insultos también pueden bajar corazones de MCA. El insulto duro no se aplica a menores.",
    "narrative.apology.name": "Disculparse",
    "narrative.apology.value": "Primero, reparar la confianza",
    "narrative.apology.text": "El NPC recuerda el conflicto y puede aceptar o rechazar la disculpa según la relación, su personalidad y la tensión. Repetirla de inmediato provoca una respuesta de espera.",
    "narrative.reconcile.name": "Reconciliarse",
    "narrative.reconcile.value": "Después de una disculpa aceptada",
    "narrative.reconcile.text": "Espera tras la disculpa y propone la reconciliación. Si se acepta, suma +1 de afinidad y +1 de confianza. La tensión pendiente también puede afectar las conversaciones normales.",
    "family.title": "Familia en la 0.9.2",
    "family.generations.name": "Hijos, nietos y bisnietos",
    "family.generations.value": "Parentesco reconocido",
    "family.generations.text": "Los diálogos distinguen a padres, abuelos y bisabuelos y respetan el género elegido por el jugador. Los nietos ya no te llaman papá o mamá.",
    "family.messages.name": "Mensajes familiares",
    "family.messages.value": "Tres variantes por etapa",
    "family.messages.text": "Nietos y bisnietos tienen mensajes espontáneos propios para infancia, adolescencia y adultez, además de saludos acordes al parentesco.",
    "family.languages.name": "Idiomas del mod",
    "family.languages.text": "Social Expansion incluye inglés, español de España, español de México, español de Estados Unidos y portugués de Brasil. Esta wiki está disponible en español e inglés.",
    "delivery.title": "Tiempos de entrega",
    "delivery.text": "Se eligen en ajustes. El modo corto es el predeterminado; los tiempos se miden en segundos de juego a 20 ticks por segundo.",
    "delivery.interface": "Interfaz",
    "delivery.instant": "Instantáneo",
    "delivery.short": "Corto",
    "delivery.immersive": "Inmersivo",
    "actions.eyebrow": "MCA Social Expansion",
    "actions.title": "Acciones de Social Expansion",
    "actions.text": "Las acciones cambian según la personalidad y la relación. Los gestos de esta sección son acciones sociales; las animaciones físicas de MCA Expressions se explican en su propio bloque.",
    "actions.base.title": "Acciones base",
    "actions.base.greet.name": "Saludar",
    "actions.base.greet.value": "+3 afinidad",
    "actions.base.greet.text": "Base de conversacion con respuestas por personalidad.",
    "actions.base.joke.name": "Bromear",
    "actions.base.joke.value": "+6 aprox.",
    "actions.base.joke.text": "Mejor con extrovertidos o chismosos.",
    "actions.base.praise.name": "Elogiar",
    "actions.base.praise.value": "+9 aprox.",
    "actions.base.praise.text": "Muy efectivo con romanticos y orgullosos.",
    "actions.base.insult.name": "Insultar",
    "actions.base.insult.value": "Negativo",
    "actions.base.insult.text": "Baja afinidad y puede afectar corazones MCA.",
    "actions.base.flirt.name": "Coquetear",
    "actions.base.flirt.value": "+12 romance",
    "actions.base.flirt.text": "Requiere al menos 10 de afinidad.",
    "actions.base.gift.name": "Regalar",
    "actions.base.gift.value": "Variable",
    "actions.base.gift.text": "Evalua gustos, favoritos y regalos repetidos.",
    "actions.friendship.title": "Amistad y matrimonio",
    "actions.friendship.greet.name": "Saludar por amistad",
    "actions.friendship.greet.text": "Abre contacto con una respuesta conversacional.",
    "actions.friendship.day.name": "Preguntar por su dia",
    "actions.friendship.day.text": "Mejor para timidos, leales y romanticos.",
    "actions.friendship.gossip.name": "Chismear",
    "actions.friendship.gossip.text": "Muy fuerte con chismosos; puede caer mal a leales.",
    "actions.friendship.story.name": "Contar anecdota",
    "actions.friendship.story.text": "Funciona bien con extrovertidos y sarcasticos.",
    "actions.friendship.support.name": "Dar apoyo",
    "actions.friendship.support.text": "Brilla con timidos, leales y romanticos.",
    "actions.friendship.vows.name": "Recordar votos",
    "actions.friendship.vows.text": "Solo conyuge.",
    "actions.romance.title": "Romance",
    "actions.romance.text": "Acciones con probabilidad, requisito minimo y cooldown por uso.",
    "table.action": "Accion",
    "table.points": "Puntos",
    "table.requirement": "Requisito",
    "table.success": "Exito",
    "romance.flatter": "Halagar con intencion",
    "romance.softFlirt": "Coquetear suavemente",
    "romance.confess": "Confesar interes",
    "romance.hand": "Tomar la mano",
    "romance.hug": "Abrazar",
    "romance.kiss": "Besar",
    "romance.love": "Decir te quiero",
    "romance.date": "Proponer una cita",
    "romance.firstDate": "Recordar primera cita",
    "romance.spouseKiss": "Beso de conyuge",
    "romance.reaffirm": "Reafirmar el amor",
    "romance.points4": "Romance +4",
    "romance.points5": "Romance +5",
    "romance.points6": "Romance +6",
    "romance.points7": "Romance +7",
    "romance.points8": "Romance +8",
    "romance.reqAffinity10": "Afinidad 10",
    "romance.req25": "Romance 25",
    "romance.req50": "Romance 50",
    "romance.req75": "Romance 75",
    "romance.spouse": "Conyuge",
    "time.4min": "4 min",
    "time.5min": "5 min",
    "time.6min": "6 min",
    "actions.affection.title": "Carino familiar",
    "actions.affection.baby.name": "Bebe",
    "actions.affection.baby.text": "Hacer reir, arrullar, mimar y cantar.",
    "actions.affection.child.name": "Nino",
    "actions.affection.child.text": "Preguntar por su dia, contar cuento, consolar y expresar orgullo.",
    "actions.affection.teen.name": "Adolescente",
    "actions.affection.teen.text": "Escuchar, aconsejar y mostrar confianza.",
    "actions.affection.adult.name": "Familiar adulto",
    "actions.affection.adult.text": "Recordar infancia, apoyar y decir que estas orgulloso.",
    "actions.humor.title": "Humor",
    "humor.annoy": "Fastidiar",
    "humor.entertain": "Entretener",
    "humor.silly": "Ser tonto",
    "humor.joke": "Contar chiste",
    "humor.imitate": "Imitar",
    "humor.affinity3": "+3 afinidad",
    "humor.affinity4": "+4 afinidad",
    "humor.affinity5": "+5 afinidad",
    "humor.annoy.meta": "62% exito - 3 min",
    "humor.entertain.meta": "78% exito - 4 min",
    "humor.silly.meta": "72% exito - 3.5 min",
    "humor.joke.meta": "70% exito - 3 min",
    "humor.imitate.meta": "66% exito - 4 min",
    "gifts.eyebrow": "MCA Social Expansion 0.9.2",
    "gifts.title": "Regalos y Conocer",
    "gifts.text": "El rediseño convierte los regalos en un sistema de preferencias: importa que tipo de objeto entregas, cuanto conoces al NPC y cuantas veces has insistido durante el mismo dia.",
    "gifts.categories.value": "10 categorias",
    "gifts.categories.title": "Regalos por categoria",
    "gifts.categories.text": "Dulces, flores, libros, comida, herramientas, armas, armaduras, objetos valiosos, naturaleza y otros objetos.",
    "gifts.quality.value": "+0 a +3",
    "gifts.quality.title": "Calidad del objeto",
    "gifts.quality.text": "La calidad suma corazones a regalos positivos; armaduras, herramientas y armas toman calidad por material.",
    "gifts.daily.value": "4 por dia",
    "gifts.daily.title": "Limite diario",
    "gifts.daily.text": "El primer regalo cuenta completo, luego las ganancias bajan: +5, +2, +0 y despues el NPC ya no acepta mas.",
    "gifts.score.title": "Puntuacion de regalos",
    "gifts.score.text": "Los puntos se aplican a los corazones de MCA. La calidad no aumenta regalos rechazados.",
    "gifts.table.result": "Resultado",
    "gifts.table.note": "Notas",
    "gifts.score.signature.name": "Regalo especial",
    "gifts.score.signature.points": "+12 + calidad",
    "gifts.score.signature.text": "Objeto personal segun personalidad o edad.",
    "gifts.score.favorite.name": "Categoria favorita",
    "gifts.score.favorite.points": "+10 + calidad",
    "gifts.score.favorite.text": "Se revela al llegar a Conocido.",
    "gifts.score.liked.name": "Categoria que le gusta",
    "gifts.score.liked.points": "+6 + calidad",
    "gifts.score.liked.text": "Se revela al llegar a Familiar.",
    "gifts.score.neutral.name": "Regalo neutral",
    "gifts.score.neutral.points": "+2 + calidad",
    "gifts.score.neutral.text": "Sirve cuando el objeto no cae en gustos conocidos.",
    "gifts.score.disliked.name": "Categoria rechazada",
    "gifts.score.disliked.text": "Insistir con malos regalos empeora la reaccion.",
    "gifts.rules.title": "Reglas del sistema",
    "gifts.rules.valid.name": "Regalos validos",
    "gifts.rules.valid.value": "Filtro doble",
    "gifts.rules.valid.text": "La interfaz solo muestra objetos aceptables y el servidor vuelve a validar antes de consumir el item.",
    "gifts.rules.tags.name": "Soporte para mods",
    "gifts.rules.tags.text": "Los modpacks pueden clasificar objetos con tags de categoria o marcarlos como otros regalos aceptados.",
    "gifts.rules.invalid.name": "Objetos bloqueados",
    "gifts.rules.invalid.text": "No se aceptan objetos tecnicos, spawn eggs, bebes de MCA ni los propios items del mod.",
    "gifts.rules.priority.name": "Prioridad",
    "gifts.rules.priority.value": "Funcion primero",
    "gifts.rules.priority.text": "Una espada de diamante cuenta como arma; el valor del material solo suma calidad o categoria secundaria.",
    "know.title": "Sistema Conocer",
    "know.button.name": "Boton Conocer",
    "know.button.value": "Lo que sabes",
    "know.button.text": "Abre una vista con cercania, etapa de vida, personalidad conocida y preferencias descubiertas.",
    "know.evidence.name": "Evidencia",
    "know.evidence.value": "Acciones + regalos",
    "know.evidence.text": "Cada accion social distinta y cada categoria de regalo observada suma informacion; repetir lo mismo no farmea conocimiento.",
    "know.levels.name": "Niveles",
    "know.levels.text": "Desbloquea primera impresion, categoria favorita, categoria que le gusta y categoria que no le gusta.",
    "know.family.name": "Familia",
    "know.family.value": "Bien conocido",
    "know.family.text": "Familiares y conyuges empiezan con el maximo nivel de conocimiento.",
    "expressions.title": "MCA Expressions v0.2",
    "expressions.text": "Cinco gestos fisicos con animaciones sincronizadas y dialogos que reconocen la edad, la familia, la relacion y la personalidad del aldeano.",
    "expressions.headPat.title": "Acariciar cabeza",
    "expressions.headPat.text": "Gesto de confianza media con recompensa de corazones y animacion de rechazo si el NPC no acepta.",
    "expressions.caress.title": "Acariciar mejilla",
    "expressions.caress.text": "Gesto mas cercano con animaciones separadas para aldeanos masculinos y femeninos.",
    "expressions.hug.title": "Abrazar",
    "expressions.hug.text": "Abrazo sincronizado con variantes automaticas para adultos, niños y aldeanos adultos con enanismo.",
    "expressions.cheekKiss.title": "Besar la mejilla",
    "expressions.cheekKiss.text": "Beso de seis segundos para adultos y variante infantil de ocho segundos con una caricia en la cabeza.",
    "expressions.holdHands.title": "Tomar de la mano",
    "expressions.holdHands.text": "Gesto de seis segundos con variantes para familia, pareja, personalidad reservada y rechazo.",
    "expressions.rules.title": "Reglas de uso",
    "expressions.rules.text": "Los requisitos y las recompensas usan corazones de MCA. Cada gesto lleva su propia ventana por jugador y aldeano, compartida entre sus variantes. Solo completar el gesto concede recompensa.",
    "expressions.table.expression": "Expresion",
    "expressions.table.required": "Requisito",
    "expressions.table.high": "Relacion alta",
    "expressions.table.reward": "Recompensa",
    "expressions.table.usage": "Uso y pausa",
    "expressions.table.distance": "Distancia",
    "expressions.headPat.name": "Acariciar cabeza",
    "expressions.headPat.required": "50 corazones",
    "expressions.headPat.high": "75 corazones",
    "expressions.headPat.reward": "+7 primera vez, +5 segunda vez",
    "expressions.headPat.usage": "2 usos con recompensa cada 10 min; pausa de 5 min al saturar",
    "expressions.headPat.distance": "2.8 inicio / 3.35 continuidad",
    "expressions.caress.name": "Acariciar mejilla",
    "expressions.caress.required": "65 corazones",
    "expressions.caress.high": "90 corazones",
    "expressions.caress.reward": "+9 primera vez, +6 segunda vez",
    "expressions.caress.usage": "2 usos con recompensa cada 15 min; pausa de 7 min al saturar",
    "expressions.caress.distance": "2.65 inicio / 3.1 continuidad",
    "expressions.hug.name": "Abrazar",
    "expressions.hug.required": "20 corazones",
    "expressions.hug.high": "85 corazones",
    "expressions.hug.reward": "+8 primera vez, +5 segunda vez",
    "expressions.hug.usage": "2 usos con recompensa cada 12 min; pausa de 6 min al saturar",
    "expressions.hug.distance": "2.8 inicio / 3.35 continuidad",
    "expressions.cheekKiss.name": "Besar la mejilla",
    "expressions.cheekKiss.required": "80 adultos; 50 hijos pequeños; 95 otros niños",
    "expressions.cheekKiss.high": "95 adultos; 75 hijos pequeños; 100 otros niños",
    "expressions.cheekKiss.reward": "+9 primera vez, +6 segunda vez",
    "expressions.cheekKiss.usage": "2 usos con recompensa cada 15 min; pausa de 7 min al saturar",
    "expressions.cheekKiss.distance": "2.8 inicio / 3.35 continuidad",
    "expressions.holdHands.name": "Tomar de la mano",
    "expressions.holdHands.required": "20 familia; 50 pareja; 80 otros",
    "expressions.holdHands.high": "95 corazones",
    "expressions.holdHands.reward": "+7 primera vez, +5 segunda vez",
    "expressions.holdHands.usage": "2 usos con recompensa cada 12 min; pausa de 6 min al saturar",
    "expressions.holdHands.distance": "2.8 inicio / 3.35 continuidad",
    "expressions.flow.title": "Flujo en el juego",
    "expressions.flow.menu.name": "Boton Expressions",
    "expressions.flow.menu.value": "Menu MCA",
    "expressions.flow.menu.text": "Se agrega a la pantalla de interaccion del aldeano y abre una seleccion propia.",
    "expressions.flow.screen.name": "Pantalla de gestos",
    "expressions.flow.screen.value": "Corazones visibles",
    "expressions.flow.screen.text": "Muestra los corazones actuales y bloquea opciones cuando faltan requisitos.",
    "expressions.flow.chat.name": "Dialogo",
    "expressions.flow.chat.value": "Jugador + NPC",
    "expressions.flow.chat.text": "Las peticiones, respuestas y cierres cambian segun edad, familia, relacion y personalidad.",
    "expressions.flow.feedback.name": "Feedback",
    "expressions.flow.feedback.value": "Sonidos y particulas",
    "expressions.flow.feedback.text": "Incluye sonido de beso, sonidos de conversacion y particulas al completar el gesto.",
    "expressions.compat.title": "Compatibilidad y limites",
    "expressions.compat.mca": "Dependencia obligatoria para aldeanos, corazones, personalidad y familia. Requiere 7.7.1-alpha.1+ en 1.20.1 y 7.7.36-beta.3+ en 1.21.1.",
    "expressions.compat.architectury": "Expressions declara Architectury 9.2.14+ en Forge 1.20.1 y 13.0.8+ en NeoForge 1.21.1. En Fabric, instala Fabric API y las dependencias de MCA.",
    "expressions.compat.social": "Integración opcional: 0.7+ en Forge y 0.9+ en los ports 1.21.1. Aporta personalidades sociales y contexto de romance a los diálogos.",
    "expressions.compat.limits.name": "Restricciones",
    "expressions.compat.limits.value": "Edad y relacion",
    "expressions.compat.limits.text": "Los bebes no participan; el beso en la mejilla excluye adolescentes y cada gesto conserva sus requisitos de corazones.",
    "expressions.control.title": "Animación, contacto y diálogos",
    "expressions.control.camera": "La cámara y el movimiento permanecen libres. Moverte detiene los pasos asistidos; alejarte o perder el contacto cancela la interacción sin recompensa.",
    "expressions.control.height": "Las nuevas variantes ajustan la postura a la altura y a la mano dominante. El beso infantil incluye una caricia en la cabeza, y el contacto del beso tiene su propio sonido.",
    "expressions.control.dialogue": "Abrazar, besar la mejilla y tomar de la mano usan diálogos para conocidos, amistades, pareja, cónyuge y familia por etapa de vida. La edad y el parentesco tienen prioridad; una relación alta por sí sola cuenta como amistad.",
    "expressions.control.variants": "Hay tres alternativas para peticiones, aceptación, cierre, saturación e interrupciones, y dos para el rechazo. La personalidad influye en la elección. Los nuevos diálogos están en inglés, español de España y español de México.",
    "recipes.eyebrow": "MCA Social Expansion",
    "recipes.title": "Recetas de Social Expansion",
    "recipes.craftingTable": "Mesa de crafteo",
    "recipes.shapeless": "Receta sin forma",
    "recipes.phone.alt": "Receta de Social Smartphone",
    "recipes.crystal.alt": "Receta de Crystal Social",
    "recipes.letter.alt": "Receta de Letter Social",
    "recipes.mirror.layout": "Receta del espejo: oro, amatista, oro; oro, panel de vidrio, oro; oro, redstone, oro",
    "recipes.mirror.gold": "6 lingotes de oro en las columnas laterales.",
    "recipes.mirror.center": "Columna central: 1 fragmento de amatista, 1 panel de vidrio y 1 redstone.",
    "recipes.mirror.result": "Resultado: 1 espejo mágico. También disponible mediante conversión de interfaz.",
    "recipes.iron": "I = Lingote de hierro",
    "recipes.glass": "G = Panel de vidrio",
    "recipes.redstone": "R = Redstone",
    "recipes.diamond": "D = Diamante",
    "recipes.amethyst": "A = Fragmento de amatista",
    "recipes.ender": "E = Perla de ender",
    "recipes.leather": "L = Cuero",
    "recipes.paper": "P = Papel x4",
    "install.eyebrow": "Versiones y dependencias",
    "install.title": "Instalacion y compatibilidad",
    "install.text": "Elige el archivo que corresponda a tu versión de Minecraft y a tu cargador. Instala MCA Reborn y sus bibliotecas requeridas, añade los mods elegidos a la carpeta mods y usa la misma versión en cliente y servidor.",
    "install.mca": "Dependencia obligatoria de ambos mods. Usa la edición para el mismo Minecraft y loader.",
    "install.architectury": "Instala las bibliotecas requeridas por MCA Reborn. Expressions requiere Architectury en Forge y NeoForge; los dos mods requieren Fabric API en Fabric.",
    "install.fabric": "En 1.21.1: Social Expansion requiere 0.16.0+ y Expressions 0.19.0+.",
    "install.optional": "Integraciones opcionales",
    "install.optionalList": "Social Expansion integra MCA Quests 1.1.0+, MCA Conversations 1.0.0+ y Townstead 0.7.6+ en sus versiones 1.20.1 y 1.21.1. Expressions puede usar Social Expansion de forma opcional.",
    "footer.text": "_XavierCodes_ Mod's - MCA Social Expansion / Expressions",
  },
  en: {
    "meta.description": "_XavierCodes_ Mod's web wiki for MCA Social Expansion and MCA Expressions.",
    "meta.title": "_XavierCodes_ Mod's Wiki",
    "brand.homeAria": "Go to home",
    "brand.title": "_XavierCodes_ Mod's",
    "brand.subtitle": "MCA Social Expansion / Expressions",
    "nav.aria": "Wiki sections",
    "nav.mods": "Mods",
    "nav.social": "MCA Social Expansion",
    "nav.expressions": "MCA Expressions",
    "nav.install": "Install",
    "controls.aria": "Preferences",
    "controls.language": "Language",
    "controls.languageAria": "Select language",
    "language.es": "Español",
    "language.en": "English",
    "menu.open": "Open menu",
    "menu.close": "Close menu",
    "theme.light": "Light mode",
    "theme.dark": "Dark mode",
    "theme.aria": "Switch color mode",
    "hero.eyebrow": "Community wiki for Minecraft Comes Alive",
    "hero.text": "Documentation base for both mods: social systems, interfaces, gifts, recipes, gestures, requirements, and useful tables for players and modders.",
    "hero.mods": "View mods",
    "hero.recipes": "View recipes",
    "hero.bannerAria": "Banner image space",
    "hero.bannerAlt": "MCA Social Expansion banner",
    "hero.itemsAria": "Main items",
    "mods.eyebrow": "Both mods",
    "mods.title": "Quick sheet",
    "common.version": "Version",
    "mods.social.description": "Relationships with memory, personalized gifts, and four interfaces to keep in touch with your villagers, even from afar.",
    "mods.social.fact1": "Smartphone, Crystal Social, Letter Social, and Magic Mirror, with persistent portraits.",
    "mods.social.fact2": "Spontaneous messages with replies, topic-based conversations, apologies, and reconciliation.",
    "mods.social.fact3": "Affinity, romance, trust, gifts, Know, and dialogue for children, grandchildren, and great-grandchildren.",
    "mods.social.viewMod": "View mod",
    "mods.expressions.tagAddon": "MCA Reborn addon",
    "mods.expressions.description": "Adds five physical gestures with MCA villagers, synchronized animations, and responses shaped by age, family, and relationship context.",
    "mods.expressions.fact1": "Five expressions: pat head, caress cheek, hug, kiss cheek, and hold hands.",
    "mods.expressions.fact2": "Variants adapted to children, relatives, partners, reserved personalities, and adults with dwarfism.",
    "mods.expressions.fact3": "Contextual dialogue, free camera control, distance checks, and optional MCA Social Expansion compatibility.",
    "mods.expressions.viewMod": "View mod",
    "mods.expressions.viewDetails": "View details",
    "social.title": "MCA Social Expansion",
    "social.text": "Get to know your villagers, discover their preferences, and build relationships that remember your encounters. Version 0.9.2 expands remote communication and improves contacts, portraits, and family interactions.",
    "interfaces.title": "Interfaces and items",
    "interfaces.text": "All four items provide contacts, conversations, and settings. You can convert your device from its interface menu by paying the listed materials. Gifts are handed over in person.",
    "interfaces.phone.alt": "Social Smartphone interface",
    "interfaces.phone.text": "Modern app-like interface for contacts and remote conversations.",
    "interfaces.phone.fact1": "Lets you review known villagers from a compact screen.",
    "interfaces.phone.fact2": "Organizes contacts by friendship, romance, and family.",
    "interfaces.phone.fact3": "Receives spontaneous messages and lets you reply from the inbox.",
    "interfaces.crystal.alt": "Crystal Social interface",
    "interfaces.crystal.text": "Magical interface for opening the social system with a crystal style.",
    "interfaces.crystal.fact1": "Presents a visual variant of the remote Crystal channel.",
    "interfaces.crystal.fact2": "Keeps access to contacts, friendship, and relationship data.",
    "interfaces.crystal.fact3": "Has its own notification sound and slower delivery than the phone.",
    "interfaces.letter.alt": "Letter Social interface",
    "interfaces.letter.text": "Letter interface for a more narrative and classic experience.",
    "interfaces.letter.fact1": "Turns social communication into a written view.",
    "interfaces.letter.fact2": "Uses a paper style to separate its identity from the phone.",
    "interfaces.letter.fact3": "Uses the longest delivery time in Short and Immersive modes.",
    "interfaces.mirror.alt": "Magic Mirror interface",
    "interfaces.mirror.title": "Magic Mirror",
    "interfaces.mirror.text": "A fourth interface with a golden frame to communicate with your contacts.",
    "interfaces.mirror.fact1": "Combines conversation, affection or romance, humor, conflict, and Know.",
    "interfaces.mirror.fact2": "Displays the contact portrait and their friendship, romance, or trust values.",
    "interfaces.mirror.fact3": "Craft it or convert another device; it shares the phone's delivery times.",
    "systems.eyebrow": "MCA Social Expansion",
    "systems.title": "Social Expansion systems",
    "systems.affinity.title": "Affinity",
    "systems.affinity.text": "Raised through greetings, jokes, praise, support, stories, family actions, and humor.",
    "systems.romance.title": "Romance",
    "systems.romance.text": "Flirting requires minimum affinity, and romantic actions progress through thresholds.",
    "systems.trust.title": "Trust",
    "systems.trust.text": "Unlocks deeper options for babies, minors, teenagers, and adult family members.",
    "systems.fatigue.title": "Social fatigue",
    "systems.fatigue.text": "Repeating actions too quickly creates neutral replies, annoyance, and lockouts.",
    "systems.personality.value": "8 traits",
    "systems.personality.title": "Personality",
    "systems.personality.text": "Extroverted, shy, ambitious, gossipy, proud, loyal, sarcastic, and romantic.",
    "systems.roles.value": "Family",
    "systems.roles.title": "Roles",
    "systems.roles.text": "Recognizes life stages, spouses, children, grandchildren, and great-grandchildren, with forms of address that match their kinship to the player.",
    "communication.title": "Contacts, messages, and memory",
    "communication.text": "Your contacts can write to you on their own. Replies and conversations take your relationship, the context, and past encounters into account.",
    "contacts.title": "Contacts and portraits",
    "contacts.register.name": "Add a contact",
    "contacts.register.value": "Social item in hand",
    "contacts.register.text": "Interact with an MCA villager while holding any of the four social items. You can then find them in your contact list.",
    "contacts.organize.name": "Filters and favorites",
    "contacts.organize.value": "An organized contact list",
    "contacts.organize.text": "Star your favorites, filter by family, friendship, romance, or acquaintances, and sort by recent activity, name, affinity, or romance.",
    "contacts.forget.name": "Forget a contact",
    "contacts.forget.text": "Enter the command followed by the contact's full name or UUID. If several contacts share a name, use the UUID to select one.",
    "contacts.photo.name": "Persistent photo",
    "contacts.photo.text": "Portraits are saved per world or server and remain available when the villager is far away. New photos have a maximum resolution of 128 × 128 pixels.",
    "contacts.retake.name": "Retake a photo",
    "contacts.retake.value": "Click the portrait",
    "contacts.retake.text": "The capture stays queued until the villager is nearby and awake. Version 0.9.2 loads and saves photos in the background and limits failed capture retries.",
    "contacts.revival.name": "Revived villagers",
    "contacts.revival.value": "Contact restored",
    "contacts.revival.text": "Interact with the revived NPC again while holding a social item to add them back. Open interfaces block actions if the NPC has just died.",
    "messages.title": "Spontaneous messages",
    "messages.receive.name": "Who can write to you",
    "messages.receive.value": "Family, spouse, and acquaintances",
    "messages.receive.text": "Keep a social item in your inventory. Relatives, your spouse, and adults with at least 25 affinity can write to you. Babies and minors outside your family are excluded.",
    "messages.frequency.name": "Frequency",
    "messages.frequency.value": "Up to 2 per Minecraft day",
    "messages.frequency.text": "The system checks every two minutes whether to generate a message; receiving one depends on chance and your relationship. The same contact waits at least three Minecraft days before writing again.",
    "messages.reply.name": "Reply",
    "messages.reply.value": "Warm, brief, or unanswered",
    "messages.reply.text": "A warm reply adds +1 affinity; a brief reply adds no points. Both lead to a final NPC response after the delivery time and a short pause. Each message can be answered only once.",
    "messages.context.name": "Context and settings",
    "messages.context.text": "There are Nether and End messages, incoming sounds based on the interface, and an outgoing sound. You can enable or disable spontaneous messages in settings.",
    "narrative.title": "Conversations and conflicts",
    "narrative.topics.name": "Interests, plans, and memories",
    "narrative.topics.value": "Topic-based conversation",
    "narrative.topics.text": "Choose a topic from conversation. Responses depend on personality, age, and closeness. A conversation without tension can add +1 affinity and provide evidence for Know.",
    "narrative.conflict.name": "Insults and tension",
    "narrative.conflict.value": "Accumulating consequences",
    "narrative.conflict.text": "Choose a light, direct, or harsh insult. Conflicts affect affinity and trust; insults can also reduce MCA hearts. Harsh insults do not apply to minors.",
    "narrative.apology.name": "Apologize",
    "narrative.apology.value": "First, repair trust",
    "narrative.apology.text": "The NPC remembers the conflict and may accept or reject an apology based on your relationship, their personality, and tension. Trying again immediately leads to a request to wait.",
    "narrative.reconcile.name": "Reconcile",
    "narrative.reconcile.value": "After an accepted apology",
    "narrative.reconcile.text": "Wait after apologizing, then propose reconciliation. Acceptance adds +1 affinity and +1 trust. Unresolved tension can also affect ordinary conversations.",
    "family.title": "Family in 0.9.2",
    "family.generations.name": "Children, grandchildren, and great-grandchildren",
    "family.generations.value": "Recognized kinship",
    "family.generations.text": "Dialogue distinguishes parents, grandparents, and great-grandparents and respects the player's chosen gender. Grandchildren no longer call you Mom or Dad.",
    "family.messages.name": "Family messages",
    "family.messages.value": "Three variants per life stage",
    "family.messages.text": "Grandchildren and great-grandchildren have their own spontaneous messages for childhood, adolescence, and adulthood, along with greetings that match their kinship.",
    "family.languages.name": "Mod languages",
    "family.languages.text": "Social Expansion includes English, Spanish from Spain, Mexican Spanish, US Spanish, and Brazilian Portuguese. This wiki is available in Spanish and English.",
    "delivery.title": "Delivery times",
    "delivery.text": "Choose a mode in settings. Short is the default; times are in gameplay seconds at 20 ticks per second.",
    "delivery.interface": "Interface",
    "delivery.instant": "Instant",
    "delivery.short": "Short",
    "delivery.immersive": "Immersive",
    "actions.eyebrow": "MCA Social Expansion",
    "actions.title": "Social Expansion actions",
    "actions.text": "Actions vary with personality and relationship. The gestures in this section are social actions; MCA Expressions' physical animations are covered in its own section.",
    "actions.base.title": "Base actions",
    "actions.base.greet.name": "Greet",
    "actions.base.greet.value": "+3 affinity",
    "actions.base.greet.text": "Conversation baseline with personality-based responses.",
    "actions.base.joke.name": "Joke",
    "actions.base.joke.value": "+6 approx.",
    "actions.base.joke.text": "Works better with extroverted or gossipy villagers.",
    "actions.base.praise.name": "Praise",
    "actions.base.praise.value": "+9 approx.",
    "actions.base.praise.text": "Very effective with romantic and proud villagers.",
    "actions.base.insult.name": "Insult",
    "actions.base.insult.value": "Negative",
    "actions.base.insult.text": "Lowers affinity and may affect MCA hearts.",
    "actions.base.flirt.name": "Flirt",
    "actions.base.flirt.value": "+12 romance",
    "actions.base.flirt.text": "Requires at least 10 affinity.",
    "actions.base.gift.name": "Gift",
    "actions.base.gift.value": "Variable",
    "actions.base.gift.text": "Evaluates tastes, favorite items, and repeated gifts.",
    "actions.friendship.title": "Friendship and marriage",
    "actions.friendship.greet.name": "Friendship greeting",
    "actions.friendship.greet.text": "Starts contact with a conversational response.",
    "actions.friendship.day.name": "Ask about their day",
    "actions.friendship.day.text": "Better for shy, loyal, and romantic villagers.",
    "actions.friendship.gossip.name": "Gossip",
    "actions.friendship.gossip.text": "Very strong with gossipy villagers; may bother loyal ones.",
    "actions.friendship.story.name": "Tell a story",
    "actions.friendship.story.text": "Works well with extroverted and sarcastic villagers.",
    "actions.friendship.support.name": "Offer support",
    "actions.friendship.support.text": "Shines with shy, loyal, and romantic villagers.",
    "actions.friendship.vows.name": "Recall vows",
    "actions.friendship.vows.text": "Spouse only.",
    "actions.romance.title": "Romance",
    "actions.romance.text": "Actions with chance, minimum requirement, and cooldown per use.",
    "table.action": "Action",
    "table.points": "Points",
    "table.requirement": "Requirement",
    "table.success": "Success",
    "romance.flatter": "Flatter with intent",
    "romance.softFlirt": "Soft flirt",
    "romance.confess": "Confess interest",
    "romance.hand": "Hold hands",
    "romance.hug": "Hug",
    "romance.kiss": "Kiss",
    "romance.love": "Say I love you",
    "romance.date": "Suggest a date",
    "romance.firstDate": "Remember first date",
    "romance.spouseKiss": "Spouse kiss",
    "romance.reaffirm": "Reaffirm love",
    "romance.points4": "Romance +4",
    "romance.points5": "Romance +5",
    "romance.points6": "Romance +6",
    "romance.points7": "Romance +7",
    "romance.points8": "Romance +8",
    "romance.reqAffinity10": "Affinity 10",
    "romance.req25": "Romance 25",
    "romance.req50": "Romance 50",
    "romance.req75": "Romance 75",
    "romance.spouse": "Spouse",
    "time.4min": "4 min",
    "time.5min": "5 min",
    "time.6min": "6 min",
    "actions.affection.title": "Family affection",
    "actions.affection.baby.name": "Baby",
    "actions.affection.baby.text": "Make them laugh, soothe, pamper, and sing.",
    "actions.affection.child.name": "Child",
    "actions.affection.child.text": "Ask about their day, tell a story, comfort, and express pride.",
    "actions.affection.teen.name": "Teenager",
    "actions.affection.teen.text": "Listen, advise, and show trust.",
    "actions.affection.adult.name": "Adult relative",
    "actions.affection.adult.text": "Remember childhood, offer support, and say you are proud.",
    "actions.humor.title": "Humor",
    "humor.annoy": "Annoy",
    "humor.entertain": "Entertain",
    "humor.silly": "Act silly",
    "humor.joke": "Tell joke",
    "humor.imitate": "Imitate",
    "humor.affinity3": "+3 affinity",
    "humor.affinity4": "+4 affinity",
    "humor.affinity5": "+5 affinity",
    "humor.annoy.meta": "62% success - 3 min",
    "humor.entertain.meta": "78% success - 4 min",
    "humor.silly.meta": "72% success - 3.5 min",
    "humor.joke.meta": "70% success - 3 min",
    "humor.imitate.meta": "66% success - 4 min",
    "gifts.eyebrow": "MCA Social Expansion 0.9.2",
    "gifts.title": "Gifts and Know",
    "gifts.text": "The redesign turns gifts into a preference system: the item type, what you know about the NPC, and how often you insist during the same day all matter.",
    "gifts.categories.value": "10 categories",
    "gifts.categories.title": "Gifts by category",
    "gifts.categories.text": "Sweets, flowers, books, food, tools, weapons, armor, valuables, nature, and other objects.",
    "gifts.quality.value": "+0 to +3",
    "gifts.quality.title": "Item quality",
    "gifts.quality.text": "Quality adds hearts to positive gifts; armor, tools, and weapons read quality from their material.",
    "gifts.daily.value": "4 per day",
    "gifts.daily.title": "Daily limit",
    "gifts.daily.text": "The first gift counts in full, then gains drop to +5, +2, +0, and after that the NPC stops accepting more.",
    "gifts.score.title": "Gift scoring",
    "gifts.score.text": "Points apply to MCA hearts. Quality does not increase rejected gifts.",
    "gifts.table.result": "Result",
    "gifts.table.note": "Notes",
    "gifts.score.signature.name": "Special gift",
    "gifts.score.signature.points": "+12 + quality",
    "gifts.score.signature.text": "Personal item based on personality or age.",
    "gifts.score.favorite.name": "Favorite category",
    "gifts.score.favorite.points": "+10 + quality",
    "gifts.score.favorite.text": "Revealed at Acquaintance.",
    "gifts.score.liked.name": "Liked category",
    "gifts.score.liked.points": "+6 + quality",
    "gifts.score.liked.text": "Revealed at Familiar.",
    "gifts.score.neutral.name": "Neutral gift",
    "gifts.score.neutral.points": "+2 + quality",
    "gifts.score.neutral.text": "Used when the item does not match known preferences.",
    "gifts.score.disliked.name": "Rejected category",
    "gifts.score.disliked.text": "Insisting with bad gifts makes the reaction worse.",
    "gifts.rules.title": "System rules",
    "gifts.rules.valid.name": "Valid gifts",
    "gifts.rules.valid.value": "Double filter",
    "gifts.rules.valid.text": "The interface only shows acceptable items, and the server validates again before consuming the item.",
    "gifts.rules.tags.name": "Mod support",
    "gifts.rules.tags.text": "Modpacks can classify objects with category tags or mark them as accepted other gifts.",
    "gifts.rules.invalid.name": "Blocked objects",
    "gifts.rules.invalid.text": "Technical objects, spawn eggs, MCA babies, and the mod's own items are not accepted.",
    "gifts.rules.priority.name": "Priority",
    "gifts.rules.priority.value": "Function first",
    "gifts.rules.priority.text": "A diamond sword counts as a weapon; the material value only adds quality or a secondary category.",
    "know.title": "Know system",
    "know.button.name": "Know button",
    "know.button.value": "What you know",
    "know.button.text": "Opens a view with familiarity, life stage, known personality, and discovered preferences.",
    "know.evidence.name": "Evidence",
    "know.evidence.value": "Actions + gifts",
    "know.evidence.text": "Each different social action and each observed gift category adds information; repeating the same thing does not farm knowledge.",
    "know.levels.name": "Levels",
    "know.levels.text": "Unlocks first impression, favorite category, liked category, and disliked category.",
    "know.family.name": "Family",
    "know.family.value": "Well known",
    "know.family.text": "Family members and spouses start at the maximum knowledge level.",
    "expressions.title": "MCA Expressions v0.2",
    "expressions.text": "Five physical gestures with synchronized animations and dialogue that recognizes a villager's age, family, relationship, and personality.",
    "expressions.headPat.title": "Pat head",
    "expressions.headPat.text": "Medium-trust gesture with heart rewards and a rejection animation if the NPC does not accept.",
    "expressions.caress.title": "Caress cheek",
    "expressions.caress.text": "Closer gesture with separate animations for male and female villagers.",
    "expressions.hug.title": "Hug",
    "expressions.hug.text": "Synchronized hug with automatic variants for adults, children, and adults with dwarfism.",
    "expressions.cheekKiss.title": "Kiss cheek",
    "expressions.cheekKiss.text": "A six-second kiss for adults and an eight-second child variant that includes a head pat.",
    "expressions.holdHands.title": "Hold hands",
    "expressions.holdHands.text": "A six-second gesture with family, partner, reserved-personality, and rejection variants.",
    "expressions.rules.title": "Usage rules",
    "expressions.rules.text": "Requirements and rewards use MCA hearts. Each gesture tracks its own window per player-villager pair, shared across its variants. Only completing the gesture grants a reward.",
    "expressions.table.expression": "Expression",
    "expressions.table.required": "Requirement",
    "expressions.table.high": "High relation",
    "expressions.table.reward": "Reward",
    "expressions.table.usage": "Use and lockout",
    "expressions.table.distance": "Distance",
    "expressions.headPat.name": "Pat head",
    "expressions.headPat.required": "50 hearts",
    "expressions.headPat.high": "75 hearts",
    "expressions.headPat.reward": "+7 first use, +5 second use",
    "expressions.headPat.usage": "2 rewarded uses every 10 min; 5 min lockout when saturated",
    "expressions.headPat.distance": "2.8 start / 3.35 continue",
    "expressions.caress.name": "Caress cheek",
    "expressions.caress.required": "65 hearts",
    "expressions.caress.high": "90 hearts",
    "expressions.caress.reward": "+9 first use, +6 second use",
    "expressions.caress.usage": "2 rewarded uses every 15 min; 7 min lockout when saturated",
    "expressions.caress.distance": "2.65 start / 3.1 continue",
    "expressions.hug.name": "Hug",
    "expressions.hug.required": "20 hearts",
    "expressions.hug.high": "85 hearts",
    "expressions.hug.reward": "+8 first use, +5 second use",
    "expressions.hug.usage": "2 rewarded uses every 12 min; 6 min lockout when saturated",
    "expressions.hug.distance": "2.8 start / 3.35 continue",
    "expressions.cheekKiss.name": "Kiss cheek",
    "expressions.cheekKiss.required": "80 adults; 50 own young children; 95 other children",
    "expressions.cheekKiss.high": "95 adults; 75 own young children; 100 other children",
    "expressions.cheekKiss.reward": "+9 first use, +6 second use",
    "expressions.cheekKiss.usage": "2 rewarded uses every 15 min; 7 min lockout when saturated",
    "expressions.cheekKiss.distance": "2.8 start / 3.35 continue",
    "expressions.holdHands.name": "Hold hands",
    "expressions.holdHands.required": "20 family; 50 partner; 80 others",
    "expressions.holdHands.high": "95 hearts",
    "expressions.holdHands.reward": "+7 first use, +5 second use",
    "expressions.holdHands.usage": "2 rewarded uses every 12 min; 6 min lockout when saturated",
    "expressions.holdHands.distance": "2.8 start / 3.35 continue",
    "expressions.flow.title": "In-game flow",
    "expressions.flow.menu.name": "Expressions button",
    "expressions.flow.menu.value": "MCA menu",
    "expressions.flow.menu.text": "Added to the villager interaction screen and opens its own selection menu.",
    "expressions.flow.screen.name": "Gesture screen",
    "expressions.flow.screen.value": "Visible hearts",
    "expressions.flow.screen.text": "Shows current hearts and disables options when requirements are missing.",
    "expressions.flow.chat.name": "Dialogue",
    "expressions.flow.chat.value": "Player + NPC",
    "expressions.flow.chat.text": "Requests, responses, and closing lines change with age, family, relationship, and personality.",
    "expressions.flow.feedback.name": "Feedback",
    "expressions.flow.feedback.value": "Sounds and particles",
    "expressions.flow.feedback.text": "Includes a kiss sound, conversation sounds, and completion particles.",
    "expressions.compat.title": "Compatibility and limits",
    "expressions.compat.mca": "Required for villagers, hearts, personality, and family context. Requires 7.7.1-alpha.1+ on 1.20.1 and 7.7.36-beta.3+ on 1.21.1.",
    "expressions.compat.architectury": "Expressions declares Architectury 9.2.14+ on Forge 1.20.1 and 13.0.8+ on NeoForge 1.21.1. On Fabric, install Fabric API and MCA's dependencies.",
    "expressions.compat.social": "Optional integration: 0.7+ on Forge and 0.9+ on the 1.21.1 ports. Adds social personalities and romance context to dialogue.",
    "expressions.compat.limits.name": "Restrictions",
    "expressions.compat.limits.value": "Age and relationship",
    "expressions.compat.limits.text": "Babies cannot participate; cheek kisses exclude teens, and every gesture keeps its own heart requirements.",
    "expressions.control.title": "Animation, contact, and dialogue",
    "expressions.control.camera": "Camera and movement remain free. Moving stops assisted steps; walking away or losing contact cancels the interaction without a reward.",
    "expressions.control.height": "The new variants adjust posture to height and dominant hand. The child kiss includes a head pat, and kiss contact has its own sound.",
    "expressions.control.dialogue": "Hug, Kiss Cheek, and Hold Hands use dialogue for acquaintances, friends, partners, spouses, and family at each life stage. Age and kinship take priority; a high relationship alone counts as friendship.",
    "expressions.control.variants": "There are three alternatives for requests, acceptance, completion, saturation, and interruptions, and two for rejection. Personality influences the choice. The new dialogue is available in English, Spanish from Spain, and Mexican Spanish.",
    "recipes.eyebrow": "MCA Social Expansion",
    "recipes.title": "Social Expansion recipes",
    "recipes.craftingTable": "Crafting table",
    "recipes.shapeless": "Shapeless recipe",
    "recipes.phone.alt": "Social Smartphone recipe",
    "recipes.crystal.alt": "Crystal Social recipe",
    "recipes.letter.alt": "Letter Social recipe",
    "recipes.mirror.layout": "Mirror recipe: gold, amethyst, gold; gold, glass pane, gold; gold, redstone, gold",
    "recipes.mirror.gold": "6 gold ingots in the two outer columns.",
    "recipes.mirror.center": "Middle column: 1 amethyst shard, 1 glass pane, and 1 redstone.",
    "recipes.mirror.result": "Output: 1 Magic Mirror. Also available through interface conversion.",
    "recipes.iron": "I = Iron ingot",
    "recipes.glass": "G = Glass pane",
    "recipes.redstone": "R = Redstone",
    "recipes.diamond": "D = Diamond",
    "recipes.amethyst": "A = Amethyst shard",
    "recipes.ender": "E = Ender pearl",
    "recipes.leather": "L = Leather",
    "recipes.paper": "P = Paper x4",
    "install.eyebrow": "Versions and dependencies",
    "install.title": "Installation and compatibility",
    "install.text": "Choose the file for your Minecraft version and mod loader. Install MCA Reborn and its required libraries, add your chosen mods to the mods folder, and use the same version on client and server.",
    "install.mca": "Required by both mods. Use the edition for the same Minecraft version and loader.",
    "install.architectury": "Install the libraries required by MCA Reborn. Expressions requires Architectury on Forge and NeoForge; both mods require Fabric API on Fabric.",
    "install.fabric": "On 1.21.1: Social Expansion requires 0.16.0+ and Expressions 0.19.0+.",
    "install.optional": "Optional integrations",
    "install.optionalList": "Social Expansion integrates with MCA Quests 1.1.0+, MCA Conversations 1.0.0+, and Townstead 0.7.6+ on 1.20.1 and 1.21.1. Expressions can optionally use Social Expansion.",
    "footer.text": "_XavierCodes_ Mod's - MCA Social Expansion / Expressions",
  },
};

const languageControl = document.querySelector("#language-control");
const languageToggle = document.querySelector("#language-toggle");
const languageLabel = document.querySelector("[data-language-label]");
const languageOptions = document.querySelectorAll("[data-language-option]");
const themeToggle = document.querySelector("#theme-toggle");
const themeLabel = document.querySelector("[data-theme-label]");
const descriptionMeta = document.querySelector('meta[name="description"]');
const siteHeader = document.querySelector(".site-header");
const menuToggle = document.querySelector("#menu-toggle");
let themeTransitionTimeout;

function getSavedLanguage() {
  const saved = readPreference(STORAGE_KEYS.language);
  return saved && translations[saved] ? saved : "es";
}

function getSavedTheme() {
  return readPreference(STORAGE_KEYS.theme) === "dark" ? "dark" : "light";
}

function readPreference(key) {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

function writePreference(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch {
    return;
  }
}

function translate(key, language) {
  return translations[language][key] || translations.es[key] || key;
}

function applyLanguage(language) {
  document.documentElement.lang = language;
  document.title = translate("meta.title", language);

  if (descriptionMeta) {
    descriptionMeta.setAttribute("content", translate("meta.description", language));
  }

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = translate(element.dataset.i18n, language);
  });

  document.querySelectorAll("[data-i18n-label]").forEach((element) => {
    element.setAttribute("aria-label", translate(element.dataset.i18nLabel, language));
  });

  document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
    element.setAttribute("alt", translate(element.dataset.i18nAlt, language));
  });

  updateLanguageControl(language);
  updateThemeControl(language);
  updateMenuControl(language);
  writePreference(STORAGE_KEYS.language, language);
}

function applyTheme(theme, animate = true) {
  const selectedTheme = theme === "dark" ? "dark" : "light";

  if (animate) {
    document.documentElement.classList.add("is-theme-changing");
    clearTimeout(themeTransitionTimeout);
    themeTransitionTimeout = setTimeout(() => {
      document.documentElement.classList.remove("is-theme-changing");
    }, 260);
  }

  document.documentElement.dataset.theme = selectedTheme;
  writePreference(STORAGE_KEYS.theme, selectedTheme);
  updateThemeControl(getSavedLanguage());
}

function updateThemeControl(language) {
  if (!themeToggle || !themeLabel) {
    return;
  }

  const isDark = document.documentElement.dataset.theme === "dark";
  themeToggle.setAttribute("aria-pressed", String(isDark));
  themeToggle.setAttribute("aria-label", translate("theme.aria", language));
  themeLabel.textContent = translate(isDark ? "theme.dark" : "theme.light", language);
}

function updateLanguageControl(language) {
  if (!languageControl || !languageToggle) {
    return;
  }

  const isOpen = languageControl.classList.contains("is-language-open");
  languageToggle.setAttribute("aria-expanded", String(isOpen));

  if (languageLabel) {
    languageLabel.textContent = translate(`language.${language}`, language);
  }

  languageOptions.forEach((option) => {
    option.setAttribute("aria-selected", String(option.dataset.languageOption === language));
  });
}

function closeLanguageMenu() {
  if (!languageControl) {
    return;
  }

  languageControl.classList.remove("is-language-open");
  updateLanguageControl(getSavedLanguage());
}

function updateMenuControl(language) {
  if (!siteHeader || !menuToggle) {
    return;
  }

  const isOpen = siteHeader.classList.contains("is-menu-open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", translate(isOpen ? "menu.close" : "menu.open", language));
}

function closeMenu() {
  if (!siteHeader) {
    return;
  }

  siteHeader.classList.remove("is-menu-open");
  updateMenuControl(getSavedLanguage());
}

function boot() {
  applyTheme(getSavedTheme(), false);
  applyLanguage(getSavedLanguage());

  languageToggle?.addEventListener("click", (event) => {
    event.stopPropagation();
    languageControl?.classList.toggle("is-language-open");
    updateLanguageControl(getSavedLanguage());
  });

  languageOptions.forEach((option) => {
    option.addEventListener("click", (event) => {
      event.stopPropagation();
      applyLanguage(option.dataset.languageOption);
      closeLanguageMenu();
    });
  });

  themeToggle?.addEventListener("click", () => {
    const current = document.documentElement.dataset.theme;
    applyTheme(current === "dark" ? "light" : "dark");
    closeLanguageMenu();
  });

  menuToggle?.addEventListener("click", () => {
    siteHeader?.classList.toggle("is-menu-open");
    updateMenuControl(getSavedLanguage());
    closeLanguageMenu();
  });

  document.querySelectorAll(".main-nav a").forEach((link) => {
    link.addEventListener("click", () => {
      closeLanguageMenu();
      closeMenu();
    });
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 680) {
      closeMenu();
    }
  });

  document.addEventListener("click", (event) => {
    if (!languageControl?.contains(event.target)) {
      closeLanguageMenu();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeLanguageMenu();
      closeMenu();
    }
  });
}

boot();
