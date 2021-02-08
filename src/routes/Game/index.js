import {useState,useEffect} from 'react';

import PokemonsCard from '../../components/PokemonsCard/PokemonsCard';
import Layout from '../../components/Layout/Layout';

import {useHistory} from 'react-router-dom';
import database from '../../service/firebase';
import s from './style.module.css';







const GamePage = () => {
  const [pokemons, setPokemons] = useState({});

  useEffect(() => {
      database.ref('pokemons').once('value', (snapshot) => {
          setPokemons(snapshot.val());
      });
  }, []);

  const handleTest = (id) => {
    
      Object.entries(pokemons).map((pokemon)=> {
          if (pokemon[1].id === id) {
              pokemon[1].active = !pokemon[1].active;
              database.ref('pokemons/' + pokemon[0]).set({...pokemon[1]}).then(
                  setPokemons(prevState => {
                      return {...prevState, [pokemon[0]] : pokemon[1]}
                  })
              );
              console.log(pokemons);
          };
      });
  };


  const handleClick = () => {
      const data = {
          "abilities": ["intimidate", "shed-skin", "unnerve"],
          "base_experience": 157,
          "height": 35,
          "id": Math.random()*1000,
          "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/24.png",
          "name": "arbok",
          "stats": {
              "attack": 95,
              "defense": 69,
              "hp": 60,
              "special-attack": 65,
              "special-defense": 79,
              "speed": 80
          },
          "type": "poison",
          "values": {
              "bottom": "A",
              "left": "A",
              "right": 9,
              "top": 5
          }
      };
      const newKey = database.ref().child('pokemons').push().key;
      database.ref('pokemons/' + newKey).set(data).then(
          setPokemons (prevState => {
              return {...prevState, [newKey] : data}
          })
      );
  };

    

  return (
    <Layout id="game" title="Game">
        <div className={s.flex}>
            <button className={s.slidingButton} onClick={handleClick}>
                ADD NEW POKEMON
            </button>
        </div>
        <div className={s.flex}>
            {
                Object.entries(pokemons).map(([key, {name, img, id, type, values, active}]) =>
                    <PokemonsCard
                        key={key}
                        name={name}
                        img={img}
                        id={id}
                        type={type}
                        values={values}
                        active={active}
                        onClickCard={handleTest}
                    />
                )
            }
        </div>
    </Layout>
);
};

export default GamePage;




/*
                Pokemons.map (item => <PokemonsCard    urlcard = {card_back_side} handleClickCard={handleClickCard} isActive={isActive}/>)
            */


/*const handleClickCard = (id) => {
      console.log('приветтттт"!')
        setPokemon(prevState => {
            return Array.from(prevState,(item) => {
                if (item.id === id ){
                item.active = true;
                }
                return item;
            });
        });
    }*/



        /*
            const index = isPokemon.find((el) => el.id === id);
            const oldItem = isPokemon[index];
            const newItem = {...oldItem, isActive: !oldItem.isActive};
            const newArray = [
                ...isPokemon.slice(0,index),
                newItem,
                ...isPokemon.slice(index + 1),
            ];
            return newArray;
        })
        
    }
*/