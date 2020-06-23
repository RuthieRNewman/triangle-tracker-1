//business logic
export function triangleTracker(sideOne, sideTwo, sideThree) {
  let result = [];
  if (sideOne === sideTwo === sideThree) {
  let triangle = "Equilateral"
  result.push(triangle);
  }else if (sideOne === sideTwo || sideOne === SideThree || sideTwo === sideThree) {
  let triangle = "Isosceles"
  result.push(triangle);
  }else if(sideOne != sideTwo != SideThree){
  let triangle = "Scalene"
  result.push(triangle);
  }else{
  let triangle = "Not a triangle"
  result.push(triangle);
  }
}


/*Equilateral: All sides are equal.
Isosceles: Exactly 2 sides are equal.
Scalene: No sides are equal.
NOT a triangle: The sum of the lengths of any two 
sides of a triangle is less than or equal to the length of the third side.*/