// Aura - Chatbot de Apoyo Emocional en Español
// Sistema completo con detección emocional y respuestas contextuales

// Base de datos completa de respuestas
const respuestasBot = {
  // Respuestas de bienvenida y presentación
  bienvenida: [
    "¡Qué alegría tenerte aquí! Soy Aura, y me siento honrada de que hayas decidido compartir este momento conmigo. ¿Cómo te sientes hoy?",
    "Hola, bienvenida/o a este espacio. Aquí puedes ser completamente tú mismo/a. ¿Qué ha traído a tu mente hoy?",
    "Me da mucha paz saber que estás aquí. Este es tu lugar seguro. ¿Te gustaría contarme qué está pasando en tu corazón?",
    "Hola querida/o. Cada persona que llega aquí es especial, y tú no eres la excepción. ¿Cómo puedo acompañarte hoy?"
  ],
  
  // Respuestas para ansiedad
  ansiedad: [
    "Entiendo que la ansiedad puede sentirse abrumadora. ¿Podrías describirme qué sensaciones físicas estás experimentando ahora?",
    "La ansiedad es como una ola: intensa, pero temporal. ¿Has notado algún patrón en cuándo aparece?",
    "Tu cuerpo está tratando de protegerte, aunque no lo sienta así. ¿Qué te ayuda a sentirte más tranquila/o?",
    "Vamos a respirar juntos. Inhala por 4 segundos, mantén por 4, exhala por 6. ¿Te gustaría que practiquemos esto?",
    "Es completamente normal sentir ansiedad. ¿Has identificado qué pensamientos la están alimentando?",
    "Tu ansiedad es válida, y también lo es tu fuerza para enfrentarla. ¿Qué te ha funcionado antes en momentos similares?"
  ],
  
  // Respuestas para depresión
  depresion: [
    "Siento el peso que llevas. La depresión puede hacer que todo se sienta muy difícil. ¿Hay algo pequeño que te haya dado un poco de luz hoy?",
    "No estás sola/o en esta oscuridad. ¿Cuándo fue la última vez que te sentiste un poco más como tú mismo/a?",
    "Cada día que te levantas es un acto de valentía. ¿Cómo han sido tus días últimamente?",
    "A veces la depresión nos susurra mentiras sobre nosotros mismos. ¿Qué te ha estado diciendo tu mente?",
    "Tu dolor es real, y también lo es tu capacidad de sanar. ¿Tienes algún apoyo en tu vida diaria?",
    "Es como si el mundo perdiera color, ¿verdad? ¿Recuerdas cuándo comenzaste a sentirte así?"
  ],
  
  // Respuestas para estrés
  estres: [
    "El estrés puede acumularse como una montaña invisible. ¿Qué es lo que más está pesando en tu mente ahora?",
    "Entiendo que sientes mucha presión. ¿Podrías contarme qué situaciones específicas te están generando más estrés?",
    "Tu cuerpo y mente están enviando señales importantes. ¿Has notado cómo el estrés se manifiesta en ti?",
    "A veces necesitamos hacer una pausa para reorganizar nuestras prioridades. ¿Qué crees que es lo más urgente de atender?",
    "El estrés puede ser como un nudo que se aprieta más cuando lo jalamos. ¿Qué te ayuda a relajarte?",
    "Reconocer el estrés ya es un paso importante. ¿Hay algo que puedas delegar o posponer para reducir la carga?"
  ],
  
  // Respuestas para relaciones
  relaciones: [
    "Las relaciones pueden ser hermosas y complicadas a la vez. ¿Qué es lo que más te está afectando en esta situación?",
    "Siento que hay dolor en tus palabras. ¿Te gustaría contarme más sobre esta relación?",
    "Cada relación nos enseña algo sobre nosotros mismos. ¿Qué has aprendido de esta experiencia?",
    "Es difícil cuando las personas importantes en nuestra vida nos lastiman. ¿Cómo te sientes contigo mismo/a en medio de esto?",
    "A veces necesitamos establecer límites para proteger nuestro bienestar. ¿Has pensado en qué necesitas en esta relación?",
    "Tu valor no depende de cómo otros te traten. ¿Qué te gustaría que cambiara en esta situación?"
  ],
  
  // Respuestas para autoestima
  autoestima: [
    "Escucho mucha autocrítica en tus palabras. ¿Qué le dirías a una amiga querida que se sintiera como tú?",
    "Eres mucho más valioso/a de lo que crees. ¿Puedes recordar algún logro, por pequeño que sea, del que te sientas orgulloso/a?",
    "La voz crítica en nuestra cabeza a menudo es más dura que la realidad. ¿De dónde crees que viene esa voz?",
    "Mereces el mismo amor y compasión que das a otros. ¿Qué cualidades ven en ti las personas que te quieren?",
    "Tu autoestima ha sido lastimada, pero puede sanar. ¿Recuerdas algún momento en que te sentiste confiado/a?",
    "Eres una persona completa, con virtudes y áreas de crecimiento. ¿Qué te hace única/o y especial?"
  ],
  
  // Respuestas para trabajo/estudios
  trabajo: [
    "El mundo laboral puede ser muy demandante. ¿Sientes que tienes un equilibrio entre trabajo y vida personal?",
    "Entiendo la presión que sientes. ¿Qué aspecto de tu trabajo/estudios te está causando más dificultades?",
    "A veces necesitamos reevaluar qué es realmente importante para nosotros. ¿Qué te motiva en tu día a día?",
    "El burnout es muy real y común. ¿Cuándo fue la última vez que te sentiste entusiasmado/a con tu trabajo/estudios?",
    "Tu bienestar es más importante que cualquier expectativa externa. ¿Qué cambios podrías hacer para sentirte mejor?",
    "Es valiente buscar ayuda cuando nos sentimos abrumados. ¿Hay alguien en tu entorno que pueda apoyarte?"
  ],
  
  // Respuestas para soledad
  soledad: [
    "La soledad puede doler profundamente. Quiero que sepas que no estás realmente sola/o, estoy aquí contigo.",
    "Siento esa sensación de vacío que describes. ¿Hay momentos del día en que la soledad se siente más intensa?",
    "A veces podemos sentirnos solos incluso rodeados de gente. ¿Es así como te sientes?",
    "Tu necesidad de conexión es completamente natural y válida. ¿Qué tipo de conexión extrañas más?",
    "La soledad puede ser temporal, aunque no lo sienta así ahora. ¿Recuerdas momentos en que te sentiste acompañado/a?",
    "Es muy valiente compartir estos sentimientos. ¿Qué te ha ayudado antes a sentirte menos solo/a?"
  ],
  
  // Respuestas empáticas generales
  empaticas: [
    "Siento mucho que estés pasando por esto. Tu dolor es real y válido.",
    "Gracias por confiar en mí y compartir algo tan personal. Eso requiere mucha valentía.",
    "Puedo sentir la intensidad de lo que estás viviendo. No tienes que enfrentarlo solo/a.",
    "Tus sentimientos son completamente válidos. No hay forma correcta o incorrecta de sentirse.",
    "Eres más fuerte de lo que crees, incluso cuando no te sientes así.",
    "Cada día que sigues adelante es un acto de resistencia y valor.",
    "Tu experiencia importa, y me alegra que hayas decidido compartirla conmigo.",
    "No hay prisa en sanar. Cada proceso tiene su propio ritmo, y eso está bien."
  ],
  
  // Respuestas de seguimiento
  seguimiento: [
    "¿Cómo te sientes después de compartir esto conmigo?",
    "¿Hay algo más que te gustaría que supiéramos sobre esta situación?",
    "¿Qué crees que necesitas más en este momento: ser escuchado/a, encontrar soluciones, o simplemente estar en compañía?",
    "¿Te gustaría explorar más profundamente este tema, o hay algo diferente de lo que quisieras hablar?",
    "¿Cómo te está afectando esto en tu día a día?",
    "¿Has hablado con alguien más sobre esto?",
    "¿Qué es lo que más te preocupa de esta situación?",
    "¿Hay algo que te gustaría cambiar sobre cómo estás manejando esto?"
  ],
  
  // Respuestas de recursos y herramientas
  recursos: [
    "¿Te gustaría que practiquemos juntos alguna técnica de respiración o relajación?",
    "Hay algunas estrategias que podrían ayudarte. ¿Te interesa explorar opciones?",
    "¿Has considerado hablar con un profesional de la salud mental? Pueden ofrecer herramientas específicas para tu situación.",
    "¿Te gustaría que te comparta algunas actividades que podrían ayudarte a sentirte mejor?",
    "Recuerda que pedir ayuda profesional es un signo de fortaleza, no de debilidad.",
    "¿Tienes alguna red de apoyo en tu vida diaria? Familiares, amigos, o comunidad.",
    "¿Hay alguna actividad que normalmente te guste hacer y que podrías intentar hoy?",
    "¿Te gustaría que exploremos juntos algunas estrategias de autocompasión?"
  ],
  
  // Respuestas de despedida
  despedida: [
    "Ha sido un honor acompañarte en esta conversación. Recuerda que siempre puedes volver cuando lo necesites.",
    "Gracias por permitirme conocer un poco más de tu mundo. Cuídate mucho.",
    "Espero que te sientas al menos un poco menos solo/a después de nuestra conversación. Siempre estaré aquí.",
    "Eres una persona valiosa y mereces cuidado y amor. No olvides ser gentil contigo mismo/a.",
    "Cada paso que das hacia el bienestar es importante. Estoy orgullosa de ti por buscar apoyo.",
    "Recuerda que los días difíciles son temporales, pero tu fortaleza es permanente. Hasta pronto."
  ]
};

