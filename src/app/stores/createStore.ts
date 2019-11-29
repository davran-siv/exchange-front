import { STORE_ROUTER, STORE_TODO, STORE_USER } from 'app/constants'
import { TodoModel } from 'app/models';
import { UserStore } from 'app/stores/user.store'
import { History } from 'history';
import { RouterStore } from './RouterStore';
import { TodoStore } from './TodoStore';

export function createStores(history: History, defaultTodos?: TodoModel[]) {
  const todoStore = new TodoStore(defaultTodos);
  const userStore = new UserStore();
  const routerStore = new RouterStore(history);
  return {
    [STORE_TODO]: todoStore,
    [STORE_ROUTER]: routerStore,
    [STORE_USER]: userStore
  };
}
