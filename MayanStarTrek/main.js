
document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest(){

    const alienName = document.querySelector('button').value

    try{
    const response = await fetch(`https://mayanwolfe-startrek-api.herokuapp.com/api/${alienName}`)
    const data = await response.json()
    console.log(data)
    }catch(error){

        console.log(error)

    }
}