import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators';
import Axios from 'axios';
import { CourseEntity } from '~/types';


// import store from '@/store'

@Module ({
  name: 'Courses',
  stateFactory: true,
  namespaced: true
})
export default class Courses extends VuexModule {
  courses: CourseEntity[] = [];
  
  @Mutation
  setCourses(courses: CourseEntity[]) {
    this.courses = courses;
  }

  @Action({commit: 'setCourses'})
  async fetchCourses() {
    return []
  }
}
