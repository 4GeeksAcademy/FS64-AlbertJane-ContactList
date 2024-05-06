import React, { useContext, useEffect } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Context } from '../store/appContext.js'
import { Contact } from "../component/Contact.js";

export const Home = () => {

	const { store, actions } = useContext(Context)

	useEffect(() => {

		const effect = async () => {
			await actions.getAgenda('Albert');
			actions.getAllContacts(store.agenda.selectedAgenda);
		}

		effect();

	}, []);

	const handleGetTask = async () => {
		await actions.getAgenda('Albert');
	}
	return (
		<>
			<div className="d-flex mx-auto flex-column justify-content-center align-items-center gap-5 ">

				{store.contacts.contactList.map((contact, index) => {
					return (<><Contact key={index} name={contact.name} phone={contact.phone} email={contact.email} address={contact.address} id={contact.id} /></>)

				})}
			</div>
		</>);
}



