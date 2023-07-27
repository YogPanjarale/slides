import { error } from '@sveltejs/kit';
export const ssr = false
const list = ["example","home","chem-o-rm","rat-trap","test"]
/** @type {import('./$types').PageLoad} */
export function load({ params }) {
    console.log("If you added new file to /static and not showing up Please update the list in src/routes/[title]/+page.ts");
    
    if (list.includes(params.title.toLowerCase()) ) {
        console.log(params.title);
        return {
            title: params.title+".md",
        };
    }

    return {
        title: 'page-not-found.md',
    }
}