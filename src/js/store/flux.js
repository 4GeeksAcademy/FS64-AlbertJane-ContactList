import { agendaDispatcher } from "./dispatchers/agendaDispatcher.jsx";
import { contactDispatcher } from "./dispatchers/contactDispatcher.jsx";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			agenda: {
				agendaList: [],
				selectedAgenda: ''
			},
			contacts: {
				contactList: [],
			}
			
			
		},
		actions: {
			// Use getActions to call a function within a fuction
			getAllAgendas: async () => {
				const agendaList = await agendaDispatcher.getAll();
				const store = getStore();
				setStore({...store, agendaList})
			},
			getAgenda: async  (slug) => {

				const {slug: selectedAgenda} = await agendaDispatcher.get(slug);
				const store = getStore()
				setStore({...store, agenda: {...store.agenda, selectedAgenda}});
			},
			createAgenda: async (slug) => {
				await agendaDispatcher.post(slug)
			},
			deleteAgenda: async (slug) => {
				await agendaDispatcher.delete(slug);
			},
			getAllContacts: async (slug) => {
				const {contacts: contactList} = await contactDispatcher.get(slug);
				const store = getStore();
				setStore({...store, contacts: {...store.contacts, contactList}})
			}

		}
	};
};

export default getState;
