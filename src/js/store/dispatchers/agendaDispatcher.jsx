

export const agendaDispatcher = {
    getAll: async (offset,limit) => {
        const response = await fetch(`
        https://playground.4geeks.com/contact/agendas?offset=${offset}&limit=${limit}`,{
            method: 'GET'
        })
        return await response.json()
    },

    get: async function  (slug) {

        console.log(slug)
        const response = await fetch(`
        https://playground.4geeks.com/contact/agendas/${slug}`,{

            method: 'GET'
        })
        
        return await response.json();
    },

    post: async (slug) => {
        
        await fetch(`https://playground.4geeks.com/contact/agendas/${slug}`,{
            
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            
        })
    },
    delete: async (slug) => {
        await fetch(`https://playground.4geeks.com/contact/agendas/${slug}?tags=Agenda%20operations&summary=Delete%20Agenda.&description=Deletes%20a%20specific%20agenda%20from%20the%20database.
        `,{
            
            method:'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            
        })
    }
}

