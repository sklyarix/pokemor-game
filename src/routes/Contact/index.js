import { useHistory } from "react-router-dom";

const ContactPage = () => {
    const history = useHistory();
    const handleClick = () => {
        history.push('/home')
    }

    return(
        <>
            <h1>8-800-535-35-35</h1>
            <button onClick={handleClick}>Вернуться на главную</button>
        </>
    );
};

export default ContactPage;