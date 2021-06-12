import React from 'react'
import Repository from './Repository'

export default function RepositoriesList({repositories}) {
    return (
        <ul>
            {repositories.map((repo, index) => (
                <Repository 
                {...repo}
                key={index}
                />
            ))}
        </ul>
    )
}
