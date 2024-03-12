async function roteamentoURL(req, res) {
    const [dia, mes, ano] = req.params.data.split("-");
    if (dia.length == 2) {
        await res.json({utc: `${dia}-${mes}-${ano}`})

    } else {
        res.json({
            utc: `${ano}-${mes}-${dia}`
        })
    }
}


export default {
    roteamentoURL
}