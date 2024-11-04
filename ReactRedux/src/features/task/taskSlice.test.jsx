import { store } from "../../Store/store";
import { addTask } from "./taskSlice";

console.log(store.dispatch(addTask("Buy Mango")));
console.log(store.getState());
console.log(store.dispatch(addTask("Buy Apple")));
console.log(store.getState());