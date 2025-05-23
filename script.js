let scene = 1;

const scenes = {
    1: {
        text: "Você é gestor(a) de RH em uma grande empresa. A diretoria sugere implementar uma política de cotas. O que você faz?",
        img: "img/scene1.png",
        choices: {
            a: { text: "Apresentar a proposta ao time com dados e exemplos", next: 2 },
            b: { text: "Ignorar a sugestão por medo de resistência", next: 3 }
        }
    },
    2: {
        text: "O time escuta, mas fica inseguro sobre o impacto. Como responder?",
        img: "img/scene2.png",
        choices: {
            a: { text: "Promover um workshop sobre diversidade", next: 4 },
            b: { text: "Seguir com a política sem mais discussões", next: 5 }
        }
    },
    3: {
        text: "Você ignora a proposta. Com o tempo, talentos diversos buscam outras empresas. Clima negativo se instala. Você quer voltar atrás?",
        img: "img/scene3.png",
        choices: {
            a: { text: "Sim, reavaliar e retomar a pauta de inclusão", next: 2 },
            b: { text: "Não, manter a minha decisão", next: 7 }
        }
    },
    4: {
        text: "O workshop sensibiliza. A equipe sugere criar um comitê de inclusão. O que você decide?",
        img: "img/scene4.png",
        choices: {
            a: { text: "Apoiar o comitê e envolver outras áreas", next: 6 },
            b: { text: "Agradecer a sugestão, mas não avançar", next: 5 }
        }
    },
    5: {
        text: "A falta de diálogo gera boatos e desinformação. Alguns colaboradores se afastam. Quer reverter?",
        img: "img/scene5.png",
        choices: {
            a: { text: "Sim, voltar à discussão e ouvir o time", next: 4 },
            b: { text: "Não, encerrar o programa", next: 8 }
        }
    },
    6: {
        text: "O comitê cria ações afirmativas, eventos e apoio interno. A empresa é reconhecida como referência em inclusão.",
        img: "img/scene6.png",
        choices: {
            a: { text: "Ver resumo da jornada", next: 9 }
        }
    },
    7: {
        text: "Sem ação, a empresa perde talentos variados e a cultura fica estagnada.",
        img: "img/scene7.png",
        choices: {
            a: { text: "Ver resumo da jornada", next: 9 }
        }
    },
    8: {
        text: "Você encerrou o programa. A empresa sofre críticas externas e perde visibilidade.",
        img: "img/scene8.png",
        choices: {
            a: { text: "Ver resumo da jornada", next: 9 }
        }
    },
    9: {
        text: `Parabéns por concluir a Jornada pela Inclusão!  
📘 A inclusão social e a diversidade são essenciais para construir ambientes de trabalho justos, inovadores e representativos.  
As políticas de cotas e ações afirmativas não são privilégios, mas instrumentos de reparação histórica que promovem equidade.  
Obrigado por jogar e refletir!`,
        img: "img/scene9.png",
        choices: null
    }
};

function renderScene() {
    const current = scenes[scene];
    document.getElementById('scene-text').innerText = current.text;
    document.getElementById('scene-image').src = current.img;

    const choicesDiv = document.getElementById('choices');
    choicesDiv.innerHTML = '';

    if (current.choices) {
        for (const choice of Object.values(current.choices)) {
            const btn = document.createElement('button');
            btn.textContent = choice.text;
            btn.onclick = () => {
                scene = choice.next;
                renderScene();
            };
            choicesDiv.appendChild(btn);
        }
    }
}

window.onload = renderScene;
