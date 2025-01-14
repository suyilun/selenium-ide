import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import { StateShape } from '@seleniumhq/side-api'
import React, { FC } from 'react'
import baseControlProps from './BaseProps'

export interface PlayListButtonProps {
  state: StateShape
}

const PlayListButton: FC<PlayListButtonProps> = () => (
  <Tooltip title="Play Suite" aria-label="play-suite">
    <IconButton
      {...baseControlProps}
      data-play-suite
      onClick={() => window.sideAPI.playback.playSuite()}
    >
      <PlaylistPlayIcon />
    </IconButton>
  </Tooltip>
)

export default PlayListButton
