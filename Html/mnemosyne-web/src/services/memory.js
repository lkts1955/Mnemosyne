const API_URL = "http://localhost:3000";

const getMemories = async () => {

    const response = await fetch(`${API_URL}/memories`); // busca os dados

    const memories = await response.json(); // Converte requisicao para o JSON

    return memories;
    
}

export default {getMemories};

