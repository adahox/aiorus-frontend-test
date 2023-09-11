import { Modules } from '../../lib/Clamp/Core/Decorators/Modules';
import { Router } from "../../lib/Clamp/Core/Router";
import { routes } from '../routes';
import App from './App';

@Modules({
    imports: [
        Router.handle(routes)
    ],
    bootstrap: [App]
})
export default class AppModule { }
