async function criarTSController(req, res) {
    const { data } = req.body;

    try {
        const token = await apiService.criarTSService({
            data
        });
        res.status(201).send(token);
    } catch (error) {
        return res.status(400).send(e.message);
    }
}


export default {
    criarTSController
}