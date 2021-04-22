const inventory = {
    items: ['Knife', 'Gas mask'],
    add(itemName){
        // метод, добавляющий новый инвентарь(itemName) в массив items
        this.items.push(itemName);//?
        console.log(`Adding ${itemName} to inventory`);
    },
    remove(itemName) {
        //метод, удаляющий ивентарь из массива
        const index = this.items.indexOf(itemName);//?
        this.items.splice(index,1);//?
        console.log(`Removing ${itemName} from inventory`);
    },
};
// Функция, которая вызывает action(метод) и делает манипуляции с инвентарем (удаляет или добавляет)
const invokeInventoryAction = function (item, action) {
    let itemName = item;
    console.log(`Invoking action on ${itemName}`);
    action(itemName);
};
invokeInventoryAction('Medkit', inventory.add.bind(inventory));
console.log(inventory.items);//?
invokeInventoryAction('Gas mask', inventory.remove.bind(inventory));
console.log(inventory.items);