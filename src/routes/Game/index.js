const GamePage = ({onChangePage}) => {
    const handleClick = (page) => { 
        console.log('###: <Game/>');
        onChangePage && onChangePage(page);
    }
    return(
        <div>
            <p>Тут будет игра</p>
            <button onClick={() => handleClick('home')}>Вернуться</button>
        </div>
    );
};

export default GamePage;