import axios from 'axios';

const API_KEY = '36e44465';
const BASE_URL = 'https://www.omdbapi.com/';

// Criar instância do axios com configurações padrão
const api = axios.create({
  baseURL: BASE_URL,
  params: {
    apikey: API_KEY,
  },
});

// Função para buscar filmes por termo de pesquisa
export const searchMovies = async (searchTerm) => {
  try {
    const response = await api.get('', {
      params: {
        s: searchTerm,
        type: 'movie',
      },
    });
    if (response.data.Response === 'True') {
      return response.data.Search;
    } else {
      throw new Error(response.data.Error || 'Filmes não encontrados');
    }
  } catch (error) {
    console.error('Erro ao buscar filmes:', error);
    throw error;
  }
};

export default api;
