'use client'
import styled, { ThemeProvider } from "styled-components"
import { DarkTheme } from "./components/themes"

const Title = styled.h1`
color: ${props => props.theme.primary};
font-family: ${props => props.theme.fontFamily}
`

export default function Home() {
  return (
    <main>
      <ThemeProvider theme={DarkTheme}>
        <Title>Hello World</Title>
      </ThemeProvider>
    </main>
  )
}
