import './Carte.scss';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SortIcon from '@mui/icons-material/Sort';

export default function Carte(props){
    return (
        <div className="Carte" style={{backgroundColor: props.couleur}}>
            <SortIcon className="carte-icone icone-tri" style={{color: 'white'}} />
            <MoreVertIcon className="carte-icone icone-plus" style={{color: 'white'}} />
            <section className="carte-image">
                <img src={"image-epices/" + props.eid + ".jpg"} alt={props.titre}/>
            </section>

            <section className="carte-info">
                <div className="carte-titre--conteneur">
                    <h2 className="carte-titre">{props.titre}</h2>
                </div>
                <span className="carte-date">Modifié: {props.date} </span>
            </section>
        </div>
    );
}