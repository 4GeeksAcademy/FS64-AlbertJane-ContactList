import React from "react"

export const Contact = ({ name, phone, email, address, id }) => {

    return (
        <>
            <div className="border border-1  p-2 rounded d-flex justify-content-between align-items-center gap-5 w-50">
                <div className="d-flex justify-content-evenly gap-5">
                    <img src='https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=200' width='100' className="rounded-circle" />
                    <div className="d-flex flex-column gap-1">
                        <h3>{name}</h3>
                        <strong>{phone}</strong>
                        <strong>{email}</strong>
                        <strong>{address}</strong>
                    </div>
                </div>
                <div className="d-flex flex-column gap-5 h-100">
                    <i className="fa-solid fa-user-pen"></i>
                    <i className="fa-solid fa-trash"></i>
                </div>
            </div>
        </>
    )
}