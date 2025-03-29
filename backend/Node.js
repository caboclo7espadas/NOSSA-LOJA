// Instalar as dependências no terminal
// npm init -y
// npm install express nodemailer body-parser

const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json()); // Para processar JSON no corpo da requisição

// Configuração do Nodemailer
const transporter = nodemailer.createTransport({
    service: 'gmail',  // Usando o Gmail para enviar o e-mail
    auth: {
        user: 'andrejotasilva@gmail.com',  // Coloque o seu e-mail aqui
        pass: 'monicahuambo73'  // Coloque a sua senha aqui
    }
});

// Rota para enviar o pedido
app.post('/enviar-pedido', (req, res) => {
    const { nome, telefone, produto, quantidade, total, lojaEmail, lojaTelefone } = req.body;

    // Criar o corpo do e-mail
    const mailOptions = {
        from: 'seu-email@gmail.com',
        to: lojaEmail,  // O e-mail da loja
        subject: 'Novo Pedido',
        text: `
            Você recebeu um novo pedido!

            Nome: ${nome}
            Telefone: ${telefone}

            Produto: ${produto}
            Quantidade: ${quantidade}
            Total: R$ ${total}

            Contato para confirmação: ${lojaTelefone}
        `
    };

    // Enviar o e-mail
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log('Erro ao enviar e-mail:', error);
            return res.status(500).json({ message: 'Erro ao enviar pedido. Tente novamente mais tarde.' });
        }
        console.log('E-mail enviado:', info.response);
        res.json({ message: 'Pedido enviado para a loja com sucesso!' });
    });
});

// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});