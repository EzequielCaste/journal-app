import React from 'react'
import { Sidebar } from './Sidebar'
//import { NoSelection } from '../notes/NoSelection'
import { NotesScreen } from '../notes/NotesScreen'

export const JournalScreen = () => {
  return (
    <div className="journal__main-content">
      <Sidebar />
      <main>
        {/* <NoSelection /> */}
        <NotesScreen />
      </main>
    </div>
  )
}
