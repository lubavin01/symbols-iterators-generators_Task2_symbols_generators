import Team from '../team';

test('1', () => {
  const team = new Team();
  console.log([...team]);
  
  expect([...team].length).toBeGreaterThan(0);
})