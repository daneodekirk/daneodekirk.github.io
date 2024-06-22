import ListPostsWebPresenter from '$lib/presentation/presenters/list-posts.web-presenter.js';

export function load() {
  const view = new ListPostsWebPresenter().view();
  return view;
}
