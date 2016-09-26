import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {TodoScreenComponent} from '../todo-screen/components/todo-screen.component'

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/todo',
        pathMatch: 'full'
    },
    {
        path: 'todo',
        component: TodoScreenComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);