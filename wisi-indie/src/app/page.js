'use client'
import styled, { ThemeProvider } from "styled-components"
import { DefaultStyles } from "./components/themes"

const Title = styled.h1`
color: ${props => props.theme.primary};
font-family: ${props => props.theme.fontFamily}
`

export default function Home() {
  return (
    <main>
      <ThemeProvider theme={DefaultStyles}>
        <Title>Hello World</Title>
      </ThemeProvider>
    </main>
  )
}
