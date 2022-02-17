import './Entete.scss';
import Profil from './Profil';

export default function Entete(props){
    return (
        <header className="Entete">
            <h1>Signets</h1>
            <Profil />
        </header>
    );
}