import { json } from '@sveltejs/kit'

export function GET() {
    const data: any = {
        name: "SvelteKit",
        version: "1.0.0",
        description: "The Svelte Framework",
    }

    return json(data)
}