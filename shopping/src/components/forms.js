import React from 'react'

function checkButton() {
    return (
        <div>
            <div>si</div>
            <div>no</div>
        </div>
    )
}

function inputForm({typeInput, text, idInput}) {
    return(
        <div>
            <input type={typeInput} value={text} name={idInput} />
        </div>
    )
}

function forms({actionForm, formMethod}) {
  return (
    <div>
        <form action={actionForm} method={formMethod}>

        </form>
    </div>
  )
}

export {
    forms,
    checkButton,
    inputForm
}