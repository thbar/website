import React, { useState, useRef, useEffect, useContext } from 'react'
import { PostsContext } from './PostsContext'
import { DiscussionPostProps } from './DiscussionPost'

export const usePostHighlighting = (
  posts: DiscussionPostProps[] | undefined,
  userHandle: string
) => {
  const [
    highlightedPost,
    setHighlightedPost,
  ] = useState<DiscussionPostProps | null>(null)
  const { setHasNewMessages, highlightedPostRef } = useContext(PostsContext)
  const observer = useRef<IntersectionObserver | null>()

  useEffect(() => {
    if (!highlightedPostRef.current || !highlightedPost) {
      return
    }

    if (highlightedPost.authorHandle === userHandle) {
      highlightedPostRef.current.scrollIntoView()
    }
  }, [highlightedPost, highlightedPostRef, userHandle])

  useEffect(() => {
    if (!posts || posts.length === 0) {
      return
    }

    const lastPost = posts[posts.length - 1]

    setHighlightedPost(lastPost)
  }, [posts, setHasNewMessages])

  useEffect(() => {
    if (!highlightedPostRef.current) {
      return
    }

    observer.current = new IntersectionObserver((entries) => {
      if (!entries[0].isIntersecting) {
        return
      }

      setHasNewMessages(false)
    })
    observer.current.observe(highlightedPostRef.current)

    return () => {
      observer.current?.disconnect()
    }
  }, [posts, highlightedPost, highlightedPostRef, setHasNewMessages])

  return {
    highlightedPost,
    highlightedPostRef,
  }
}
