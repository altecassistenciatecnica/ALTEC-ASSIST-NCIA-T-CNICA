import { 
  Thermometer, 
  Wind, 
  Weight, 
  Ban, 
  Maximize, 
  Wrench, 
  Droplets, 
  Volume2, 
  Snowflake, 
  Zap,
  DoorOpen,
  Flame,
  Clock,
  CheckCircle2,
  AlertTriangle,
  Lightbulb
} from 'lucide-react';
import { CardData, ProblemData } from './types';

export const APP_NAME = "ALTEC ASSISTÊNCIA TÉCNICA";
export const APP_TAGLINE = "Geladeira Certa - Cuide do seu eletrodoméstico";

export const WELCOME_TEXT = "Bem-vindo! Aqui você aprende a cuidar melhor da sua geladeira, economizar energia e evitar prejuízos.";

export const CONSERVATION_TIPS: CardData[] = [
  {
    title: "Não coloque alimentos quentes",
    description: "Espere os alimentos esfriarem antes de colocar na geladeira. Isso evita esforço excessivo do motor.",
    icon: Thermometer
  },
  {
    title: "Limpe a borracha da porta",
    description: "Faça a limpeza uma vez por semana com pano úmido e sabão neutro para evitar fuga de ar frio.",
    icon: Wind
  },
  {
    title: "Não sobrecarregue as prateleiras",
    description: "Excesso de peso pode quebrar prateleiras e dificultar a circulação do ar.",
    icon: Weight
  },
  {
    title: "Nunca forre o fundo da geladeira",
    description: "Papel ou plástico bloqueiam a ventilação e causam mau funcionamento.",
    icon: Ban
  },
  {
    title: "Deixe espaço para ventilação",
    description: "Mantenha pelo menos 10 cm entre a geladeira e a parede.",
    icon: Maximize
  }
];

export const COMMON_PROBLEMS: ProblemData[] = [
  {
    title: "Geladeira não gela",
    causes: "Pode ser sujeira, falta de gás ou defeito no termostato.",
    icon: Wrench
  },
  {
    title: "Geladeira pingando água",
    causes: "Normalmente é dreno entupido.",
    icon: Droplets
  },
  {
    title: "Barulho estranho",
    causes: "Pode ser ventilador, motor ou nivelamento errado.",
    icon: Volume2
  },
  {
    title: "Gelo em excesso",
    causes: "Porta mal fechada ou borracha danificada.",
    icon: Snowflake
  },
  {
    title: "Ligando e desligando",
    causes: "Pode indicar problema elétrico ou sensor defeituoso.",
    icon: Zap
  }
];

export const ENERGY_TIPS: CardData[] = [
  {
    title: "Abra a porta só quando necessário",
    description: "Evita desperdício de energia e perda de frio.",
    icon: DoorOpen
  },
  {
    title: "Regule a temperatura",
    description: "Nem muito fria, nem muito fraca. Ajuste conforme a estação.",
    icon: Thermometer
  },
  {
    title: "Longe do fogão",
    description: "Calor externo aumenta o consumo do motor.",
    icon: Flame
  },
  {
    title: "Descongele quando necessário",
    description: "Gelo em excesso aumenta o gasto de energia.",
    icon: Clock
  },
  {
    title: "Manutenção preventiva",
    description: "Geladeira em dia consome menos energia e dura mais.",
    icon: CheckCircle2
  }
];

export const WHEN_TO_CALL_TECH: string[] = [
  "A geladeira parou de gelar",
  "Está dando choque",
  "Faz barulho muito alto",
  "Está vazando água ou óleo",
  "O motor não desliga",
  "A conta de luz aumentou de repente"
];

export const WHATSAPP_NUMBER = "5531992249810";
export const WHATSAPP_MESSAGE = "Olá, gostaria de agendar uma visita técnica para minha geladeira.";