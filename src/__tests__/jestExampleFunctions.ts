import {
  thumbWar,
  sum,
  subtraction,
  addTheseTwoStrings,
} from "../jestExampleFunctions";
import { utils } from "../jestExampleUtil";

// Run these tests with 'npm run test'
// If it doesn't work, make sure to do an 'npm install'

// We declare variables so we can quickly change
// values and for reusability
const someFirstNumber: number = 10;
const someSecondNumber: number = 5;
const someFirstString: string = "first";
const someSecondString: string = "second";

test("we get the correct numbers from sum", () => {
  // We call our sum passing in 2 + 2
  const sumResult = sum(someFirstNumber, someSecondNumber);

  // We expect 2+2 to give us 4
  // We have a valid test
  expect(sumResult).toBe(someFirstNumber + someSecondNumber);
});

test("subtracts two numbers", () => {
  const subtractionResult = subtraction(someFirstNumber, someSecondNumber);

  // Notice we can use toEqual to get similar passing results.
  // There are a lot of different methods Jest offers
  expect(subtractionResult).toEqual(someFirstNumber - someSecondNumber);
});

test("add two strings together", () => {
  const addTheseTwoStringsResult = addTheseTwoStrings(
    someFirstString,
    someSecondString
  );

  expect(addTheseTwoStringsResult).toEqual(someFirstString + someSecondString);
});

test("returns winner", () => {
  // We 'spy' on our utils which is an object that contains a "getWinner" function
  jest.spyOn(utils, "getWinner");

  // We mock the winner here - this we way we always know who will win, since we
  // can't test random outcomes
  (utils.getWinner as jest.Mock).mockImplementation((p1, p2) => p1);

  // We pass in our two variables to our winner function,
  // what we actually want to pass
  const winner = thumbWar("James Arnold", "Kent C. Dodds");

  // We expect our winner to be 'James Arnold' since on line 10 we
  // said that p1 will always be the winner
  expect(winner).toBe("James Arnold");

  // To make sure we're even more sure of our inputs, we make
  // sure that our mock from line 10 is called with these
  // specific values
  expect((utils.getWinner as jest.Mock).mock.calls).toEqual([
    ["James Arnold", "Kent C. Dodds"],
    ["James Arnold", "Kent C. Dodds"],
  ]);

  // We reset our mocked value, so that it doesn't screw up further tests
  (utils.getWinner as jest.Mock).mockRestore();
});
