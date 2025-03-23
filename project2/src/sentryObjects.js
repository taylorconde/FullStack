export default async function getSentryObjects() {
    try {
        const response = await fetch('https://api.nasa.gov/neo/rest/v1/neo/sentry?api_key=DEMO_KEY');
        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.status}`);
        }
        const data = await response.json();
        return data["sentry_objects"]; // Retorna o objeto completo ou o necessário
    } catch (error) {
        console.error("Erro:", error);
        return null; // Retorna valor padrão em caso de erro
    }
}