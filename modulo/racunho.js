//EndPoint para retornar as siglas dos estados
app.get('/v1/estados-cidades/lista-estados/siglas', cors(), async function (request,response){

    //Chama a função que vai retornar a lista dos estados
    let dadosEstados = estadosCidades.getListaEstados()

    if (dadosEstados){
        response.status(200) // sucess
        response.json(dadosEstados)
    }else{
        response.status(404) // not found
        response.json({'status': 404, 'message': 'Não foi possível encontrar nenhum item de retorno.'})
    }
})

//EndPoint para retornas as caracteristicas de um estado filtrado pela sigla
app.get('/v1/estados-cidades/estados/:sigla',cors(),async function (request, response){
    // recebe o parametro(variaveL) : sigla pela URL
       let uf = request.params.sigla
       //chama a função para filtrar o estado
        let dados = estadosCidades.getDadosEstados(uf)
        
        if(dados){
            response.status(200)
            response.json(dados)
        }else{
            response.status(404) // not found
            response.json({'status': 404, 'message': 'Estado não localizado.'})
        }
   })
   
   app.get('/v1/estados-cidades/capital/estado', cors(), async function(request,response){

    let uf = request.query.sigla

    let dados = estadosCidades.getCapitalDoEstado(uf)

    if(dados){
        response.status(200)
        response.json(dados)
    }else{
        response.status(404) // not found
        response.json({'status': 404, 'message': 'Estado não localizado.'})
    }
   })

   app.listen('8080', function(){
       console.log('API aguardando requisições...')
   })

   app.get('/v1/estados-cidades/regiao/estado', cors(), async function(request,response){

    let uf = request.query.sigla

    let dados = estadosCidades.getEstadosRegiao(uf)

    if(dados){
        response.status(200)
        response.json(dados)
    }else{
        response.status(404) // not found
        response.json({'status': 404, 'message': 'Região não localizada.'})
    }
   })

   app.get('/v1/estados-cidades/capital/pais', cors(), async function(request,response){
    
    let uf = request.query.sigla

    let dados = estadosCidades.getCapitalPais(uf)

    if(dados){
        response.status(200)
        response.json(dados)
    }else{
        response.status(404) // not found
        response.json({'status': 404, 'message': 'Região não localizada.'})
    }
   })

   app.get('/v1/estados-cidades/cidades/estado', cors(), async function(request,response){
    let uf = request.query.sigla

    let dados = estadosCidades.getCidade(uf)

    if(dados){
        response.status(200)
        response.json(dados)
    }else{
        response.status(404) // not found
        response.json({'status': 404, 'message': 'Região não localizada.'})
    }
   })