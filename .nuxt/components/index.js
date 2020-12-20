export { default as Entity } from '../../components/Entity.vue'

export const LazyEntity = import('../../components/Entity.vue' /* webpackChunkName: "components/Entity" */).then(c => c.default || c)
