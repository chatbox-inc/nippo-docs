import https from "@/service/https"

export default {
    namespaced: true,
    state: {
        main: null,
        pages: {}
    },
    mutations: {
        SET_DOCS(state,doc){
            state.main = doc
        },
        SET_PAGE(state,{path,page}){
            state.pages[path] = page
        }
    },
    actions: {
        async loadDocument({commit}){
            const main = await https.loadDoc()
            commit("SET_DOCS",main)
            return main
        },
        async loadPage({commit,state},{path}){
            if(!state.pages[path]){
                const page = await https.loadPage(path)
                commit("SET_PAGE",{path,page})
            }
            return state.pages[path]
        }

    }
}