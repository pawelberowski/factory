import './styles.css';
import { Guitar } from './Guitar';
import { Neck } from './Neck';
import { Strings } from './Strings';
import { Body } from './Body';

const testGuitar = new Guitar(new Neck(), new Strings(), new Body());
testGuitar.tune();
console.log(testGuitar.isFaulty);
testGuitar.isPlayable();
