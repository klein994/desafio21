export default class dtoProduct {
    constructor(product) {
        this.id = product._id;
        this.title = product.title;
        this.price = product.price;
        this.thumbnail = product.thumbnail;
    }
}