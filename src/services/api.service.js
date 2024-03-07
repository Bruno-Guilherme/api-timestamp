

async function criarTSService({ data }) {
    if (!data) {
        throw new Error("Dado inválido")
    }

    const timestamp = await apiRepositorie.criarTSRepositorie({ data })
}