// 1) create class perceptron with n inputs -> one output
// 2) teach this perceptron to solve &&-gate
//0 and 0 = 0
//0 and 1 = 0
//1 and 0 = 0
//1 and 1 = 1
//1) this class must have method predict that accepts array of n input numbers and returns a single number
//2) this class must have activation function property (use a unit step function)
//this function has to accept one number and return one number
//3) this class must have weights property which is a number array of size n
//this array must be populated with random numbers in constructor
//this class must have property bias which is a number
//this class must have property learning rate or learning speed...it's a number
//this class must have a method train (тренуйся) that has two arguments: array of n input numbers and target output and returns void
//this method calls method predict with these inputs
//this method must calculate error(похибка) which is target output minus actual number
//if error is not zero: weights[i] +=this.learningRate * error * inputs[i]; (this formula is called gradient descent)
//if error is not zero we update bias: this.bias+=this.learningRate * error

class Perceptron {
  constructor(n: number, activationFunction: (threshold: number) => number) {
    for (let i = 0; i <= n; i++) {
      this.weights.push(Math.random());
      }
      this.activationFunction = activationFunction;
  }
  //1
  predict(inputs: number[]) {
    // return inputs[Math.floor(Math.random() * inputs.length)]
    let sumNumber: number = 0;
    for (let i = 0; i < inputs.length; i++) {
      sumNumber += inputs[i] * this.weights[i];
    }
    return this.activationFunction(sumNumber);
  }

  //2
  activationFunction: (threshold: number) => number;

  weights: number[] = [];
}

const unitStepFunction = (threshold: number) => {
    return threshold >= 0 ? 1 : 0;
}


const perceptron = new Perceptron(5, unitStepFunction);
console.log(perceptron.predict([-1, -5, 0, 0, 1]));


