import './ListeEpices.scss';
import Carte from './Carte';
import epices from './data/epices.json';

export default function ListeEpices(props){
    return (
        <section className="ListeEpices">
            <div className="epices">
                {
                    epices.map(epice => <Carte
                        key={epice.id}
                        eid={epice.id}
                        titre={epice.titre}
                        couleur={epice.couleur} 
                        date={epice.date}
                        dateCouleur={epice.dateCouleur} />)
                }
            </div>
        </section>
    );
}