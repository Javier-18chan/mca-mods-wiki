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
    "mods.social.description": "Expande las relaciones de MCA con afinidad, romance, confianza, contactos, regalos, humor y conversaciones por interfaz.",
    "mods.social.fact1": "Tres interfaces sociales: Smartphone, Crystal Social y Letter Social.",
    "mods.social.fact2": "Sistema de afinidad, romance, confianza, fatiga social y roles familiares.",
    "mods.social.fact3": "Contactos, mensajes remotos, regalos, Conocer, humor y acciones de amistad.",
    "mods.social.viewMod": "Ver mod",
    "mods.expressions.tagAddon": "Addon de MCA Reborn",
    "mods.expressions.description": "Agrega cinco gestos fisicos con aldeanos de MCA, animaciones sincronizadas y respuestas que cambian segun la edad, la familia y la relacion.",
    "mods.expressions.fact1": "Cinco expresiones: acariciar cabeza y mejilla, abrazar, besar la mejilla y tomar de la mano.",
    "mods.expressions.fact2": "Variantes adaptadas a niños, familiares, parejas, personalidades reservadas y adultos con enanismo.",
    "mods.expressions.fact3": "Dialogos contextuales, camara libre, control de distancia y compatibilidad opcional con MCA Social Expansion.",
    "mods.expressions.viewMod": "Ver mod",
    "mods.expressions.viewDetails": "Ver detalles",
    "social.title": "MCA Social Expansion",
    "social.text": "Este bloque concentra todo lo que pertenece al mod Social Expansion: interfaces, sistemas, acciones sociales, regalos, Conocer y recetas.",
    "interfaces.title": "Interfaces y objetos",
    "interfaces.text": "Los tres objetos comparten el sistema social, pero cada uno comunica una fantasia visual distinta.",
    "interfaces.phone.alt": "Interfaz de Social Smartphone",
    "interfaces.phone.text": "Interfaz moderna tipo app para contactos y conversaciones remotas.",
    "interfaces.phone.fact1": "Permite revisar aldeanos conocidos desde una pantalla compacta.",
    "interfaces.phone.fact2": "Ordena contactos por amistad, romance y familia.",
    "interfaces.phone.fact3": "Funciona como centro principal para mensajes y acciones sociales.",
    "interfaces.crystal.alt": "Interfaz de Crystal Social",
    "interfaces.crystal.text": "Interfaz magica para abrir el sistema social con estetica de cristal.",
    "interfaces.crystal.fact1": "Presenta una variante visual del canal remoto Crystal.",
    "interfaces.crystal.fact2": "Mantiene acceso a contactos, amistad y relacion.",
    "interfaces.crystal.fact3": "Da una experiencia mas mistica sin cambiar el sistema social.",
    "interfaces.letter.alt": "Interfaz de Letter Social",
    "interfaces.letter.text": "Interfaz de carta para una experiencia mas narrativa y clasica.",
    "interfaces.letter.fact1": "Convierte la comunicacion social en una vista escrita.",
    "interfaces.letter.fact2": "Usa un estilo de papel para separar su identidad del telefono.",
    "interfaces.letter.fact3": "Funciona como alternativa visual para contactos y relaciones.",
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
    "systems.roles.text": "Distingue bebes, ninos, adolescentes, familiares adultos y conyuges.",
    "actions.eyebrow": "MCA Social Expansion",
    "actions.title": "Acciones de Social Expansion",
    "actions.text": "Datos del sistema social extraidos de los archivos locales del mod.",
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
    "gifts.eyebrow": "MCA Social Expansion 0.8",
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
    "expressions.rules.text": "Los valores usan corazones de MCA y cada par jugador-aldeano lleva su propia ventana de uso.",
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
    "expressions.cheekKiss.required": "80 adultos; 50 hijos; 95 otros niños",
    "expressions.cheekKiss.high": "95 adultos; 75 hijos; 100 otros niños",
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
    "expressions.compat.mca": "Dependencia obligatoria para aldeanos, corazones, personalidad y familia.",
    "expressions.compat.architectury": "Dependencia obligatoria declarada por el mod para Forge 1.20.1.",
    "expressions.compat.social": "Integracion opcional: si esta instalado, usa sus personalidades sociales para variar dialogos.",
    "expressions.compat.limits.name": "Restricciones",
    "expressions.compat.limits.value": "Edad y relacion",
    "expressions.compat.limits.text": "Los bebes no participan; el beso en la mejilla excluye adolescentes y cada gesto conserva sus requisitos de corazones.",
    "recipes.eyebrow": "MCA Social Expansion",
    "recipes.title": "Recetas de Social Expansion",
    "recipes.craftingTable": "Mesa de crafteo",
    "recipes.shapeless": "Receta sin forma",
    "recipes.phone.alt": "Receta de Social Smartphone",
    "recipes.crystal.alt": "Receta de Crystal Social",
    "recipes.letter.alt": "Receta de Letter Social",
    "recipes.iron": "I = Lingote de hierro",
    "recipes.glass": "G = Panel de vidrio",
    "recipes.redstone": "R = Redstone",
    "recipes.diamond": "D = Diamante",
    "recipes.amethyst": "A = Fragmento de amatista",
    "recipes.ender": "E = Perla de ender",
    "recipes.leather": "L = Cuero",
    "recipes.paper": "P = Papel x4",
    "install.eyebrow": "Repositorio",
    "install.title": "Instalacion y compatibilidad",
    "install.minecraft": "1.20.1 para las versiones Forge detectadas",
    "install.mca": "7.7.1-alpha.1 o superior",
    "install.architectury": "9.2.14 o superior para MCA Expressions",
    "install.optional": "Integraciones opcionales",
    "install.optionalList": "MCA Social Expansion 0.7+ para MCA Expressions, MCA Quests 1.1.0, MCA Conversations 1.0.0, Townstead 0.7.6",
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
    "mods.social.description": "Expands MCA relationships with affinity, romance, trust, contacts, gifts, humor, and interface-based conversations.",
    "mods.social.fact1": "Three social interfaces: Smartphone, Crystal Social, and Letter Social.",
    "mods.social.fact2": "Affinity, romance, trust, social fatigue, and family role systems.",
    "mods.social.fact3": "Contacts, remote messages, gifts, Know, humor, and friendship actions.",
    "mods.social.viewMod": "View mod",
    "mods.expressions.tagAddon": "MCA Reborn addon",
    "mods.expressions.description": "Adds five physical gestures with MCA villagers, synchronized animations, and responses shaped by age, family, and relationship context.",
    "mods.expressions.fact1": "Five expressions: pat head, caress cheek, hug, kiss cheek, and hold hands.",
    "mods.expressions.fact2": "Variants adapted to children, relatives, partners, reserved personalities, and adults with dwarfism.",
    "mods.expressions.fact3": "Contextual dialogue, free camera control, distance checks, and optional MCA Social Expansion compatibility.",
    "mods.expressions.viewMod": "View mod",
    "mods.expressions.viewDetails": "View details",
    "social.title": "MCA Social Expansion",
    "social.text": "This block keeps everything that belongs to Social Expansion together: interfaces, systems, social actions, gifts, Know, and recipes.",
    "interfaces.title": "Interfaces and items",
    "interfaces.text": "The three items share the social system, but each one delivers a different visual fantasy.",
    "interfaces.phone.alt": "Social Smartphone interface",
    "interfaces.phone.text": "Modern app-like interface for contacts and remote conversations.",
    "interfaces.phone.fact1": "Lets you review known villagers from a compact screen.",
    "interfaces.phone.fact2": "Organizes contacts by friendship, romance, and family.",
    "interfaces.phone.fact3": "Works as the main hub for messages and social actions.",
    "interfaces.crystal.alt": "Crystal Social interface",
    "interfaces.crystal.text": "Magical interface for opening the social system with a crystal style.",
    "interfaces.crystal.fact1": "Presents a visual variant of the remote Crystal channel.",
    "interfaces.crystal.fact2": "Keeps access to contacts, friendship, and relationship data.",
    "interfaces.crystal.fact3": "Adds a more mystical feel without changing the social system.",
    "interfaces.letter.alt": "Letter Social interface",
    "interfaces.letter.text": "Letter interface for a more narrative and classic experience.",
    "interfaces.letter.fact1": "Turns social communication into a written view.",
    "interfaces.letter.fact2": "Uses a paper style to separate its identity from the phone.",
    "interfaces.letter.fact3": "Works as a visual alternative for contacts and relationships.",
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
    "systems.roles.text": "Separates babies, children, teenagers, adult relatives, and spouses.",
    "actions.eyebrow": "MCA Social Expansion",
    "actions.title": "Social Expansion actions",
    "actions.text": "Social system data extracted from the local mod files.",
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
    "gifts.eyebrow": "MCA Social Expansion 0.8",
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
    "expressions.rules.text": "Values use MCA hearts, and each player-villager pair tracks its own usage window.",
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
    "expressions.cheekKiss.required": "80 adults; 50 own children; 95 other children",
    "expressions.cheekKiss.high": "95 adults; 75 own children; 100 other children",
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
    "expressions.compat.mca": "Required dependency for villagers, hearts, personality, and family context.",
    "expressions.compat.architectury": "Required dependency declared by the mod for Forge 1.20.1.",
    "expressions.compat.social": "Optional integration: when installed, its social personalities vary dialogue lines.",
    "expressions.compat.limits.name": "Restrictions",
    "expressions.compat.limits.value": "Age and relationship",
    "expressions.compat.limits.text": "Babies cannot participate; cheek kisses exclude teens, and every gesture keeps its own heart requirements.",
    "recipes.eyebrow": "MCA Social Expansion",
    "recipes.title": "Social Expansion recipes",
    "recipes.craftingTable": "Crafting table",
    "recipes.shapeless": "Shapeless recipe",
    "recipes.phone.alt": "Social Smartphone recipe",
    "recipes.crystal.alt": "Crystal Social recipe",
    "recipes.letter.alt": "Letter Social recipe",
    "recipes.iron": "I = Iron ingot",
    "recipes.glass": "G = Glass pane",
    "recipes.redstone": "R = Redstone",
    "recipes.diamond": "D = Diamond",
    "recipes.amethyst": "A = Amethyst shard",
    "recipes.ender": "E = Ender pearl",
    "recipes.leather": "L = Leather",
    "recipes.paper": "P = Paper x4",
    "install.eyebrow": "Repository",
    "install.title": "Installation and compatibility",
    "install.minecraft": "1.20.1 for the detected Forge versions",
    "install.mca": "7.7.1-alpha.1 or newer",
    "install.architectury": "9.2.14 or newer for MCA Expressions",
    "install.optional": "Optional integrations",
    "install.optionalList": "MCA Social Expansion 0.7+ for MCA Expressions, MCA Quests 1.1.0, MCA Conversations 1.0.0, Townstead 0.7.6",
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
