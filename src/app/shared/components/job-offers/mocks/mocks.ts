export const mockJobOffersActive: Object = {
  vagas: [
    {
      cargo: 'Desenvolvedor Mobile Senior (Android e iOS)',
      ativa: true,
      link: 'http://elo7.dev/vaga/desenvolvedor-mobile-senior',
      localizacao: {
        bairro: 'Vila Olímpia',
        cidade: 'São Paulo',
        pais: 'Brasil'
      }
    }
  ]
};

export const mockJobOffersInactive: Object = {
  vagas: [
    {
      cargo: 'Desenvolvedor Mobile Junior (Android)',
      ativa: false,
      link: 'http://elo7.dev/vaga/desenvolvedor-mobile-junior',
      localizacao: {
        bairro: 'Vila Olímpia',
        cidade: 'São Paulo',
        pais: 'Brasil'
      }
    }
  ]
};

export const mockJobOffersRemote: any = {
  vagas: [
    {
      cargo: 'Desenvolvedor Java Junior',
      ativa: true,
      link: 'http://elo7.dev/vaga/desenvolvedor-java-jr'
    },

    {
      cargo: 'Desenvolvedor Java Senior',
      ativa: true,
      link: 'http://elo7.dev/vaga/desenvolvedor-java-senior'
    }
  ]
};

export const mockJobOffersNull: any = {
  vagas: [
    {
      cargo: '',
      ativa: false,
      localizacao: {
        bairro: '',
        cidade: '',
        pais: ''
      }
    }
  ]
};

export const mockError: Object = `Erro. Não foi possível carregar as vagas disponíveis.`;
