class HashTable {
  constructor(size) {
    this.table = new Array(size);
    this.size = size;
  }
  hash(key) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }
    return total % this.size;
  }
  set(key, value) {
    const index = this.hash(key);
    this.table[index] = value;
  }
  get(key) {
    const index = this.hash(key);
    return this.table[index];
  }
  remove(key) {
    const index = this.hash(key);
    this.table[index] = undefined;
  }
  display() {
    // let list = "";
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i]) {
        // list += this.table[i];
        console.log(i, this.table[i]);
      }
    }
  }
}
const table = new HashTable(20);
table.set("name", "Fred");
table.set("age", "42");
table.set("class", "math");
table.display();
table.set("mane", "Firuz");
table.display();
console.log(table.get("name"));
// module.exports = HashTable;
