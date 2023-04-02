import {useMemo} from 'react';

export const useSortPost = (post, sort) => {
    const sortPostList = useMemo(() => {
      if (sort) {
        return [...post].sort((a, b) => a[sort].localeCompare(b[sort]));
      };
  
      return post;
    }, [post, sort]);

    return sortPostList;
};

export const usePost = (post, search, sort) => {
    const sortPostList = useSortPost(post, sort);

    const searchPost = useMemo(() => {
      return sortPostList.filter(item => item.title.toLowerCase().includes(search));
    }, [sortPostList, search]);

    return searchPost;
};