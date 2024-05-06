import React, { useContext, useEffect } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Context } from '../store/appContext.js'
export const Home = () => {
	
	const {store, actions} = useContext(Context)

	useEffect(()=>{
	  actions.getAgenda('Albert');
	  actions.getAllContacts(store.agenda.selectedAgenda)
	},[])
	const handleGetTask = async () => {
		await actions.getAgenda('Albert');
	}
	return (
	<>
		<button onClick={handleGetTask}>get task</button>
		{store.contacts.contactList.map((contact,index) => {
			return (<>{contact}</>)
		})}
	</>);
}
	
	

