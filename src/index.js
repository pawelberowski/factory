import './styles.css';
import { Guitar } from './Guitar';
import { Neck } from './Neck';
import { Strings } from './Strings';
import { Body } from './Body';
import {NeckSupplier} from "./NeckSupplier";

const testGuitar = new Guitar(new Neck(), new Strings(), new Body());
testGuitar.tune();
console.log('isFaulty:', testGuitar.isFaulty);
testGuitar.isPlayable();

const testNeckSupplier = new NeckSupplier(3, 2);
console.log(testNeckSupplier.delivery())
