window.addEventListener('load', () => {
  doMap();
  doFilter();
  doForEach();
  doReduce();
  doFind();
  doSome();
  doEvery();
  doSort();
  doSpread();
  doRest();
  doDestructuring();
});

function doMap() {
  const nameEmailArray = people.results.map((person) => {
    return {
      name: person.name,
      email: person.email,
    };
  });
  console.log(nameEmailArray);

  return nameEmailArray;
}

function doFilter() {
  const olderThan18 = people.results.filter((person) => {
    return person.dob.age > 60;
  });
  console.log(olderThan18);
}

function doForEach() {
  const mappedPeople = doMap();

  mappedPeople.forEach((person) => {
    person.nameSize =
      person.name.title.length +
      person.name.first.length +
      person.name.last.length;
  });

  console.log(mappedPeople);
}

function doReduce() {
  const totalAges = people.results.reduce((accumulator, current) => {
    return accumulator + current.dob.age;
  }, 0);
  console.log(totalAges);
}

function doFind() {
  const found = people.results.find((person) => {
    return person.location.state === 'Minas Gerais';
  });
  console.log(found);
}

function doSome() {
  const found = people.results.some((person) => {
    return person.location.state === 'Minas Gerais';
  });

  console.log(found);
}
function doEvery() {
  const every = people.results.every((person) => {
    return person.nat === 'BR';
  });
  console.log(every);
}

function doSort() {
  const mappedNames = people.results
    .map((person) => {
      return {
        name: person.name.first,
      };
    })
    .filter((person) => person.name.startsWith('A'))
    .sort((a, b) => {
      return a.name.localeCompare(b.name);
      //return b.name.length-a.name.length;
    });

  console.log(mappedNames);
}

function doSpread() {
  const marriedMen = people.results.filter(
    (person) => person.name.title === 'Mr'
  );
  const marriedWomen = people.results.filter(
    (person) => person.name.title === 'Ms'
  );

  const marriedPeople = [...marriedMen, ...marriedWomen, { msg: 'oi' }];

  console.log(marriedPeople);
}

function doRest() {
  console.log(infiniteSum(1, 2));
  console.log(infiniteSum(1, 2, 1000));
  console.log(infiniteSum(1, 2, 1, 2, 3, 4, 5, 36, 7));
}

function infiniteSum(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

function doDestructuring() {}
