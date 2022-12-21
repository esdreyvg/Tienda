import React from 'react'

export default function Button({name, idButton, styleButton}) {
  return (
    <button id={idButton} className={styleButton}> {name} </button>
  )
}
