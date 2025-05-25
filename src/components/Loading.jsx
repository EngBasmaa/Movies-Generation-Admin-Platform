import React from 'react'
import { SharedCard } from '../shared/SharedCard'

export function Loading() {
    return (
        <SharedCard className={'alert alert-dark p-5'} title='Loading .....' />
    )
}
