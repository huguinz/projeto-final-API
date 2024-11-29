/* *********************************************************************
* Objetivo: Criar um total de 7 funções para uma API futura solicitada por uma escola
* Data: 18/10/2024
* Autor: Hugo Lopes
* Versão: 1.0
* **********************************************************************/

var requisicaoCurso = require('./cursos')
var requisicaoAlunos = require('./alunos')

const getListadeCursos = function() {
    let curse = []
    let status = false

    requisicaoCurso.cursos.forEach(function(item) {
        curse.push(item)
        status = true
    })
    if(status == true) {
        return curse
    } else {
        return false
    }
}

const getListadeAlunos = function() {
    let students = []
    let status = false

    requisicaoAlunos.alunos.forEach(function(item) {
        students.push(item)
        status = true
    })
    if(status == true) {
        return students
    } else {
        return false
    }

}

const getAlunoMatricula = function(matricula) {
    let tuition = []
    let tratamento = false

    requisicaoAlunos.alunos.forEach(function(item) {
        if(item.matricula == matricula) {
            tuition.push(
                          {
                            foto: item.foto,
                            nome: item.nome,
                            matricula: item.matricula,
                            sexo: item.sexo,
                            curso: item.curso,
                            status: item.status
                          }  
                        )
            tratamento = true
        }
    })
    if(tratamento == true) {
        return tuition
    } else {
        return false
    }
}

const getAlunosCurso = function(curso) {
    let listaCursos = String(curso).toUpperCase()
    let alunosdoCurso = []
    let tratamento = false

    requisicaoAlunos.alunos.forEach(function(item) {
        item.curso.forEach(function(nomeCurso) {
            if(listaCursos == nomeCurso.sigla) {
                alunosdoCurso.push(
                                    {
                                        foto: item.foto,
                                        nome: item.nome,
                                        matricula: item.matricula,
                                        sexo: item.sexo,
                                        curso: nomeCurso.sigla,                                       
                                        status: item.status
                                    }
                                  )
                tratamento = true
            }
        })
    })
    if(tratamento == true) {
        return alunosdoCurso
    } else {
        return false
    }
}

const getStatusAluno = function(status) {
    let statusAluno = String(status).toUpperCase()
    let statusCurso = []
    let tratamento = false

    requisicaoAlunos.alunos.forEach(function(item) {
        if(statusAluno == item.status.toUpperCase()) {
            statusCurso.push(
                                {
                                    foto: item.foto,
                                    nome: item.nome,
                                    matricula: item.matricula,
                                    sexo: item.sexo,                                      
                                    status: item.status
                                }
                            )
            
            tratamento = true
        }
    })
    if(tratamento == true) {
        return statusCurso
    } else {
        return false
    }
}

const getStatusCurso = function(curso, status) {
    let cursoAluno = String(curso).toUpperCase()
    let statusAluno = String(status).toUpperCase()
    let array = []
    let tratamento = false

    requisicaoAlunos.alunos.forEach(function(item) {
        item.curso.forEach(function(siglaCurso) {
            if(cursoAluno == siglaCurso.sigla.toUpperCase()) {
                let aluno = {
                                foto: item.foto,
                                nome: item.nome,
                                matricula: item.matricula,
                                sexo: item.sexo,
                                curso: {
                                            nome: siglaCurso.nome,
                                            sigla: siglaCurso.sigla,
                                            icone: siglaCurso.icone,
                                            carga: siglaCurso.carga,
                                            conclusao: siglaCurso.conclusao,
                                            disciplinas: []
                                        },
                            }
                siglaCurso.disciplinas.forEach(function(statusDisciplina) {
                    if(statusAluno == statusDisciplina.status.toUpperCase()) {
                        aluno.curso.disciplinas.push(
                                                {
                                                    nome: statusDisciplina.nome,
                                                    carga: statusDisciplina.carga,
                                                    media: statusDisciplina.media,
                                                    status_disciplina: statusDisciplina.status
                                                }
                                            )
                    }                                                          
                        tratamento = true     
                })
                if (aluno.curso.disciplinas.length > 0) {
                    array.push(aluno)
                }
            }
        })
    })
    if(tratamento == true) {
        return array
    } else {
        return false
    }
}

const getMatriculaConclusao = function(curso, ano) {
    let cursoAluno = String(curso).toUpperCase()
    let anoConclusao = String(ano).toUpperCase()
    let array = []

    requisicaoAlunos.alunos.forEach(function(item) {
        item.curso.forEach(function(sigla) {
            if(cursoAluno == sigla.sigla.toUpperCase()) {
             
            } else if {
                
            }
        })
    })
}


//console.log(getListadeCursos())
//console.log(getListadeAlunos())
//console.log(getAlunoMatricula('20151001002'))
//console.log(getAlunosCurso('rds'))
//console.log(getStatusAluno('cursando'))
//console.log(getStatusCurso('ds', 'reprovado'))
