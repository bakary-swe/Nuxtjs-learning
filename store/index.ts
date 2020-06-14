import Vuex, { Store } from 'vuex';
import { VuexModule, getModule } from 'vuex-module-decorators';
import { Courses, Resources } from './modules/index';

export const store = () => getModule(VuexModule, new Vuex.Store({
  modules: {
    Courses, Resources
  }
}))


// export default getModule(store);