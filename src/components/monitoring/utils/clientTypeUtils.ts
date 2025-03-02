
export type ClientType = 'observatory' | 'institution' | 'researcher' | 'journalist' | 'politician';

interface ClientTypeInfo {
  title: string;
  description: string;
  alert: string | null;
  categories: string[];
}

const clientTypeInfoMap: Record<ClientType, ClientTypeInfo> = {
  observatory: {
    title: "Monitoramento do Observatório",
    description: "Identifique claramente o que está sendo monitorado para facilitar a organização dos dados.",
    alert: null,
    categories: ["ambiente", "legislação", "economia", "sociedade", "governo", "tecnologia"]
  },
  institution: {
    title: "Monitoramento Institucional",
    description: "Insira o título do monitoramento relacionado às atividades da sua instituição.",
    alert: "Como instituição, você possui acesso a ferramentas de análise avançadas.",
    categories: ["economia", "política", "desenvolvimento", "recursos", "projetos", "orçamento"]
  },
  researcher: {
    title: "Monitoramento de Pesquisa",
    description: "Defina o título da sua pesquisa ou do conjunto de dados a ser monitorado.",
    alert: "As fontes de pesquisa são verificadas automaticamente quanto à disponibilidade.",
    categories: ["pesquisa", "dados científicos", "estatísticas", "artigos", "repositórios", "bases de dados"]
  },
  journalist: {
    title: "Monitoramento de Mídia",
    description: "Especifique o tópico de mídia ou fluxo de notícias para monitoramento.",
    alert: "Você receberá alertas em tempo real para novos conteúdos publicados.",
    categories: ["notícias", "reportagens", "publicações", "redes sociais", "eventos", "comunicados"]
  },
  politician: {
    title: "Monitoramento Político",
    description: "Monitore políticas públicas, legislação ou temas de interesse político.",
    alert: "Os dados de monitoramento político são atualizados diariamente.",
    categories: ["legislação", "políticas públicas", "orçamento", "debates", "propostas", "audiências"]
  }
};

export const getClientTypeInfo = (clientType: ClientType): ClientTypeInfo => {
  return clientTypeInfoMap[clientType] || clientTypeInfoMap.observatory;
};

export const getMonitoringFormTitle = (clientType?: ClientType): string => {
  if (!clientType) return "Adicionar Novo Monitoramento";
  return clientTypeInfoMap[clientType]?.title || "Adicionar Novo Monitoramento";
};

export const getMonitoringFormDescription = (clientType?: ClientType): string => {
  if (!clientType) return "Configure uma nova fonte de dados para monitoramento contínuo";
  return clientTypeInfoMap[clientType]?.description || "Configure uma nova fonte de dados para monitoramento contínuo";
};

export const getDefaultCategories = (clientType: ClientType): string[] => {
  return clientTypeInfoMap[clientType]?.categories || clientTypeInfoMap.observatory.categories;
};
