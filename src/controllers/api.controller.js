function roteamentoURL(req, res) {
    // console.log(req.query)
    // console.log(req.params)
    if (req.verificador) {
        const [dia, mes, ano] = req.params.data.split("-");

        let data = "";

        if (dia.length == 2) {
            data = `${ano}-${mes}-${dia}`;    
        } else if (dia.length == 4) {            
            data = `${dia}-${mes}-${ano}`;
        } else {
            
        }
        const d = new Date(data);

        res.json({
            "unix": Math.floor(d.getTime() / 10000.0),
            "utc": d.toUTCString()
        })
    }
}


export default {
    roteamentoURL
}