import React, { forwardRef } from 'react'
import { shortFromNow } from '../../../utils/time'
import { EditDiscussionPost } from './EditDiscussionPost'
import { Avatar } from '../../common/Avatar'
import { useHighlighting } from '../../../utils/highlight'

type DiscussionPostLinks = {
  update?: string
}

export type DiscussionPostProps = {
  uuid: string
  iterationIdx: number
  links: DiscussionPostLinks
  authorHandle: string
  authorAvatarUrl: string
  byStudent: boolean
  contentMarkdown: string
  contentHtml: string
  updatedAt: string
}

export const DiscussionPost = forwardRef<HTMLDivElement, DiscussionPostProps>(
  (
    {
      uuid,
      links,
      authorHandle,
      authorAvatarUrl,
      contentMarkdown,
      contentHtml,
      updatedAt,
    },
    ref
  ) => {
    const contentRef = useHighlighting<HTMLDivElement>()

    return (
      <div
        ref={ref}
        className={`post timeline-entry ${links.update ? '--editable' : ''}`}
      >
        <Avatar
          handle={authorHandle}
          src={authorAvatarUrl}
          className="timeline-marker"
        />
        <div className="timeline-content">
          <header className="timeline-entry-header">
            <div className="author">{authorHandle}</div>
            <time>{shortFromNow(updatedAt)}</time>

            {links.update ? (
              <EditDiscussionPost
                defaultValue={contentMarkdown}
                endpoint={links.update}
                contextId={`edit_${uuid}`}
              />
            ) : null}
          </header>
          <div
            className="post-content c-textual-content --small"
            ref={contentRef}
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />
        </div>
      </div>
    )
  }
)
