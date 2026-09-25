import React from 'react'
import './TaskItem.css'

function TaskItem({ id, concluida, onConcluir, onExcluir }) {
  return (
    <div className="botao">
      {!concluida && (
        <button onClick = {() => onConcluir(id)}>
          Concluir
        </button>
      )}
      <button onClick={() => onExcluir(id)}>
        Excluir
      </button>
    </div>
  )
}

export default TaskItem