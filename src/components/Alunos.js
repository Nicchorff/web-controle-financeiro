import React from "react";
import {Table} from 'react-bootstrap';

class Aluno extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
            alunos: []
        };
    }

    render() {
        return (
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Opcoes</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Luiz</td>
                        <td>email@email.com</td>
                        <td>Atualizar | Excluir</td>
                    </tr>
                </tbody>
            </Table>
        );
  }
}

export default Aluno;