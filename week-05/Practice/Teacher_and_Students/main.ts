'use strict';

import { Teacher } from './teacher';
import { Student } from './student';

let Marinéni = new Teacher;
let Pistike = new Student;

Marinéni.answer();
console.log(Pistike.question(Marinéni));
Pistike.learn();
Marinéni.teach(Pistike);