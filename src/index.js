import './styles.css';
import { Guitar } from './Guitar';

const testGuitar = new Guitar();
testGuitar.tune();
console.log(testGuitar.isFaulty);
testGuitar.isPlayable();
