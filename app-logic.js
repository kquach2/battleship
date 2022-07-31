const shipFactory = (length) => {
  const getLength = () => length;

  let hp = length;
  const getHP = () => hp;

  const isSunk = () => hp === 0;

  const hit = () => {
    hp -= 1;
  };

  return { getLength, getHP, isSunk, hit };
};

export default shipFactory;
