const express = require("express");
const app = express();
app.use(express.json());

var cors = require('cors');
app.use(cors());


app.listen(process.env.PORT || 3000);

app.get('/', 
    function (req, res){    
        res.send("Atividade 7 - Matheus e Vitoria");
    }
);


const funcionarios = [{"nome":"Matheus ","idade":"25","cidade":"Campinas"},
                    {"nome":"Vitoria ","idade":"24","cidade":"Cruzeiro"}, ];

app.get('/funcionarios',
    function(req, res){
        res.send(funcionarios.filter(String));
    }
);

app.get('/funcionarios/:id',
    function(req, res){
        const id = req.params.id - 1;
        const funcionario = funcionarios[id];

        if (!funcionario){
            res.send("Funcionario nao cadastrado");
        } else {
            res.send(funcionario);
        }
    }
)

app.post('/funcionarios', 
    (req, res) => {
        console.log(req.body.funcionario);
        const funcionario = req.body.funcionario;
        funcionarios.push(funcionario);
        res.send("Funcionario cadastrado")
    }
);

app.put('/funcionarios/:id',
    (req, res) => {
        const id = req.params.id - 1;
        const funcionario = req.body.funcionario;
        funcionarios[id] = funcionario;        
        res.send("Funcionario atualizado.")
    }
)

app.delete('/funcionarios/:id', 
    (req, res) => {
        const id = req.params.id - 1;
        delete funcionarios[id];

        res.send("Funcionario excluido.");
    }
);


// const express = require("express");
// const app = express();
// app.use(express.json());


// // Permissões
// var cors = require('cors');
// app.use(cors());

// // Porta que eu estou ouvindo
// app.listen(process.env.PORT || 3000);

// app.get('/', 
//     function (req, res){    
//         res.send("Atividade 7 - Matheus e Vitoria");
//     }
// );


// var matheus = {id:"1",idade:"25", trabalho:"itau", cidade:"campinas"};
// var vitoria = {id:"2", idade:"24", trabalho:"itau", cidade:"cruzeiro"};
// var pessoas = {
//     "matheus": {
//       "id": 0,
//       "idade": "25",
//       "trabalho": "itau",
//       "cidade": "campinas"
//     },
  
//     "vitoria": {
//       "id": 1,
//       "idade": "24",
//       "trabalho": "itau",
//       "cidade": " cruzeiro"
//     },}



// app.get('/matheus',
//     function(req, res){
//         res.send(Object.values(matheus));   
        
//         }
// );
// app.get('/vitoria',
//     function(req, res){
//         res.send(Object.values(vitoria));   
        
//         }
// );

// app.get('/pessoa/:id',
//     function(req, res){
//         const id = req.params.id - 1;
//         res.send(Object.values(pessoas).filter(user => user.id === id));

//     }
// )

// app.post('/pessoas', 
//     (req, res) => {
//         console.log(req.body.pessoa);
//         const pessoa = req.body.pessoa;
//         pessoas.push(pessoa);
//         res.send("Pessoa cadastrada")
//     }
// );  PAREI AQUI

// app.put('/mensagens/:id',
//     (req, res) => {
//         const id = req.params.id - 1;
//         const mensagem = req.body.mensagem;
//         mensagens[id] = mensagem;        
//         res.send("Mensagem atualizada com sucesso.")
//     }
// )

// app.delete('/mensagens/:id', 
//     (req, res) => {
//         const id = req.params.id - 1;
//         delete mensagens[id];

//         res.send("Mensagem removida com sucesso");
//     }
// );