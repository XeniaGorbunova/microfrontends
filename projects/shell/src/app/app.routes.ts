import { Routes } from '@angular/router';
import {loadRemoteModule} from "@angular-architects/native-federation";
import {AppComponent} from "./app.component";

export const routes: Routes = [
    {
        path: '',
        component: AppComponent
    },
    {
        path: 'users',
        loadChildren: () =>
            loadRemoteModule('users', './routes').then((m) => m.routes),
    },
];
