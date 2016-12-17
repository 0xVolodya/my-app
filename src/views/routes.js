/**
 * Created by vladimir on 17.12.16.
 */
import App from "./app/App";
import HomePage from './pages/home';

export const routes = {
    path:'/',
    component : App,
    childRoutes :[
        {
            indexRoute:{
                component:HomePage,
            }
        }
    ]

};