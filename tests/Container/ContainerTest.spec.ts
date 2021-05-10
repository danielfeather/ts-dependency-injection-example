import Container from "../../src/Container/Container";
import BindingResolutionError from "../../src/Exception/BindingResolutionError";

test('Container instantiates correctly', () => {

  const container = new Container({
    "\\TestBinding": "\\TestFactory"
  })

  expect(container).toBeInstanceOf(Container);
})

test('Container to throw an error when non-existent binding requested', () => {

  const container = new Container({
    "\\TestBinding": "\\TestFactory"
  })
  expect(async () => {
    await container.get('RandomBinding')
  }).rejects.toThrowError(BindingResolutionError)
})