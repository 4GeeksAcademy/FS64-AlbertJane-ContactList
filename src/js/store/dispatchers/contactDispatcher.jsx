export const contactDispatcher = {

    get: async (slug) => {

        const response = await fetch(`https://playground.4geeks.com/contact/agendas/${slug}/contacts`, {
            method:'GET'
        });
        return await response.json();
    },

    post: async (slug = '',body = {}) => {

        await fetch(`https://playground.4geeks.com/contact/agendas/${slug}/contacts
`,{
            method:"POST",
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(body)
        })
    },

    delete: async (slug,contactId) => {
        await fetch(`https://playground.4geeks.com/contact/agendas/${slug}/contacts/${contactId}
        `,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        })
    }
}