import React from 'react'
import Repository from './Repository'

export default function RepositoriesList({repositories}) {
    return (
        <div>
            {repositories.map((repo, index) => (
                <Repository 
                {...repo}
                key={repo.id}
                />
            ))}
        </div>
    )
}
