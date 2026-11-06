/**
 * Centralized content structure extracted strictly from instagram.json and verified profile data.
 * No fabricated claims or fake data.
 */

export const CLINIC_INFO = {
  name: "Casal Odontolove",
  tagline: "Odontologia Estética & Transformação do Sorriso",
  headlineHero: "Transformamos sorrisos. Valorizamos quem você é.",
  subheadlineHero: "Uma transformação planejada para valorizar o seu sorriso, respeitando suas características, sua personalidade e sua naturalidade.",
  professionals: [
    {
      name: "Dr. Claumir Arcanjo",
      cro: "CRO/SP 89515",
      role: "Especialista em Odontologia Estética",
      image: "images/post-DdIabosx5UG-cover.jpg",
      bio: "Mais de 20 anos dedicados à arte de transformar faces e sorrisos com planejamento digital, prótese e lentes de alta precisão."
    },
    {
      name: "Dra. Roberta Arcanjo",
      cro: "CRO/SP 86846",
      role: "Especialista em Odontologia Estética",
      image: "images/post-DdIabosx5UG-cover.jpg",
      bio: "Mais de duas décadas cuidando de sorrisos com olhar minucioso, devolvendo autoestima, função e harmonia orofacial."
    }
  ],
  stats: [
    { number: "+20", label: "Anos", detail: "Transformando vidas e sorrisos" },
    { number: "+10 mil", label: "Pacientes", detail: "Atendidos com excelência" },
    { number: "+21 mil", label: "Seguidores", detail: "Acompanhando casos reais no Instagram" }
  ],
  whatsapp: {
    number: "5511997794600",
    formatted: "+55 (11) 99779-4600",
    link: "https://wa.me/5511997794600?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20com%20o%20Casal%20Odontolove."
  },
  instagram: {
    handle: "@casalodontolove",
    url: "https://www.instagram.com/casalodontolove/"
  },
  location: "Bragança Paulista / Atibaia - SP"
};

export const TREATMENTS = [
  {
    number: "01",
    title: "Lentes de Porcelana",
    tag: "Harmonia & Alta Precisão",
    description: "Transformação estética refinada. Planejamento digital personalizado para alcançar dentes com brilho, textura e translucidez fiéis à anatomia natural, com longevidade e resistência ímpar.",
    highlight: "Caso em destaque: 20 Lentes em porcelana na cor BL1.",
    image: "images/post-Cf4entVphnz-slide-1.jpg",
    alt: "Transformação de sorriso com lentes de porcelana pelo Casal Odontolove"
  },
  {
    number: "02",
    title: "Lentes em Resina Composta",
    tag: "Escultura & Estratificação",
    description: "Reconstrução anatômica sem perder a essência. Trabalho minucioso de forma, proporção e textura indicado tanto para novos sorrisos quanto para refinamento e troca de resinas antigas.",
    highlight: "Repaginação anatômica com respeito à biologia e textura individual.",
    image: "images/post-DdSUuEgEd3s-slide-1.jpg",
    alt: "Novo sorriso com lentes em resina devolvendo harmonia e forma"
  },
  {
    number: "03",
    title: "Transformação do Sorriso (Smile Makeover)",
    tag: "Planejamento Facial Integrado",
    description: "Não é apenas alinhar ou clarear dentes: é harmonizar as linhas do sorriso com o contorno da face, a curvatura dos lábios e a forma de se expressar com segurança e liberdade.",
    highlight: "Design guiado pelo equilíbrio orofacial e estética biocompatível.",
    image: "images/post-DdXET5DkiLe-slide-1.jpg",
    alt: "Smile Makeover completo executado pelo Dr. Claumir e Dra. Roberta"
  },
  {
    number: "04",
    title: "Restaurações Estéticas em Resina",
    tag: "Função, Vedação & Estética",
    description: "Substituição de restaurações desgastadas e antigas por resinas de última geração, restabelecendo a biomecânica oclusal, vedação marginal hermética e aspecto imperceptível.",
    highlight: "Aposentando restaurações antigas e devolvendo anatomia dental perfeita.",
    image: "images/post-DdrufGFSfQ8-cover.jpg",
    alt: "Restaurações em resina composta restabelecendo função e vedação"
  },
  {
    number: "05",
    title: "Gengivoplastia",
    tag: "Alinhamento do Sorriso Gengival",
    description: "Correção cirúrgica minimamente invasiva do zênite gengival para equilibrar a proporção entre gengiva e dentes, proporcionando uma moldura harmônica e limpa para o sorriso.",
    highlight: "Resultados comprovados com alívio do excesso gengival e depoimentos reais.",
    image: "images/post-Dcv16kbR0LB-cover.jpg",
    alt: "Correção de sorriso gengival através de gengivoplastia"
  },
  {
    number: "06",
    title: "Cirurgia de Dentes Inclusos / Siso",
    tag: "Cirurgia Confortável & Segura",
    description: "Extrações precisas de sisos inclusos guiadas por tomografia Cone Beam e técnicas cirúrgicas avançadas, priorizando o pós-operatório tranquilo e a preservação óssea.",
    highlight: "Diagnóstico 3D de alta definição para procedimentos previsíveis e seguros.",
    image: "images/post-DdwJy6zxlvf-cover.jpg",
    alt: "Procedimento cirúrgico de remoção de siso incluso"
  }
];

