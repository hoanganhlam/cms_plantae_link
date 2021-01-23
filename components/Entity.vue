<template>
    <div class="mb-1">
        <div class="flex mb-1 items-center">
            <div class="flex items-center flex-col leading-none w-5 h-5 cursor-pointer" @click="expand">
                <span>{{ expanded || entity.taxonomy !== 'species' ? '-' : '+' }}</span>
            </div>
            <div class="w-5 mx-2">
                <img v-if="entity.media" class="rounded" :src="entity.media.sizes['thumb_24_24']" alt="">
                <div v-else class="border p-1">
                    <img src="/plant.svg" alt="">
                </div>
            </div>
            <div class="text-xs px-2 bg-green-500 mr-2 rounded text-white">
                <span>{{ entity.parent ? 'sub' : '' }}{{ entity.taxonomy }}</span>
            </div>
            <div class="flex-1">
                <h4 class="font-bold text-sm">
                    <n-link :to="`/${entity.taxonomy}/${entity.term.slug}`">{{ entity.term.title }}</n-link>
                </h4>
            </div>
        </div>
        <entity allow-expand class="ml-8" v-for="(e, i) in children" :key="e.id" :entity="e"/>
    </div>
</template>

<script>
const SCHEMAS = ["phylum", "class", "order", "family", "genera", "species"]
export default {
    name: "Entity",
    props: {
        entity: Object,
        allowExpand: {
            default: false,
            type: Boolean
        }
    },
    data() {
        return {
            expanded: this.allowExpand || !this.$route.params.flag ? false : this.entity.taxonomy !== this.$route.params.flag,
            children: []
        }
    },
    methods: {
        async expand(tax) {
            if (!this.expanded) {
                let index = SCHEMAS.indexOf(tax ? tax : this.entity.taxonomy) + 1;
                if (index < SCHEMAS.length) {
                    let data = await this.$axios.$post('/graph/', {
                        query: [
                            {
                                q: 'term_list',
                                p: {
                                    related: this.entity.id,
                                    page_size: 20,
                                    taxonomy: SCHEMAS[index],
                                    reverse: false
                                },
                                s: ["results"],
                                o: 'term_list'
                            }]
                    }, {
                        params: {
                            force: this.$route.query.force,
                            host: "9plant.com"
                        }
                    })
                    this.children = data['term_list']['results']
                    if (this.children.length === 0) {
                        await this.expand(SCHEMAS[index])
                    }
                    this.expanded = true
                }
            }
        }
    }
}
</script>

<style scoped>

</style>
