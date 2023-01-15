export interface Localization {
  bairro: string;
  cidade: string;
  pais: string;
}

export interface JobOffer {
  cargo: string;
  ativa: boolean;
  link: string;
  localizacao: Localization;
}

export interface JobOffersApiReturn {
  vagas: JobOffer[];
}
export class JobOfferActive {
  ativa: boolean;
  cargo: string;
  link: string;
  localizacao?: Localization | null;
  remoto: boolean;

  constructor(jobOffer: JobOffer) {
    this.cargo = jobOffer?.cargo || '';
    this.link = jobOffer?.link || '';
    this.ativa = jobOffer?.ativa;
    this.localizacao = jobOffer?.localizacao || null;
    this.remoto = !jobOffer.localizacao;
  }
}
