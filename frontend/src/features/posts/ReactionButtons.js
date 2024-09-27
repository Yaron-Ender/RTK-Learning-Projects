import React from 'react'
import { useDispatch } from 'react-redux'
import { reactionAdded } from './postsSlice'
// import { useAddReactionMutation } from '../../api/apiSlice'

const reactionEmoji = {
    thumbsUp:'👍',
    raisingHands: '🙌🏻 ',
    heart:'🧡',
    rocket:'🚀',
    eyes: '👀'
}

export const ReactionButtons = ({post}) => {
    // const [addReaction] = useAddReactionMutation()
    const dispatch = useDispatch()
    const reactionButtons = Object.entries(reactionEmoji).map(([reactionName, emoji]) => {
        return (
            <button key={reactionName} type='button' className='muted-button reaction-button'
            onClick={()=>dispatch(reactionAdded({postId:post.id,reactionName}))}
            >
                {emoji} {post.reactions[reactionName]??0}
            </button>
        )
    })
    return <div>{reactionButtons}</div>
}