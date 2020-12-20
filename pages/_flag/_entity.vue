<template>
    <div>
        <div class="mb-4 bg-gray-100 border-b py-2">
            <div class="container mx-auto flex items-center">
                <n-link to="/" class="flex mx-auto">
                    <img class="w-6 h-6 mr-2" src="/logo.svg" alt="Plant Genealogy">
                    <span class="font-bold text-xl">Plantae.Link</span>
                </n-link>
            </div>
        </div>
        <div class="container md:w-2/5 mx-auto p-4">
            <div class="mb-2 border p-4 flex items-center" v-if="entity">
                <div class="w-32 mr-4">
                    <img class="rounded" v-if="entity.media" :src="entity.media.sizes['thumb_247_247']" alt="">
                    <img v-else src="/plant.svg" alt="">
                </div>
                <div class="flex-1" v-if="entity.term">
                    <h1 class="text-2xl font-bold">{{ entity.term.title }}</h1>
                    <p class="text-gray-600 text-sm">{{ entity.description }}</p>
                </div>
            </div>
            <div class="mb-2" v-else>
                <label>
                    <input type="text" v-model="search" class="border p-2 px-4 w-full"
                           @input="handleSearch"
                           placeholder="Search species">
                </label>
            </div>
            <div class="mb-2 border p-4 bg-yellow-100">
                <h4 class="mb-2 text-sm font-bold text-green-700">{{ entity ? 'Genealogy' : 'Species' }}</h4>
                <entity v-for="(e, i) in flat_entities" :key="e.id" :entity="e"
                        :class="entity ? `ml-${8 * i}` : undefined"/>
            </div>
            <div class="mb-2 border p-4" v-for="schema in schemas.slice(next_flag, 6)" :key="schema">
                <h4 class="mb-2 text-sm font-bold text-green-700">{{ schema }}</h4>
                <entity v-for="(e, i) in child.filter(x => x.taxonomy === schema)" :key="e.id" :entity="e"/>
            </div>
        </div>
    </div>
</template>

<script>
import Entity from "@/components/Entity";
import {debounce} from "lodash";
export default {
    name: "EntityDetail",
    components: {Entity},
    data() {
        return {
            schemas: ["phylum", "class", "order", "family", "genera", "species"],
            entity: null,
            related: [],
            child: [],
            next_flag: 6,
            search: null,
            loading: false
        }
    },
    head() {
        let description = "Plantae.Link"
        if (this.entity && this.entity.term) {
            description = this.entity.description ? this.entity.description : `${this.entity.term.title} Genealogy`
        }
        return {
            title: this.entity && this.entity.term ? this.entity.term.title : "Plantae.Link",
            meta: [
                {
                    hid: 'og:title',
                    name: 'og:title',
                    content: this.entity && this.entity.term ? this.entity.term.title : "Plantae.Link"
                },
                {
                    hid: 'description',
                    name: 'description',
                    content: description
                },
                {
                    hid: 'og:description',
                    name: 'og:description',
                    content: description
                },
                {
                    hid: 'og:url',
                    name: 'og:url',
                    content: `https://plantae.link/${this.$route.path}`
                },
                {
                    hid: 'og:type',
                    name: 'og:type',
                    content: `article`
                },
                ...this.entity && this.entity.term && this.entity.media ? [{
                    hid: 'og:image',
                    name: 'og:image',
                    content: this.entity.media.sizes['full_size']
                }] : []
            ]
        }
    },
    computed: {
        flat_entities() {
            let entities = [
                ...this.related,
                ...this.entity ? [this.entity] : []
            ];
            entities.forEach(e => e.order = this.schemas.indexOf(e.taxonomy))
            entities.sort(function (a, b) {
                return a['order'] === b['order'] ? 0 : +(a['order'] > b['order']) || -1;
            })
            return entities;
        },
    },
    async fetch() {
        this.loading = true;
        let {flag, entity} = this.$route.params;
        if (flag) {
            let index = this.schemas.indexOf(flag)
            if (index >= 0 && index < this.schemas.length - 1) {
                this.next_flag = index + 1
            }
        }
        if (!flag) {
            flag = "species"
        }
        let flags = [
            {
                q: 'term_list',
                p: {
                    related_taxonomy: entity ? flag: undefined,
                    related_term: entity,
                    page_size: 20,
                    taxonomy: entity ? undefined : flag,
                    reverse: true,
                    search: this.search
                },
                s: ["results"],
                o: 'term_list'
            },
            {
                q: 'term_detail',
                p: {
                    taxonomy: flag,
                    term: entity
                },
                s: ["id", "term", "description", "media", "taxonomy"],
                o: 'term_detail'
            },
            ...entity ? [{
                q: 'term_list',
                p: {
                    related_taxonomy: flag,
                    related_term: entity,
                    page_size: 20,
                    reverse: false
                },
                s: ["results"],
                o: 'term_child'
            }] : [],
        ]
        let data = await this.$axios.$post('/graph/', {
            query: flags
        }, {
            params: {
                force: this.$route.query.force,
                host: "9plant.com"
            }
        })
        this.entity = data['term_detail']
        this.related = data['term_list']['results']
        this.child = data['term_child'] ? data['term_child']['results'] : [];
        this.loading = false;
    },
    methods: {
        except(description) {
            if (description) {
                return description.replace(/\n/g, " ").replace(/^(.{120}[^\s]*).*/, "$1");
            } else {
                return null
            }
        },
        handleSearch: debounce(function () {
            if (process.client) {
                this.$fetch();
            }
        }, 800)
    }
}
</script>

<style lang="scss">
.ml-16 {
    margin-left: 4rem;
}
.ml-24 {
    margin-left: 6rem;
}
.ml-32 {
    margin-left: 8rem;
}

.ml-40 {
    margin-left: 10rem;
}
</style>
