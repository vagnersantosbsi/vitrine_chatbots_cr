const chatbots = [
    {
        nome: "BombaChat",
        descricao: "Está cansado de ser só mais um frango sentado na frente do computador? Pois o BombaChat tem a solução, para você entrar em forma e adquirir o shape dos sonhos.",
        link: "https://personaltreiner.netlify.app/" 
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
        nome: "Api Metal",
        descricao: "A Api Metal, é o chatbot metaleiro feito para o publico do rock e tb pra quem não é mas tem interesse  nesse meio, sendo muito útil e informativo e muito bom pra quem não tem amigos metalieiros e quer aprender sobre sobre o mundo do rock.        ",
        link: "https://api-metal.vercel.app/" 
    },
    {
        nome: "Técnico em Conversação Técnica",
        descricao: "O chat bot consiste em um técnico em informática que conversa em linguagem muito elaborada e técnica, o objetivo é ajudar com tecnologia ",
        link: "https://chat-tiajuda.netlify.app/" 
    },
    {
        nome: "Capitão Chatbot",
        descricao: "Seu guia inteligente nas águas do conhecimento! Navegue com sabedoria e descubra tesouros escondidos. Clique e comece esta aventura!",
        link: "https://pirata-ia-git-main-wendelprojects.vercel.app/" 
    },
    {
        nome: "Chat Chef IA",
        descricao: "Aquele que te ajudará com qualquer duvida na cozinha e qualquer receita que você queira experimentar.",
        link: "https://mongodb-usuario-chatia.onrender.com/" 
    },
   // {
   //     nome: "Nome",
    //    descricao: "Descrição .",
    //    link: "https://vitrine-chatbots.vercel.app/" 
    //},
    //{
    //    nome: "Nome",
    //    descricao: "Descrição .",
    //    link: "https://vitrine-chatbots.vercel.app/" 
   // }
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

    // card.innerHTML = `
    //     <div class="card">
    //         <div class="align">
    //             <span class="red"></span>
    //             <span class="yellow"></span>
    //             <span class="green"></span>
    //         </div>

    //         <h1>${chatbot.nome}</h1>
    //         <p>
    //             ${chatbot.descricao}
    //         </p>
    //         <a href="${chatbot.link}" target="_blank">Acessar Chatbot</a>
    //     </div>
     
        
    // `;
   
    chatbotContainer.appendChild(card);
});


