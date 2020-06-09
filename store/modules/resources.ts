import { VuexModule, Module } from 'vuex-module-decorators'

@Module({
  namespaced: true,
  name: 'resources'
})
export class ResourcesModule extends VuexModule {

}
