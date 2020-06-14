import Vuex from 'vuex';
import { VuexModule, Module, Mutation, Action } from "vuex-module-decorators";
import { ResourcesEntity } from '~/types';


@Module({
  name: 'Resources',
  stateFactory: true,
  namespaced: true
})
export default class Resources extends VuexModule {
  resources: ResourcesEntity[] = [];

  @Mutation
  setResources(resources: ResourcesEntity[]) {
    this.resources = resources;
  }

  @Action( { commit: 'setResources'})
  async fetchResources() {
    return []
  }
}
