import PostController from '$lib/presentation/controllers/post.controller.js';
import { render } from 'svelte/server';
import type { RouteParams } from './$types.js';
import { type LoadEvent } from '@sveltejs/kit';

type RouteParams = { slug: string }

export const load = async ({ params }: LoadEvent<RouteParams>) => {
  const post = await new PostController().get(params.slug);

  if (!post) throw error(404);

  const { title, subtitle, date } = post.metadata;
  const content = render(post.default, { props: {} }).body;

  return {
    title, subtitle, content, date
  };
};
