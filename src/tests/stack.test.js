import Stack from '../code/Stack';

describe('My Stack', () => {
  // jest has helper functions for setup and teardown

  let stack;

  beforeAll(() => {
    stack = new Stack();
  });

  it('is created empty', () => {
    expect(stack.top).toBe(-1);
    expect(stack.items).toEqual({});
    // toBe checks for referential equality between two objects
    // toBe associated with two different objects in memory
  });

  it('can push to the top', () => {
    stack.push({});
    expect(stack.top).toBe(0);
  });

  it('see current element', () => {
    const element = stack.peek();
    expect(element).toEqual({});
  });

  it('can pop off', () => {
    const poppedElement = stack.pop();
    expect(stack.top).toBe(-1);
    expect(poppedElement).toEqual({});
  });
});
