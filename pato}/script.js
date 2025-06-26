const input = document.getElementById('user-input');
const button = document.getElementById('send-btn');
const chatWindow = document.getElementById('chat-window');

const respuestasBot = [
  "Estoy aquí para ti, gracias por compartir eso conmigo.",
  "¿Quieres contarme más sobre cómo te has sentido?",
  "Recuerda que está bien pedir ayuda 💚",
  "Estoy escuchando. No estás sola/o.",
  "Respira profundo. Estoy contigo en este momento.",
  "¿Qué te gustaría que hiciéramos juntos para sentirte mejor?"
];

function agregarMensaje(mensaje, tipo) {
  const msgDiv = document.createElement('div');
  msgDiv.classList.add('message', tipo);
  msgDiv.textContent = mensaje;
  chatWindow.appendChild(msgDiv);
  chatWindow.scrollTop = chatWindow.scrollHeight;
}

button.addEventListener('click', () => {
  const texto = input.value.trim();
  if (texto === '') return;

  agregarMensaje(texto, 'user');
  input.value = '';

  setTimeout(() => {
    const respuesta = respuestasBot[Math.floor(Math.random() * respuestasBot.length)];
    agregarMensaje(respuesta, 'bot');
  }, 1000);
});

input.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') button.click();
});