import React from 'react'

function checkButton() {
    return (
        <div>
            <div>si</div>
            <div>no</div>
        </div>
    )
}



function Forms({actionForm, formMethod}) {
  return (
    <div>
        <form action={actionForm} method={formMethod}>

        </form>
    </div>
  )
}

export {
    Forms,
    checkButton
}