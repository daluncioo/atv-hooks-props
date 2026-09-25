import React, { useState } from 'react';
import TaskItem from './TaskItem';
import TaskSummary from './TaskSummary';
import './TaskList.css'


export default function TaskList() {
    const [atividades, setAtividades] = useState([
        {
            id: 1,
            titulo: "Atividade 1 - JavaScript",
            descricao: "Faça um site em javascript",
            concluida: true
        },
        {
            id: 2,
            titulo: "Atividade 2 - Introdução ao React",
            descricao: "Faça um site em react",
            concluida: false
        },
        {
            id: 3,
            titulo: "Atividade 3 - useState",
            descricao: "Faça uma ação usando useState",
            concluida: false
        },
        {
            id: 4,
            titulo: "Atividade 4 - Hooks e Props",
            descricao: "Faça uma ação usando Hooks e Props",
            concluida: true
        }
    ]);

    const concluirAtividade = (id) => {
        setAtividades(prevAtividades =>
            prevAtividades.map(atividade =>
                atividade.id === id ? { ...atividade, concluida: true } : atividade
            )
        );
    };

    const excluirAtividade = (id) => {
        setAtividades(prevAtividades =>
            prevAtividades.filter(atividade => atividade.id !== id)
        );
    };

    const temPendentes = atividades.some(a => !a.concluida);
    const todasConcluidas = atividades.length > 0 && atividades.every(a => a.concluida);

    return (
        <div>
            <h2>Lista de Atividades</h2>

            <TaskSummary atividades={atividades} />

            {temPendentes && <p>Você ainda possui tarefas pendentes.</p>}
            {todasConcluidas && <p>Parabéns! Todas as tarefas foram concluídas!</p>}

            <ul className="atividade" style={{gap: "10px"}}>
                {atividades.map((atividade) => (
                    <li key={atividade.id}>
                        <h3>{atividade.titulo}</h3>
                        <p>{atividade.descricao}</p>
                        <h4>Status: {atividade.concluida ? "Entregue" : "Pendente"}</h4>

                        <TaskItem 
                            id={atividade.id} 
                            concluida={atividade.concluida} 
                            onConcluir={concluirAtividade} 
                            onExcluir={excluirAtividade} 
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}
