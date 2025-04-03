import React from "react";

export type PostPropsType = {
  type: string,
  url?: string,
  title?: string,
  views: number
}

export type PopularOrNewPropsType = {
  children: React.ReactNode
}

export type HighLightOrNotPropsType = {
  Component: (props: PostPropsType) => React.ReactNode
}

export type PostListPropsType = {
  list: Array<PostPropsType>
}
