import { observable, action, makeObservable } from 'mobx';

class DemoStore {
  constructor() {
    makeObservable(this); //mbox 6后需要添加这个组件才会更新
  }
  @observable isOk = false;

  @action setIsOk(value: boolean) {
    this.isOk = value;
  }
}

export default DemoStore;
