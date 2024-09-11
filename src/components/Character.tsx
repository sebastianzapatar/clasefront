import { Chacter } from "../data/character.model";

interface CharacterProps {
    character: Chacter;
}

export const Character = ({character}:CharacterProps) => {
    return (
        <>
            <div className="card mb-3" style={
                {maxWidth: "540px"}
            }>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={character.imageUrl} 
                        className="img-fluid rounded-start"
                         alt={character.image} />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{character.fullName}</h5>
                            <p className="card-text">
                                {character.title}    
                            </p>
                            <p className="card-text">
                                <small className="text-muted">{character.family}</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
