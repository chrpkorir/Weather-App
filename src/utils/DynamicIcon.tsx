import React from 'react'
import * as Icons from "react-icons/ti";
interface DynamicIconProps {
name:string
}

export const DynamicIcon: React.FC<DynamicIconProps> = ({name}) => {
// @ts-ignore 
const IconComponent = Icons[name];    
return <IconComponent />;
}
