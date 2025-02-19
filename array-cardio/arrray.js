const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  ];

  const flavours = ['Chocolate Chip', 'Kulfi', 'Caramel Praline', 'Chocolate', 'Burnt Caramel', 'Pistachio', 'Rose', 'Sweet Coconut', 'Lemon Cookie', 'Toffeeness', 'Toasted Almond', 'Black Raspberry Crunch', 'Chocolate Brownies', 'Pistachio Almond', 'Strawberry', 'Lavender Honey', 'Lychee', 'Peach', 'Black Walnut', 'Birthday Cake', 'Mexican Chocolate', 'Mocha Almond Fudge', 'Raspberry'];

  const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];


  const fiften = inventors.filter(inventor =>( inventor.year>= 1500 && inventor.year<=1599))

  //console.table(fiften);

 const fullNames = inventors.map(inventor =>`${inventor.first} ${inventor.last}`) 

 const ordered =inventors.sort((a,b)=>a.year > b.year? 1:-1) 
 

const totalyear =inventors.reduce((total, inventor)=>{
    return total + (inventor.passed - inventor.year);
},0);

const oldest = inventors.sort(function(a,b){
    const lastGuy = a.passed -a.year
    const nextGuy = b.passed - b.year
    return lastGuy > nextGuy ? -1 : 1
    
})



const alpha = people.sort((lastOne, nextOne)=>{
    const [alast, afirst] = lastOne.split(', ' )
    const [blast, bfirst] = nextOne.split(', ')

    // const [blast, bfirst] = nextOne.split(", ")
    return alast > blast ?1 : -1
})

const data = ['car', 'car','truck', 'truck','bike', 'walk' ,'car', 'van', "bike",'walk', 'car', 'var','car', 'truck'];

const transportation = data.reduce(function(obj ,item){
    if(!obj[item]){
        obj[item] = 0;
    }
    obj[item]++;
    return obj
},{})

console.log(transportation)