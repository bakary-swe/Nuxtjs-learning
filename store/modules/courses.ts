import { VuexModule, Module } from 'vuex-module-decorators'

// import store from '@/store'

@Module({
  namespaced: true,
  name: 'courses'
})
export class CoursesModule extends VuexModule {

}
