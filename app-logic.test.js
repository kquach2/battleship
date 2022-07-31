import shipFactory from "./src/app-logic";

test("getLength returns the correct length of a ship", () => {
  expect(shipFactory(3).getLength()).toBe(3);
});

test("getHP returns the correct number of hit points for a ship", () => {
  expect(shipFactory(3).getHP()).toBe(3);
});

test("isSunk returns the correct value for a ship with hit points remaining", () => {
  expect(shipFactory(3).isSunk()).toBe(false);
});

test("isSunk returns the correct value for a ship with no hit points left", () => {
  const ship = shipFactory(3);
  ship.hit();
  ship.hit();
  ship.hit();
  expect(ship.isSunk()).toBe(true);
});

test("hit reduces the hit points of a ship", () => {
  const ship = shipFactory(3);
  ship.hit();
  expect(ship.getHP()).toBe(2);
});
