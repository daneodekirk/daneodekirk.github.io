import PostWebPresenter from '$lib/presentation/presenters/post.web-presenter';
import type { RouteParams } from './$types.js';
import { type LoadEvent } from '@sveltejs/kit';

export const load = ({ params }: LoadEvent<RouteParams>) => {
  const view = new PostWebPresenter().view(params.slug);
  return view;
};