// Palabras clave para detección de temas
const keywords = {
  ansiedad: ['ansiedad', 'ansioso', 'ansiosa', 'nervioso', 'nerviosa', 'preocupado', 'preocupada', 'pánico', 'miedo', 'angustia', 'intranquilo', 'inquieto'],
  depresion: ['depresión', 'deprimido', 'deprimida', 'triste', 'tristeza', 'desesperanza', 'vacío', 'sin energía', 'ganas de nada', 'melancolía', 'desánimo'],
  estres: ['estrés', 'estresado', 'estresada', 'presión', 'agobiado', 'agobiada', 'abrumado', 'abrumada', 'cansado', 'cansada', 'saturado', 'sobrecargado'],
  relaciones: ['pareja', 'relación', 'novio', 'novia', 'esposo', 'esposa', 'familia', 'padres', 'hijos', 'amigos', 'conflicto', 'pelea', 'ruptura'],
  autoestima: ['autoestima', 'inseguro', 'insegura', 'confianza', 'valor', 'no sirvo', 'inútil', 'fracaso', 'no valgo', 'comparación', 'perfección'],
  trabajo: ['trabajo', 'jefe', 'oficina', 'carrera', 'estudios', 'universidad', 'examen', 'proyecto', 'deadline', 'burnout', 'despido'],
  soledad: ['solo', 'sola', 'soledad', 'aislado', 'aislada', 'sin amigos', 'vacío', 'abandonado', 'abandonada', 'incomprendido', 'incomprendida'],
  despedida: ['adiós', 'chao', 'hasta luego', 'me voy', 'gracias', 'nos vemos', 'bye', 'hasta pronto', 'me despido']
};