export const BEFORE_AFTER_CASES = [
  {
    id: "porcelain-bl1",
    title: "20 Lentes em Porcelana — Cor BL1",
    category: "Lentes de Porcelana",
    description: "Caso clássico de transformação total planejada. O paciente buscava harmonia, alinhamento oclusal e uma coloração brilhante e natural (BL1). Arraste para conferir a comparação direta.",
    beforeImage: "images/post-Cf4entVphnz-slide-2.jpg",
    afterImage: "images/post-Cf4entVphnz-slide-1.jpg",
    beforeLabel: "Antes",
    afterLabel: "Depois — 20 Lentes BL1",
    cfoDisclaimer: "Esta publicação está em acordo com a resolução CFO-196/2019. O resultado atingido não pode servir de padrão ou referência genérica; a odontologia requer aferição caso a caso."
  },
  {
    id: "resin-makeover",
    title: "Reconstrução Estética em Resina",
    category: "Lentes em Resina",
    description: "A paciente já possuía lentes, porém sem o acabamento e naturalidade esperados. Redesenhamos volume, contornos e textura para conferir elegância condizente com sua face.",
    beforeImage: "images/post-DdSUuEgEd3s-slide-2.jpg",
    afterImage: "images/post-DdSUuEgEd3s-slide-1.jpg",
    beforeLabel: "Antes (Lentes Antigas)",
    afterLabel: "Depois (Novo Planejamento)",
    cfoDisclaimer: "Esta publicação está em acordo com a resolução CFO-196/2019. Cada paciente possui características anatômicas únicas."
  }
];

export const TESTIMONIALS = [
  {
    quote: "Tô de sorriso novo! 🤩 Lentes de porcelana by @casalodontolove. Não canso de me olhar no espelho!",
    author: "Paciente Casal Odontolove",
    treatment: "Lentes de Porcelana",
    image: "images/post-CyokUziuZtc-cover.jpg",
    tag: "Depoimento Real do Instagram"
  },
  {
    quote: "A gengivoplastia mudou completamente minha segurança ao sorrir. O procedimento foi super rápido e a recuperação muito mais tranquila do que imaginei.",
    author: "Paciente Casal Odontolove",
    treatment: "Gengivoplastia",
    image: "images/post-Dcv16kbR0LB-cover.jpg",
    tag: "Resultado + Depoimento em Vídeo"
  },
  {
    quote: "Ela já tinha lentes, mas não tinha o sorriso que imaginava. O desafio foi reconstruir forma, proporção, textura e harmonia para que voltasse a sorrir com plena satisfação.",
    author: "Relato Clínico Casal Odontolove",
    treatment: "Refinamento em Resina",
    image: "images/post-DdSUuEgEd3s-slide-3.jpg",
    tag: "Caso Clínico Real"
  }
];

export const INSTAGRAM_FEED = [
  {
    shortCode: "Cf4entVphnz",
    title: "20 Lentes em Porcelana BL1",
    type: "Lentes de Porcelana",
    image: "images/post-Cf4entVphnz-slide-1.jpg",
    caption: "Mais um sorrisão transformado! 20 Lentes em porcelana na cor BL1.",
    url: "https://www.instagram.com/p/Cf4entVphnz/"
  },
  {
    shortCode: "DdXET5DkiLe",
    title: "Transformação & Autoestima",
    type: "Smile Makeover",
    image: "images/post-DdXET5DkiLe-slide-1.jpg",
    caption: "Não é só sobre deixar os dentes mais brancos. É criar um sorriso que harmonize com o rosto e respeite sua personalidade.",
    url: "https://www.instagram.com/p/DdXET5DkiLe/"
  },
  {
    shortCode: "DdSUuEgEd3s",
    title: "Refinamento & Naturalidade em Resina",
    type: "Lentes em Resina",
    image: "images/post-DdSUuEgEd3s-slide-1.jpg",
    caption: "Ela já tinha lentes… mas não tinha o sorriso que imaginava. Reconstruindo forma, textura e harmonia.",
    url: "https://www.instagram.com/p/DdSUuEgEd3s/"
  },
  {
    shortCode: "CcsgOm4sVb7",
    title: "Sorriso Maravigold em Porcelana",
    type: "Lentes de Porcelana",
    image: "images/post-CcsgOm4sVb7-slide-1.jpg",
    caption: "Aquele sorriso maravigold passando no seu feed! Lentes em porcelana com brilho e translucidez única.",
    url: "https://www.instagram.com/p/CcsgOm4sVb7/"
  },
  {
    shortCode: "Dcv16kbR0LB",
    title: "Correção de Sorriso Gengival",
    type: "Gengivoplastia",
    image: "images/post-Dcv16kbR0LB-cover.jpg",
    caption: "Resultado + depoimento da paciente após fazer a Gengivoplastia.",
    url: "https://www.instagram.com/p/Dcv16kbR0LB/"
  },
  {
    shortCode: "DdrufGFSfQ8",
    title: "Restaurações Funcionais",
    type: "Resina Composta",
    image: "images/post-DdrufGFSfQ8-cover.jpg",
    caption: "Devolvendo função, vedação e estética com resina composta de alta tecnologia.",
    url: "https://www.instagram.com/p/DdrufGFSfQ8/"
  }
];
