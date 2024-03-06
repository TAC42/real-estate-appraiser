import React from 'react'
import { svgService } from '../services/svg.service'

interface SvgIconProps {
  iconName: string
}

const SvgIcon: React.FC<SvgIconProps> = ({ iconName }) => {
  const svg = svgService.getIcon(iconName)
  return <i dangerouslySetInnerHTML={{ __html: svg }} />
}

export default SvgIcon
