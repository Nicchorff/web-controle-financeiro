import React from "react";
import {Table} from 'react-bootstrap';

class Aluno extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
            transacoes: []
        };
    }

    componentDidMount(){
        fetch("https://localhost:7022/api/transacao/despesa/cartao?idCartao=3")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        transacoes: result
                    });
                },
                (error) => {
                    console.log(error);
                }
            )
    }

    render() {
        return (
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Descrição</th>
                        <th>Valor</th>
                        <th>Data</th>
                        <th>Categoria</th>
                        <th>Banco ID</th>
                        <th>Cartão ID</th>
                        <th>Tipo de Transação</th>
                        <th>Opções</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.transacoes.map((transacao) => {
                            return (
                                <tr key={transacao.id}>
                                    <td>{transacao.id}</td>
                                    <td>{transacao.descricao}</td>
                                    <td>{transacao.valor}</td>
                                    <td>{transacao.data}</td>
                                    <td>{transacao.categoria}</td>
                                    <td>{transacao.bancoId}</td>
                                    <td>{transacao.cartaoId}</td>
                                    <td>{transacao.tipoTransacao}</td>
                                    <td>Atualizar | Excluir</td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </Table>
        );
  }
}

export default Aluno;