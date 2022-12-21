import React from 'react'

export default function Button({name, idButton}) {
  return (
    <button id={idButton}> {name} </button>
  )
}
