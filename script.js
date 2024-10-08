const chatbots = [
    {
        nome: "BombaChat",
        descricao: "Está cansado de ser só mais um frango sentado na frente do computador? Pois o BombaChat tem a solução, para você entrar em forma e adquirir o shape dos sonhos.",
        link: "https://chiquedogs.netlify.app/" 
    },
    {
        nome: "IA Atendente do Netflix",
        descricao: "Uma inteligência artificial que atua como atendente da Netflix, ajudando os usuários a encontrar filmes e séries com base em seus gêneros favoritos, fornecendo recomendações personalizadas e uma experiência satisfatória.",
        link: "https://atendentenetflix.netlify.app/" 
    },
    {
        nome: "História Viva",
        descricao: "Descubra os eventos históricos mais marcantes com respostas claras, atualizadas e cheias de simpatia. Tudo o que você precisa saber em um só lugar.",
        link: "https://minhaia.netlify.app/" 
    },
    {
        nome: "IAza | Assistente Literário Virtual",
        descricao: "Tenha o seu guia personalizado de leitura com recomendações das melhores obras literárias, adaptadas ao seu gosto e estilo de leitura! 🔖❤️",
        link: "https://ialiterario.netlify.app/" 
    },
    {
        nome: "Chat-bot - 🌟 Conheça o ChatBot! 🤖 🌟",
        descricao: "Precisando de ajuda 24/7? O ChatBot está aqui para você! Respostas rápidas, informações precisas e uma conversa descontraída na palma da sua mão. Seja para tirar dúvidas, fazer reservas ou até desabafar, nosso bot é seu companheiro ideal.       🤖 Simples, rápido e sempre disponível! Experimente agora e transforme sua experiência digital! 💬✨",
        link: "https://chatmong2-0.vercel.app/" 
    },
    {
        nome: "Coach AI",
        descricao: " O seu assistente virtual que atua como um coach pode desenvolver seu método DISC  e etc.",
        link: "https://coachai.netlify.app/" 
    },
    {
        nome: "Namorada Virtual",
        descricao: "Para você encalhado que se treme quando vai falar com mulher, esse é o chat bot perfeito, uma conversa informal de whatsapp com sua nova namorada ❤",
        link: "https://namoradavirtual.netlify.app/" 
    },
    {
        nome: "Nome",
        descricao: "O chat bot  é um software baseado em uma Inteligência Artificial criado para responder perguntas, fornecer explicação medica e ajudar os usuarios, facilitando a vida atraves de uma conversa por texto em tempo.",
        link: "  https://gemili.vercel.app/" 
    },
    {
        nome: "Nome",
        descricao: "Descubra um assistente inteligente que organiza suas tarefas, otimiza seu tempo e encontra promoções imperdíveis. Transforme sua rotina e alcance seus objetivos de forma rápida e eficiente!",
        link: "https://geminivs.vercel.app" 
    },
    {
        nome: "Nome",
        descricao: "Conheça o Tigrão das Invests, seu especialista em investimentos e apostas! Ele oferece análises, dicas e estratégias personalizadas, ajudando você a maximizar ganhos e a tomar decisões inteligentes no mundo financeiro.",
        link: "https://servicos-nuvem.vercel.app/" 
    },
    {
        nome: "Nome",
        descricao: "Para todos os fãs de jogos digitais, ou jogos classicos! Teste o chatbot que te leva para os espaço dos games 🎮 e o mundo dos jogos 🪐",
        link: "https://chatbot-vagner.vercel.app/" 
    },
    {
        nome: "Nome",
        descricao: "Descrição .",
        link: "https://vitrine-chatbots.vercel.app/" 
    },
    {
        nome: "Nome",
        descricao: "Descrição .",
        link: "https://vitrine-chatbots.vercel.app/" 
    }
    // Adicione os dados de outros chatbots aqui...
];


const chatbotContainer = document.querySelector(".chatbot-container");

chatbots.forEach(chatbot => {
    const card = document.createElement("div");
    card.classList.add("chatbot-card");
{/* <img src="${chatbot.imagem}" alt="${chatbot.nome}"></img> */}
    card.innerHTML = `
        
        <h2>${chatbot.nome}</h2>
        <p>${chatbot.descricao}</p>
        <a href="${chatbot.link}" target="_blank">Acessar Chatbot</a>
    `;

    chatbotContainer.appendChild(card);
});


