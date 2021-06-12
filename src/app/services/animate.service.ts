import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' }) export class AnimationService {
    constructor() { }


    animateElements(classesName: string[], animationClassName, elementId) {

        const parent = document.getElementById(elementId)

        var elements = [];
        for (var className of classesName) {
            const elementsArray = Array.from(parent.getElementsByClassName(className));
            elementsArray.forEach(
                (element) => {
                    elements.push(element)
                }
            );
        }

        for (var i = 0; i < elements.length; i++) {
            const element = elements[i];
            var rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.top > 0) {
                element.classList.add(animationClassName);
            }
        }
    }
}