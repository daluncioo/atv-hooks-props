import React from 'react'

function TaskSummary({atividades = []}) {

    const totalAtv = atividades.length;
    const concluidas = atividades.filter((t) => t.concluida).length;
    const pendentes = totalAtv - concluidas;

  return (
    <div>
        <h3>Resumo</h3>
        <p>Total tarefas: {totalAtv}</p>
        <p>Concluidas: {concluidas}</p>
        <p>Pendentes: {pendentes}</p>
    </div>
  )
}

export default TaskSummary