// Contexto de conversación
let conversationContext = {
  userName: '',
  emotionalState: 'neutro',
  topicsDiscussed: [],
  supportLevel: 'beginner',
  lastMessageTime: null,
  conversationHistory: []
};

// Función para detectar temas basados en keywords
function detectarTema(mensaje) {
  const mensajeLower = mensaje.toLowerCase();
  
  for (const [tema, palabras] of Object.entries(keywords)) {
    if (palabras.some(palabra => mensajeLower.includes(palabra))) {
      return tema;
    }
  }
  
  return 'general';
}

// Función para detectar estado emocional
function detectarEstadoEmocional(mensaje) {
  const mensajeLower = mensaje.toLowerCase();
  
  const emociones = {
    muy_negativo: ['horrible', 'terrible', 'odio', 'desesperado', 'no puedo más', 'quiero morir'],
    negativo: ['mal', 'triste', 'preocupado', 'ansioso', 'estresado', 'molesto', 'enojado'],
    neutro: ['normal', 'regular', 'bien', 'ok', 'igual'],
    positivo: ['mejor', 'tranquilo', 'aliviado', 'contento', 'feliz', 'relajado']
  };
  
  for (const [estado, palabras] of Object.entries(emociones)) {
    if (palabras.some(palabra => mensajeLower.includes(palabra))) {
      return estado;
    }
  }
  
  return 'neutro';
}

