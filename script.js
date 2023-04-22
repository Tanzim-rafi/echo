const chatbox = document.getElementById('chatbox');
const input = document.getElementById('input');
const sendBtn = document.getElementById('send-btn');

sendBtn.addEventListener('click', sendMessage);

function sendMessage() {
	const message = input.value.trim();
	if (message !== '') {
		// Add sent message to chatbox
		const sentMsg = document.createElement('div');
		sentMsg.classList.add('message', 'sent');
		sentMsg.innerHTML = `<p>You:${message}</p>`;
		chatbox.appendChild(sentMsg);
		// Clear input field
		input.value = '';
		// Wait 0.5 seconds before sending reply
		setTimeout(sendReply, 500, message);
	}
}

function sendReply(message) {
	// Add received message to chatbox
	const receivedMsg = document.createElement('div');
	receivedMsg.classList.add('message', 'received');
	receivedMsg.innerHTML = `<p>Echo Bot: ${message}.</p>`;
	chatbox.appendChild(receivedMsg);
	// Scroll to bottom of chatbox
	chatbox.scrollTop = chatbox.scrollHeight;
}


