import React, { useEffect, useLayoutEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { formatDistanceToNow, parseISO } from 'date-fns'

import { selectAllUsers } from '../users/usersSlice'

import {fetchNotifications, selectAllNotifications,allNotificationsRead} from './notificationsSlice'

import classnames from 'classnames'


export const NotificationsList = () => {
    const dispatch = useDispatch()
    // const { data: notifications = [] } = useGetNotificationsQuery()
    // const notificationsMetadata = useSelector(selectMetadataEntities)
    const notifications = useSelector(selectAllNotifications)
    useEffect(()=>{
    dispatch(fetchNotifications())
},[])
const users = useSelector(selectAllUsers)
    useLayoutEffect(() => {
        dispatch(allNotificationsRead())
    })

    const renderedNotifications = notifications.map(notification => {
        const date = parseISO(notification.date)
        const timeAgo = formatDistanceToNow(date)
        const user = users.find(user => user.id === notification.userId) || {
            name: 'Unknown User'
        }

        // const metadata = notificationsMetadata[notification.id]

        const notificationClassname = classnames('notification', {
            new: notification.isNew
        })
        
    return (
    <div key={notification.id} className={notificationClassname}>
    <div>
    <b>{user.name}</b><p>
    {notification.title}
    </p>
    </div>
    <div title={notification.date}>
        <i>{timeAgo} ago</i>
    </div>
    </div>
        )
    })

    return (
        <section className='notificationsList'>
            <h2>Notifications</h2>
            {renderedNotifications}
        </section>
    )
}