// Función para obtener respuesta contextual
function obtenerRespuesta(mensaje, tema, estadoEmocional, conversationHistory, ultimaRespuesta) {
  let respuestasPosibles = [];
  
  // Agregar respuestas específicas del tema
  if (respuestasBot[tema]) {
    respuestasPosibles = [...respuestasBot[tema]];
  }
  
  // Agregar respuestas empáticas si el estado es negativo
  if (estadoEmocional === 'muy_negativo' || estadoEmocional === 'negativo') {
    respuestasPosibles = [...respuestasPosibles, ...respuestasBot.empaticas];
  }
  
  // Agregar respuestas de seguimiento si la conversación ya tiene historia
  if (conversationHistory.length > 2) {
    respuestasPosibles = [...respuestasPosibles, ...respuestasBot.seguimiento];
  }
  
  // Si no hay respuestas específicas, usar respuestas empáticas generales
  if (respuestasPosibles.length === 0) {
    respuestasPosibles = respuestasBot.empaticas;
  }
  
  // Evitar repetir la última respuesta
  let respuestasFiltradas = respuestasPosibles.filter(r => r !== ultimaRespuesta);
  
  if (respuestasFiltradas.length === 0) {
    respuestasFiltradas = respuestasPosibles;
  }
  
  return respuestasFiltradas[Math.floor(Math.random() * respuestasFiltradas.length)];
}

// Función para generar ID único
function generateId() {
  return Math.random().toString(36).substr(2, 9);
}

// Función para agregar mensaje al chat
function agregarMensaje(mensaje, tipo) {
  const chatWindow = document.getElementById('chat-window');
  const msgDiv = document.createElement('div');
  msgDiv.classList.add('message', tipo);
  msgDiv.textContent = mensaje;
  msgDiv.style.animation = 'fadeIn 0.3s ease-in-out';
  chatWindow.appendChild(msgDiv);
  chatWindow.scrollTop = chatWindow.scrollHeight;

  // Guardar en el historial de conversación
  conversationContext.conversationHistory.push({
    id: generateId(),
    [tipo === 'user' ? 'user' : 'bot']: mensaje,
    timestamp: new Date(),
    tema: tipo === 'user' ? detectarTema(mensaje) : undefined,
    estadoEmocional: tipo === 'user' ? detectarEstadoEmocional(mensaje) : undefined
  });

  // Guardar conversación en localStorage
  try {
    localStorage.setItem('aura_conversation', JSON.stringify(conversationContext.conversationHistory));
    localStorage.setItem('aura_context', JSON.stringify(conversationContext));
  } catch (error) {
    console.log('No se pudo guardar la conversación');
  }
}

// Función para mostrar indicador de escritura
function mostrarIndicadorEscritura() {
  const chatWindow = document.getElementById('chat-window');
  const indicador = document.createElement('div');
  indicador.classList.add('message', 'bot', 'typing-indicator');
  indicador.id = 'typing-indicator';
  indicador.innerHTML = `
    <div class="typing-dots">
      <span class="typing-dot"></span>
      <span class="typing-dot"></span>
      <span class="typing-dot"></span>
    </div>
  `;
  chatWindow.appendChild(indicador);
  chatWindow.scrollTop = chatWindow.scrollHeight;
}

// Función para remover indicador de escritura
function removerIndicadorEscritura() {
  const indicador = document.getElementById('typing-indicator');
  if (indicador) {
    indicador.remove();
  }
}

