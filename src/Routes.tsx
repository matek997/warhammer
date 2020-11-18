import Home from '@material-ui/icons/Home'
import Nav from '@material-ui/icons/Navigation'
import React from 'react'

export type Route= {
	url:string,
	label:string,
	icon:JSX.Element,
}
export const Routes:Route[] = [
	{url:'/',label:'Home',icon:<Home/>},
	{url:'/nav',label:'Home',icon:<Nav/>},
]