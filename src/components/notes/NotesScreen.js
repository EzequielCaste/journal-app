import React from 'react'

import { NotesAppBar } from './NotesAppBar'

export const NotesScreen = () => {
  return (
    <div className="notes__main-content">

      <NotesAppBar />

      <div className="notes__content">
        <input
          autoComplete="off"
          type="text"
          className="notes__title-input"
          placeholder="Some Text"
        />

        <textarea
          placeholder="What happened today?"
          className="notes__textarea"
        ></textarea>

        <div className="notes__image">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Gloomy_Forest.jpg/275px-Gloomy_Forest.jpg" alt="forest" />
        </div>
      </div>
    </div>
  )
}
