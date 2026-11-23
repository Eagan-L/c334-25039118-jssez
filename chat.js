const webhookUrl =
  "https://agenticflows.tokencraze.org/webhook/84275de5-bb67-4a66-813c-cdb7dca1ba55/chat";

const chatOptions = {
  mode: "window",
  webhookUrl,
  title: "JS-SEZ advisor",
  initialMessages: [
    "What can I help you explore?",
    "Ask a JS-SEZ question."
  ],
  loadPreviousSession: false,
  i18n: {
    en: {
      title: "JS-SEZ advisor",
      subtitle: "Playbook-guided answers",
      getStarted: "New conversation",
      inputPlaceholder: "Ask about JS-SEZ"
    }
  }
};

async function initialiseChat() {
  const { createChat } = await import(
    "https://cdn.jsdelivr.net/npm/@n8n/chat@1.46.5/dist/chat.bundle.es.js"
  );

  createChat(chatOptions);
  return createChat;
}

let createChat;

initialiseChat().then((creator) => {
  createChat = creator;
});

const openButton = document.querySelector("#open-advisor");

function openChatWindow() {
  if (!createChat) {
    initialiseChat();
    return;
  }

  const launcher = document.querySelector(
    ".chat-window-wrapper.n8n-chat, .n8n-chat button, button[aria-label*='chat' i]"
  );

  if (launcher) {
    launcher.click();
  }
}

openButton?.addEventListener("click", openChatWindow);
