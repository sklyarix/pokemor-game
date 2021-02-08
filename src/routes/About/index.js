import {useHistory} from 'react-router-dom';

const AboutPage = () => {
    const history = useHistory();

    const handleClick = () => { 
        history.push('/home');
    }

    return(
        <div>
            <p>Тут будет Описание</p>
            <button onClick={handleClick}>Вернуться на главную</button>
        </div>
    );
};

export default AboutPage;