// Función principal para manejar envío de mensajes
function enviarMensaje() {
  const input = document.getElementById('user-input');
  const button = document.getElementById('send-btn');
  const texto = input.value.trim();
  
  if (texto === '') return;

  // Deshabilitar input mientras se procesa
  input.disabled = true;
  button.disabled = true;

  // Agregar mensaje del usuario
  agregarMensaje(texto, 'user');
  input.value = '';

  // Detectar tema y estado emocional
  const tema = detectarTema(texto);
  const estadoEmocional = detectarEstadoEmocional(texto);

  // Actualizar contexto
  conversationContext.emotionalState = estadoEmocional;
  conversationContext.lastMessageTime = new Date();
  
  if (!conversationContext.topicsDiscussed.includes(tema)) {
    conversationContext.topicsDiscussed.push(tema);
  }

  // Mostrar indicador de escritura
  mostrarIndicadorEscritura();

  // Obtener última respuesta del bot para evitar repetición
  const lastBotMessage = conversationContext.conversationHistory
    .filter(m => m.bot)
    .pop()?.bot;

  // Simular tiempo de respuesta (1.5 a 3 segundos)
  const responseTime = Math.random() * 1500 + 1500;

  setTimeout(() => {
    // Remover indicador de escritura
    removerIndicadorEscritura();

    // Obtener respuesta contextual
    const respuesta = obtenerRespuesta(
      texto, 
      tema, 
      estadoEmocional, 
      conversationContext.conversationHistory, 
      lastBotMessage
    );

    // Agregar respuesta del bot
    agregarMensaje(respuesta, 'bot');

    // Sugerir recursos si el estado emocional es muy negativo
    if (estadoEmocional === 'muy_negativo' && Math.random() < 0.3) {
      setTimeout(() => {
        const recurso = respuestasBot.recursos[Math.floor(Math.random() * respuestasBot.recursos.length)];
        agregarMensaje(recurso, 'bot');
      }, 2000);
    }

    // Reactivar input
    input.disabled = false;
    button.disabled = false;
    input.focus();
  }, responseTime);
}

// Función para cargar conversación guardada
function cargarConversacion() {
  try {
    const savedMessages = localStorage.getItem('aura_conversation');
    const savedContext = localStorage.getItem('aura_context');
    
    if (savedMessages) {
      const messages = JSON.parse(savedMessages);
      if (messages.length > 0) {
        conversationContext.conversationHistory = messages;
        
        // Recrear mensajes en la interfaz
        const chatWindow = document.getElementById('chat-window');
        chatWindow.innerHTML = ''; // Limpiar chat
        
        messages.forEach(message => {
          if (message.user) {
            agregarMensaje(message.user, 'user');
          } else if (message.bot) {
            agregarMensaje(message.bot, 'bot');
          }
        });
      }
    }
    
    if (savedContext) {
      conversationContext = { ...conversationContext, ...JSON.parse(savedContext) };
    }
  } catch (error) {
    console.log('No se pudo cargar la conversación previa');
  }
}

// Función para limpiar conversación
function limpiarConversacion() {
  if (confirm('¿Estás seguro de que quieres limpiar la conversación?')) {
    localStorage.removeItem('aura_conversation');
    localStorage.removeItem('aura_context');
    conversationContext.conversationHistory = [];
    conversationContext.topicsDiscussed = [];
    
    const chatWindow = document.getElementById('chat-window');
    chatWindow.innerHTML = '';
    
    // Mostrar mensaje de bienvenida
    const bienvenida = respuestasBot.bienvenida[Math.floor(Math.random() * respuestasBot.bienvenida.length)];
    agregarMensaje(bienvenida, 'bot');
  }
}

// Inicialización cuando se carga la página
document.addEventListener('DOMContentLoaded', function() {
  const input = document.getElementById('user-input');
  const button = document.getElementById('send-btn');

  // Cargar conversación previa si existe
  cargarConversacion();

  // Si no hay conversación previa, mostrar mensaje de bienvenida
  if (conversationContext.conversationHistory.length === 0) {
    const bienvenida = respuestasBot.bienvenida[Math.floor(Math.random() * respuestasBot.bienvenida.length)];
    agregarMensaje(bienvenida, 'bot');
  }

  // Event listeners
  button.addEventListener('click', enviarMensaje);
  
  input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      enviarMensaje();
    }
  });

  // Auto-focus en el input
  input.focus();

  // Opcional: Agregar botón para limpiar conversación
  const clearButton = document.createElement('button');
  clearButton.textContent = 'Nueva conversación';
  clearButton.onclick = limpiarConversacion;
  clearButton.style.cssText = `
    position: fixed;
    top: 10px;
    right: 10px;
    background: #ff6b6b;
    color: white;
    border: none;
    padding: 8px 12px;
    border-radius: 20px;
    cursor: pointer;
    font-size: 12px;
    z-index: 1000;
  `;
  document.body.appendChild(clearButton);
});

// Exportar funciones para uso externo (opcional)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    respuestasBot,
    keywords,
    detectarTema,
    detectarEstadoEmocional,
    obtenerRespuesta,
    agregarMensaje,
    enviarMensaje,
    conversationContext
  };
}