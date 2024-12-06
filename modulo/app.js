 /*****************************
Objetivo: API para manipular daddos de alunos e cursos, referente ao projeto final do semestre
Data: 04/12/2024
Autor: Hugo Lopes 
Versão: 1.0
*******************************/

const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()

app.use((request, response, next)=> { 
    response.header('Access-Control-Allow-Origin', '*')
    response.header('Access-Crontol-Allow-Methods', 'GET')

    app.use(cors())

    next()
})

let lionSchool = require('./funcoes')


app.get('/v1/lion-school/lista/:cursos',cors(),async function (request, response) {

    let uf = request.params.cursos
    let dados = lionSchool.getListadeCursos(uf)
     
     if(dados){
         response.status(200)
         response.json(dados)
     }else{
         response.status(404) 
         response.json({'status': 404, 'message': 'Curso não localizado.'})
     }
})

app.get('/v1/lion-school/listar/:alunos',cors(),async function (request, response) {

    let uf = request.params.alunos
    let dados = lionSchool.getListadeAlunos(uf)
     
     if(dados){
         response.status(200)
         response.json(dados)
     }else{
         response.status(404) 
         response.json({'status': 404, 'message': 'Aluno não localizado.'})
     }
})

app.get('/v1/lion-school/aluno/:matricula',cors(),async function (request, response) {

    let uf = request.params.matricula
    let dados = lionSchool.getAlunoMatricula(uf)
     
     if(dados){
         response.status(200)
         response.json(dados)
     }else{
         response.status(404) 
         response.json({'status': 404, 'message': 'Aluno não localizado.'})
     }
})

app.get('/v1/lion-school/alunos/:curso',cors(),async function (request, response) {
    let uf = request.params.curso
    let dados = lionSchool.getAlunosCurso(uf)
     
     if(dados){
         response.status(200)
         response.json(dados)
     }else{
         response.status(404) 
         response.json({'status': 404, 'message': 'Aluno não localizado.'})
     }
})

app.get('/v1/lion-school/status/:status',cors(),async function (request, response) {
    let uf = request.params.status
    let dados = lionSchool.getStatusAluno(uf)
     
     if(dados){
         response.status(200)
         response.json(dados)
     }else{
         response.status(404) 
         response.json({'status': 404, 'message': 'Status não localizado.'})
     }
})

app.get('/v1/lion-school/status/:curso/:status',cors(),async function (request, response) {
    let uf = request.params.curso
    let uf2 = request.params.status
    let dados = lionSchool.getStatusCurso(uf, uf2)
     
     if(dados){
         response.status(200)
         response.json(dados)
     }else{
         response.status(404) 
         response.json({'status': 404, 'message': 'Status não localizado.'})
     }
})

app.get('/v1/lion-school/alunos/:curso/:ano',cors(),async function (request, response) {
    let uf = request.params.curso
    let uf2 = request.params.ano
    let dados = lionSchool.getMatriculaConclusao(uf, uf2)
     
     if(dados){
         response.status(200)
         response.json(dados)
     }else{
         response.status(404) 
         response.json({'status': 404, 'message': 'Status não localizado.'})
     }
})
const PORT = process.env.PORT || 8080
app.listen(PORT, function() {
    console.log(`API rodando na porta ${PORT}...`)
})

