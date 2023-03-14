export default class Donor {

    public name : string
    public bloodType : string
    public image : string

    constructor(name : string, bloodType : string, image : string){
        this.name = name
        this.bloodType = bloodType
        this.image = image
    }


    public save() {
        const data = new FormData()

        data.append('name', this.name)
        data.append('bloodType', this.name)
        data.append('image', this.name)

    }


}