import './Appli.scss';
import Entete from './Entete';
import ListeEpices from './ListeEpices';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

export default function Appli() {
  
  return (
    <div className="Appli">
        <Entete />
        <ListeEpices />
        <Fab className="fab-ajouter"> 
          <AddIcon />
        </Fab>
    </div>
  );
}
