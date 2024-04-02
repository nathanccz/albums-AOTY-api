document.querySelector('button').addEventListener('click', getYear)

async function getYear() {
    const year = document.querySelector('input').value
    
    try {
        const res = await fetch(`http://localhost:8000/${year}`)
        const data = await res.json()
        console.log(data)
    } catch(err) {
        console.log(err)
    }
    
}