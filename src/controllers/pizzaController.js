import express from `express`; //sin las llaves importo todo lo que importa express

const router = express.router(); //router sirve para crear los end points

router.get("/getall", (req, res) => //req = request; res = response
{
    console.log(req.body);
    console.log(`this is a get operation`);

    const valorRetorno = {nombre: "Lautaro"};
    valorRetorno.apellido = "Monzon"; 

    res.status(200).json(valorRetorno);
})

export default router;