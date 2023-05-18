class User {
  // get name() {
  //   return `${this.first} ${this.last}`;
  // }

  // set name(first, last){
  //    this.first = first;
  //    this.last = last;
  // }

  constructor(first, last, age) {
    this.first = first;
    this.last = last;
    this.age = age;
  }

  hello() {
    console.log(`${this.name} hello`);
  }
}

const someUser = new User("David", "Somelast", 22);
const someUse = new User("ivan", "Somelast", 24);

console.log(someUser);
console.log(someUse);
console.log('privet')

console.log('hy')


class Computer{

  constructor(name, gpu, cpu, ram, hdd, screen){
    this.name = name;
    this.gpu = gpu;
    this.cpu = cpu;
    this.ram = ram;
    this.hdd = hdd;
    this.screen = screen;
  }

  get fullInfo(){
    return `name: ${this.name}, gpu: ${this.gpu}, cpu: ${this.cpu}, ram: ${this.ram}, hdd: ${this.hdd}, screen ${this.screen}`;
  }

  set fullInfo(fullInfo){
    [this.name, this.gpu, this.cpu, this.ram, this.hdd, this.screen] = fullInfo.split(' ');
  }

  compOf(){
    console.log(`${this.name} off`)
  }

  compOn(){
    console.log(`${this.name} on`)
  }

}

const first = new Computer('1', 'nvidia', 'intel', '16gb', '2tb', '24');
const second = new Computer('2', 'nvidia', 'amd', '24gb', '1tb', '27');
const third= new Computer('3', 'amd', 'amd', '16gb', '1.5tb', '24');
console.log(first.fullInfo);
console.log(second.fullInfo);
console.log(third.fullInfo);
first.fullInfo = '1, amd, intel, 16gb, 2tb, 24';
console.log(first.fullInfo);