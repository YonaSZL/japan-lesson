import { Routes } from '@angular/router';
import {LessonOne} from './verbs/lesson-one/lesson-one';
import {LessonTwo} from './verbs/lesson-two/lesson-two';

export const routes: Routes = [

  {
    path: 'lesson-one',
    component: LessonOne
  },
  {
    path: 'lesson-two',
    component: LessonTwo
  },

];
