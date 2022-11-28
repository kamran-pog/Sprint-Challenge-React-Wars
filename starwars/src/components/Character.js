import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios'
import Info from './Info';



const PersonBox = styled.div`
	
	list-style-type: none;
	display: flex;
	flex-wrap: wrap;
`;

function Character() {
	const [characters, setCharacter] = useState([])

	useEffect(() => {
		axios
            .get("https://swapi.dev/api/people/")
            .then((response) => {
                console.log(response);
                setCharacter(response.data.results);
            })
            .catch((error) => {
                console.log("Could not find the people data", error);
            });
	  }, []);
  
	return (
        <div>
			
				{characters.map((character) => {
					return (
						<Info
							characterName={character.name}
							height={character.height}
							weight={character.mass}
							hairColor={character.hair_color}
							skinColor={character.skin_color}
							eyeColor={character.eye_color}
							birthday={character.birth_year}
							gender={character.gender}
						/>
					);
				})}
            
        </div>
    );
}
export default Character;