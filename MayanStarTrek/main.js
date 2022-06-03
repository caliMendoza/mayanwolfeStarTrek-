
document.getElementById('button').addEventListener('click', apiRequest())

async function apiRequest(){

    const alienName = document.querySelector('input').value

    try{
    const response = await fetch(`https://mayanwolfe-startrek-api.herokuapp.com/api/${alienName}`)
    const data = await response.json(alienName)
    console.log(data)
    } catch(error) {

        console.log(error)

    }
}