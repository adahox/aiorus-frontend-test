import { readFileSync } from 'fs';

interface ISceneDecorator {
    selector: string,
    templateUrl: string,
    style?: string,
    useShadow?: boolean
}

const validateSelector = (selector: string) => {
    if (selector.indexOf('-') <= 0) {
        throw new Error('You need at least 1 dash in the custom element name!');
    }
}

const validateTemplate = (selector: string) => {
    if (selector.length <= 0) {
        throw new Error('You need to pass a template for the element');
    }
}

export const Scene = (scene: ISceneDecorator) => (cls: any) => {

    validateSelector(scene.selector);
    validateTemplate(scene.templateUrl);

    const template = document.createElement('template');

    if (scene.style) {
        scene.templateUrl = `<style>${scene.style}</style> ${scene.templateUrl}`;
    }

    template.innerHTML = scene.templateUrl;

    const connectedCallback = cls.prototype.connectedCallback || function () { };
    cls.prototype.connectedCallback = function () {
        const clone = document.importNode(template.content, true);
        if (scene.useShadow) {
            this.attachShadow({ mode: 'open' }).appendChild(clone);
        } else {
            this.appendChild(clone);
        }
        connectedCallback.call(this);
    };

    window.customElements.define(scene.selector, cls);
} 