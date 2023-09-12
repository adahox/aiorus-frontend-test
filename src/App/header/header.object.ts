import { Obj } from "../../../lib/Clamp/Core/Decorators/Object";
import header from "./header.object.html"
import style from "./header.object.sass"

@Obj({
    selector: 'header-app',
    templateUrl: header,
    style: style
})
export default class Header extends HTMLElement {

    constructor() {
        super();
    }
}