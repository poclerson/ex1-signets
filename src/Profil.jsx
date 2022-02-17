import './Profil.scss';
import Avatar from '@mui/material/Avatar';

export default function Profil(props){
    return (
        <div className="Profil">
            <h3 className="profil-nom">Pierre-Olivier Clerson</h3>
            <Avatar className="profil-avatar">PO</Avatar>
        </div>
    );
}