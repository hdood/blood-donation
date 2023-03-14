import type { Component } from "vue";

export default interface Searchable {
    name: string;
    component?:  Component;
    isComponent: boolean;
    link : string
    imgSrc? : string
}