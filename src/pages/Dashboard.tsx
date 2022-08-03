import { Title } from '#components/Title'
import { CardAsset } from '#modules/Dashboard/CardAsset/CardAsset'
import { Tabs } from '#modules/Dashboard/Tab/Tabs'
import React from 'react'

export default function Dashboard() {
  return (
    <div>
      <Title title="My Assets" />
      <CardAsset />
      <Tabs color="red" />
      
      IPFS Hash # stored on Eth Contract
      <a href={"https://siberiankebab.gitbook.io/untitled/"}>Click here to go to home page</a>
      
    </div>    
  )
}
