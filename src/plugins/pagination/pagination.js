import Pagination from './pagination.vue';

Pagination.install = function(Vue) {
  Vue.component(Pagination.name, Pagination);
};

export default Pagination;