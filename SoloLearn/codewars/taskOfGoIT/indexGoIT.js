
const account = {
    owner: 'Mango',
    balance: 24000,
    discount: 0.1,
    orders: ['order-1', 'order-2', 'order-3'],
    // Метод который меняет дисконт акаунта
    changeDiscount(value){
        this.discount = value;
    },
    showOrders() {
        // Метод который показывает все заказы акаунта
        return this.orders;
    },
    addOrder(cost, order){
        // Метод который проводит списание со счета на сумму cost и добавляет заказ(order) в корзину(orders)
       let magazine = this.balance - cost;
       this.orders.push(order);
    },
};
account.changeDiscount(0.15);
console.log(account.discount);//?
console.table(account.showOrders());//?
account.addOrder(5000, 'order-4');
console.table(account.showOrders());