import { useState } from "react";

function InputCreate () {

    const [title, setTitle] = useState('')
    const [res, setRes] = useState('')
    
    const handdleSubmit = async (event) => {

        event.preventDefault()

        // const urlApiCreate = 'http://localhost:3000/create'
        const urlApiCreate = import.meta.env.VITE_APP_API_URL
        const payload = {title}

        //Control de errores
        try {
            
            const post = await fetch(urlApiCreate, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload)
            })

            if(post.ok) {
                const data = await response.json()
                setRes(data.title)

                setTitle('')
            }

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
        <form onSubmit={handdleSubmit}>

            <input 
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Añade tarea"
            required 
            />
            <button type="submit">Añadir</button>

        </form>

        <div>{`Se ha enviado ${res}`}</div>

        </>
    )
}

export default InputCreate
