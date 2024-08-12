import { useEffect, useState } from 'react'

const Home = () => {
    const [contacts, setContacts] = useState(null)

    useEffect(() => {
        const fetchWorkouts = async () => {
            const response = await fetch('http://localhost:3000/api/contacts')
            const json = await response.json()

            if(response.ok) {
                setContacts(json)
            }
        }

        fetchContacts()
    }, [])

    return (
        <div className="home">
            <div className="contacts">
                {contacts && contacts.map((contact) => (
                    // <p key={contact._id}>{contact.title}</p>
                ))}
            </div>
        </div>
    )
}

export default Home