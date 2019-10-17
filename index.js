// Your code here
class Polygon {
    constructor(sidesOfShape) {
        this.sidesOfShape = sidesOfShape;
    }

    get countSides() {
        return this.sidesOfShape.length;
    }

    get perimeter() {
        return this.sidesOfShape.reduce((totalPerimeter,side)=> totalPerimeter + side);
    }
}

class Triangle extends Polygon{

    get isValid() {
        return this.countSides === 3 && (this.sidesOfShape[0] + this.sidesOfShape[1] > this.sidesOfShape[2])
        &&(this.sidesOfShape[1] + this.sidesOfShape[2] > this.sidesOfShape[0])
        &&(this.sidesOfShape[0] + this.sidesOfShape[2] > this.sidesOfShape[1]); 
    }
}

class Square extends Polygon {

    get isValid(){
        return this.countSides === 4 && (this.sidesOfShape[0] === this.sidesOfShape[1]) 
        && (this.sidesOfShape[0] === this.sidesOfShape[2])
        && (this.sidesOfShape[0] === this.sidesOfShape[3]);
    }

    get area() {
        return this.isValid? this.sidesOfShape[0]**2 : 0; 
    }
}
