import type { Component } from 'svelte';

export type PostMetadata = {
  title: string;
  slug: string;
  date: string;
};

export type Post = {
  metadata: PostMetadata;
  default: Component;
};
