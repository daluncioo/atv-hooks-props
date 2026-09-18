import React from 'react'

function TaskItem({ id, concluida, onConcluir, onExcluir }) {
  return (
    <div>
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