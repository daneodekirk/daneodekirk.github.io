import type * as Kit from '@sveltejs/kit';

type RouteParams = { slug: string; title: string; content: html };

export type PageServerLoad = Kit.ServerLoad<RouteParams>;
export type PageLoad = Kit.Load<RouteParams>;
