import { useRef, useState } from "react"
import styles from "./FullNameDisplay.module.css"

export const FullNameDisplay = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [fullName, setFullName] = useState('');

    const formRef = useRef();


    const handleFirstNameChange = (e) => {
        setFirstName(e.target.value);
    }

    const handleLastNameChange = (e) => {
        setLastName(e.target.value);
    }

    const handleFullName = (e) => {
        e.preventDefault();

        if (formRef.current.checkValidity()) {
            setFullName(`${firstName} ${lastName}`);
        } else {
            setFullName("");
        }
    }

    return (
        <>
            <div className={styles.root}>
                <div><h1>Full Name Display</h1></div>
                <form onSubmit={handleFullName} ref={formRef} className={styles.form}>
                    <div>
                        <label for="firstName">First Name:</label>
                        <input required value={firstName} name="firstName" type="text" onChange={handleFirstNameChange} className={styles.inputBar} />
                    </div>
                    <div>
                        <label for="lastName">Last Name:</label>
                        <input required value={lastName} name="lastName" type="text" onChange={handleLastNameChange} className={styles.inputBar} />
                    </div>

                    <div><button type="submit">Submit</button></div>
                </form>
                {fullName ? <div className={styles.displayName}>Full Name: {fullName}</div> : null}
            </div>
        </>
    )
}