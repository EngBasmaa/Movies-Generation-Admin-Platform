import React from 'react'
import { SharedCard } from '../shared/SharedCard'

export function NotFound() {
    return (
        <SharedCard title={'404 Not Found Page'} className={'alert alert-danger p-5'} />
    )
}
