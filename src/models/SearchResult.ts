import type { Component } from "vue"

export default class SearchResult {
    public searchTerm : String
    public completion : String
    public link : String
    public component? : Component
    public image? : String
    public isComponent : Boolean = true

    
    constructor(searchTerm : String, completion : String, link : String, component : Component | undefined = undefined, image? : String){
        this.searchTerm = searchTerm
        this.completion = completion
        this.link = link
        
        if(component) {
            this.component = component
            return
        }

        this.isComponent = false
        this.image = image
    }
}