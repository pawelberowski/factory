import './styles.css';
import { Guitar } from './Guitar';
import { Neck } from './Neck';
import { Strings } from './Strings';
import { Body } from './Body';
import { NeckSupplier } from './NeckSupplier';
import { StringsSupplier } from './StringsSupplier';

const testGuitar = new Guitar(new Neck(), new Strings(), new Body());
testGuitar.tune();
console.log('isFaulty:', testGuitar.isFaulty);
testGuitar.isPlayable();

const testNeckSupplier = new NeckSupplier(3, 3);
console.log(testNeckSupplier.delivery());

const testStringSupplier = new StringsSupplier(4, 4);
console.log(testStringSupplier.delivery());
